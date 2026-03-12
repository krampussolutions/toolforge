"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState('{"name":"UtilHubX","type":"tool"}');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function formatJson() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (err) {
      setOutput("");
      setError("Invalid JSON");
    }
  }

  return (
    <div className="form-panel">
      <div className="field">
        <label>JSON Input</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>

      <button className="button" type="button" onClick={formatJson}>
        Format JSON
      </button>

      <div className="result-box">
        <div className="result-label">Result</div>
        {error ? (
          <div className="result-value" style={{ fontSize: "20px" }}>{error}</div>
        ) : (
          <pre className="helper" style={{ whiteSpace: "pre-wrap", margin: 0 }}>
            {output || "Formatted JSON will appear here."}
          </pre>
        )}
      </div>
    </div>
  );
}