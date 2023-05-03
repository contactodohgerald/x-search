import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link } from "react-scroll";

const About = ({ details }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Build a professional cover letter with{" "}
              <strong>{details.name}</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Our cover letter generator replaces difficult creative writing
              with a quick and accessible tool. Increase your interview chances,
              stand out from the crowd, apply for formal jobs and most
              importantly - let your professional story shine and resonate with
              employers!
            </p>
            <ButtonOutline>
              <Link
                to="tryout"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Try It Out!
              </Link>
            </ButtonOutline>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/used/cover-letter.png"
                alt={details.name}
                quality={100}
                width={612}
                height={500}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default About;
