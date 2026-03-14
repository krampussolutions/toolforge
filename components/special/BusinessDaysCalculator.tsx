"use client";
import { useMemo, useState } from "react";

function countDays(start: Date, end: Date) {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const from = new Date(Math.min(startTime, endTime));
  const to = new Date(Math.max(startTime, endTime));

  let weekdays = 0;
  let weekends = 0;
  const current = new Date(from);
  while (current <= to) {
    const day = current.getDay();
    if (day === 0 || day === 6) weekends += 1;
    else weekdays += 1;
    current.setDate(current.getDate() + 1);
  }
  return { weekdays, weekends, totalDays: weekdays + weekends };
}

export default function BusinessDaysCalculator() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const result = useMemo(() => {
    if (!start || !end) return null;
    const startDate = new Date(start + "T00:00:00");
    const endDate = new Date(end + "T00:00:00");
    return countDays(startDate, endDate);
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
        <div className="result-label">Business day result</div>
        <div className="result-value" style={{ whiteSpace: "pre-wrap" }}>
          {result
            ? `${result.weekdays} weekdays\n${result.weekends} weekend days\n${result.totalDays} total calendar days`
            : "Choose two dates to count weekdays and total days."}
        </div>
      </div>
    </div>
  );
}
