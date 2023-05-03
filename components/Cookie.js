import React, { useMemo } from "react";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline";

const Cookie = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
     <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="contact">
        <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full my-16">
            <ScrollAnimationWrapper>
              <motion.h5 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">But first, cookies 🍪</motion.h5>
              <motion.p>We use essential cookies to make Canva work. We’d like to use other cookies to improve and personalise your visit, tailor ads you see from us on Canva and partner sites, and to analyse our website’s performance, but only if you accept. Learn more about your choices in our cookie policy.</motion.p>
              <motion.div className="flex ">
                <ButtonOutline className="text-3xl sm:text-2xl lg:text-2xl font-medium leading-relaxed">Accept All Cookies</ButtonOutline>
                <ButtonPrimary className="text-3xl sm:text-2xl lg:text-2xl font-medium leading-relaxed">Manage Cookies</ButtonPrimary>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookie;
