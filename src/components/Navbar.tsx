import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
    <div className="px-4 py-10 bg-amber-50 flex space-x-96">
      <Link to="/">
        <header className="text-black text-4xl cursor-pointer">#VANLIFE</header>
      </Link>
      <ul className="text-gray-500 font-semibold flex space-x-8">
        <li><Link to='/Host'>Host</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/vans'>Vans</Link></li>
      </ul>
    </div>
    </div>
      
  );
};

export default Navbar;
