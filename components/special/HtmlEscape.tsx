"use client";
import { useState } from "react";
const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export default function HtmlEscape(){const [input,setInput]=useState('<div>Hello & goodbye</div>');return <div className="form-panel"><div className="field"><label>HTML</label><textarea value={input} onChange={(e)=>setInput(e.target.value)} /></div><div className="result-box"><div className="result-label">Escaped Output</div><div className="helper" style={{whiteSpace:"pre-wrap"}}>{esc(input)}</div></div></div>;}
