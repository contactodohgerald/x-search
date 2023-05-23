import React, { useState } from "react";
import { object, string } from "yup";
import { toast } from "react-toastify";

import Input from "../misc/Input";
import Textarea from "../misc/Textarea";
import ButtonPrimary from "../misc/ButtonPrimary";
import Loader from "./Loader";
import post_request from "../../config/post.request";

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
        await post_request.contactUs(queryData)
        .then((res) => {
            toast.success(res.data.message);
            setFormData({
                email: "",
                subject: "",
                message: "",
            });
        })
        .catch((err) => {
            toast.error(err.response.data.message)
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
                    <form onSubmit={sendContactMail}>
                        <div className="mb-3">
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                            />
                        </div>
                        <div className="mb-3">
                            <Textarea
                                name="message"
                                rows="1"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                            />
                        </div>
                        <div className="text-center mt-6">
                        {loaded ?  <Loader type="button" /> :
                            <ButtonPrimary>
                            <span>Contact Us</span>
                            <span className="font-medium text-gray-700 ml-2">➔</span>
                            </ButtonPrimary>
                        }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
