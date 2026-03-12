"use client";
import { useState } from "react";
export default function RemoveExtraSpaces(){const [input,setInput]=useState("This    is   spaced    out text.");const output=input.replace(/\s+/g," ").trim();return <div className="form-panel"><div className="field"><label>Text</label><textarea value={input} onChange={(e)=>setInput(e.target.value)} /></div><div className="result-box"><div className="result-label">Clean Text</div><div className="helper" style={{whiteSpace:"pre-wrap"}}>{output || "Result will appear here."}</div></div></div>;}
