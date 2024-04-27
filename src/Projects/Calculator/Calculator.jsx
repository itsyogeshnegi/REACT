import React from "react";
import CalcBtn from "./CalcBtn";
const Calculator = () => {
  return (
    <div className="h-screen w-screen bg-slate-200 flex justify-center  items-center">
      <div className="h-3/4 w-1/3 bg-white rounded-3xl p-2">
        <div className="h-24 rounded-2xl w-full bg-slate-200 shadow-lg">
          <input
            type="text"
            className="h-full w-full bg-transparent outline-none text-end  text-5xl pr-2"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center py-2 gap-4">
          <CalcBtn Value={"Plus"} sign={"+"} />
          <CalcBtn Value={"Minus"} sign={"-"} />
          <CalcBtn Value={"Multi"} sign={"*"} />
          <CalcBtn Value={"Divide"} sign={"/"} />
          <CalcBtn Value={"Total"} sign={"="} />
          <CalcBtn Value={0} />
          <CalcBtn Value={1} />
          <CalcBtn Value={2} />
          <CalcBtn Value={3} />
          <CalcBtn Value={4} />
          <CalcBtn Value={5} />
          <CalcBtn Value={6} />
          <CalcBtn Value={7} />
          <CalcBtn Value={8} />
          <CalcBtn Value={9} />
          <CalcBtn Value={"Back"} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
