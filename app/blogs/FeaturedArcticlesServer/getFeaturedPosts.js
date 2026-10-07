export async function getFeaturedPosts() {
  const res = await fetch(
    "https://cms.arcaai.com/wp-json/wp/v2/posts?_embed",
    {
      // cache: "no-store",
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress posts");
  }

  return res.json();
}
