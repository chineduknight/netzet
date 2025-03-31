"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = [
    {
      label: "About Us",
      path: "/#",
    },
    {
      label: "Contact",
      path: "/#",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex mt-[35px] xl:mx-[212px] lg:mx-[100px] md:mx-[50px]  mx-[60px] justify-between p-4 text-white relative mb-4">
      <Logo />

      {/* Hamburger for mobile and tablet */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile and tablet menu dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-black bg-opacity-90 rounded-md p-4 shadow-lg z-50">
          {navLink.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="block py-2 hover:text-gray-400 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop navigation */}
      <div className="lg:flex hidden space-x-4">
        {navLink.map((link) => (
          <Link
            key={link.label}
            href={link.path}
            className="hover:text-gray-400 transition duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
