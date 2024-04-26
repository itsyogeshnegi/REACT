import React from "react";

const FAQ_Cards = ({ index, isActive, toggleAccordion, DigitalHead, DigitalPara }) => {
  return (
    <div>
      <div onClick={() => toggleAccordion(index)} className="mb-3">
        <div className="flex items-center justify-between border-b-2 border-solid border-black py-2">
          <h3 className="text-xl md:text-xl lg:text-xl xl:text-xl font-bold">
            {DigitalHead}
          </h3>
          <p className="text-xl md:text-3xl lg:text-3xl xl:text-3xl font-extralight">
            {isActive ? "-" : "+"}
          </p>
        </div>
        {isActive && (
          <div className="">
            <p>{DigitalPara}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ_Cards;
