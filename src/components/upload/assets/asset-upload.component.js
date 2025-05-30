"use client";
import { useState } from "react";

export default function FileUpload({ portalSlug }) {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("logo"); // <-- default type
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  async function handleUpload() {
    if (!file) return;
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileType", fileType); // <-- dynamic now

      const res = await fetch(`/api/stores/${portalSlug}/upload-asset`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Upload failed");
      }

      const data = await res.json();
      setUrl(data.url);
    } catch (e) {
      setError(e.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label>
        File Type:
        <select
          value={fileType}
          onChange={(e) => setFileType(e.target.value)}
          disabled={uploading}
        >
          <option value="logo">Logo</option>
          <option value="banner">Banner</option>
          <option value="favicon">Favicon</option>
        </select>
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        disabled={uploading}
      />

      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {url && (
        <p>
          Uploaded!{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            View file
          </a>
        </p>
      )}
    </div>
  );
}
