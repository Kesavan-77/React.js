import { useState } from "react";
import logo from "../../public/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [status, setStatus] = useState("login");

  const getButtonClass = (status) =>
    `py-2 px-5 ${
      status === "login"
        ? "bg-blue-500 hover:bg-blue-700 focus:ring-blue-400"
        : "bg-red-500 hover:bg-red-700 focus:ring-red-400"
    } text-white font-semibold rounded-full shadow-md focus:outline-none focus:ring focus:ring-opacity-75`;

  return (
    <div className="flex flex-wrap justify-between items-center p-2 px-4 md:px-20 bg-neutral-50 shadow-md sticky top-0">
      <div className="w-24">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="header-items">
        <ul className="flex items-center gap-4 md:gap-12 text-sm md:text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>
            <button
              onClick={() =>
                setStatus((prev) => (prev === "login" ? "logout" : "login"))
              }
              className={getButtonClass(status)}
            >
              {status}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
