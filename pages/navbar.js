import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [searchVal, setSearchVal] = useState("");

  const toggleSearch = (e) => {
    setSearchVal(e.target.value);
  };
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <Image
                src={"/images/shubham.jpg"}
                width={40}
                height={40}
                alt={"logo"}
                className="rounded-md"
              />
              <span className="ml-3 text-xl">shubham.com</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link href={"/"}>
              <a className="mr-5 hover:text-white">Home</a>
            </Link>
            <Link href={"/codes"}>
              <a className="mr-5 hover:text-white">Code</a>
            </Link>
            <Link href={"/contact"}>
              <a className="mr-5 hover:text-white">Contact</a>
            </Link>
            <Link href={"/admin"}>
              <a className="mr-5 hover:text-white">Admin</a>
            </Link>
          </nav>
          <div className="flex">
            <form action="" method="get">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="search"
                onChange={toggleSearch}
                className="w-72 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </form>
            <div className="text-3xl mx-6 hover:text-gray-200 flex items-center">
              <Link href={"/profile/shubham shah"}>
                <a>
                  <MdAccountCircle />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
