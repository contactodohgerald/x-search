import React, { useState } from "react";
import Link from "next/link";
import { object, string } from "yup";
import { toast } from "react-toastify";
import axios from "axios";

import services from "../config/services";
import api_urls from "../config/urls";
import ButtonPrimary from "./misc/ButtonPrimary";
import Label from "./misc/Label";
import Input from "../components/misc/Input";
import Loader from "./Layout/Loader";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    credential: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  let loginSchema = object({
    credential: string().required("Credential is required"),
    password: string().required("Password is required"),
  });

  const loginUser = async (e) => {
    try {
      setLoaded(true);
      e.preventDefault();
      const userData = await loginSchema.validate(formData);
      await axios
        .post(api_urls.login, userData)
        .then((response) => {
          const res = response.data;
          if (res.status == "success") {
            if (services.storageAvailable("sessionStorage")) {
              services.setSession("token", JSON.stringify(res.data));
              services.setSession("isloggedin", true);
            }
            const message = res.message + ", welcome back " + res.data.username;
            toast.success(message);
            setTimeout(() => {
              window.location.href = "/_generate";
            }, 4000);
          } else {
            toast.error(res.message);
          }
        })
        .catch((error) => {
          const _err = error.response.data;
          if (_err.message == "Account not activated yet") {
            window.location.href = "/verify-auth?uuid=" + _err.data;
          }
          toast.error(_err.message);
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
                    <h6 className="text-gray-600 text-sm font-bold">Login</h6>
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
                    <form onSubmit={loginUser}>
                      <div className="relative w-full mb-3">
                        <Label for="credential">Email or Username</Label>
                        <Input
                          type="text"
                          name="credential"
                          value={formData.credential}
                          onChange={handleChange}
                          placeholder="Email or Username"
                          id="credential"
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
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <ButtonPrimary>Login</ButtonPrimary>
                      </div>
                    </form>
                  </div>
                )}
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

export default Login;
