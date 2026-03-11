"use client";

import { PDFDocument } from "pdf-lib";
import { useState } from "react";

export default function MergePdf() {
  const [status, setStatus] = useState("Upload PDF files to merge.");

  async function handleFiles(files: FileList) {
    const out = await PDFDocument.create();

    for (const file of Array.from(files)) {
      const pdf = await PDFDocument.load(await file.arrayBuffer());
      const pages = await out.copyPages(pdf, pdf.getPageIndices());
      pages.forEach((page) => out.addPage(page));
    }

    const bytes = await out.save();

    const arrayBuffer = bytes.buffer.slice(
      bytes.byteOffset,
      bytes.byteOffset + bytes.byteLength
    ) as ArrayBuffer;

    const blob = new Blob([arrayBuffer], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "merged.pdf";
    a.click();

    URL.revokeObjectURL(url);
    setStatus("Merged PDF downloaded.");
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Upload PDFs</label>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={(e) => {
            const files = e.target.files;
            if (files?.length) handleFiles(files);
          }}
        />
      </div>

      <div className="result-box">
        <div className="result-value" style={{ fontSize: "22px" }}>
          {status}
        </div>
      </div>
    </div>
  );
}