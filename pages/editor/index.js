import Head from "next/head";
import React, { useState } from "react";
import UploadImage from "../../components/UploadImage";

const ArticleEditor = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [urlBanner, setUrlBanner] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    const apiUrl = "/api/articles";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, excerpt, urlBanner }),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
        window.location.reload();
      } else {
        console.error(data.message);
        alert("Terjadi kesalahan saat menyimpan artikel.");
      }
    } catch (error) {
      console.error("Gagal menyimpan artikel:", error);
      alert("Terjadi kesalahan saat menyimpan artikel.");
    }
  };

  return (
    <>
      <Head>
        <title>Editor - stacktugas.id</title>
      </Head>

      <div className="editor">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul" />
        <input type="text" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Ringkasan" />
        <input type="text" value={urlBanner} onChange={(e) => setUrlBanner(e.target.value)} placeholder="URL Banner" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Konten Format MD" />
        <UploadImage />

        <button className="btn" onClick={handleSave}>
          Simpan Artikel
        </button>
      </div>
    </>
  );
};

export default ArticleEditor;
