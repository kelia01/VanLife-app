import { NavLink, Outlet } from "react-router-dom";
const HostLayout = () => {
  return (
    <>
      <ul className="text-gray-500 font-semibold flex space-x-8">
        <li className="hover:underline hover:text-black">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : ""
            }
            to="/Host"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="hover:underline hover:text-black">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : ""
            }
            to="/Host/Income"
          >
            Income
          </NavLink>
        </li>
        <li className="hover:underline hover:text-black">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : ""
            }
            to="/Host/Reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default HostLayout;
