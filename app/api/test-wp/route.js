export async function GET() {
  try {
    const res = await fetch("https://cms.arcaai.com");
    return Response.json({
      status: res.status,
      ok: res.ok
    });
  } catch (err) {
    return Response.json({
      error: err.message
    });
  }
}