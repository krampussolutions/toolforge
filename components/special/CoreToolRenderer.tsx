"use client";

import { useEffect, useMemo, useState } from "react";

function parseLocalDate(value: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function daysBetween(a: Date, b: Date) {
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((utcB - utcA) / 86400000);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(
    Number.isFinite(value) ? value : 0,
  );
}

function monthlyPayment(principal: number, annualRate: number, years: number) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  if (months <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return principal * ((monthlyRate * factor) / (factor - 1));
}

function generatePassword(length: number) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";
  const cryptoObj = typeof window !== "undefined" ? window.crypto : undefined;
  if (cryptoObj?.getRandomValues) {
    const array = new Uint32Array(length);
    cryptoObj.getRandomValues(array);
    return Array.from(array, (value) => chars[value % chars.length]).join("");
  }
  let output = "";
  for (let i = 0; i < length; i += 1) {
    output += chars[Math.floor(Math.random() * chars.length)];
  }
  return output;
}

function readingMinutesFromWords(words: number) {
  if (words <= 0) return 0;
  return Math.max(1, Math.ceil(words / 200));
}

const unitMap = {
  "unit-converter": {
    feet: 0.3048,
    meters: 1,
    kilometers: 1000,
    miles: 1609.344,
  },
  "feet-to-meters": {
    feet: 0.3048,
    meters: 1,
  },
  "kg-to-lbs": {
    kilograms: 1,
    pounds: 0.45359237,
  },
} as const;

