import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const FAQ = ({ details }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <ScrollAnimationWrapper id="faq">
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: mx-auto"
        >
          Frequently Asked Question
        </motion.h3>
      </ScrollAnimationWrapper>
      <div class="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-orange-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">
                What are the accepted payment methods?
              </h3>
              <p className="leading-tight text-justify">
                Currently, <strong>{details.name}</strong>. allows for the
                Flutterwave as our primary payment method. But we are still in
                negotions with other company, hopefully we will reach a contract
                soon.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 shadow"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 shadow"></div>
            </div>
            <div className="bg-orange-100 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">
                How Do I Cancel, Downgrade or Delete My Account?
              </h3>
              <p className="leading-tight text-justify">
                You can cancel a <strong>{details.name}</strong>. account right
                from our website by logging into the app. To do that visit your
                dashboard page and then click the "Remove Account" option from
                the menu.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-orange-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">
                I can’t log in to my account.
              </h3>
              <p className="leading-tight text-justify">
                You can either Clear the cache in your browser or Refresh your
                page. Contact Us if it persist{" "}
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 shadow"></div>
            </div>
          </div>
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-orange-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                How can I cancel my subscription?
              </h3>
              <p class="leading-tight text-justify">
                The easiest way to cancel your subscription is to call our
                friendly support team or contact them on chat. You can also
                cancel your subscription on your own by going to your account
                dashboard's “My Plan” section.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-orange-500 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 shadow"></div>
            </div>
          </div>
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-orange-500 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 shadow"></div>
            </div>
            <div class="bg-orange-100 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">
                How can I use <strong>{details.name}</strong>. for free?
              </h3>
              <p class="leading-tight text-justify">
                <strong>{details.name}</strong>. has a few different tools you
                can use 100% for free without entering any credit card details.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
