import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function handler(req, res) {
  const { page } = req.query;
  const files = fs.readdirSync(path.join("posts"));

  const startIndex = (page - 1) * 6;
  const endIndex = page * 6;

  const posts = files.slice(startIndex, endIndex).map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  res.status(200).json(posts);
}
