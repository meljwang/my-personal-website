import React from "react";
import { Navbar } from "flowbite-react";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50">
      <div className="max-w-screen-md w-full mx-auto p-4">
        <Navbar fluid rounded className="bg-black p-3 rounded-full w-full">
          <Navbar.Brand
            href="https://flowbite-react.com"
            className="text-white"
          >
            {/* Add logo or brand name here if needed */}
          </Navbar.Brand>
          <div className="flex mx-auto">
            <ul className="flex flex-col items-center justify-center w-full md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <a
                  href="/home"
                  className="block py-2 px-4 text-white hover:bg-gray-700 rounded-full md:bg-transparent md:hover:text-gray-300"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutme"
                  className="block py-2 px-4 text-white hover:bg-gray-700 rounded-full md:bg-transparent md:hover:text-gray-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="projects"
                  className="block py-2 px-4 text-white hover:bg-gray-700 rounded-full md:bg-transparent md:hover:text-gray-300"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
