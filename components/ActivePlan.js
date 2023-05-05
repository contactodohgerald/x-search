import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";
import moment from "moment/moment";

import api_urls from "../config/urls";
import services from "../config/services";
import ButtonOutline from "./misc/ButtonOutline";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

const ActivePlan = () => {
    const [plans, setPlans] = useState(null);
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const user_id = services.getSession('token');

    useEffect(async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user_id.token}`
        }
        await axios
            .get(api_urls.get_user_plans, {
            headers: headers
            })
            .then((response) => {
                const res = response.data;
                setPlans(res.data);
            })
            .catch((error) => {
                toast.error(error.message);
            })
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
                                            {plans ? plans.getActivePlan.name : ""} Plan</h3>
                                        <div>
                                            <div className="relative flex justify-around">
                                                <div className="flex items-end">
                                                    <span className="text-6xl text-gray-800 font-bold leading-0">
                                                        {plans ? plans.getActivePlan.amount : ""} 
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
                                                Number of Request Tier <strong>{plans ? plans.getActivePlan.total_request : ""} </strong>
                                            </li>
                                        </ul>
                                        <hr/>
                                        <h3 className="text-2xl text-gray-600 font-semibold mt-5">Payment</h3>
                                        <p className="text-gray-700">Your last subscription was on the <strong>{plans ? moment(plans.created_at).format("DD/MM/YYYY") : ""}</strong>, and the remaining tier is <strong>{plans ? parseInt(plans.getActivePlan.total_request - plans.getSearchTrack.request_count) : ""}</strong> </p>
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
