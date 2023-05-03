import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { object, string, ref } from "yup";
import { toast } from "react-toastify";

import Label from "./misc/Label";
import Input from "../components/misc/Input";
import ButtonPrimary from "./misc/ButtonPrimary";
import services from "../config/services";
import api_urls from "../config/urls";
import Loader from "./Layout/Loader";

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    c_password: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  let registerSchema = object({
    fullname: string().required("Name is required"),
    email: string().email().required("Email is required"),
    username: string().required("Username is required"),
    password: string().required("Password is required"),
    c_password: string().oneOf([ref("password"), null], "Passwords must match"),
  });

  const registerUser = async (e) => {
    try {
      setLoaded(true);
      e.preventDefault();
      const user = await registerSchema.validate(formData);
      const ip_address = await services.getUserIp();
      await axios
        .post(api_urls.register, { ...user, ip_address })
        .then((response) => {
          const res = response.data;
          if (res.status == "success") {
            toast.success(res.message);
            setTimeout(() => {
              window.location.href = "/verify-auth?uuid=" + res.data.uuid;
            }, 3000);
          } else {
            toast.error(res.message);
            setFormData({
              fullname: "",
              email: "",
              username: "",
              password: "",
              c_password: "",
            });
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
          className="absolute top-0 w-full h-full"
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
                    <h6 className="text-gray-600 text-sm font-bold">
                      Register
                    </h6>
                    {errorMessage[0] && (
                      <p className="text-orange-500"> {errorMessage[0]} </p>
                    )}
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  {loaded ? (
                    <Loader />
                  ) : (
                    <form onSubmit={registerUser}>
                      <div className="relative w-full mb-3">
                        <Label for="fullname">Full Name</Label>
                        <Input
                          type="text"
                          name="fullname"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          id="fullname"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          id="email"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <Label for="username">Username</Label>
                        <Input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Username"
                          id="username"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <Label for="password">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Password"
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
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                            required
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            I agree with the{" "}
                            <Link
                              href={"terms"}
                              class="text-blue-600 hover:underline dark:text-blue-500"
                            >
                              terms and conditions
                            </Link>
                          </span>
                        </label>
                      </div>
                      <div className="text-center mt-6">
                        <ButtonPrimary>Register</ButtonPrimary>
                      </div>
                    </form>
                  )}
                </div>
              </div>
              <div className="relative flex flex-wrap mt-6">
                <div className="w-1/2">
                  <Link href={"/forget-password"} className="text-gray-300">
                    <small style={{ cursor: "pointer" }}>
                      Forgot password?
                    </small>
                  </Link>
                </div>
                <div className="w-1/2 text-right">
                  <Link href={"/register"} className="text-gray-300">
                    <small style={{ cursor: "pointer" }}>
                      Create new account
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

export default Register;
