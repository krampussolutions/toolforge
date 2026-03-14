"use client";
import { useMemo, useState } from "react";

export default function WeeksBetweenDates() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const result = useMemo(() => {
    if (!start || !end) return null;
    const startDate = new Date(start + "T00:00:00");
    const endDate = new Date(end + "T00:00:00");
    const totalDays = Math.floor(Math.abs(endDate.getTime() - startDate.getTime()) / 86400000);
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    return { totalDays, weeks, days };
  }, [start, end]);

  return (
    <div className="form-panel">
      <div className="form-row">
        <div className="field">
          <label>Start date</label>
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </div>
        <div className="field">
          <label>End date</label>
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
        </div>
      </div>

      <div className="result-box">
        <div className="result-label">Weeks between dates</div>
        <div className="result-value" style={{ whiteSpace: "pre-wrap" }}>
          {result
            ? `${result.weeks} full weeks\n${result.days} extra days\n${result.totalDays} total days`
            : "Choose two dates to calculate the number of weeks between them."}
        </div>
      </div>
    </div>
  );
}
