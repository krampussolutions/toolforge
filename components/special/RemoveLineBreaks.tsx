"use client";

import { useState } from "react";

export default function RemoveLineBreaks() {
  const [input, setInput] = useState("Line one\nLine two\nLine three");
  const [output, setOutput] = useState("");

  function cleanText() {
    setOutput(input.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ").trim());
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={cleanText}>
        Remove Line Breaks
      </button>
      <div className="result-box">
        <div className="result-label">Cleaned Text</div>
        <div className="helper" style={{ whiteSpace: "pre-wrap" }}>
          {output || "Cleaned text will appear here."}
        </div>
      </div>
    </div>
  );
}