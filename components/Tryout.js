import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { object, string } from "yup";
import { toast } from "react-toastify";

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Textarea from "./misc/Textarea";
import Loader from "./Layout/Loader";
import services from "../config/services";
import post_request from "../config/post.request";
import CopyIcon from "./misc/CopyIcon";
import DownloadIcon from "./misc/DownloadIcon";

const Tryout = ({details}) => {

  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [loaded, setLoaded] = useState(false);
  const [userTrack, setUserTrack] = useState(0);

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
      await post_request.tryOutNotify(queryData.query, ip_address)
        .then((res) => {
          toast.success(res.data.message);
          setQuestion(res.data.data.query)
          setAnswer("")
          setAnswer(res.data.data.answer)
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

  const getUserFreeTeir = async () => {
    const ip_address = await services.getUserIp();
    await post_request.getUserSearchTrack(ip_address)
    .then((res) => {
      setUserTrack(res.data.data)
    })
    .catch((error) => {
    
    })
  }

  useEffect(async () => {
    await getUserFreeTeir()
  }, []);

  const copyPrompt = () => {
    const response = services.copy(answer)
    if(response){
      toast.success("copied!");   
    }
  };

  const downloadPrompt = () => {
    const response = services.download(answer)
    if(response){
      toast.success("downloaded!");   
    }
  };

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
              Your First Cover Letter with <strong>{details ? details.name : 'N/A'}</strong>
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              Start landing that job interview with our cover letter generator,
             input your prompt into the search field below and our AI
              generates your cover letter
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="w-6/2 justify-center ml-auto"
              variants={scrollAnimation}
            >
            <form onSubmit={generateFreeCoverLetter}>
              <Textarea 
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="E.g `write a cover letter for a customer service officer position.'" 
                rows="1" 
              />
              <hr className="mt-3"/>
              <motion.strong>You have used ({userTrack != 0 ? userTrack.request_count : userTrack}) out of ({details ? details.free_tier : 0}) of your free tier</motion.strong>
              <hr/>
              <div className="text-center mt-6">
                {loaded ? 
                <Loader type="button"/> : 
                <ButtonPrimary>
                <span>Generate </span>
                <span className="font-medium text-gray-700 ml-2">➔</span>
              </ButtonPrimary>}
              </div>
            </form>
            </motion.div>
            {!answer ? (
              <div></div>
            ):( 
              <motion.div className="mt-5">
                <div className="text-left italic"><strong>~ {question}</strong></div>
                <div className="static">
                  <div class="absolute right-10 lg:right-60 flex space-x-2">
                    <CopyIcon onClick={copyPrompt} />
                    <DownloadIcon onClick={downloadPrompt} />
                  </div>
                  <Textarea 
                      rows="17" 
                      defaultValue={answer} 
                  />
                </div>
              </motion.div>
            )}
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Tryout;
