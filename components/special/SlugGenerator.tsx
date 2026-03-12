"use client";

import { useState } from "react";

export default function SlugGenerator() {
  const [input, setInput] = useState("My New SEO Page Title");
  const [output, setOutput] = useState("");

  function generateSlug() {
    const slug = input
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    setOutput(slug);
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={generateSlug}>
        Generate Slug
      </button>
      <div className="result-box">
        <div className="result-label">Slug</div>
        <div className="helper">{output || "Generated slug will appear here."}</div>
      </div>
    </div>
  );
}