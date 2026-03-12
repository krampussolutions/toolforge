"use client";

import { useState } from "react";

export default function UrlEncoder() {
  const [input, setInput] = useState("hello world?name=utilhubx");
  const [output, setOutput] = useState("");

  function encodeUrl() {
    setOutput(encodeURIComponent(input));
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>Text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={encodeUrl}>
        Encode URL
      </button>
      <div className="result-box">
        <div className="result-label">Encoded Output</div>
        <div className="helper" style={{ whiteSpace: "pre-wrap" }}>
          {output || "Encoded URL text will appear here."}
        </div>
      </div>
    </div>
  );
}