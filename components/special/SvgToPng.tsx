"use client";

import { useState } from "react";

export default function SvgToPng() {
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("Upload an SVG file to convert it to PNG.");

  async function handleFile(file: File) {
    try {
      const svgText = await file.text();
      const blob = new Blob([svgText], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.src = url;
      await img.decode();
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth || 1200;
      canvas.height = img.naturalHeight || 1200;
      canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
      setPreview(canvas.toDataURL("image/png"));
      setStatus("SVG converted to PNG preview. Right click the image to save it.");
      URL.revokeObjectURL(url);
    } catch {
      setPreview("");
      setStatus("Could not convert that SVG file. Try another one.");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Upload SVG</label>
        <input type="file" accept="image/svg+xml,.svg" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
      </div>
      <div className="result-box">
        <div className="result-value" style={{ fontSize: "20px" }}>{status}</div>
        {preview ? <img className="preview-img" src={preview} alt="PNG preview" /> : null}
      </div>
    </div>
  );
}
