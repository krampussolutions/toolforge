"use client";

import { useState } from "react";

export default function UrlDecoder() {
  const [input, setInput] = useState("hello%20world%3Fname%3Dutilhubx");
  const [output, setOutput] = useState("");

  function decodeUrl() {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput("Invalid URL-encoded text.");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Encoded Text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={decodeUrl}>
        Decode URL
      </button>
      <div className="result-box">
        <div className="result-label">Decoded Output</div>
        <div className="helper" style={{ whiteSpace: "pre-wrap" }}>
          {output || "Decoded text will appear here."}
        </div>
      </div>
    </div>
  );
}