"use client";
import { useState } from "react";
export default function TextToBinary(){const [input,setInput]=useState("Hi");const output=[...input].map(ch=>ch.charCodeAt(0).toString(2).padStart(8,"0")).join(" ");return <div className="form-panel"><div className="field"><label>Text</label><textarea value={input} onChange={(e)=>setInput(e.target.value)} /></div><div className="result-box"><div className="result-label">Binary</div><div className="helper" style={{whiteSpace:"pre-wrap"}}>{output || "Binary output will appear here."}</div></div></div>;}
