import React, { useMemo, useState } from "react";
import { object, string } from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";

import api_urls from "../config/urls";
import services from "../config/services";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

const History = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

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
          <table class="min-w-full border-collapse block md:table">
            <thead class="block md:table-header-group">
              <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Plan
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Amount
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Desc
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Status
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Date
                </th>
              </tr>
            </thead>
            <tbody class="block md:table-row-group">
              <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Name
                  </span>
                  Jamal Rios
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    User Name
                  </span>
                  jrios1
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Email Address
                  </span>
                  jrios@icloud.com
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Mobile
                  </span>
                  582-3X2-6233
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Edit
                  </button>
                  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Name
                  </span>
                  Erwin Campbell
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    User Name
                  </span>
                  ecampbell088
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Email Address
                  </span>
                  ecampbell088@hotmail.com
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Mobile
                  </span>
                  318-685-X414
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Edit
                  </button>
                  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default History;
