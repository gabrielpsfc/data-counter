import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <span>Step: {step}</span>
        <input
          type="range"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="0"
          max="10"
        ></input>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <button onClick={() => handleReset()}>Reset</button>
      ) : null}
    </div>
  );
}

/**
 *  flag ? setCount((s) => s + step) : (setCount((s) => s - step))
    flag ? setDiaSemana((s) => (s + step) < 7 ? s += step : s = (s + step) - 7) : setDiaSemana((s) => (s - step) >= 0 ? s -= step : s = (s - step) + 7)
    flag ? setDia((s) => (s + step) < meses[mes].dias ? s += step : (s = (s + step) - meses[mes].dias)) : setDia((s) => (s - step) > 0 ? s -= step : s = (s - step) + meses[mes].dias)
 */
