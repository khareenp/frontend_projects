import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="fixed flex w-full h-20 px-6 justify-between items-center bg-black text-gray-300">
      <h1 className="text-4xl font-signature ">KFP</h1>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && ( //if and only iff nav is true
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
