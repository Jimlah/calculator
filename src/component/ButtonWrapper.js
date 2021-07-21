import Button from "./Button";
import { IconContext } from "react-icons/lib";
import { TiBackspaceOutline } from "react-icons/ti";
import {
  CalculatorContext,
  handleAccumulatorChange,
  handleBackspace,
  handleReset,
  handleTotalChange,
} from "./CalculatorContext";
import { useContext } from "react";

const buttonValue = [
  { id: "9", name: "nine", type: "number" },
  { id: "8", name: "eight", type: "number" },
  { id: "7", name: "seven", type: "number" },
  { id: "6", name: "six", type: "number" },
  { id: "5", name: "five", type: "number" },
  { id: "4", name: "four", type: "number" },
  { id: "3", name: "three", type: "number" },
  { id: "2", name: "two", type: "number" },
  { id: "1", name: "one", type: "number" },
  { id: "0", name: "zero", type: "number" },
  { id: "00", name: "zeroZero", type: "number" },
  { id: ".", name: "dot", type: "number" },
];

const BackSpaceIcon = () => {
  return (
    <span className="flex items-center w-full justify-center">
      <IconContext.Provider value={{ className: "w-5 h-5 text-red-500" }}>
        <TiBackspaceOutline />
      </IconContext.Provider>
    </span>
  );
};

const ButtonWrapper = () => {
  const { setAccumulator, setTotal, accumulator } =
    useContext(CalculatorContext);

  return (
    <div className="grid grid-cols-4 gap-2">
      <Button
        value={"AC"}
        addedStyle={"text-red-500"}
        handleClick={() => {
          setAccumulator(handleReset);
        }}
      />
      <Button
        value={"C"}
        addedStyle={"text-red-500"}
        handleClick={() => {
          setAccumulator(handleReset);
        }}
      />
      <Button
        handleClick={() => {
          handleBackspace(setAccumulator);
        }}
        value={<BackSpaceIcon />}
      />
      <Button
        value={"/"}
        addedStyle={"text-red-500"}
        handleClick={() => {
          setAccumulator(handleAccumulatorChange("/"));
        }}
      />
      {buttonValue.map((item, index) => {
        return (
          <Button
            key={index}
            value={item.id}
            id={item.name}
            handleClick={() => {
              setAccumulator(handleAccumulatorChange(item.id));
            }}
          />
        );
      })}
      <Button
        value={"*"}
        addedStyle={"col-start-4 row-start-2 text-red-500"}
        handleClick={() => {
          setAccumulator(handleAccumulatorChange("*"));
        }}
      />
      <Button
        value={"-"}
        addedStyle={"col-start-4 row-start-4 text-red-500"}
        handleClick={() => {
          setAccumulator(handleAccumulatorChange("-"));
        }}
      />
      <Button
        value={"+"}
        addedStyle={"col-start-4 row-start-3 text-red-500"}
        handleClick={() => {
          setAccumulator(handleAccumulatorChange("+"));
        }}
      />
      <Button
        value={"="}
        addedStyle={"col-start-4 row-start-5 bg-red-500 hover:bg-red-700"}
        handleClick={() => {
          setTotal(handleTotalChange(accumulator));
        }}
      />
    </div>
  );
};

export default ButtonWrapper;
