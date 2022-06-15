import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { IoLockClosed } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleFormChange = async (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = [email, password];
    // convert array to th object
    const obj = Object.assign({}, data);
    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST", // or put
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let response = await res.json();
    // setEmail("");
    // setPassword("");
    if (response.success) {
      toast.success("Login successfully", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push("http://localhost:3000");
      }, 5000);
    } else {
      toast.error("Login failed", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      <Head>
        <title>Codeswear - Login</title>
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
            <form method="post" onSubmit={handleFormSubmit}>
              <h2 className="text-white text-lg font-medium title-font mb-5">
                Login
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={handleFormChange}
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
                  id="password"
                  value={password}
                  name="password"
                  onChange={handleFormChange}
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    name="rememberme"
                    className="rememberme mx-4"
                  />
                  <label htmlFor="remember-me">Remember Me</label>
                </div>
                <Link href="/forgotpassword">
                  <a className="hover:underline text-blue-600 hover:text-blue-500">
                    Forgot Password ?
                  </a>
                </Link>
              </div>
              <button className="flex justify-between mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <IoLockClosed className="m-1" />{" "}
                <div className="items-center text-center mx-auto">Login</div>{" "}
                <div></div>
              </button>
              <p className="text-center my-4 hover:text-yellow-50">
                <Link href={"/signup"}>
                  <a>Signup</a>
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

export default Login;
