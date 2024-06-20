import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue bg-[#05003B] text-white md:bg-[url('/assets/img/map_bg_footer.png')] bg-no-repeat bg-contain bg-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <img
              src="/assets/img/Kshan_tech_soft_menu_white.png"
              alt="Kshan Tech Soft"
              className="h-20"
            />
            <p className="mt-6 max-w-md">
              Kshan (moment, in Sanskrit) is a unit of time that makes up the
              eons. Every MOMENT is vital in taking an informed business
              decision.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-bold mb-6 text-xl">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-1">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-1">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex space-x-6 mt-8 md:mt-0">
            <div className="text-left">
              <h3 className="font-bold mb-2 text-xl">ONLINE ENQUIRIES</h3>
              <address className="not-italic">
                <div className="flex items-center my-6">
                  <div className="h-6 w-6 text-red-600">
                    <FaLocationDot className="h-6 w-6" />
                  </div>
                  <p className=" pl-4">
                    103, 3rd floor, 74 Downtown, Shroff Road,
                    <br />
                    Opp Union Bank of India, Baner, Pune 411045
                  </p>
                </div>
                <div className="flex items-center mb-6">
                  <div className="h-6 w-6">
                    <FaWhatsapp className="h-6 w-6 text-[#27D045]" />
                  </div>
                  <Link href="https://wa.me/+919834611797" target="_blank" className="hover:underline pl-4">
                    +91-9834611797
                  </Link>
                  <br />
                </div>
                <div className="flex items-center mb-6">
                  <div className="h-6 w-6">
                    <IoIosMail className="h-6 w-6" />
                  </div>
                  <Link
                    href="mailto:enquiry@kshantechsoft.com"
                    className="hover:underline pl-4"
                    target="_blank"
                  >
                    enquiry@kshantechsoft.com
                  </Link>
                </div>
              </address>
              <div className="flex my-6">
                <Link href="#" className="hover:underline mx-1 h-8 w-8" target="_blank">
                  <FaFacebook className="h-7 w-7 text-[#0863F7]" />
                </Link>
                <Link href="#" className="hover:underline mx-1 h-8 w-8" target="_blank">
                  <AiFillTwitterCircle className="h-8 w-8 text-[#1DA1F2]" />
                </Link>
                <Link href="http://www.linkedin.com/groups/Kshan-Tech-Soft-4847124/about" className="hover:underline mx-1 h-7 w-7" target="_blank">
                  <FaLinkedin className="h-8 w-8 text-[#0077B0]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center py-6">
        <div className="w-full text-sm text-center">
          &copy; 2024 Kshan Tech Soft Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
