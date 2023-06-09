import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import moment from "moment/moment";

import ButtonOutline from "./misc/ButtonOutline";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import get_request from "../config/get.request";
import { clearSession } from "../config/services";

const ActivePlan = () => {
    const [plans, setPlans] = useState(null);
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const [userTrack, setUserTrack] = useState(0);

    const getUserCurrentPlan = async () => {
        await get_request.getUserActivePlan()
        .then((res) => {
            setPlans(res.data.data)
        })
        .catch((err) => {
            if(err.message == 'Network Error'){
                toast.error(err.message)
            }else if(err.response.statusText == 'Unauthorized'){
                clearSession();
                toast.success('Please login to continue')
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000);
            }else{
                toast.error(err.response.data.message)
            }
        })
    }

    const getUserFreeTeir = async () => {
        await get_request.getUserSearchTrack()
        .then((res) => {
          setUserTrack(res.data.data)
        })
        .catch((err) => {
            console.error(err.response.data.message)
        })
    }

    useEffect(async () => {
        await getUserCurrentPlan()  
        await getUserFreeTeir()    
    }, []);

    return (
        <>
            <ScrollAnimationWrapper>
                <motion.div  variants={scrollAnimation} className="bg-gradient-to-b" id="subscriptions">
                    <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
                        {plans ? (
                            <div className="mt-0 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
                                <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                                    <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                                    <div className="relative p-6 space-y-6 lg:p-8">
                                        <h3 className="text-2xl text-gray-600 font-semibold text-center">
                                            {plans ? plans.active_plan.name : ""} Plan
                                        </h3>
                                        <div>
                                            <div className="relative flex justify-around">
                                                <div className="flex items-end">
                                                    <span className="text-6xl text-gray-800 font-bold leading-0">
                                                        {plans ? plans.active_plan.amount : ""} 
                                                    </span>
                                                    <div className="pb-2">
                                                        <span className="block text-xl text-purple-500 font-bold">NGN</span>
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

                                <div className="relative group md:w-6/12 lg:w-7/12">
                                    <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105">
                                    </div>
                                    <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
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
                                                Number of Request Tier <strong>{plans ? plans.active_plan.total_request : ""} </strong>
                                            </li>
                                        </ul>
                                        <hr/>
                                        <h3 className="text-2xl text-gray-600 font-semibold mt-5">Payment</h3>
                                        <p className="text-gray-700">Your last subscription was on the <strong>{moment(plans.active_plan.created_at).format("DD/MM/YYYY")}</strong>, and your remaining tier is <strong>{parseInt(plans.active_plan.total_request) - parseInt(userTrack != 0 ? userTrack.request_count : userTrack)}</strong> 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ): (
                            <div className="mt-0 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
                                <h3 className="text-2xl text-orange-500 font-semibold text-center">
                                    You do not have any active plan at the moment
                                </h3>
                            </div>
                        )}
                    </div>
                </motion.div>
            </ScrollAnimationWrapper>
        </>
    );
};

export default ActivePlan;
