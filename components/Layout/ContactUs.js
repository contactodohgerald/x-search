import React, { useState } from "react";
import axios from "axios";
import { object, string } from "yup";

import Input from "../misc/Input";
import Textarea from "../misc/Textarea";
import ButtonPrimary from "../misc/ButtonPrimary";
import api_urls from "../../config/urls";
import { toast } from "react-toastify";
import Loader from "./Loader";

const ContactUs = () => {
    const [loaded, setLoaded] = useState(false);
  
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
    const schema = object({
        email: string().email().required("Email is required"),
        subject: string().required("Subject is required"),
        message: string().required("Message is required"),
    });
  
    const sendContactMail = async (e) => {
      try {
        setLoaded(true);
        e.preventDefault();
        const queryData = await schema.validate(formData);
        await axios
          .post(api_urls.contact_us, queryData)
          .then((response) => {
            const res = response.data;
            toast.success(res.message);
            setFormData({
                email: "",
                subject: "",
                message: "",
            });
          })
          .catch((error) => {
            toast.error(error.message);
          })
          .finally(() => setLoaded(false));
      } catch (err) {
        setLoaded(false);
        toast.error(err.errors[0]);
      }
    };
    return (
        <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
            <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">
                    Send Us a Message
                </div>
                <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
                    Questions? Concerns? We're here to listen and respond!{" "}
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {loaded ? (
                        <Loader />
                    ) : (
                        <form onSubmit={sendContactMail}>
                            <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            />
                            <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            />
                            <Textarea
                            name="message"
                            rows="1"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            />
                            <div className="text-center mt-6">
                            <ButtonPrimary>
                                <span>Contact Us</span>
                                <span className="font-medium text-gray-300 ml-2">➔</span>
                            </ButtonPrimary>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
