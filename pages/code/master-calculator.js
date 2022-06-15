import React, { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState("");
  const [newVal, setNewVal] = useState("");
  const [operator, setOperator] = useState("");
  const handleValChange = (e) => {
    setVal(e.target.value);
  };
  const addNewValue = (v) => {
    setNewVal(v.target.value);
    setVal(val+newVal);
  };
  return (
    <div className="min-h-screen text-gray-400 bg-gray-900 body-font">
      <div className="mx-auto p-10 w-96">
        <div>
          <input
            type="text"
            placeholder="Input"
            value={val}
            onChange={handleValChange}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 mx-auto rounded py-2 px-4 block w-80 appearance-none"
          />
          <p className="text-2xl text-white my-4">{val}</p>
          <div className="flex-col">
            <div className="flex">
              <button
                onClick={() => {
                  setVal(val.substr(0, val.length-1))
                }}
                className="bg-gray-400 text-white mx-3 p-6 my-2 rounded-md"
              >
                Del
              </button>
              <button
                onClick={() => {
                  setVal("");
                }}
                className="bg-red-500 text-white mx-3 p-6 my-2 rounded-md"
              >
                C
              </button>
            </div>
            <div className="flex">
              <button
                onClick={addNewValue}
                value="7"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                7
              </button>
              <button
                onClick={addNewValue}
                value="8"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                8
              </button>
              <button
                onClick={addNewValue}
                value="9"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                9
              </button>
              <button
                onClick={addNewValue}
                value="/"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                /
              </button>
            </div>
            <div className="flex">
              <button
                onClick={addNewValue}
                value="4"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                4
              </button>
              <button
                onClick={addNewValue}
                value="5"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                5
              </button>
              <button
                onClick={addNewValue}
                value="6"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                6
              </button>
              <button
                onClick={addNewValue}
                value="x"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                x
              </button>
            </div>
            <div className="flex">
              <button
                onClick={addNewValue}
                value="1"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                1
              </button>
              <button
                onClick={addNewValue}
                value="2"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                2
              </button>
              <button
                onClick={addNewValue}
                value="3"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                3
              </button>
              <button
                onClick={addNewValue}
                value="-"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                -
              </button>
            </div>
            <div className="flex">
              <button
                onClick={addNewValue}
                value="0"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                0
              </button>
              <button
                onClick={addNewValue}
                value="."
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                .
              </button>
              <button
                onClick={addNewValue}
                className="bg-green-400 text-white mx-3 p-6 my-2 rounded-md"
              >
                =
              </button>
              <button
                onClick={addNewValue}
                value="+"
                className="bg-slate-50 mx-3 p-6 my-2 rounded-md text-black"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
