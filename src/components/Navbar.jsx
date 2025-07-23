import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect to login page
    navigate('/login');
    // Optional: refresh the page to reset the state
    window.location.reload();
  };

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
        {token ? (
          <li>
            <button
              onClick={handleLogout}
              className="bg-[#002f5f] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#014080] transition duration-200"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              className="bg-[#002f5f] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#014080] transition duration-200"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;