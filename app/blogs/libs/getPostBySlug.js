// export async function getPostBySlug(slug) {
//   const res = await fetch(
//     `https://cms.arcaai.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//     {
//       cache: "no-store",
//       headers: {
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
//         "Accept": "application/json",
//         "Connection": "keep-alive",
//       },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch blog post");
//   }

//   const posts = await res.json();
//   return posts[0] || null;
// }

// export async function getPostBySlug(slug) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SITE_URL}/api/wp/post?slug=${slug}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch blog post");
//   }

//   return res.json();
// }


export async function getPostBySlug(slug) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/wp/post?slug=${slug}`,
    {
      cache: "no-store",
      signal: controller.signal,
    }
  );

  clearTimeout(timeout);

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  return res.json();
}