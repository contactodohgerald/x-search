import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { object, string, ref } from "yup";
import { motion } from "framer-motion";

import services from "../config/services";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import Label from "./misc/Label";
import Input from "./misc/Input";
import Loader from "./Layout/Loader";
import ButtonPrimary from "./misc/ButtonPrimary";
import post_request from "../config/post.request";

const Settings = () => {
  const [loaded, setLoaded] = useState(false);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const user_id = services.getSession('token');
  const [formData, setFormData] = useState({
    cur_password: "",
    password: "",
    c_password: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  let schema = object({
    cur_password: string().required("Current Password is required"),
    password: string().required("Password is required"),
    c_password: string().oneOf([ref("password"), null], "Passwords must match"),
  });

  const updateUserPassword = async (e) => {
    try {
      setLoaded(true);
      e.preventDefault();
      const queryData = await schema.validate(formData);
      await post_request.updatePassword(queryData)
      .then((res) => {
        toast.success(res.data.message);
        setFormData({
          cur_password: "",
          password: "",
          c_password: "",
        })
      })
      .catch((err) => {
        if(err.message == 'Network Error'){
            toast.error(err.message)
        }else if(err.response.statusText == 'Unauthorized'){
            services.clearSession();
            toast.success('Please login to continue')
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
        }else{
          toast.error(err.response.data.message)
        }
      })
    .finally(() => setLoaded(false));
    } catch (err) {
      setLoaded(false);
      toast.error(err.errors[0]);
    }
  }

  return (
    <>
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="leading-normal sm: mx-auto bg-orange-100 mt-0 px-8 xl:px-16 mx-auto"
          id="settings"
        >
          <div className="lg:flex items-center justify-between">
            <div
              className="xl:w-1/2 lg:w-7/12 w-full lg:mt-0 mt-12 md:px-8"
              role="list"
            >
              <div
                role="listitem"
                className="bg-white cursor-pointer shadow rounded-lg px-5 py-2 z-30"
              >
                <div className="items-center justify-between">
                  <h5 className="text-1xl font-semibold leading-6">{user_id ? user_id.data.name : ""}</h5>
                  <p className="text-base leading-6">name</p>
                </div>
              </div>
              <div
                role="listitem"
                className="bg-white cursor-pointer shadow rounded-lg px-5 py-2 z-30 mt-7"
              >
                <div className="w-2.5 h-auto bg-orange-500 rounded-tl-md rounded-bl-md"></div>
                <div className="items-center justify-between">
                  <h5 className="text-1xl font-semibold leading-6">{user_id ? user_id.data.email : ""}</h5>
                  <p className="text-base leading-6">email</p>
                </div>
              </div>
              <div
                role="listitem"
                className="bg-white cursor-pointer shadow rounded-lg px-5 py-2 z-30 mt-7"
              >
                <div className="items-center justify-between">
                  <h5 className="text-1xl font-semibold leading-6">{user_id ? user_id.data.username : ""}</h5>
                  <p className="text-base leading-6">username</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <p className=" font-bold leading-4 text-gray-600 mt-5">Update Password</p>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-10">
                {loaded ? ( 
                    <Loader/>
                ) : (
                    <form onSubmit={updateUserPassword}>
                      <div className="relative w-full mb-3">
                          <Label for="cur_password">Current Password</Label>
                          <Input
                          type="password"
                          name="cur_password"
                          value={formData.cur_password}
                          onChange={handleChange}
                          placeholder="Current Password"
                          id="cur_password"
                          />
                      </div>
                      <div className="relative w-full mb-3">
                          <Label for="password">New Password</Label>
                          <Input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="New Password"
                          id="password"
                          />
                      </div>
                      <div className="relative w-full mb-3">
                          <Label for="c_password">Confirm Password</Label>
                          <Input
                          type="password"
                          name="c_password"
                          value={formData.c_password}
                          onChange={handleChange}
                          placeholder="Confirm Password"
                          id="c_password"
                          />
                      </div>
                      <div className="text-center mt-6">
                          <ButtonPrimary>Update Password</ButtonPrimary>
                      </div>
                    </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
};

export default Settings;
