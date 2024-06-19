// src/components/Navbar.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Import FaBars icon from react-icons/fa

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    setIsDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []); // Empty dependency array ensures useEffect runs only on mount

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-white dark:bg-gray-900 px-4`}>
      <div className="container mx-auto py-2 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo and Hamburger Icon for Mobile */}
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src={isDarkMode ? "/assets/img/Kshan_tech_soft_menu_white.png" : "./assets/img/kts-logo.png"}
              alt="Logo"
              className="w-56 h-auto my-5"
            />
          </Link>

          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-white focus:outline-none"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Menu Links */}
        <div className={`lg:flex lg:space-x-6 mt-4 lg:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <NavItem href="/" label="Home" />
            <NavItem href="/services" label="Services" />
            <NavItem href="/job" label="Job" />
            <NavItem href="/training" label="Training" />
            <NavItem href="/events" label="Events" />
            <NavItem href="/contact-us" label="Contact" />
            <NavItem href="/about-us" label="About" />
          </div>
        </div>

        {/* Sign Up and Sign In Buttons */}
        <div className="hidden lg:flex space-x-2">
          <Link href={"/signup"} className="cursor-pointer text-black dark:text-white w-28 text-base text-center font-normal py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            Sign up
          </Link>
          <Link href={"/signin"} className="bg-blue-500 dark:bg-gray-700 rounded-lg w-28 cursor-pointer text-white text-base text-center font-normal py-2 hover:bg-gray-800 dark:hover:bg-gray-600">
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
      className="text-blue-500 dark:text-white text-center text-base font-normal px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 block lg:inline-block"
    >
      {label}
    </Link>
  );
};

export default Navbar;
