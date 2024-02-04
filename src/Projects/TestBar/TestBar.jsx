import React, { useState } from "react";

const TestBar = ({data}) => {
  const [inputType, setInputType] = useState("");

 const getSearch = data.filter((i)=>{
    setInputType()
 })

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputType}
        onChange={e => setInputType(e.target.value)}
      />

        

    </div>
  );
};

export default TestBar;
