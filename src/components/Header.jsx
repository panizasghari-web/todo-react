import { Link, NavLink } from "react-router";

function Header() {
  return (
    <>
      <header className="w-full h-16 bg-gray-400/40">
        <ul className="w-full md:w-[50%] h-full px-10 md:pl-14 flex items-center justify-between">
          <li className="text-2xl text-indigo-600 font-bold flex justify-center items-center">
            <Link to="/" className="flex justify-center items-center">
              ToDo App
            </Link>
          </li>
          <li className="text-[20px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 hover:text-indigo-800 transition-all duration-100 ease-linear"
                  : "text-gray-500 hover:text-gray-800 transition-all duration-100 ease-linear"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-[20px]">
            <NavLink
              to="/lists"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 hover:text-indigo-800 transition-all duration-100 ease-linear"
                  : "text-gray-500 hover:text-gray-800 transition-all duration-100 ease-linear"
              }
            >
              Lists
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
