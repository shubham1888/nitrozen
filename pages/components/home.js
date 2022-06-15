import React from "react";
import Link from "next/link";

const Home = ({ user }) => {
  return (
    <div>
      <div className="flex border-t border-gray-800 py-2 px-3">
        <span className="text-white">Username</span>
        <span className="ml-auto text-white">User Email</span>
      </div>
      {Object.keys(user).map((item) => {
        return (
          <Link key={user[item]._id} href={`/profile/${user[item].name}`}>
            <div
              key={user[item]._id}
              className="flex border-t border-gray-800 py-2 hover:bg-gray-800 px-3 hover:cursor-pointer mb-4"
            >
              <span className="text-gray-500">{user[item].name}</span>
              <span className="ml-auto text-gray-500">{user[item].email}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
