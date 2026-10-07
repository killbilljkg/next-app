export async function getPosts() {
  const res = await fetch(
    // "https://lightgoldenrodyellow-wasp-126965.hostingersite.com/wp-json/wp/v2/posts?_embed",
    "https://cms.arcaai.com//wp-json/wp/v2/posts?_embed",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
