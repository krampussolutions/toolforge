"use client";

import { useState } from "react";

async function loadImage(file: File) {
  const img = new Image();
  img.src = URL.createObjectURL(file);
  await img.decode();
  return img;
}

function dataUrlBytes(dataUrl: string) {
  const base64 = dataUrl.split(",")[1] || "";
  return Math.round((base64.length * 3) / 4);
}

export default function ImageResizerByKb() {
  const [targetKb, setTargetKb] = useState("200");
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("Upload an image and choose a target KB size.");
  const [sizeText, setSizeText] = useState("");

  async function handleFile(file: File) {
    try {
      const img = await loadImage(file);
      const maxBytes = Math.max(20, Number(targetKb) || 200) * 1024;
      let scale = 1;
      let best = "";

      for (let pass = 0; pass < 6; pass += 1) {
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

        let low = 0.3;
        let high = 0.95;
        let candidate = canvas.toDataURL("image/jpeg", 0.85);
        for (let i = 0; i < 8; i += 1) {
          const mid = (low + high) / 2;
          const trial = canvas.toDataURL("image/jpeg", mid);
          const bytes = dataUrlBytes(trial);
          candidate = trial;
          if (bytes > maxBytes) high = mid;
          else low = mid;
        }
        best = candidate;
        if (dataUrlBytes(best) <= maxBytes || scale <= 0.35) break;
        scale *= 0.85;
      }

      const bytes = dataUrlBytes(best);
      setPreview(best);
      setSizeText(`${(bytes / 1024).toFixed(1)} KB`);
      setStatus(bytes <= maxBytes ? "Reduced image is ready." : "Closest result generated. Check the final size below.");
    } catch {
      setStatus("Could not process that image. Try another file.");
      setPreview("");
      setSizeText("");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Target size in KB</label>
        <input value={targetKb} onChange={(e) => setTargetKb(e.target.value)} inputMode="numeric" />
      </div>
      <div className="field">
        <label>Upload image</label>
        <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
      </div>
      <div className="result-box">
        <div className="result-label">Status</div>
        <div className="result-value" style={{ fontSize: "20px" }}>{status}</div>
        {sizeText ? <div className="helper">Approximate output size: {sizeText}</div> : null}
        {preview ? <img className="preview-img" src={preview} alt="Compressed preview" /> : null}
      </div>
    </div>
  );
}
