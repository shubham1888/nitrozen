import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdContentCopy } from "react-icons/md";

const Generateslug = () => {
  const [val, setVal] = useState("");

  const handleValChange = (e) => {
    setVal(e.target.value);
  };

  const copyslug = () => {
    navigator.clipboard.writeText(val);
    toast.success("Slug copied to your clipboard", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const convert = () => {
    let slug = val;
    slug = slug.toLocaleLowerCase();
    slug = slug.replace(/\s+/g, " ").trim();
    // slug = slug.replace(" ", "-");
    for (var i = 0; i < slug.length; i++) {
      if (slug[i] === " ") {
        // slug[i] = "-";
        slug = slug.replace(" ", "-");
      }
    }
    setVal(slug);
  };
  return (
    <div className="min-h-screen text-gray-400 bg-gray-900 body-font">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-96 mx-auto py-20">
        <div className="flex">
          <input
            type="text"
            placeholder="Text"
            value={val}
            onChange={handleValChange}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 mx-2 rounded py-2 px-4 block w-80 appearance-none"
          />
          <button
            onClick={convert}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 mx-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Convert
          </button>
        </div>
        <div className="flex">
          <div className="flex text-black bg-white font-bold my-6 py-2 mx-2 px-4 rounded-full">
            <div>{val}</div>{" "}
            <div
              onClick={copyslug}
              className="px-4 py-4 mx-2 bg-green-400 text-black font-bold rounded-full"
            >
              <MdContentCopy />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generateslug;
