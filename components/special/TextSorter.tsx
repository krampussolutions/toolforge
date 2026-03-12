"use client";

import { useState } from "react";

export default function TextSorter() {
  const [input, setInput] = useState("banana\napple\norange");
  const [output, setOutput] = useState("");

  function sortText() {
    const sorted = input
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b))
      .join("\n");

    setOutput(sorted);
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Lines of Text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={sortText}>
        Sort Text
      </button>
      <div className="result-box">
        <div className="result-label">Sorted Output</div>
        <pre className="helper" style={{ whiteSpace: "pre-wrap", margin: 0 }}>
          {output || "Sorted lines will appear here."}
        </pre>
      </div>
    </div>
  );
}