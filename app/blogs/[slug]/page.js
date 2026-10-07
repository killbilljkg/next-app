// export default async  function BlogPage({ params }) {
//   const { slug } = await params;

//   return (
//     <div style={{ padding: "100px" }}>
//       <h1>Single Blog Page</h1>
//       <p>Slug from URL:</p>
//       <strong>{slug}</strong>
//     </div>
//   );
// }
import styles from './BlogPost.module.css';
import Image from 'next/image';
import { getPostBySlug } from '../libs/getPostBySlug';
import { notFound } from 'next/navigation';


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);


  if (!post || !post.yoast_head_json) {
    return {
      title: "Blog not found | ARCA AI",
      description: "The requested blog could not be found.",
    };
  }


  const yoast = post.yoast_head_json;

  return {
    title: yoast.title,
    description: yoast.description,
    alternates: {
      canonical: yoast.canonical,
    },
    openGraph: {
      title: yoast.og_title,
      description: yoast.og_description,
      url: yoast.og_url,
      siteName: yoast.og_site_name,
      images: yoast.og_image?.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        type: img.type,
      })),
      type: yoast.og_type,
    },
    twitter: {
      card: yoast.twitter_card,
    },
  };
}



export default async  function BlogPage({ params }) {
  const { slug } = await params;
  const wpPost = await getPostBySlug(slug);

  if (!wpPost) {
    notFound();
  }
  const post = {
    category: wpPost._embedded?.['wp:term']?.[0]?.[0]?.name || 'Blog',
    title: wpPost.title.rendered,
    date: new Date(wpPost.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    author: wpPost._embedded?.author?.[0]?.name || 'Arca Ai',
    featuredImage: wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || null, // make sure this exists in /public
    // content: `
    //   <p>
    //     Artificial Intelligence is rapidly changing the way developers build,
    //     deploy, and maintain web applications. From code generation to automated
    //     testing, AI-powered tools are becoming an essential part of the modern
    //     developer workflow.
    //   </p>

    //   <h2>Why AI Matters in Web Development</h2>

    //   <p>
    //     AI helps developers ship faster by reducing repetitive tasks and
    //     improving decision-making. It also enables more personalized user
    //     experiences through data-driven insights.
    //   </p>

    //   <h3>Key Benefits</h3>

    //   <ul>
    //     <li>Faster development cycles</li>
    //     <li>Improved code quality</li>
    //     <li>Smarter user experiences</li>
    //   </ul>

    //   <p>
    //     As the ecosystem evolves, understanding how to integrate AI effectively
    //     will become a critical skill for web developers.
    //   </p>
    // `,
    content: wpPost.content.rendered,
  };

  return (
    <article className={styles.blogPost}>
      <div className={styles.hero}>
        <div className='swcontainer'>
          <div className={styles.heroContent}>
            <span className={styles.category}>{post.category}</span>

            <h1 className={styles.title}>{post.title}</h1>
            
            <div className={styles.meta}>
              <span className={styles.separator}>•</span>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.author}>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className={styles.featuredImageWrapper}>
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={1600}
            height={900}
            className={styles.featuredImage}
            priority
          />
        </div>
      )}


      {/* Blog Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {/* This will render your blog content */}
          <hr />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>
  );
}


