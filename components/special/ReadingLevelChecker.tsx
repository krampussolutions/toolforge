"use client";
import { useMemo, useState } from "react";

function countSyllables(word: string) {
  const clean = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!clean) return 0;
  if (clean.length <= 3) return 1;
  const matches = clean.replace(/(?:e$|es$|ed$)/, "").match(/[aeiouy]{1,2}/g);
  return Math.max(1, matches ? matches.length : 1);
}

export default function ReadingLevelChecker() {
  const [text, setText] = useState("Paste your article, email, or landing page copy here.");
  const result = useMemo(() => {
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    const words = text.trim().split(/\s+/).filter(Boolean);
    const syllables = words.reduce((sum, word) => sum + countSyllables(word), 0);
    const wordCount = words.length || 1;
    const sentenceCount = sentences.length || 1;
    const flesch = 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllables / wordCount);
    const grade = 0.39 * (wordCount / sentenceCount) + 11.8 * (syllables / wordCount) - 15.59;
    return { words: words.length, sentences: sentences.length, flesch, grade };
  }, [text]);

  return (
    <div className="form-panel">
      <div className="field">
        <label>Text</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="result-box">
        <div className="result-label">Readability estimate</div>
        <div className="result-value" style={{ whiteSpace: "pre-wrap" }}>
          {`${result.words} words\n${result.sentences} sentences\nFlesch reading ease: ${result.flesch.toFixed(1)}\nEstimated grade level: ${Math.max(0, result.grade).toFixed(1)}`}
        </div>
      </div>
    </div>
  );
}
