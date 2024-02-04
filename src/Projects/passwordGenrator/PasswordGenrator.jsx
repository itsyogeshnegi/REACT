import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenrator = () => {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook

  const passwordRef = useRef(null);

  const genratePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "@#%$&_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    genratePassword();
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <div className="h-[100vh] w-full bg-teal-600 flex justify-center items-center flex-col text-center">
      <h2 className="text-5xl text-pretty text-white">Password Genrator</h2>
      <div className="flex shadow rounded-lg overflow-hidden mt-4 bg-red-400 h-96 justify-center items-center w-[60%] flex-col">
        <input
          className="outline-none text-center h-10 w-96 rounded-3xl"
          type="text"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          readOnly
          ref={passwordRef}
        />
        <button
          className="h-12 w-24 bg-slate-500 mt-2 rounded-lg text-white font-medium hover:bg-white hover:text-cyan-950"
          onClick={copyPassword}>
          Copy
        </button>

        <input
          type="range"
          className="mt-2"
          min={6}
          max={100}
          placeholder="Password Length"
          value={length}
          onChange={e => setLength(e.target.value)}
          title="Password Length"
        />
        <label className="font-medium">Password Length : {length}</label>

        <div className="h-11 w-auto flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => setNumAllowed(prev => !prev)}
            className="h-11"
          />
          <label className="font-medium">Number Add</label>
        </div>

        <div className="h-11 w-auto flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            onChange={() => setCharAllowed(prev => !prev)}
            className="h-11"
          />
          <label className="font-medium">Charachters Add</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenrator;
