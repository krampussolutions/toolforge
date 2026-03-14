"use client";

import { PDFDocument } from "pdf-lib";
import { useState } from "react";

function parseOrder(value: string, max: number) {
  const items = value
    .split(",")
    .map((part) => Number(part.trim()))
    .filter((n) => Number.isInteger(n) && n >= 1 && n <= max)
    .map((n) => n - 1);
  return items;
}

export default function ReorderPdfPages() {
  const [order, setOrder] = useState("1,2,3");
  const [status, setStatus] = useState("Upload a PDF and enter a new page order like 3,1,2.");

  async function handleFile(file: File) {
    try {
      const source = await PDFDocument.load(await file.arrayBuffer());
      const pageCount = source.getPageCount();
      const indices = parseOrder(order, pageCount);
      if (indices.length !== pageCount || new Set(indices).size !== pageCount) {
        setStatus(`Enter every page exactly once. This PDF has ${pageCount} pages.`);
        return;
      }
      const out = await PDFDocument.create();
      const copied = await out.copyPages(source, indices);
      copied.forEach((page) => out.addPage(page));
      const bytes = await out.save();
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "reordered.pdf";
      a.click();
      URL.revokeObjectURL(url);
      setStatus("Reordered PDF downloaded.");
    } catch {
      setStatus("Could not reorder this PDF. Try another file.");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>New page order</label>
        <input value={order} onChange={(e) => setOrder(e.target.value)} placeholder="3,1,2" />
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
