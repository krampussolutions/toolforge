"use client";
import { useState } from "react";
export default function TextReverser(){const [input,setInput]=useState("UtilHubX");return <div className="form-panel"><div className="field"><label>Text</label><textarea value={input} onChange={(e)=>setInput(e.target.value)} /></div><div className="result-box"><div className="result-label">Reversed Text</div><div className="helper" style={{whiteSpace:"pre-wrap"}}>{input.split("").reverse().join("") || "Result will appear here."}</div></div></div>;}
