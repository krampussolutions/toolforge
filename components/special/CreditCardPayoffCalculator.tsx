"use client";
import { useMemo, useState } from "react";

export default function CreditCardPayoffCalculator() {
  const [balance, setBalance] = useState("5000");
  const [apr, setApr] = useState("24");
  const [payment, setPayment] = useState("200");

  const result = useMemo(() => {
    let currentBalance = parseFloat(balance || "0");
    const monthlyRate = parseFloat(apr || "0") / 100 / 12;
    const monthlyPayment = parseFloat(payment || "0");
    if (monthlyPayment <= 0 || currentBalance <= 0) return { message: "Enter a balance and monthly payment." };
    if (monthlyRate > 0 && monthlyPayment <= currentBalance * monthlyRate) {
      return { message: "Payment is too low to reduce the balance. Increase the monthly payment." };
    }
    let months = 0;
    let interestPaid = 0;
    while (currentBalance > 0.01 && months < 1200) {
      const interest = currentBalance * monthlyRate;
      interestPaid += interest;
      currentBalance += interest - monthlyPayment;
      months += 1;
    }
    if (months >= 1200) return { message: "Payoff exceeds the calculator limit." };
    return { months, interestPaid };
  }, [balance, apr, payment]);

  return (
    <div className="form-panel">
      <div className="form-row">
        <div className="field"><label>Balance</label><input value={balance} onChange={(e) => setBalance(e.target.value)} inputMode="decimal" /></div>
        <div className="field"><label>APR (%)</label><input value={apr} onChange={(e) => setApr(e.target.value)} inputMode="decimal" /></div>
        <div className="field"><label>Monthly payment</label><input value={payment} onChange={(e) => setPayment(e.target.value)} inputMode="decimal" /></div>
      </div>
      <div className="result-box">
        <div className="result-label">Payoff estimate</div>
        <div className="result-value" style={{ whiteSpace: "pre-wrap" }}>
          {"message" in result ? result.message : `${result.months} months to payoff\nEstimated interest paid: $${result.interestPaid.toFixed(2)}`}
        </div>
      </div>
    </div>
  );
}
