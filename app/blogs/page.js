export const dynamic = 'force-static';
export const revalidate = 300;


import BlogMatter from "./BlogMatters/BlogMatter";
import Cta from "./Cta/Cta";
import FeaturedArticlesServer from "./FeaturedArcticlesServer/FeaturedArcticlesServer";
import FeaturedArticles from "./FeaturedArticles/FeaturedArticles";
import Featuredproducts from "./Featuredproducts/Featuredproducts";
import BlogHero from "./Hero/BlogHero";
import { Suspense } from "react";


export default function Blog() {
  return (
    <>
    <BlogHero />
    <Featuredproducts />
    {/* <FeaturedArticles /> */}
    <FeaturedArticlesServer />
    {/* <Suspense>
      <FeaturedArticlesServer />
    </Suspense> */}
    <BlogMatter />
    <Cta />
    </>
  );
}

// import { getPosts } from "./getPosts";


// export default async function Blog() {

//   const posts = await getPosts();
//   return (
//     <div style={{ padding: "100px" }}>
//       <h1>Blogs from WordPress</h1>

//       <pre>{JSON.stringify(posts, null, 2)}</pre>
//     </div>
//   );
// }
