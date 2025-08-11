import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-4 py-10 bg-amber-50 flex justify-center items-center">
      <Link to="/">
        <header className="text-black text-4xl">#VANLIFE</header>
      </Link>
      <ul className="text-gray-500 font-semibold flex space-x-3">
        <li>About</li>
        <li>Vans</li>
      </ul>
    </div>
  );
};

export default Navbar;
