import https from 'node:https';

const API_BASE_URL = process.env.ARCAAI_API_BASE_URL || 'https://aracaai.crmlitez.in';

function httpsRequest(url, { method = 'GET', headers = {}, body } = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);

    const request = https.request(
      {
        hostname: urlObj.hostname,
        port: urlObj.port || 443,
        path: `${urlObj.pathname}${urlObj.search}`,
        method,
        headers,
        rejectUnauthorized: false,
      },
      (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          resolve({
            ok: response.statusCode >= 200 && response.statusCode < 300,
            status: response.statusCode,
            json: async () => JSON.parse(data || '{}'),
          });
        });
      }
    );

    request.on('error', reject);

    if (body) {
      request.write(body);
    }

    request.end();
  });
}

async function apiFetch(url, options = {}) {
  const apiHost = new URL(API_BASE_URL).hostname;
  const requestHost = new URL(url).hostname;

  // ARCAAI CRM API uses a self-signed certificate.
  if (requestHost === apiHost) {
    return httpsRequest(url, options);
  }

  return fetch(url, options);
}

const INTEREST_LABELS = {
  providers: 'Providers',
  payers: 'Payers',
  pharma: 'Pharma',
  community: 'Community Health',
  partnerships: 'Partnerships',
};

let cachedToken = null;
let tokenExpiresAt = 0;

function getCredentials() {
  const clientId = process.env.ARCAAI_CLIENT_ID;
  const clientSecret = process.env.ARCAAI_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('ARCAAI API credentials are not configured');
  }

  return { clientId, clientSecret };
}

async function fetchAccessToken() {
  const { clientId, clientSecret } = getCredentials();

  const response = await apiFetch(`${API_BASE_URL}/api/auth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Failed to authenticate with ARCAAI API');
  }

  const tokenData = data.access_token;
  const accessToken = tokenData?.access_token;

  if (!accessToken) {
    throw new Error('ARCAAI API did not return an access token');
  }

  const expiresOn = tokenData?.expiredOn
    ? new Date(tokenData.expiredOn).getTime()
    : Date.now() + 14 * 60 * 1000;

  cachedToken = accessToken;
  tokenExpiresAt = expiresOn - 60 * 1000;

  return accessToken;
}

async function getAccessToken() {
  if (cachedToken && Date.now() < tokenExpiresAt) {
    return cachedToken;
  }

  return fetchAccessToken();
}

export function mapInterestToAreaOfInterest(interest) {
  return INTEREST_LABELS[interest] || interest;
}

export async function createLead({
  firstName,
  lastName,
  email,
  phoneNumber,
  areaOfInterest,
  message,
}) {
  const accessToken = await getAccessToken();

  const response = await apiFetch(`${API_BASE_URL}/odata/Leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phoneNumber,
      areaOfInterest,
      message,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Failed to create lead');
  }

  return data;
}
