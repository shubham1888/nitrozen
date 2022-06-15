import React from "react";

const Messages = ({ message }) => {
  return (
    <div>
      <div className="flex border-t border-gray-800 py-2 px-3">
        <span className="text-white">Username / Email</span>
        <span className="ml-auto text-white mx-auto">Message</span>
      </div>
      {Object.keys(message).map((item) => {
        return (
          <div
            key={message[item]._id}
            className="flex border-t border-gray-800 py-2 hover:bg-gray-800 px-3 hover:cursor-pointer mb-4"
          >
            <span className="text-gray-500 w-1/3 mr-2 py-1">
              {message[item].name}
              <br />
              {message[item].email}
            </span>
            {/* <span className="ml-auto text-gray-500">{message[item].email}</span> */}
            <span className="ml-auto text-gray-500 w-2/3 py-1">
              {message[item].message}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
