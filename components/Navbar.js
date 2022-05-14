import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-base-300 shadow-lg sticky top-0">
        <div className="navbar bg-base-300 sticky top-0 container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-72 bg-base-300 shadow-lg font-montserrat font-semibold"
              >
                <li>
                  <a>Anime</a>
                </li>
                <li>
                  <a>Manga</a>
                </li>
                <li>
                  <a>Reviews</a>
                </li>
                <li>
                  <a>Lists</a>
                </li>
                <li>
                  <a>Comics</a>
                </li>
                <li>
                  <a>Gaming</a>
                </li>
                <li tabIndex="0">
                  <a>
                    More
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-base-300 shadow-lg">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">AniLog</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-montserrat font-semibold">
              <li>
                <a>Anime</a>
              </li>
              <li>
                <a>Manga</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <li>
                <a>Lists</a>
              </li>
              <li>
                <a>Comics</a>
              </li>
              <li>
                <a>Gaming</a>
              </li>
              <li tabIndex="0">
                <a>
                  More
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-300 shadow-lg">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <a className="btn">Get started</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
