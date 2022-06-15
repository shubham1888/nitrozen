import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Home from "./components/home";
import Addquote from "./components/addquote";
import Nothing from "./components/nothing";
import Messages from "./components/messages";

const Admin = ({ users, contacts,quotes }) => {
  const [component, setComponent] = useState("home");
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-4 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 mx-4">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                @shubham1888
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-4">
                Shubham.com Admin Panel
              </h1>
              <div className="flex mb-4">
                <button
                  onClick={() => {
                    setComponent("home");
                  }}
                  className={`flex-grow border-b-2 ${
                    component === "home"
                      ? "border-indigo-500 text-indigo-400"
                      : "border-gray-800"
                  } py-2 text-lg px-1`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setComponent("addquotes");
                  }}
                  className={`flex-grow border-b-2 ${
                    component === "addquotes"
                      ? "border-indigo-500 text-indigo-400"
                      : "border-gray-800"
                  } py-2 text-lg px-1`}
                >
                  Quotes
                </button>
                <button
                  onClick={() => {
                    setComponent("Messages");
                  }}
                  className={`flex-grow border-b-2 ${
                    component === "Messages"
                      ? "border-indigo-500 text-indigo-400"
                      : "border-gray-800"
                  } py-2 text-lg px-1`}
                >
                  Messages
                </button>
              </div>
              {component === "home" ? <Home user={users} /> : <Nothing />}
              {component === "addquotes" ? <Addquote quotes={quotes} /> : <Nothing />}
              {component === "Messages" ? (
                <Messages message={contacts} />
              ) : (
                <Nothing />
              )}
            </div>
          </div>
          <div className="flex justify-center my-10">
            <Image
              alt="logo"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-md mx-4"
              src="/images/shubham.jpg"
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const responseUsers = await fetch("http://localhost:3000/api/getusers");
  const dataUsers = await responseUsers.json(); // Extracting data as a JSON Object from the response
  const responseContact = await fetch("http://localhost:3000/api/getcontacts");
  const dataContact = await responseContact.json(); // Extracting data as a JSON Object from the response
  const responseQuote = await fetch("http://localhost:3000/api/getquotes");
  const dataQuote = await responseQuote.json(); // Extracting data as a JSON Object from the response
  return {
    props: {
      users: JSON.parse(JSON.stringify(dataUsers)),
      contacts: JSON.parse(JSON.stringify(dataContact)),
      quotes: JSON.parse(JSON.stringify(dataQuote)),
    }, // will be passed to th page component asprops
  };
}
export default Admin;
// http://localhost:3000/api/getusers
