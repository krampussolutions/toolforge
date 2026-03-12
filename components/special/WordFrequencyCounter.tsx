"use client";
import { useMemo, useState } from "react";
export default function WordFrequencyCounter() {
  const [input, setInput] = useState("apple banana apple orange banana apple");
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    input.toLowerCase().match(/[a-z0-9']+/g)?.forEach((w) => map.set(w, (map.get(w) || 0) + 1));
    return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 20);
  }, [input]);
  return (
    <div className="form-panel">
      <div className="field">
        <label>Text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div className="result-box">
        <div className="result-label">Top Words</div>
        <pre className="helper" style={{ whiteSpace: "pre-wrap", margin: 0 }}>
          {counts.length ? counts.map(([w, c]) => `${w}: ${c}`).join("\n") : "Counts will appear here."}
        </pre>
      </div>
    </div>
  );
}
