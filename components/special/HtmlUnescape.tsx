"use client";
import { useState } from "react";
const unesc=(s:string)=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&');
export default function HtmlUnescape(){const [input,setInput]=useState('&lt;div&gt;Hello &amp; goodbye&lt;/div&gt;');return <div className="form-panel"><div className="field"><label>Escaped HTML</label><textarea value={input} onChange={(e)=>setInput(e.target.value)} /></div><div className="result-box"><div className="result-label">Unescaped Output</div><div className="helper" style={{whiteSpace:"pre-wrap"}}>{unesc(input)}</div></div></div>;}
