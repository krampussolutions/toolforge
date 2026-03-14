"use client";

import { PDFDocument } from "pdf-lib";
import { useState } from "react";

function parsePageSpec(value: string, max: number) {
  const keep = new Set<number>();
  value.split(",").forEach((part) => {
    const trimmed = part.trim();
    if (!trimmed) return;
    if (trimmed.includes("-")) {
      const [startRaw, endRaw] = trimmed.split("-").map((n) => Number(n.trim()));
      const start = Math.max(1, Math.min(startRaw || 0, max));
      const end = Math.max(1, Math.min(endRaw || 0, max));
      for (let i = Math.min(start, end); i <= Math.max(start, end); i += 1) keep.add(i - 1);
    } else {
      const n = Number(trimmed);
      if (Number.isInteger(n) && n >= 1 && n <= max) keep.add(n - 1);
    }
  });
  return keep;
}

export default function DeletePdfPages() {
  const [removePages, setRemovePages] = useState("1");
  const [status, setStatus] = useState("Upload a PDF and enter pages to remove, like 1,3-5.");

  async function handleFile(file: File) {
    try {
      const source = await PDFDocument.load(await file.arrayBuffer());
      const pageCount = source.getPageCount();
      const remove = parsePageSpec(removePages, pageCount);
      const keepIndices = Array.from({ length: pageCount }, (_, i) => i).filter((i) => !remove.has(i));
      if (!keepIndices.length) {
        setStatus("Your page selection would remove every page. Leave at least one page in the file.");
        return;
      }
      const out = await PDFDocument.create();
      const copied = await out.copyPages(source, keepIndices);
      copied.forEach((page) => out.addPage(page));
      const bytes = await out.save();
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "pages-removed.pdf";
      a.click();
      URL.revokeObjectURL(url);
      setStatus(`Removed ${remove.size} page${remove.size === 1 ? "" : "s"}. Downloaded cleaned PDF.`);
    } catch {
      setStatus("Could not remove pages from this PDF. Try another file.");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Pages to remove</label>
        <input value={removePages} onChange={(e) => setRemovePages(e.target.value)} placeholder="1,3-5" />
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
