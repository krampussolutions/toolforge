"use client";
import { useState } from "react";
export default function UuidBulkGenerator() {
  const [count, setCount] = useState("10");
  const [output, setOutput] = useState("");
  function gen() {
    const n = Math.max(1, Math.min(100, parseInt(count || "1", 10) || 1));
    if (typeof crypto === "undefined" || !crypto.randomUUID) {
      setOutput("UUID generation is not supported in this browser.");
      return;
    }
    setOutput(Array.from({ length: n }, () => crypto.randomUUID()).join("\n"));
  }
  return (
    <div className="form-panel">
      <div className="field">
        <label>How Many UUIDs</label>
        <input value={count} onChange={(e) => setCount(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={gen}>Generate UUIDs</button>
      <div className="result-box">
        <div className="result-label">UUID List</div>
        <pre className="helper" style={{ whiteSpace: "pre-wrap", margin: 0 }}>{output || "Generated UUIDs will appear here."}</pre>
      </div>
    </div>
  );
}
