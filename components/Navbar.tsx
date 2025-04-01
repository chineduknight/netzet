"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const navLinks = [
  { label: "About us", path: "/#" },
  { label: "Contact", path: "/#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="relative w-full md:mb-8">
      <div className="max-w-7xl md:px-16 lg:px-32 xl:px-[120px] flex justify-center md:justify-between p-4 mt-4 md:ml-8">
        <Logo />

        {/* Mobile Menu Toggle */}
        <div className="flex items-center lg:hidden absolute right-4">
          <button
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="text-[#A9A9A9] text-lg ml-8 font-figtree font-semibold hover:text-white transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-7 right-4 mt-2 w-32 bg-black bg-opacity-90 rounded-md p-4 shadow-lg lg:hidden z-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-[#A9A9A9] font-figtree font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
