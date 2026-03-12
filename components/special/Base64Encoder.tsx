"use client";

import { useState } from "react";

export default function Base64Encoder() {
  const [input, setInput] = useState("Hello UtilHubX");
  const [output, setOutput] = useState("");

  function encode() {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
    } catch {
      setOutput("Unable to encode text.");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={encode}>
        Encode
      </button>
      <div className="result-box">
        <div className="result-label">Base64 Output</div>
        <div className="helper" style={{ whiteSpace: "pre-wrap" }}>
          {output || "Encoded text will appear here."}
        </div>
      </div>
    </div>
  );
}