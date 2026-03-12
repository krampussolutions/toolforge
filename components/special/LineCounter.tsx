"use client";
import { useMemo, useState } from "react";
export default function LineCounter() {
  const [input, setInput] = useState("First line\nSecond line\nThird line");
  const lines = useMemo(() => (input ? input.split(/\r?\n/).length : 0), [input]);
  return (
    <div className="form-panel">
      <div className="field">
        <label>Text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div className="result-box">
        <div className="result-label">Line Count</div>
        <div className="result-value" style={{ fontSize: "22px" }}>{lines}</div>
      </div>
    </div>
  );
}
