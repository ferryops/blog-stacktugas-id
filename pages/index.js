import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";

export default function Home({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [recentfetch, setRecentFetch] = useState(false);

  useEffect(() => {
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

  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteConfig.name}</title>
        <meta name="title" content={siteConfig.name} />
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords} />
        <meta name="author" content={siteConfig.authors[0].name} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.authors[0].url} />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content="/" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteConfig.authors[0].url} />
        <meta property="twitter:title" content={siteConfig.name} />
        <meta property="twitter:description" content={siteConfig.description} />
        <meta property="twitter:image" content="/" />
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
