import { useState } from "react";
import "./App.css";
import { CalculatorContext } from "./component/CalculatorContext";
import CalculatorWrapper from "./component/CalculatorWrapper";
import "./tailwind.css";

function App() {
  const [accumulator, setAccumulator] = useState("");
  const [total, setTotal] = useState(0);
  const value = { accumulator, total, setAccumulator, setTotal };

  return (
    <CalculatorContext.Provider value={value}>
      <div className="">
        <CalculatorWrapper />
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;
