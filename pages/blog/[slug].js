import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Order from "../../components/Order";
import Head from "next/head";

export default function PostPage({ frontmatter: { title, date, cover_image }, slug, content }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta
          name="keywords"
          content="Joki Tugas, Joki Tugas Coding, Joki Tugas Pemrograman, Joki Tugas Web, Joki Tugas Murah, Joki Tugas UT, Joki Coding Python, Joki Coding Website, Joki Coding C++, Jasa Coding PHP, Joki Coding Golang, Jasa Coding Arduino, Joki Tugas Android Studio, Joki Skripsi, Joki Tugas Matematika"
        />
        <meta name="author" content="stacktugas.id" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={`https://blog.stacktugas.id/blog/${slug}`} />

        {/* Meta tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Bahasa Indonesia" />

        {/* Open Graph Meta tags for media social */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Jasa Joki Tugas Kuliah, Coding, Jaringan, Database" />
        <meta property="og:url" content={`https://blog.stacktugas.id/blog/${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_gambar_thumbnail" />

        {/* Twitter Card for Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@stacktugas_id" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Jasa Joki Tugas Kuliah, Coding, Jaringan, Database" />
        <meta name="twitter:image" content="URL_gambar_thumbnail" />
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
