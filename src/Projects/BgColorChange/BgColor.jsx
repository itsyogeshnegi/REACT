import React, { useState } from "react";

const BgColor = () => {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="h-screen w-full flex justify-center items-center duration-200"
      style={{ backgroundColor: color }}>
      <div className=" w-30 h-[50px] rounded-xl flex justify-around w-[80%] gap-5">
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 flex-1 w-1 rounded-xl">
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 flex-1 w-1 rounded-xl">
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-emerald-500 flex-1 w-1 rounded-xl">
          Green
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 flex-1 w-1 rounded-xl">
          Yellow
        </button>
        <button
          onClick={() => setColor("pink")}
          className="bg-pink-500 flex-1 w-1 rounded-xl">
          {" "}
          Pink
        </button>
      </div>
    </div>
  );
};

export default BgColor;
