// src/components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    setIsDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <div className="bg-white dark:bg-gray-900 px-10 sticky top-0 z-40 h-[15vh] hidden lg:flex items-center justify-between shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src={
              isDarkMode
                ? "/assets/img/Kshan_tech_soft_menu_white.png"
                : "./assets/img/kts-logo.png"
            }
            alt="Logo"
            className="w-56 h-auto"
          />
        </Link>
        <div className="flex space-x-6">
          <NavItem href="/" label="Home" active={currentPath === "/"} />
          <NavItem
            href="/services"
            label="Services"
            active={currentPath === "/services"}
          />
          <NavItem href="/job" label="Job" active={currentPath === "/job"} />
          <NavItem
            href="/training"
            label="Training"
            active={currentPath === "/training"}
          />
          <NavItem
            href="/events"
            label="Events"
            active={currentPath === "/events"}
          />
          <NavItem
            href="/contact-us"
            label="Contact"
            active={currentPath === "/contact-us"}
          />
          <NavItem
            href="/about-us"
            label="About"
            active={currentPath === "/about-us"}
          />
        </div>
        <div className="flex space-x-2">
          <Link
            href={"/signup"}
            className="text-black dark:text-white text-base font-normal py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Sign up
          </Link>
          <Link
            href={"/signin"}
            className="bg-blue-500 dark:bg-gray-700 rounded-lg text-white text-base font-normal py-2 px-4 hover:bg-gray-800 dark:hover:bg-gray-600"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="flex items-center justify-between p-4 border-b sticky top-0 z-50 w-full bg-white dark:bg-black border-gray-200 lg:hidden dark:border-gray-700">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src={
              isDarkMode
                ? "/assets/img/Kshan_tech_soft_menu_white.png"
                : "./assets/img/kts-logo.png"
            }
            alt="Logo"
            className="w-56 h-auto"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="fixed right-4 z-50 text-gray-600 dark:text-white focus:outline-none lg:hidden"
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-black dark:text-white transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-40`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Close Icon for Mobile */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" className="flex items-center space-x-2 pr-8">
              <img
                src={
                  isDarkMode
                    ? "/assets/img/Kshan_tech_soft_menu_white.png"
                    : "./assets/img/kts-logo.png"
                }
                alt="Logo"
                className="w-56 h-auto"
              />
            </Link>
          </div>

          {/* Menu Links for Mobile */}
          <div className="flex-grow p-4 space-y-2">
            <NavItem href="/" label="Home" active={currentPath === "/"} />
            <NavItem
              href="/services"
              label="Services"
              active={currentPath === "/services"}
            />
            <NavItem href="/job" label="Job" active={currentPath === "/job"} />
            <NavItem
              href="/training"
              label="Training"
              active={currentPath === "/training"}
            />
            <NavItem
              href="/events"
              label="Events"
              active={currentPath === "/events"}
            />
            <NavItem
              href="/contact-us"
              label="Contact"
              active={currentPath === "/contact-us"}
            />
            <NavItem
              href="/about-us"
              label="About"
              active={currentPath === "/about-us"}
            />
          </div>

          {/* Sign Up and Sign In Buttons for Mobile */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href={"/signup"}
              className="block text-black dark:text-white w-full text-base text-center font-normal py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 mb-2"
            >
              Sign up
            </Link>
            <Link
              href={"/signin"}
              className="block bg-blue-500 dark:bg-gray-700 rounded-lg w-full cursor-pointer text-white text-base text-center font-normal py-2 hover:bg-gray-800 dark:hover:bg-gray-600"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, active }) => {
  return (
    <Link
      href={href}
      className={`text-blue-500 dark:text-white text-center text-base font-normal px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 block ${
        active ? "border-b-2 border-blue-500" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
