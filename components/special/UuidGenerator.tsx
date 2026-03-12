"use client";

import { useState } from "react";

export default function UuidGenerator() {
  const [output, setOutput] = useState("");

  function generateUuid() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      setOutput(crypto.randomUUID());
    } else {
      setOutput("UUID generation is not supported in this browser.");
    }
  }

  return (
    <div className="form-panel">
      <button className="button" type="button" onClick={generateUuid}>
        Generate UUID
      </button>
      <div className="result-box">
        <div className="result-label">UUID</div>
        <div className="helper" style={{ whiteSpace: "pre-wrap" }}>
          {output || "Generated UUID will appear here."}
        </div>
      </div>
    </div>
  );
}