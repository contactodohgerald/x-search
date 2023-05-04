import React, { useMemo } from "react";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Textarea from "./misc/Textarea";
import Input from "./misc/Input";

const Contact = ({ details }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div
        className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
        id="contact"
      >
        <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full my-16">
            <ScrollAnimationWrapper>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
              >
                We’re here to help
              </motion.h3>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div
                className="antialiased max-w-6xl mx-auto my-12 bg-gray-300 px-8"
                id="contact"
              >
                <div className="relative block md:flex items-center">
                  <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
                    <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
                      Contact Us
                    </div>
                    <motion.p>
                      Our friendly customer service team can assist you.
                    </motion.p>
                    <div className="flex justify-center mt-3">
                      <ul>
                        <li className="flex items-center">
                          <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                            <svg
                              className="w-4 h-4 icon-umbrella"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className="primary"
                                d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"
                              />
                              <path
                                className="secondary"
                                d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg ml-3">
                            {details.email}
                          </span>
                        </li>
                        <li className="flex items-center mt-3">
                          <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                            <svg
                              className="w-4 h-4 icon-shopping-bag"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className="primary"
                                d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"
                              />
                              <path
                                className="secondary"
                                d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg ml-3">
                            {details.phone}
                          </span>
                        </li>
                        <li className="flex items-center mt-3">
                          <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                            <svg
                              className="w-4 h-4 icon-pie-chart"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className="primary"
                                d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"
                              />
                              <path
                                className="secondary"
                                d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg ml-3">
                            {details.address}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 ">
                      <form>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <button
                          className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase "
                          href="#"
                        >
                          <span>Subscribe Newsletter</span>
                          <span className="font-medium text-gray-700 ml-2">➔</span>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
                    <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                      <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">
                        Send Us a Message
                      </div>
                      <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
                        Questions? Concerns? We're here to listen and respond!{" "}
                      </div>
                      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                          <Input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                          />
                          <Textarea
                            name="message"
                            rows="1"
                            placeholder="Message"
                            required
                          />
                          <div className="text-center mt-6">
                            <ButtonPrimary>
                              <span>Contact Us</span>
                              <span className="font-medium text-gray-300 ml-2">
                                ➔
                              </span>
                            </ButtonPrimary>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
