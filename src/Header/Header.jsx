import { NavLink } from "react-router-dom";

export const Header = () => {
  const activeIs = ({ isActive }) =>
    isActive
      ? "px-1 xl:px-4 active:bg-transparent font-WorkSans text-green-500 font-semibold text-base xl:text-lg border-green-500 border focus:text-green-500 focus:bg-transparent focus:hover:bg-base-200 hover:bg-base-200 active:!bg-transparent"
      : "px-1 xl:px-4 active:!bg-transparent font-WorkSans text-Primary dark:text-Primary-dark text-opacity-80 font-semibold text-base xl:text-lg border border-transparent";
  const links = (
    <>
      <li>
        <NavLink className={activeIs} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={activeIs} to="/listed">
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink className={activeIs} to="/read">
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink className={activeIs} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={activeIs} to="/contact">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-base-400 ">
        <div className="navbar max-w-[1202px] mx-auto px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
                <div className="block sm:hidden">
                  <a className="btn font-WorkSans text-white text-opacity-100 font-semibold text-base border border-transparent bg-green-500 w-full hover:bg-green-500 my-2">
                    Sing In
                  </a>
                  <a className="btn font-WorkSans text-white text-opacity-100 font-semibold text-base border border-transparent bg-info w-full hover:bg-info">
                    Sing Up
                  </a>
                </div>
              </ul>
            </div>
            <a className="btn btn-ghost font-WorkSans text-3xl text-Primary dark:text-Primary-dark font-bold px-0">
              Book Vibe
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 py-0 gap-2">{links}</ul>
          </div>
          <div className="navbar-end gap-4 hidden sm:flex">
            <a className="btn font-WorkSans text-white text-opacity-100 font-semibold text-lg border border-transparent bg-green-500 px-5 hover:bg-green-500">
              Sing In
            </a>
            <a className="btn font-WorkSans text-white text-opacity-100 font-semibold text-lg border border-transparent bg-info px-5 hover:bg-info">
              Sing Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
