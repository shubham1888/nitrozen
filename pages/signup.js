import React, { useState } from "react";
import Link from "next/link";
import { IoLockClosed } from "react-icons/io5";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleFormChange = async (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = [name, email, password];
    let res = await fetch("http://localhost:3000/api/signup", {
      method: "POST", // or put
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    setName("");
    setEmail("");
    setPassword("");
    toast.success("Your account has been created!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <Head>
        <title>Codeswear - Signup</title>
      </Head>
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
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-white">
              Slow-carb next level shoindxgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <form onSubmit={handleFormSubmit} method="post">
              <h2 className="text-white text-lg font-medium title-font mb-5">
                Sign Up
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={handleFormChange}
                  value={name}
                  id="name"
                  name="name"
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={handleFormChange}
                  value={email}
                  id="email"
                  name="email"
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleFormChange}
                  value={password}
                  id="password"
                  name="password"
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="flex text-white bg-indigo-500 mx-auto border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center">
                <IoLockClosed className="m-1" />{" "}
                <div className="items-center text-center">Sign Up</div>{" "}
                <div></div>
              </button>
              <p className="text-center my-4 hover:text-yellow-50">
                <Link href={"/login"}>
                  <a>Login</a>
                </Link>
              </p>
              <p className="text-xs mt-3">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
