"use client";

import { PDFDocument, degrees } from "pdf-lib";
import { useState } from "react";

export default function RotatePdf() {
  const [angle, setAngle] = useState("90");
  const [status, setStatus] = useState("Upload a PDF and choose a rotation angle.");

  async function handleFile(file: File) {
    try {
      const pdf = await PDFDocument.load(await file.arrayBuffer());
      const rotation = degrees(Number(angle) || 90);
      pdf.getPages().forEach((page) => page.setRotation(rotation));
      const bytes = await out.save();
const arrayBuffer = bytes.buffer.slice(
  bytes.byteOffset,
  bytes.byteOffset + bytes.byteLength
) as ArrayBuffer;
const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "rotated.pdf";
      a.click();
      URL.revokeObjectURL(url);
      setStatus(`Rotated ${pdf.getPageCount()} page${pdf.getPageCount() === 1 ? "" : "s"} and downloaded the updated PDF.`);
    } catch {
      setStatus("Could not rotate this PDF. Try another file.");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Rotate all pages by</label>
        <select value={angle} onChange={(e) => setAngle(e.target.value)}>
          <option value="90">90°</option>
          <option value="180">180°</option>
          <option value="270">270°</option>
        </select>
      </div>
      <div className="field">
        <label>Upload PDF</label>
        <input type="file" accept="application/pdf" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
      </div>
      <div className="result-box">
        <div className="result-label">Status</div>
        <div className="result-value" style={{ fontSize: "20px" }}>{status}</div>
      </div>
    </div>
  );
}
