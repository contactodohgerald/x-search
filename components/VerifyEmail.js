import React, { useState } from "react";
import Link from "next/link";
import { object, string } from "yup";
import { toast } from "react-toastify";

import ButtonPrimary from "./misc/ButtonPrimary";
import Label from "./misc/Label";
import Input from "../components/misc/Input";
import Loader from "./Layout/Loader";
import post_request from "../config/post.request";

function VerifyEmail() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    user_id: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  let schema = object({
    user_id: string().required("Credentials is required")
  });

  const sendUserToken = async (e) => {
    try {
      setLoaded(true);
      e.preventDefault();
      const userData = await schema.validate(formData);
      await post_request.resendAuthCode(userData, "reset-password")
      .then((res) => {
        toast.success(res.data.message);
        setTimeout(() => {
          window.location.href = "/reset-password";
        }, 2000);           
      })
      .catch((err) => {
        toast.error(err.response.data.message)
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
                    <h6 className="text-gray-600 text-sm font-bold">Find your <strong>X-Search</strong> account </h6>
                    {errorMessage && (
                      <p className="text-orange-500"> {errorMessage[0]} </p>
                    )}
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={sendUserToken}>
                      <div className="relative w-full mb-3">
                        <Label for="user_id">Enter the email or username associated with your account to change your password.</Label>
                        <Input
                          type="text"
                          name="user_id"
                          value={formData.user_id}
                          onChange={handleChange}
                          placeholder="Email / Username"
                          id="user_id"
                        />
                      </div>
                      <div className="text-center mt-6">
                      {loaded ?   <Loader type="button" /> : 
                        <ButtonPrimary>Next</ButtonPrimary>
                      }
                      </div>
                    </form>
                  </div>
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

export default VerifyEmail;
