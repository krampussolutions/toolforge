"use client";
import { useMemo, useState } from "react";
function convertTemperature(value:number, from:string, to:string){let c=value;if(from==="fahrenheit") c=(value-32)*5/9; if(from==="kelvin") c=value-273.15; if(to==="fahrenheit") return (c*9/5)+32; if(to==="kelvin") return c+273.15; return c;}
const unitGroups={length:{units:{feet:1,meters:0.3048,kilometers:0.0003048}},weight:{units:{pounds:1,kilograms:0.45359237}},temperature:{units:{fahrenheit:1,celsius:1,kelvin:1}}} as const;
export default function SuiteRenderer({ slug }:{ slug:string }) {
  const [mode,setMode]=useState(""); const [a,setA]=useState("100"); const [b,setB]=useState("12"); const [c,setC]=useState("5"); const [date1,setDate1]=useState(""); const [date2,setDate2]=useState(""); const [text,setText]=useState("Paste your text here."); const [group,setGroup]=useState<keyof typeof unitGroups>("length"); const [from,setFrom]=useState("feet"); const [to,setTo]=useState("meters");
  const config: Record<string,string[]> = {"finance-calculators":["Loan payment","Compound interest","ROI"],"health-calculators":["BMI","Daily calories","Protein","Water intake"],"date-time-tools":["Age","Days between dates"],"text-tools":["Word count","Uppercase","Reading time"],"conversion-tools":["unit"],"business-tools":["Discount","Break-even"],"everyday-tools":["Percentage","Tip","Password generator"]};
  const activeMode = mode || config[slug]?.[0] || "";
  const result = useMemo(() => {
    const x=parseFloat(a||"0"), y=parseFloat(b||"0"), z=parseFloat(c||"0");
    if(slug==="conversion-tools"){ if(group==="temperature") return `${convertTemperature(x,from,to).toFixed(2)} ${to}`; const units=unitGroups[group].units as Record<string,number>; return `${((x/units[from])*units[to]).toFixed(4)} ${to}`;}
    if(slug==="finance-calculators"){ if(activeMode==="Loan payment"){ const r=y/100/12,n=z*12; if(!r||!n) return "$0.00/month"; const pay=x*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1); return "$"+pay.toFixed(2)+"/month"; } if(activeMode==="Compound interest") return "$"+(x*Math.pow(1+y/100,z)).toFixed(2); return x?(((y-x)/x)*100).toFixed(2)+"%":"0%"; }
    if(slug==="health-calculators"){ if(activeMode==="BMI") return y?((x/(y*y))*703).toFixed(1):"0"; if(activeMode==="Daily calories") return Math.round((88.362+13.397*x+4.799*y-5.677*z)*1.375)+" calories/day"; if(activeMode==="Protein") return (x*0.8).toFixed(0)+" g/day"; return (x*0.5).toFixed(0)+" oz/day"; }
    if(slug==="date-time-tools"){ if(activeMode==="Age"){ if(!date1) return ""; const birth=new Date(date1), now=new Date(); let age=now.getFullYear()-birth.getFullYear(); const md=now.getMonth()-birth.getMonth(); if(md<0||(md===0&&now.getDate()<birth.getDate())) age--; return age+" years"; } if(!date1||!date2) return ""; return Math.floor(Math.abs(new Date(date2).getTime()-new Date(date1).getTime())/86400000)+" days"; }
    if(slug==="text-tools"){ const clean=text.trim(); if(activeMode==="Word count") return `${clean?clean.split(/\s+/).length:0} words • ${text.length} characters`; if(activeMode==="Uppercase") return text.toUpperCase(); return `${Math.max(1,Math.ceil((clean?clean.split(/\s+/).length:0)/200))} min read`; }
    if(slug==="business-tools"){ if(activeMode==="Discount") return "Final price: "+(x-(x*y/100)).toFixed(2); return z?(x/(y-z)).toFixed(2)+" units":"0 units"; }
    if(slug==="everyday-tools"){ if(activeMode==="Percentage") return ((x/100)*y).toFixed(2); if(activeMode==="Tip") return "Tip: "+(x*y/100).toFixed(2)+" • Total: "+(x+(x*y/100)).toFixed(2); const chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*"; let out=""; for(let i=0;i<12;i++) out+=chars[Math.floor(Math.random()*chars.length)]; return out; }
    return "Use the individual tools in this section.";
  }, [slug,activeMode,a,b,c,date1,date2,text,group,from,to]);
  return <div className="form-panel">
    <div className="form-row">
      {slug==="conversion-tools" ? <>
        <div className="field"><label>Type</label><select value={group} onChange={(e)=>{const next=e.target.value as keyof typeof unitGroups; setGroup(next); const keys=Object.keys(unitGroups[next].units); setFrom(keys[0]); setTo(keys[1]||keys[0]);}}>{Object.keys(unitGroups).map((g)=><option key={g} value={g}>{g}</option>)}</select></div>
        <div className="field"><label>From</label><select value={from} onChange={(e)=>setFrom(e.target.value)}>{Object.keys(unitGroups[group].units).map((u)=><option key={u} value={u}>{u}</option>)}</select></div>
        <div className="field"><label>To</label><select value={to} onChange={(e)=>setTo(e.target.value)}>{Object.keys(unitGroups[group].units).map((u)=><option key={u} value={u}>{u}</option>)}</select></div>
      </> : <div className="field"><label>Mode</label><select value={activeMode} onChange={(e)=>setMode(e.target.value)}>{(config[slug]||[]).map((m)=><option key={m} value={m}>{m}</option>)}</select></div>}
    </div>
    {slug==="date-time-tools" ? <div className="form-row"><div className="field"><label>Date 1</label><input type="date" value={date1} onChange={(e)=>setDate1(e.target.value)} /></div><div className="field"><label>Date 2</label><input type="date" value={date2} onChange={(e)=>setDate2(e.target.value)} /></div></div> : slug==="text-tools" ? <div className="field"><label>Text</label><textarea value={text} onChange={(e)=>setText(e.target.value)} /></div> : <div className="form-row"><div className="field"><label>Value A</label><input value={a} onChange={(e)=>setA(e.target.value)} /></div><div className="field"><label>Value B</label><input value={b} onChange={(e)=>setB(e.target.value)} /></div><div className="field"><label>Value C</label><input value={c} onChange={(e)=>setC(e.target.value)} /></div></div>}
    <div className="result-box"><div className="result-label">Result</div><div className="result-value" style={{whiteSpace:"pre-wrap",fontSize:slug==="text-tools"?"22px":undefined}}>{result || "Enter values to calculate."}</div></div>
  </div>;
}
