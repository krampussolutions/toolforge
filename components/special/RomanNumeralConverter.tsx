"use client";
import { useState } from "react";
const numerals: Array<[number, string]> = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
function toRoman(n: number) {
  let out = '';
  for (const [v, s] of numerals) {
    while (n >= v) {
      out += s;
      n -= v;
    }
  }
  return out;
}
function fromRoman(str: string) {
  const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 } as const;
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    const cur = map[str[i] as keyof typeof map] || 0;
    const next = map[str[i + 1] as keyof typeof map] || 0;
    total += cur < next ? -cur : cur;
  }
  return total;
}
export default function RomanNumeralConverter() {
  const [number, setNumber] = useState('42');
  const [roman, setRoman] = useState('XLII');
  const n = Math.max(1, Math.min(3999, parseInt(number || '1', 10) || 1));
  return (
    <div className="form-panel">
      <div className="form-row">
        <div className="field"><label>Number</label><input value={number} onChange={(e)=>setNumber(e.target.value)} /></div>
        <div className="field"><label>Roman Numeral</label><input value={roman} onChange={(e)=>setRoman(e.target.value.toUpperCase())} /></div>
      </div>
      <div className="result-box">
        <div className="result-label">Conversions</div>
        <div className="helper">Number to Roman: {toRoman(n)}</div>
        <div className="helper">Roman to Number: {fromRoman(roman)}</div>
      </div>
    </div>
  );
}
