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
  console.log("isMenuOpen:", isMenuOpen);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="relative flex  justify-center p-4 md:mb-8 md:mt-4 md:justify-between  md:mx-[230px]">
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
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
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
            className="text-[#A9A9A9] text-lg font-figtree font-semibold hover:text-white transition duration-300"
            style={{
              fontFamily: "var(--font-figtree)",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-10 right-4 mt-2 w-32 bg-black bg-opacity-90 rounded-md p-4 shadow-lg lg:hidden z-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block  py-2 text-[#A9A9A9]  font-figtree font-semibold "
              style={{
                fontFamily: "var(--font-figtree)",
              }}
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
