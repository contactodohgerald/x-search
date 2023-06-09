import React, { useState } from "react";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Textarea from "./misc/Textarea";
import Loader from "./Layout/Loader";
import { copy, download } from "../config/services";
import post_request from "../config/post.request";
import CopyIcon from "./misc/CopyIcon";
import DownloadIcon from "./misc/DownloadIcon";

const Generate = () => {
  const [loaded, setLoaded] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

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

  const generateCoverLetter = async (e) => {
    try {
      setLoaded(true);
      e.preventDefault();

      const queryData = await schema.validate(formData);

      await post_request
        .authSearch(queryData)
        .then((res) => {
          toast.success(res.data.message);
          setQuestion(res.data.data.query);
          setAnswer("")
          setAnswer(res.data.data.answer);
          setFormData({
            query: "",
          });
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => setLoaded(false));
    } catch (err) {
      setLoaded(false);
      toast.error(err.errors[0]);
    }
  };

  const copyPrompt = () => {
    const response = copy(answer)
    if(response){
      toast.success("copied!");   
    }
  };

  const downloadPrompt = () => {
    const response = download(answer)
    if(response){
      toast.success("downloaded!");   
    }
  };

  return (
    <>
      <div className="bg-orange-100 to-white-500 w-full py-14" id="_generate">
        <div
          className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center"
          style={{
            backgroundImage: "url('/assets/used/register_bg.png')",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col w-full my-16">
            <ScrollAnimationWrapper>
              <motion.div className="antialiased max-w-6xl mx-auto my-12 bg-gray-300 ">
                <div className="relative block md:flex items-center">
                  <div className="w-full md:w-1/2 relative z-1 bg-gray-500 rounded shadow-lg overflow-hidden">
                    <div className="flex-auto px-5 lg:px-5 py-10 ">
                      <form onSubmit={generateCoverLetter}>
                        <Textarea
                          name="query"
                          value={formData.query}
                          onChange={handleChange}
                          rows="1"
                          placeholder="E.g `write a cover letter for a customer service officer position."
                        />
                        <div className="text-center mt-6">
                          {loaded ?  <Loader type="button" /> : 
                            <ButtonPrimary>
                              <span>Generate </span>
                              <span className="font-medium text-gray-700 ml-2">
                                ➔
                              </span>
                            </ButtonPrimary>
                          }
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="w-full md:w-1/1 z-0  ">
                    <div className="text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                      <div className="text-lg font-medium uppercase p-8 border-b border-blue-800 tracking-wide">
                        Your Cover Letter
                      </div>
                      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-left italic">
                          <strong>
                            ~ {question ? "Ok, Here is a " + question : ""}
                          </strong>
                        </div>
                        <div className="static">
                          <Textarea
                            name="result"
                            rows="20"
                            defaultValue={answer}
                          />
                          <div className="absolute lg:top-40 top-80 right-12 flex space-x-2">
                            <CopyIcon onClick={copyPrompt} />
                            <DownloadIcon onClick={downloadPrompt} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generate;