export default function CoreToolRenderer({ slug }: { slug: string }) {
  const todayString = new Date().toISOString().slice(0, 10);
  const [values, setValues] = useState<Record<string, string>>({
    amount: "10000",
    rate: "7.5",
    years: "5",
    yearsSavings: "10",
    contribution: "100",
    current: "1000",
    final: "1400",
    weight: "180",
    heightInches: "70",
    age: "35",
    sex: "male",
    activity: "1.55",
    startDate: "2024-01-01",
    endDate: todayString,
    targetDate: "2026-12-31",
    startTime: "09:00",
    endTime: "17:00",
    breakMinutes: "30",
    text: "Paste your text here.",
    fromUnit: "feet",
    toUnit: "meters",
    fromValue: "10",
    price: "100",
    percent: "20",
    monthlyPayment: "250",
    fixedCosts: "1000",
    pricePerUnit: "45",
    variableCost: "25",
    passwordLength: "16",
    birthDate: "1990-01-01",
  });
  const [password, setPassword] = useState(() => generatePassword(16));

  useEffect(() => {
    if (slug === "case-converter") {
      setValues((current) => ({ ...current, percent: current.percent && ["upper", "lower", "title"].includes(current.percent) ? current.percent : "upper" }));
    }
    if (slug === "feet-to-meters") {
      setValues((current) => ({ ...current, fromUnit: "feet", toUnit: "meters", fromValue: current.fromValue || "10" }));
    }
    if (slug === "kg-to-lbs") {
      setValues((current) => ({ ...current, fromUnit: "kilograms", toUnit: "pounds", fromValue: current.fromValue || "10" }));
    }
    if (slug === "unit-converter") {
      setValues((current) => ({ ...current, fromUnit: "feet", toUnit: "meters", fromValue: current.fromValue || "10" }));
    }
  }, [slug]);

  const setValue = (key: string, value: string) =>
    setValues((current) => ({ ...current, [key]: value }));

  const result = useMemo(() => {
    const num = (key: string) => Number(values[key] || 0);

    switch (slug) {
      case "loan-calculator": {
        const payment = monthlyPayment(num("amount"), num("rate"), num("years"));
        const total = payment * num("years") * 12;
        return {
          label: "Estimated Monthly Payment",
          value: formatCurrency(payment),
          helper: `Total repaid: ${formatCurrency(total)}`,
        };
      }
      case "mortgage-calculator": {
        const payment = monthlyPayment(num("amount"), num("rate"), num("years"));
        return {
          label: "Estimated Mortgage Payment",
          value: formatCurrency(payment),
          helper: `Based on a ${num("years")}-year term before taxes and insurance.`,
        };
      }
      case "car-payment-calculator": {
        const payment = monthlyPayment(num("amount"), num("rate"), num("years"));
        return {
          label: "Estimated Car Payment",
          value: formatCurrency(payment),
          helper: `Approximate monthly payment for ${num("years") * 12} months.`,
        };
      }
      case "compound-interest-calculator": {
        const future = num("amount") * Math.pow(1 + num("rate") / 100, num("yearsSavings"));
        return {
          label: "Future Value",
          value: formatCurrency(future),
          helper: `Starting with ${formatCurrency(num("amount"))} for ${num("yearsSavings")} years.`,
        };
      }
      case "savings-calculator": {
        const monthlyRate = num("rate") / 100 / 12;
        const months = num("yearsSavings") * 12;
        const futurePrincipal = num("amount") * Math.pow(1 + monthlyRate, months);
        const futureContrib = monthlyRate === 0
          ? num("contribution") * months
          : num("contribution") * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        const future = futurePrincipal + futureContrib;
        return {
          label: "Estimated Savings Total",
          value: formatCurrency(future),
          helper: `Includes ${formatCurrency(num("contribution"))}/month contributions.`,
        };
      }
      case "roi-calculator": {
        const current = num("current");
        const final = num("final");
        const roi = current === 0 ? 0 : ((final - current) / current) * 100;
        return {
          label: "Return on Investment",
          value: `${formatNumber(roi)}%`,
          helper: `Profit: ${formatCurrency(final - current)}`,
        };
      }
      case "bmi-calculator": {
        const bmi = (num("weight") / Math.pow(num("heightInches"), 2)) * 703;
        let category = "Healthy weight";
        if (bmi < 18.5) category = "Underweight";
        else if (bmi >= 25 && bmi < 30) category = "Overweight";
        else if (bmi >= 30) category = "Obesity";
        return {
          label: "Estimated BMI",
          value: formatNumber(bmi, 1),
          helper: `Category: ${category}`,
        };
      }
      case "calorie-calculator": {
        const weight = num("weight") * 0.45359237;
        const heightCm = num("heightInches") * 2.54;
        const age = num("age");
        const sex = values.sex === "female" ? -161 : 5;
        const bmr = 10 * weight + 6.25 * heightCm - 5 * age + sex;
        const maintenance = bmr * Number(values.activity || 1.55);
        return {
          label: "Estimated Maintenance Calories",
          value: `${formatNumber(maintenance, 0)} cal/day`,
          helper: `Based on the Mifflin-St Jeor equation and your selected activity level.`,
        };
      }
      case "protein-calculator": {
        const grams = num("weight") * 0.8;
        return {
          label: "Estimated Daily Protein",
          value: `${formatNumber(grams, 0)} g/day`,
          helper: `General estimate based on body weight in pounds.`,
        };
      }
      case "water-intake-calculator": {
        const ounces = num("weight") * 0.5;
        return {
          label: "Estimated Daily Water Intake",
          value: `${formatNumber(ounces, 0)} oz/day`,
          helper: `That is about ${formatNumber(ounces / 8, 1)} cups per day.`,
        };
      }
      case "age-calculator": {
        const birth = parseLocalDate(values.birthDate);
        if (!birth) {
          return { label: "Exact Age", value: "Enter a valid birth date", helper: "" };
        }
        const today = startOfDay(new Date());
        if (birth > today) {
          return { label: "Exact Age", value: "Birth date is in the future", helper: "" };
        }
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();
        if (days < 0) {
          const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
          days += prevMonth.getDate();
          months -= 1;
        }
        if (months < 0) {
          months += 12;
          years -= 1;
        }
        const totalDays = Math.abs(daysBetween(birth, today));
        return {
          label: "Exact Age",
          value: `${years} years, ${months} months, ${days} days`,
          helper: `That is ${formatNumber(totalDays, 0)} total days.`,
        };
      }
      case "days-between-dates": {
        const start = parseLocalDate(values.startDate);
        const end = parseLocalDate(values.endDate);
        if (!start || !end) {
          return { label: "Date Difference", value: "Choose both dates", helper: "" };
        }
        const diff = Math.abs(daysBetween(start, end));
        return {
          label: "Days Between Dates",
          value: `${formatNumber(diff, 0)} days`,
          helper: `Inclusive count: ${formatNumber(diff + 1, 0)} calendar days.`,
        };
      }
      case "countdown-calculator": {
        const target = parseLocalDate(values.targetDate);
        if (!target) return { label: "Countdown", value: "Choose a target date", helper: "" };
        const diff = daysBetween(startOfDay(new Date()), target);
        const direction = diff >= 0 ? "until" : "since";
        return {
          label: "Countdown",
          value: `${formatNumber(Math.abs(diff), 0)} days`,
          helper: `${direction} ${values.targetDate}.`,
        };
      }
      case "hours-worked-calculator": {
        const start = values.startTime.split(":").map(Number);
        const end = values.endTime.split(":").map(Number);
        const breakMinutes = num("breakMinutes");
        if (start.length !== 2 || end.length !== 2) {
          return { label: "Hours Worked", value: "Enter start and end times", helper: "" };
        }
        let minutes = end[0] * 60 + end[1] - (start[0] * 60 + start[1]) - breakMinutes;
        if (minutes < 0) minutes += 24 * 60;
        return {
          label: "Hours Worked",
          value: `${formatNumber(minutes / 60)} hours`,
          helper: `Net time after subtracting ${formatNumber(breakMinutes, 0)} break minutes.`,
        };
      }
      case "word-counter": {
        const clean = values.text.trim();
        const words = clean ? clean.split(/\s+/).length : 0;
        const characters = values.text.length;
        return {
          label: "Word Count",
          value: `${formatNumber(words, 0)} words`,
          helper: `${formatNumber(characters, 0)} characters • ${readingMinutesFromWords(words)} min read`,
        };
      }
      case "case-converter": {
        const original = values.text;
        const converted = values.percent === "upper"
          ? original.toUpperCase()
          : values.percent === "lower"
            ? original.toLowerCase()
            : original.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        return {
          label: "Converted Text",
          value: converted || "Converted text will appear here.",
          helper: "Switch between uppercase, lowercase, and title case.",
        };
      }
      case "unit-converter":
      case "feet-to-meters":
      case "kg-to-lbs": {
        const units = unitMap[slug];
        const fromValue = num("fromValue");
        const fromUnit = values.fromUnit as keyof typeof units;
        const toUnit = values.toUnit as keyof typeof units;
        const metersOrKg = fromValue * units[fromUnit];
        const converted = metersOrKg / units[toUnit];
        return {
          label: "Converted Value",
          value: `${formatNumber(converted, 4)} ${String(toUnit)}`,
          helper: `${formatNumber(fromValue)} ${String(fromUnit)} = ${formatNumber(converted, 4)} ${String(toUnit)}`,
        };
      }
      case "discount-calculator": {
        const discount = num("price") * (num("percent") / 100);
        return {
          label: "Final Price",
          value: formatCurrency(num("price") - discount),
          helper: `You save ${formatCurrency(discount)}.`,
        };
      }
      case "break-even-calculator": {
        const denominator = num("pricePerUnit") - num("variableCost");
        const units = denominator <= 0 ? 0 : num("fixedCosts") / denominator;
        return {
          label: "Break-Even Units",
          value: denominator <= 0 ? "Increase price or lower variable cost" : `${formatNumber(Math.ceil(units), 0)} units`,
          helper: denominator <= 0 ? "Contribution margin must be above zero." : `Each unit contributes ${formatCurrency(denominator)} toward fixed costs.`,
        };
      }
      case "percentage-calculator": {
        const resultValue = num("price") * (num("percent") / 100);
        return {
          label: "Percentage Result",
          value: formatNumber(resultValue),
          helper: `${num("percent")}% of ${formatNumber(num("price"))}`,
        };
      }
      case "tip-calculator": {
        const tip = num("price") * (num("percent") / 100);
        return {
          label: "Tip Amount",
          value: formatCurrency(tip),
          helper: `Total bill with tip: ${formatCurrency(num("price") + tip)}`,
        };
      }
      case "password-generator": {
        return {
          label: "Generated Password",
          value: password,
          helper: `Length: ${formatNumber(password.length, 0)} characters`,
        };
      }
      default:
        return {
          label: "Result",
          value: "This tool is ready for expansion.",
          helper: "",
        };
    }
  }, [password, slug, values]);

  const renderFinanceFields = () => {
    if (["loan-calculator", "mortgage-calculator", "car-payment-calculator"].includes(slug)) {
      return (
        <div className="form-row">
          <div className="field"><label>Loan amount</label><input value={values.amount} onChange={(e) => setValue("amount", e.target.value)} /></div>
          <div className="field"><label>Interest rate (%)</label><input value={values.rate} onChange={(e) => setValue("rate", e.target.value)} /></div>
          <div className="field"><label>Years</label><input value={values.years} onChange={(e) => setValue("years", e.target.value)} /></div>
        </div>
      );
    }
    if (["compound-interest-calculator", "savings-calculator"].includes(slug)) {
      return (
        <div className="form-row">
          <div className="field"><label>Starting amount</label><input value={values.amount} onChange={(e) => setValue("amount", e.target.value)} /></div>
          <div className="field"><label>Interest rate (%)</label><input value={values.rate} onChange={(e) => setValue("rate", e.target.value)} /></div>
          <div className="field"><label>Years</label><input value={values.yearsSavings} onChange={(e) => setValue("yearsSavings", e.target.value)} /></div>
          {slug === "savings-calculator" ? <div className="field"><label>Monthly contribution</label><input value={values.contribution} onChange={(e) => setValue("contribution", e.target.value)} /></div> : null}
        </div>
      );
    }
    return (
      <div className="form-row">
        <div className="field"><label>Starting value</label><input value={values.current} onChange={(e) => setValue("current", e.target.value)} /></div>
        <div className="field"><label>Final value</label><input value={values.final} onChange={(e) => setValue("final", e.target.value)} /></div>
      </div>
    );
  };

  const renderHealthFields = () => {
    if (["bmi-calculator", "calorie-calculator", "protein-calculator", "water-intake-calculator"].includes(slug)) {
      return (
        <>
          <div className="form-row">
            <div className="field"><label>Weight (lb)</label><input value={values.weight} onChange={(e) => setValue("weight", e.target.value)} /></div>
            {slug !== "protein-calculator" && slug !== "water-intake-calculator" ? <div className="field"><label>Height (inches)</label><input value={values.heightInches} onChange={(e) => setValue("heightInches", e.target.value)} /></div> : null}
            {slug === "calorie-calculator" ? <div className="field"><label>Age</label><input value={values.age} onChange={(e) => setValue("age", e.target.value)} /></div> : null}
          </div>
          {slug === "calorie-calculator" ? (
            <div className="form-row">
              <div className="field"><label>Sex</label><select value={values.sex} onChange={(e) => setValue("sex", e.target.value)}><option value="male">Male</option><option value="female">Female</option></select></div>
              <div className="field"><label>Activity</label><select value={values.activity} onChange={(e) => setValue("activity", e.target.value)}><option value="1.2">Sedentary</option><option value="1.375">Light</option><option value="1.55">Moderate</option><option value="1.725">Very active</option></select></div>
            </div>
          ) : null}
        </>
      );
    }
    return null;
  };

  const renderDateFields = () => {
    if (slug === "age-calculator") {
      return <div className="field"><label>Birth date</label><input type="date" value={values.birthDate} onChange={(e) => setValue("birthDate", e.target.value)} /></div>;
    }
    if (["days-between-dates", "weeks-between-dates", "business-days-calculator"].includes(slug)) {
      return (
        <div className="form-row">
          <div className="field"><label>Start date</label><input type="date" value={values.startDate} onChange={(e) => setValue("startDate", e.target.value)} /></div>
          <div className="field"><label>End date</label><input type="date" value={values.endDate} onChange={(e) => setValue("endDate", e.target.value)} /></div>
        </div>
      );
    }
    if (slug === "countdown-calculator") {
      return <div className="field"><label>Target date</label><input type="date" value={values.targetDate} onChange={(e) => setValue("targetDate", e.target.value)} /></div>;
    }
    return (
      <div className="form-row">
        <div className="field"><label>Start time</label><input type="time" value={values.startTime} onChange={(e) => setValue("startTime", e.target.value)} /></div>
        <div className="field"><label>End time</label><input type="time" value={values.endTime} onChange={(e) => setValue("endTime", e.target.value)} /></div>
        <div className="field"><label>Break minutes</label><input value={values.breakMinutes} onChange={(e) => setValue("breakMinutes", e.target.value)} /></div>
      </div>
    );
  };

  const renderTextFields = () => {
    if (slug === "case-converter") {
      return (
        <>
          <div className="field"><label>Text</label><textarea value={values.text} onChange={(e) => setValue("text", e.target.value)} /></div>
          <div className="field"><label>Case style</label><select value={values.percent} onChange={(e) => setValue("percent", e.target.value)}><option value="upper">UPPERCASE</option><option value="lower">lowercase</option><option value="title">Title Case</option></select></div>
        </>
      );
    }
    return <div className="field"><label>Text</label><textarea value={values.text} onChange={(e) => setValue("text", e.target.value)} /></div>;
  };

  const renderConversionFields = () => {
    const units = Object.keys(unitMap[slug as keyof typeof unitMap] ?? unitMap["unit-converter"]);
    return (
      <div className="form-row">
        <div className="field"><label>Value</label><input value={values.fromValue} onChange={(e) => setValue("fromValue", e.target.value)} /></div>
        <div className="field"><label>From</label><select value={values.fromUnit} onChange={(e) => setValue("fromUnit", e.target.value)}>{units.map((unit) => <option key={unit} value={unit}>{unit}</option>)}</select></div>
        <div className="field"><label>To</label><select value={values.toUnit} onChange={(e) => setValue("toUnit", e.target.value)}>{units.map((unit) => <option key={unit} value={unit}>{unit}</option>)}</select></div>
      </div>
    );
  };

  const renderBusinessFields = () => {
    if (slug === "break-even-calculator") {
      return (
        <div className="form-row">
          <div className="field"><label>Fixed costs</label><input value={values.fixedCosts} onChange={(e) => setValue("fixedCosts", e.target.value)} /></div>
          <div className="field"><label>Price per unit</label><input value={values.pricePerUnit} onChange={(e) => setValue("pricePerUnit", e.target.value)} /></div>
          <div className="field"><label>Variable cost per unit</label><input value={values.variableCost} onChange={(e) => setValue("variableCost", e.target.value)} /></div>
        </div>
      );
    }
    return (
      <div className="form-row">
        <div className="field"><label>Original price</label><input value={values.price} onChange={(e) => setValue("price", e.target.value)} /></div>
        <div className="field"><label>Discount (%)</label><input value={values.percent} onChange={(e) => setValue("percent", e.target.value)} /></div>
      </div>
    );
  };

  const renderEverydayFields = () => {
    if (slug === "password-generator") {
      return (
        <div className="form-row">
          <div className="field"><label>Password length</label><input value={values.passwordLength} onChange={(e) => setValue("passwordLength", e.target.value)} /></div>
          <div className="field" style={{ alignSelf: "end" }}><button className="button" type="button" onClick={() => setPassword(generatePassword(Math.max(8, Math.min(64, Number(values.passwordLength) || 16))))}>Generate password</button></div>
        </div>
      );
    }
    return (
      <div className="form-row">
        <div className="field"><label>Base amount</label><input value={values.price} onChange={(e) => setValue("price", e.target.value)} /></div>
        <div className="field"><label>Percent</label><input value={values.percent} onChange={(e) => setValue("percent", e.target.value)} /></div>
      </div>
    );
  };

  const renderFields = () => {
    if (["loan-calculator", "mortgage-calculator", "car-payment-calculator", "compound-interest-calculator", "savings-calculator", "roi-calculator"].includes(slug)) return renderFinanceFields();
    if (["bmi-calculator", "calorie-calculator", "protein-calculator", "water-intake-calculator"].includes(slug)) return renderHealthFields();
    if (["age-calculator", "days-between-dates", "countdown-calculator", "hours-worked-calculator", "weeks-between-dates", "business-days-calculator"].includes(slug)) return renderDateFields();
    if (["word-counter", "case-converter"].includes(slug)) return renderTextFields();
    if (["unit-converter", "feet-to-meters", "kg-to-lbs"].includes(slug)) return renderConversionFields();
    if (["discount-calculator", "break-even-calculator"].includes(slug)) return renderBusinessFields();
    if (["percentage-calculator", "tip-calculator", "password-generator"].includes(slug)) return renderEverydayFields();
    return null;
  };

  return (
    <div className="form-panel">
      {renderFields()}
      <div className="result-box">
        <div className="result-label">{result.label}</div>
        <div className="result-value" style={{ fontSize: slug === "case-converter" ? "22px" : undefined, whiteSpace: slug === "case-converter" ? "pre-wrap" : undefined }}>{result.value}</div>
        {result.helper ? <div className="helper">{result.helper}</div> : null}
      </div>
    </div>
  );
}
