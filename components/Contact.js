import React, { useMemo } from "react";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Newsletter from "./Layout/Newsletter";
import ContactUs from "./Layout/ContactUs";

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
                  <Newsletter details={details} />

                  <ContactUs />
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
