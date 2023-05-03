import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Textarea from "./misc/Textarea";

const Tryout = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="tryout"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Create Your First Cover Letter
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              Start landing that job interview with our cover letter generator,
              type in the prompt into the input field below and let our AI
              generate your first cover letter with Us
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            style={{
              backgroundImage: "url('/assets/used/register_bg.png')",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <motion.div
              className="w-full items-end justify-center ml-auto"
              variants={scrollAnimation}
            >
              <form>
                <Textarea name="query" placeholder="Query" rows="1" required />
                <div className="text-center mt-6">
                  <ButtonPrimary>Generate Cover Letter</ButtonPrimary>
                </div>
              </form>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Tryout;
