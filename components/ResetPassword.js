import React, { useState } from "react";
import Link from "next/link";
import { object, string, ref } from "yup";
import { toast } from "react-toastify";
import axios from "axios";

import api_urls from "../config/urls";
import ButtonPrimary from "./misc/ButtonPrimary";
import Label from "./misc/Label";
import Input from "../components/misc/Input";
import Loader from "./Layout/Loader";

function ResetPassword() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    code: "",
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
    code: string().required("Code is required"),
    password: string().required("Password is required"),
    c_password: string().oneOf([ref("password"), null], "Passwords must match"),
  });

  const resetUserPassword = async (e) => {
    try {
      setLoaded(true);
      e.preventDefault();
      const userData = await schema.validate(formData);
      await axios
        .post(api_urls.reset_password, userData)
        .then((response) => {
          const res = response.data;
          if (res.status == "success") {
            toast.success(res.message);
            setTimeout(() => {
              window.location.href = "/login";
            }, 4000);
          } else {
            toast.error(res.message);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => setLoaded(false));
    } catch (err) {
      setLoaded(false);
      setErrorMessage(err.errors);
    }
  };

  return (
    <>
      <section className="w-full h-full auth-backgound bg-orange-100 py-14">
        <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            backgroundImage: "url('/assets/used/register_bg.png')",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4 mt-20">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">Reset Password</h6>
                    {errorMessage[0] && (
                      <p className="text-orange-500"> {errorMessage[0]} </p>
                    )}
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                {loaded ? (
                  <Loader />
                ) : (
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={resetUserPassword}>
                    <div className="relative w-full mb-3">
                        <Label for="code">Code</Label>
                        <Input
                          type="text"
                          name="code"
                          value={formData.code}
                          onChange={handleChange}
                          placeholder="Code"
                          id="code"
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
                        <ButtonPrimary>Reset Password</ButtonPrimary>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              <div className="relative flex flex-wrap mt-6">
                <div className="w-full">
                  <Link href={"/register"} className="text-gray-300">
                    <small style={{ cursor: "pointer" }}>
                      {" "}
                      Don't have an account yet? Create one
                    </small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;
