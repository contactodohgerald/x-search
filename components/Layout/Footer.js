import React from "react";
import Link from "next/link";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-white-300 pt-10 pb-10">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}>
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <LogoVPN className="h-8 w-auto mb-6" />
            <p className="mb-4">A cover letter ensures you stand out and increases your chances of getting a job. We make that dream closer than you can imagine</p>
            <div className="mt-6">
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Facebook className="" />
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Twitter className="" />
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Instagram className="" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2"> Our Company</span>
                <ul className="list-unstyled">
                  <li>
                    <Link href={"/"} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"> 
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">  
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">  
                      Cover Letter
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">  
                      Cover Letter Samples
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Support
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link href={"/"} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">  
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">  
                      Terms Of Service
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">  
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">  
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">© 2022 - {new Date().getFullYear()}{" "} <a href="https://contactxanta.com" target="_blank" className="text-gray-600 hover:text-gray-900">ContactXanta </a>.  All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
