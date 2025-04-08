"use client";
import { useState } from "react";
import styles from "./ImageUpload.module.css";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        // 실제 NestJS 엔드포인트 호출
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        setUploadedUrl(data.url);
      } else {
        console.error("업로드 실패");
      }
    } catch (error) {
      console.error("네트워크 에러:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>이미지 업로드</h2>
      <div className={styles.uploadBox}>
        <input className={styles.inputFile} type="file" accept="image/*" onChange={handleChange} />
        {preview && (
          <div className={styles.preview}>
            <img src={preview} alt="미리보기" />
          </div>
        )}
        <button className={styles.uploadButton} onClick={handleUpload}>
          업로드
        </button>
      </div>
      {uploadedUrl && (
        <div className={styles.uploadResult}>
          <p>업로드 완료:</p>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
            {uploadedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
