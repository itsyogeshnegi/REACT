import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addValue = e => {
    e.preventDefault();
    if (!text) {
      return;
    } else if (editIndex !== null) {
      // If editIndex is not null, it means we are editing an existing item
      const newData = [...data];
      newData[editIndex] = text;
      setData(newData);
      setEditIndex(null);
    } else {
      setData([...data, text]);
    }
    setText("");
  };

  const remove = id => {
    setData(data.filter((_, index) => index !== id));
  };

  const edit = id => {
    setText(data[id]);
    setEditIndex(id);
  };

  const deleteAll = () => {
    setData([]);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-3/4 w-1/2 bg-slate-200 rounded-xl flex justify-center items-center  flex-col gap-3">
        <div className=" w-full bg-slate-200 rounded-xl flex justify-center items-center gap-3">
          <button
            className="bg-slate-400 text-lg font-bold rounded-xl px-2 py-1 text-white shadow-xl"
            title="Delete All"
            onClick={deleteAll}>
            All ❌
          </button>
          <input
            className="w-[70%] shadow-lg h-10 rounded-xl text-center outline-none"
            placeholder="Type Text...."
            value={text}
            onChange={i => setText(i.target.value)}
          />
          <button
            className="bg-slate-400 text-lg font-bold rounded-xl h-10 w-16 text-white shadow-xl"
            onClick={addValue}>
            {editIndex !== null ? "SAVE" : "ADD"}
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          {data.map((value, id) => (
            <p key={id} className="font-semibold text-start flex gap-1">
              {value}
              <button
                className="bg-white px-1 rounded-md"
                title="Remove"
                onClick={() => remove(id)}>
                ❌
              </button>
              <button
                className="bg-white px-1 rounded-md"
                onClick={() => edit(id)}>
                Edit
              </button>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
