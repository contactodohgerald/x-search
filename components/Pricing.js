import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = ({ details }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Achieve more with <strong>{details.name}</strong> Pro
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Choose the plan that is best for you and explore it happily.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Free.png"
                  width={145}
                  height={165}
                  alt="Free Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                {" "}
                Free Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Free{" "}
                </p>
                <ButtonOutline>Select</ButtonOutline>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl  xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/used/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Standard Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  24/7 Customer Support
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2">
                  Number of Cover letter <strong>5 </strong>
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  200 NGN
                </p>
                <ButtonOutline>Select</ButtonOutline>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Premium Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2">
                  Connect Anyware{" "}
                </li>
                <li className="relative check custom-list my-2">
                  Get New Features{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  $12 <span className="text-black-500">/ mo</span>
                </p>

                <ButtonOutline>Select</ButtonOutline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
