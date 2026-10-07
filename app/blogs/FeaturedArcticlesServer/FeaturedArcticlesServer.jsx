import { getFeaturedPosts } from "./getFeaturedPosts";
import FeaturedArticles from "../FeaturedArticles/FeaturedArticles";

export default async function FeaturedArticlesServer() {
  const posts = await getFeaturedPosts()

const cards = posts.map((post) => {
  const categories =
    post._embedded?.['wp:term']?.[0]?.map((term) => term.name) ?? ['Blog'];

  return {
    id: post.id,
    slug: post.slug,
    description: post.title.rendered,
    categories, // ARRAY
    date: post.date,
  };
});


  // console.log("Mapped featured article cards:", cards);

  return <FeaturedArticles cards={cards} />;
}
