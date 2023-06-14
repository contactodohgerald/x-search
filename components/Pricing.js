import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Loader from "./Layout/Loader";
import { clearSession, getSession } from "../config/services";
import get_request from "../config/get.request";
import post_request from "../config/post.request";
import { toast } from "react-toastify";

const Pricing = ({ details }) => {
  const [plans, setPlans] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    setLoaded(true)
    await get_request.getSitePlans()
    .then((res) => {
        setPlans(res.data.data);
      })
      .catch((err) => {
        if(err.message = 'Network Error'){
          toast.error(err.message)
        }else{
          toast.error(err.response.data.message)
        }
      })
      .finally(() => setLoaded(false));
  }, []);

  const processSubscription = async (uuid) => {
    const isLoggedIn = getSession('isloggedin');
    if (isLoggedIn) {
      setLoaded(true)
      await post_request.makePayment(uuid, 'flutterwave')
        .then((res) => {
          window.location.href = res.data.data.link;
        })
        .catch((err) => {
          if(err.response.statusText == 'Unauthorized'){
            clearSession();
          }
          toast.error(err.response.data.message)
        })
      .finally(() => setLoaded(false));
    } else {
      toast.warning("Login to continue!");
    }
  }

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
              Achieve more with <strong>{details ? details.name : 'N/A'}</strong> Pro
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Choose the plan that is best for you and explore it happily.
            </motion.p>
          </ScrollAnimationWrapper>
        
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
              {plans.map((plan, index) => (
                <div key={index} className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl  xl:px-20">
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/used/Standard.png"
                      width={145}
                      height={165}
                      alt={plan.name}
                    />
                  </div>
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  {plan.name} Plan
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
                      Number of Request Tier <strong>{plan.total_request}</strong>
                    </li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      {plan.amount} NGN
                    </p>
                    {loaded ?  <Loader type="button" />  : 
                      <ButtonOutline onClick={() => processSubscription(plan._id)}>Subscribe</ButtonOutline>
                    }
                  </div>
                </div>
              ) )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
