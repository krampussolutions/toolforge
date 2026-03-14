"use client";
import { useMemo, useState } from "react";

export default function SalesTaxCalculator() {
  const [price, setPrice] = useState("100");
  const [rate, setRate] = useState("7");

  const result = useMemo(() => {
    const subtotal = parseFloat(price || "0");
    const taxRate = parseFloat(rate || "0") / 100;
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;
    return { subtotal, taxAmount, total };
  }, [price, rate]);

  return (
    <div className="form-panel">
      <div className="form-row">
        <div className="field">
          <label>Price before tax</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} inputMode="decimal" />
        </div>
        <div className="field">
          <label>Sales tax rate (%)</label>
          <input value={rate} onChange={(e) => setRate(e.target.value)} inputMode="decimal" />
        </div>
      </div>

      <div className="result-box">
        <div className="result-label">Tax result</div>
        <div className="result-value" style={{ whiteSpace: "pre-wrap" }}>
          {`Subtotal: $${result.subtotal.toFixed(2)}\nTax: $${result.taxAmount.toFixed(2)}\nTotal: $${result.total.toFixed(2)}`}
        </div>
      </div>
    </div>
  );
}
