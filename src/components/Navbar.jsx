import React, { useState } from "react";
import { Link } from "react-router-dom";
import { github, linkedin, menu, close } from "../assets/exportAssets";

function Navbar() {
  const [toggleMenuOpen, setToggleMenuOpen] = useState(false);
  const handleClick = () => setToggleMenuOpen(!toggleMenuOpen);

  return (
    <div className="bg-white drop-shadow-lg relative">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center w-full h-full mx-auto p-3">
        <div>
          <Link to="/">
            <h1 className="ml-3 w-full">SweetTigerTea's DevBlog</h1>
          </Link>
        </div>

        {/* <div className="flex items-center">
          <ul className="hidden md:flex">
            <li className="mr-2">Categories</li>
            <li>Search</li>
          </ul>
        </div> */}

        <div className="hidden md:flex mr-3">
        <a href="https://github.com/sweettigertea">
            <img src={github} alt="Github Logo" className="h-[30px] p-1" />
          </a>
          <a href="https://www.linkedin.com/in/sweettigertea/">
            <img src={linkedin} alt="LinkedIn Logo" className="h-[30px] p-1" />
          </a>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img
            src={!toggleMenuOpen ? menu : close}
            alt="Menu Icon"
            className="h-[25px]"
          />
        </div>
      </div>
      <div>
        <ul
          className= { 
            toggleMenuOpen
              ? "absolute flex space-y-2 flex-col items-end bg-white w-full px-4 md:hidden"
              : "hidden"
          }
        >
          <li>Categories</li>
          <li>Search</li>
          <a href="https://github.com/sweettigertea">
            <img src={github} alt="Github Logo" className="h-[30px] p-1" />
          </a>
          <a href="https://www.linkedin.com/in/sweettigertea/">
            <img src={linkedin} alt="LinkedIn Logo" className="h-[30px] p-1" />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
