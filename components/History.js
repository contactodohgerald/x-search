import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import moment from "moment/moment";

import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import Status from "./Layout/Status";
import get_request from "../config/get.request";
import { toast } from "react-toastify";

const History = () => {
  const [trans, setTrans] = useState([]);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  useEffect(async () => {
    await get_request.getUserTransHistory()
      .then((res) => {
          setTrans(res.data.data);
      })
      .catch((err) => {
        if(err.message =='"Network Error'){
          toast.error(err.message)
        }else if(err.response.statusText == 'Bad Request'){
          toast.error(err.response.data.message)
        }
      })
  }, []);

  return (
    <>
      <div className="max-w-screen-xl  mt-0 px-8 xl:px-16 mx-auto mb-5" id="history">
        <ScrollAnimationWrapper id="faq">
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-2xl lg:text-3xl font-medium text-black-600 leading-normal w-9/12 sm: mx-auto mb-5"
          >
            History
          </motion.h3>
        </ScrollAnimationWrapper>
        <div className=" ">
          <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Description
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Amount
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Status <small>(hover over)</small>
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
                {trans.length > 0 ? trans.map((item, kyy) => (
                    <tr key={kyy} className="border border-orange-500 md:border-none block md:table-row">
                       <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                              Desc.
                            </span>
                            {item.description}
                        </td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                                Amount
                            </span>
                            {item.amount} {item.currency}
                        </td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                                Status <small>(hover over)</small>
                            </span>
                            <Status data={item.status}>{item.status.toUpperCase()}</Status>
                        </td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                                Date
                            </span>
                            {moment(item.created_at).format("DD/MM/YYYY")}
                        </td>
                    </tr>
                )) : (
                  <tr className="border border-orange-500 md:border-none block">
                    <td className="p-2 md:border block">No data available at the moment</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default History;
