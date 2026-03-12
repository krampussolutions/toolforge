"use client";

import { useState } from "react";

export default function DuplicateLineRemover() {
  const [input, setInput] = useState("apple\nbanana\napple\norange\nbanana");
  const [output, setOutput] = useState("");

  function removeDuplicates() {
    const unique = Array.from(
      new Set(
        input
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean)
      )
    ).join("\n");

    setOutput(unique);
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Lines of Text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={removeDuplicates}>
        Remove Duplicates
      </button>
      <div className="result-box">
        <div className="result-label">Unique Lines</div>
        <pre className="helper" style={{ whiteSpace: "pre-wrap", margin: 0 }}>
          {output || "Unique lines will appear here."}
        </pre>
      </div>
    </div>
  );
}