import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [image, setImage] = useState();
  const [resApi, setResApi] = useState();
  const [keyApi, setKeyApi] = useState();

  useEffect(() => {
    setKeyApi(localStorage.getItem("keyApi"));
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("key", keyApi);
      formData.append("image", image);

      const response = await axios.post("https://api.imgbb.com/1/upload", formData);
      setResApi(response.data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h3>Image Upload Form</h3>
      <input
        type="text"
        value={keyApi}
        onChange={(e) => {
          setKeyApi(e.target.value);
          localStorage.setItem("keyApi", e.target.value);
        }}
        placeholder="Key API"
      />
      <div className="upload-image">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button className="btn" onClick={handleUpload}>
          Upload
        </button>
      </div>
      <p>{resApi ? resApi.display_url : null}</p>
    </div>
  );
};

export default UploadImage;
