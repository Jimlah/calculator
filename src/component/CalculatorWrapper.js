import { useContext } from "react";
import ButtonWrapper from "./ButtonWrapper";
import { CalculatorContext } from "./CalculatorContext";

const CalculatorWrapper = () => {
  const { accumulator, total } = useContext(CalculatorContext);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-2 rounded-lg max-w-sm  min">
        <div className="h-20 w-20 text-white border-b w-full border-opacity-20 p-2 text-md flex flex-col items-end justify-end">
          <span className="text-yellow-500">{accumulator}</span>
          <span className="text-2xl">{total}</span>
        </div>
        <ButtonWrapper />
      </div>
    </div>
  );
};

export default CalculatorWrapper;
