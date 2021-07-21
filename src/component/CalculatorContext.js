import { createContext } from "react";

export const CalculatorContext = createContext();

export const InitialState = {
  accumulator: "",
  total: 0,
  setAccumulator: () => {},
  setTotal: () => {},
};
let number = "";

let newAccumulator = [];
export const handleAccumulatorChange = (value) => {
  // check if a value is an operator
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    newAccumulator.push(value);
  }

  // check if a value is a number
  if ((value >= 0 && value <= 9) || value === ".") {
    // convert a number to string
    newAccumulator.push(value.toString());
  }

  // convert an array to string
  if (newAccumulator.length > 0) {
    return newAccumulator.join("");
  }

  return 0;
};

export const handleReset = () => {
  return "";
};

export let handleBackspace = (value) => {
  newAccumulator.pop();
  value(newAccumulator.join(""));
};

export const handleTotalChange = (total) => {
  return eval(total);
};
