// pages/api/articles.js
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { method } = req;
  const postsDir = path.join(process.cwd(), "posts");

  switch (method) {
    case "POST":
      try {
        const { title, content, excerpt, urlBanner } = req.body;
        const fileName = path.join(postsDir, `${title.toLowerCase().replace(/\s+/g, "-")}.md`);
        const fileContent = `---
title: "${title}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "${excerpt}"
cover_image: "${urlBanner}"
---

${content}`;

        fs.writeFileSync(fileName, fileContent);
        res.status(200).json({ success: true, message: "Artikel berhasil disimpan!" });
      } catch (error) {
        console.error("Gagal menyimpan artikel:", error);
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat menyimpan artikel." });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
