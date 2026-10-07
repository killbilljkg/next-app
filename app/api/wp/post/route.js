// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const slug = searchParams.get("slug");

//   try {
//     const res = await fetch(
//       `https://cms.arcaai.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//       { cache: "no-store" }
//     );

//     const data = await res.json();
//     return Response.json(data[0] || null);
//   } catch (err) {
//     console.error("WP Post Error:", err);
//     return Response.json({ error: "Failed to fetch post" }, { status: 500 });
//   }
// }


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(
      `https://cms.arcaai.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      {
        cache: "no-store",
        signal: controller.signal,
        headers: {
          "User-Agent": "NextJS-App",
          "Accept": "application/json",
        },
      }
    );

    clearTimeout(timeout);

    if (!res.ok) {
      console.error("WP Response Error:", res.status);
      return Response.json({ error: "WP API error" }, { status: 500 });
    }

    const data = await res.json();
    return Response.json(data[0] || null);

  } catch (err) {
    clearTimeout(timeout);
    console.error("WP Post Error:", err);
    return Response.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}