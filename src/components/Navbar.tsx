// src/components/Navbar.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Import FaBars icon from react-icons/fa

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto py-2 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="./assets/img/kts-logo.png"
            alt="Logo"
            className="w-56 h-auto my-5"
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none focus:text-gray-900"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Links */}
        <div className={`lg:flex lg:space-x-6 mt-4 lg:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <NavItem href="/" label="Home" />
            <NavItem href="/services" label="Services" />
            <NavItem href="/job" label="Job" />
            <NavItem href="/training" label="Training" />
            <NavItem href="/events" label="Events" />
            <NavItem href="/contact-us" label="Contact us" />
            <NavItem href="/about-us" label="About us" />
          </div>
        </div>

        {/* Sign Up and Sign In Buttons */}
        <div className="hidden lg:flex space-x-2">
          <Link href={"/signup"} className="cursor-pointer text-black text-base font-normal px-4 py-2 rounded-lg hover:bg-gray-200">
            Sign up
          </Link>
          <Link href={"/signin"} className="bg-blue-500 rounded-lg w-22 cursor-pointer text-white text-base font-normal px-4 py-2 hover:bg-gray-800">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="text-blue-500 text-center text-base font-normal px-2 py-2 rounded-lg hover:bg-gray-200 block lg:inline-block"
    >
      {label}
    </Link>
  );
};

export default Navbar;
