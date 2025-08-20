import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="px-4 py-10 bg-amber-50 flex space-x-96">
        <Link to="/">
          <header className="text-black text-4xl cursor-pointer">
            #VANLIFE
          </header>
        </Link>
        <ul className="text-gray-500 font-semibold flex space-x-8">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black font-bold" : ""
              }
              to="/Host"
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black font-bold" : ""
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black font-bold" : ""
              }
              to="/vans"
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
