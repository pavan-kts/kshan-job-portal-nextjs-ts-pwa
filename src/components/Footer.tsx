import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue bg-[#05003B] text-white bg-[url('/assets/img/map_bg_footer.png')] bg-no-repeat bg-contain bg-center">
      <div className="container mx-auto px-4 py-10">
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
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-1">
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-1">
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
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
                  <a href="tel:+919834611797" className="hover:underline pl-4">
                    +91-9834611797
                  </a>
                  <br />
                </div>
                <div className="flex items-center mb-6">
                  <div className="h-6 w-6">
                    <IoIosMail className="h-6 w-6" />
                  </div>
                  <a
                    href="mailto:enquiry@kshantechsoft.com"
                    className="hover:underline pl-4"
                  >
                    enquiry@kshantechsoft.com
                  </a>
                </div>
              </address>
              <div className="flex my-6">
                <a href="#" className="hover:underline mx-1 h-8 w-8">
                  <FaFacebook className="h-8 w-8 text-[#0863F7]" />
                </a>
                <a href="#" className="hover:underline mx-1 h-8 w-8">
                  <AiFillTwitterCircle className="h-8 w-8 text-[#1DA1F2]" />
                </a>
                <a href="#" className="hover:underline mx-1 h-8 w-8">
                  <FaLinkedin className="h-8 w-8 text-[#0077B0]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center my-6">
        <div className="w-full text-sm text-center">
          &copy; 2024 Kshan Tech Soft Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
