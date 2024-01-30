import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import { useEffect, useState } from "react";

export default function Home({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [recentfetch, setRecentFetch] = useState(false);

  const fetchMorePosts = async () => {
    const newPage = page + 1;
    const res = await fetch(`/api/posts?page=${newPage}`);
    const newPosts = await res.json();
    setRecentFetch(newPosts.length > 0 ? false : true);

    if (newPosts.length > 0) {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage(newPage);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        fetchMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <div>
      <Head>
        <title>Blog stacktugas.id</title>
        <meta name="description" content="Jasa Joki Tugas Kuliah, Coding, Jaringan, Database" />
        <meta
          name="keywords"
          content="Joki Tugas, Joki Tugas Coding, Joki Tugas Pemrograman, Joki Tugas Web, Joki Tugas Murah, Joki Tugas UT, Joki Coding Python, Joki Coding Website, Joki Coding C++, Jasa Coding PHP, Joki Coding Golang, Jasa Coding Arduino, Joki Tugas Android Studio, Joki Skripsi, Joki Tugas Matematika"
        />
        <meta name="author" content="stacktugas.id" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://blog.stacktugas.id" />

        {/* Meta tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Bahasa Indonesia" />

        {/* Open Graph Meta tags for media social */}
        <meta property="og:title" content="Blog stacktugas.id" />
        <meta property="og:description" content="Jasa Joki Tugas Kuliah, Coding, Jaringan, Database" />
        <meta property="og:url" content="https://blog.stacktugas.id" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_gambar_thumbnail" />

        {/* Twitter Card for Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@stacktugas_id" />
        <meta name="twitter:title" content="Blog stacktugas.id" />
        <meta name="twitter:description" content="Jasa Joki Tugas Kuliah, Coding, Jaringan, Database" />
        <meta name="twitter:image" content="URL_gambar_thumbnail" />
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
        <button className="btn" onClick={() => fetchMorePosts()}>
          {recentfetch ? "Sudah Habis" : "Lainnya"}
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const initialPosts = files.slice(0, 6).map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      initialPosts: initialPosts.sort(sortByDate),
    },
  };
}
