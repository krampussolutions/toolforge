"use client";
import { useState } from "react";
export default function ListRandomizer() {
  const [input, setInput] = useState("apple\nbanana\norange\ngrape");
  const [output, setOutput] = useState("");
  function shuffle() {
    const arr = input.split(/\r?\n/).map((v) => v.trim()).filter(Boolean);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setOutput(arr.join("\n"));
  }
  return (
    <div className="form-panel">
      <div className="field">
        <label>List Items</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button className="button" type="button" onClick={shuffle}>Randomize List</button>
      <div className="result-box">
        <div className="result-label">Random Order</div>
        <pre className="helper" style={{ whiteSpace: "pre-wrap", margin: 0 }}>{output || "Randomized list will appear here."}</pre>
      </div>
    </div>
  );
}
