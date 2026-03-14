"use client";
import { useMemo, useState } from "react";

const smallWords = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "in", "of", "on", "or", "the", "to", "vs", "via"]);

function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .split(/\s+/)
    .map((word, index, arr) => {
      if (!word) return word;
      if (index !== 0 && index !== arr.length - 1 && smallWords.has(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default function TitleCaseHeadlineAnalyzer() {
  const [headline, setHeadline] = useState("best free tools for quick daily tasks");
  const result = useMemo(() => {
    const titleCase = toTitleCase(headline.trim());
    const length = titleCase.length;
    const words = titleCase ? titleCase.split(/\s+/).length : 0;
    const note = length < 35 ? "Headline may be too short." : length > 65 ? "Headline may be too long." : "Headline length is in a workable range.";
    return { titleCase, length, words, note };
  }, [headline]);

  return (
    <div className="form-panel">
      <div className="field">
        <label>Headline</label>
        <textarea value={headline} onChange={(e) => setHeadline(e.target.value)} />
      </div>
      <div className="result-box">
        <div className="result-label">Headline analysis</div>
        <div className="result-value" style={{ whiteSpace: "pre-wrap" }}>
          {`${result.titleCase || "Enter a headline."}\n\nLength: ${result.length} characters\nWords: ${result.words}\n${result.note}`}
        </div>
      </div>
    </div>
  );
}
