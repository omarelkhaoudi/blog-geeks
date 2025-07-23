import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-[#002f5f]">HackaDeur Blog</h2>
      <ul className="flex space-x-6 text-[#002f5f] font-medium items-center">
        <li>
          <Link
            to="/"
            className="hover:text-[#014080] transition duration-200"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="bg-[#002f5f] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#014080] transition duration-200"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;