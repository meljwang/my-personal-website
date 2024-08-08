import React from "react";
import { Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 mt-7">
      <div className="w-full px-4">
        <Navbar
          fluid
          rounded
          className="bg-black p-3 rounded-full w-full max-w-lg mx-auto"
        >
          <Navbar.Brand
            href="https://flowbite-react.com"
            className="text-white"
          >
          </Navbar.Brand>
          <div className="flex mx-auto">
            <ul className="flex flex-row items-center justify-center w-full space-x-4 text-sm font-medium">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="block py-2 px-4 text-white hover:bg-gray-700 rounded-full bg-transparent hover:text-gray-300"
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/aboutme")}
                  className="block py-2 px-4 text-white hover:bg-gray-700 rounded-full bg-transparent hover:text-gray-300"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/projects")}
                  className="block py-2 px-4 text-white hover:bg-gray-700 rounded-full bg-transparent hover:text-gray-300"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
