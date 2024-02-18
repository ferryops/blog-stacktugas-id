import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Order from "../../components/Order";
import Head from "next/head";
import { siteConfig } from "../../config/site";

export default function PostPage({ frontmatter: { title, date, cover_image }, slug, content }) {
  return (
    <>
      <Head>
        <title>{title} | blog.stacktugas.id</title>
        <meta name="title" content={`${title} | blog.stacktugas.id`} />
        <meta name="description" content={title} />
        <meta name="keywords" content={siteConfig.keywords} />
        <meta name="author" content={siteConfig.authors[0].name} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://blog.stacktugas.id/blog/${slug}`} />
        <meta property="og:title" content={`${title} | blog.stacktugas.id`} />
        <meta property="og:description" content={`${title} | blog.stacktugas.id`} />
        <meta property="og:image" content="/" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://blog.stacktugas.id/blog/${slug}`} />
        <meta property="twitter:title" content={`${title} | blog.stacktugas.id`} />
        <meta property="twitter:description" content={`${title} | blog.stacktugas.id`} />
        <meta property="twitter:image" content="/" />
      </Head>
      <Link href="/">
        <a className="btn btn-back">Kembali</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Diposting pada {date}</div>
        <img src={cover_image} alt="" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <Order />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
