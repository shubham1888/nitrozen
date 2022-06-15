import React, { useState } from "react";

const Addquote = ({ quotes }) => {
  const [val, setVal] = useState("");
  const handleValChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <div>
      <div className="my-6 flex">
        <input
          type="text"
          placeholder="Quote"
          onChange={handleValChange}
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 mx-auto rounded py-2 px-4 block w-80 appearance-none"
        />
        <div className="bg-green-300 text-black px-4 py-2 rounded-md font-bold text-2xl">+</div>
      </div>
      <div>
        <div className="flex border-t border-gray-800 py-2 px-3">
          <span className="text-white">Quotes</span>
          <span className="ml-auto text-white mx-auto">Likes</span>
        </div>
        <div className="overflow-x-auto">
          {Object.keys(quotes).map((item) => {
            return (
              <div
                key={quotes[item]._id}
                className="flex border-t border-gray-800 py-2 hover:bg-gray-800 px-3 hover:cursor-pointer mb-4"
              >
                <span className="ml-auto text-gray-500 w-2/3 py-1">
                  {quotes[item].quote}
                </span>
                <span className="ml-auto text-gray-500 w-2/3 py-1">
                  {quotes[item].likes}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Addquote;
