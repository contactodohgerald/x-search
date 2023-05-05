import React, { useState } from "react";
import { object, string } from "yup";

import Input from "../misc/Input";
import ButtonOutline from "../misc/ButtonOutline";
import api_urls from "../../config/urls";
import axios from "axios";
import { toast } from "react-toastify";

import Loader from "./Loader";
const Newsletter = ({ details }) => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  let schema = object({
    email: string().required("Email is required"),
  });

  const subscribeToNewsLetter = async (e) => {
    try {
      setLoaded(true);
      e.preventDefault();
      const queryData = await schema.validate(formData);
      await axios
        .post(api_urls.news_letter, queryData)
        .then((response) => {
          const res = response.data;
          toast.success(res.message);
          setFormData({
            email: "",
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
    <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
      <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
        Contact Us
      </div>
      <p>Our friendly customer service team can assist you.</p>
      <div className="flex justify-center mt-3">
        <ul>
          <li className="flex items-center">
            <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
              <svg
                className="w-4 h-4 icon-umbrella"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="primary"
                  d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"
                />
                <path
                  className="secondary"
                  d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"
                />
              </svg>
            </div>
            <span className="text-gray-700 text-lg ml-3">{details.email}</span>
          </li>
          <li className="flex items-center mt-3">
            <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
              <svg
                className="w-4 h-4 icon-shopping-bag"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="primary"
                  d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"
                />
                <path
                  className="secondary"
                  d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"
                />
              </svg>
            </div>
            <span className="text-gray-700 text-lg ml-3">{details.phone}</span>
          </li>
          <li className="flex items-center mt-3">
            <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
              <svg
                className="w-4 h-4 icon-pie-chart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="primary"
                  d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"
                />
                <path
                  className="secondary"
                  d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"
                />
              </svg>
            </div>
            <span className="text-gray-700 text-lg ml-3">
              {details.address}
            </span>
          </li>
        </ul>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 ">
        {loaded ? (
          <Loader />
        ):(
          <form className="text-left" onSubmit={subscribeToNewsLetter}>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <ButtonOutline>
              <span>Subscribe Newsletter</span>
              <span className="font-medium text-gray-700 ml-2">➔</span>
            </ButtonOutline>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
