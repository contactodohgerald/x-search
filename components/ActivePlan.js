import React, { useMemo } from "react";
import { object, string } from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";

import ButtonPrimary from "./misc/ButtonPrimary";
import Textarea from "./misc/Textarea";
import Loader from "./Layout/Loader";
import api_urls from "../config/urls";
import services from "../config/services";
import ButtonOutline from "./misc/ButtonOutline";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

const ActivePlan = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
        <ScrollAnimationWrapper>
            <motion.div  variants={scrollAnimation} class="bg-gradient-to-b" id="subscriptions">
                <div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
                    <div class="mt-0 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
                        <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                            <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                            <div class="relative p-6 space-y-6 lg:p-8">
                                <h3 class="text-2xl text-gray-600 font-semibold text-center">Basic Plan</h3>
                                <div>
                                    <div class="relative flex justify-around">
                                        <div class="flex items-end">
                                            <span class="text-6xl text-gray-800 font-bold leading-0">35</span>
                                            <div class="pb-2">
                                                <span class="block text-xl text-purple-500 font-bold">NGN</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ButtonOutline>
                                    <span>Update Plan </span>
                                    <span className="font-medium text-gray-700 ml-2">➔</span>
                                </ButtonOutline>
                            </div>
                        </div>

                        <div class="relative group md:w-6/12 lg:w-7/12">
                            <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105">
                            </div>
                            <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
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
                                        Number of Cover letter <strong>10</strong>
                                    </li>
                                </ul>
                                <hr/>
                                <h3 class="text-2xl text-gray-600 font-semibold mt-5">Payment</h3>
                                <p class="text-gray-700">Your last subscription was on the <strong>23/423/20</strong>, and the remaining tier is <strong>2</strong> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </ScrollAnimationWrapper>
    </>
  );
};

export default ActivePlan;
