import React, {useState} from "react";

const Count = () => {
    let [count, setCount] = useState(0);
  const addValue = () => {
    if (count < 5) {
      setCount(count + 1);
    } else {
      disabled;
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      disabled;
    }
  };

  return (
    <div>
      <button onClick={addValue}>Add Value</button>
      <br />
      <h2>Counting : {count}</h2>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
};

export default Count;
