"use client";

import { PDFDocument } from "pdf-lib";
import { useState } from "react";

export default function PdfPageCounter() {
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("Upload a PDF to count its pages.");

  async function handleFile(file: File) {
    try {
      const pdf = await PDFDocument.load(await file.arrayBuffer());
      const count = pdf.getPageCount();
      setFileName(file.name);
      setPageCount(count);
      setStatus("Page count ready.");
    } catch {
      setPageCount(null);
      setFileName("");
      setStatus("Could not read that PDF. Try another file.");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Upload PDF</label>
        <input type="file" accept="application/pdf" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
      </div>
      <div className="result-box">
        <div className="result-label">Status</div>
        <div className="result-value" style={{ fontSize: "22px" }}>{status}</div>
        {pageCount !== null ? <div className="helper">{fileName}: {pageCount} page{pageCount === 1 ? "" : "s"}</div> : null}
      </div>
    </div>
  );
}
