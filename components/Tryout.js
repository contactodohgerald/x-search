import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { object, string } from "yup";
import { toast } from "react-toastify";
import axios from "axios";

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Textarea from "./misc/Textarea";
import Loader from "./Layout/Loader";
import api_urls from "../config/urls";
import services from "../config/services";

const Tryout = ({details}) => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [loaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    query: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  let schema = object({
    query: string().required("Query is required"),
  });

  const generateFreeCoverLetter = async (e) => {
    try {
      setLoaded(true);
      e.preventDefault();
      const ip_address = await services.getUserIp();
     
      const queryData = await schema.validate(formData);
      await axios
        .post(api_urls.free_search, {...queryData, ip_address})
        .then((response) => {
          const res = response.data;
          toast.success(res.message);
          setQuestion(res.data.query)
          setAnswer(res.data.answer)
          setFormData({
            query: ""
          })
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
      .finally(() => setLoaded(false));
    } catch (err) {
      setLoaded(false);
      toast.error(err.errors[0]);
    }
  }

  return (
    <div
      className="bg-orange-100 from-white-300 to-white-500 w-full py-14"
      id="tryout"
    >
      <div
        className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center"
        style={{
          backgroundImage: "url('/assets/used/register_bg.png')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col w-full my-16 lg:px-20 sm:px-0">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-2xl font-medium text-black-600 leading-relaxed"
            >
              Your First Cover Letter with <strong>{details.name}</strong>
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              Start landing that job interview with our cover letter generator,
              type in the prompt into the search field below and let our AI
              generate your <strong>FIRST</strong> cover letter
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="w-6/2 justify-center ml-auto"
              variants={scrollAnimation}
            >
              {loaded ? (
                <div className="text-center">
                  <Loader />
                </div>
              ):( 
                <form onSubmit={generateFreeCoverLetter}>
                  <Textarea 
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="E.g `write a cover letter for a customer service officer position.'" 
                    rows="1" 
                  />
                  <div className="text-center mt-6">
                    <ButtonPrimary>
                      <span>Generate </span>
                      <span className="font-medium text-gray-700 ml-2">➔</span>
                    </ButtonPrimary>
                  </div>
                </form>
              )}
            </motion.div>
            {!answer ? (
              <div></div>
            ):( 
              <motion.div className="mt-5">
                <div className="text-left italic"><strong>~ {question}</strong></div>
                <Textarea 
                    rows="17" 
                    defaultValue={answer} 
                  />
              </motion.div>
            )}
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Tryout;
