"use client";

import { useState } from "react";

export default function Base64Decoder() {
  const [input, setInput] = useState("SGVsbG8gVXRpbEh1Ylg=");
  const [output, setOutput] = useState("");

  function decode() {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
    } catch {
      setOutput("Invalid Base64 input.");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Base64 Input</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={decode}>
        Decode
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