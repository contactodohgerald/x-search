import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { object, string } from "yup";

import ButtonPrimary from "./misc/ButtonPrimary";
import Label from "./misc/Label";
import Input from "../components/misc/Input";
import Link from "next/link";
import ButtonOutline from "./misc/ButtonOutline";
import services from "../config/services";
import api_urls from "../config/urls";
import Loader from "./Layout/Loader";

function VerifyAuth() {
  const user_id = services.getUrlParams("uuid");
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    code: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  let codeSchema = object({
    code: string().required("Code is required"),
  });

  const verifyAccount = async (e) => {
    try {
      setLoaded(true);
      e.preventDefault();
      const res = await codeSchema.validate(formData);
      await axios
        .post(api_urls.verify_code, {
          ...res,
          user_id,
          type: "account-verification",
        })
        .then((response) => {
          const res = response.data;
          if (res.status == "success") {
            toast.success(res.message);
            window.location.href = "/login";
          } else {
            toast.error(res.message);
            setFormData({
              code: "",
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
  const resendVerifyCode = async () => {
    setLoaded(true);
    await axios
      .post(api_urls.resend_code, { user_id, type: "account-verification" })
      .then((response) => {
        const res = response.data;
        toast.success(res.message);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setLoaded(false));
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
                    <h6 className="text-gray-600 text-sm font-bold">
                      Verify Code
                    </h6>
                    {errorMessage && (
                      <p className="text-orange-500"> {errorMessage[0]} </p>
                    )}
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                {loaded ? (
                  <Loader />
                ) : (
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={verifyAccount}>
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
                      <div className="text-center mt-6">
                        <ButtonPrimary>Verify Code</ButtonPrimary>
                      </div>
                    </form>
                    <hr className="mt-6 border-b-1 border-gray-400 mb-3" />
                    <ButtonOutline onClick={resendVerifyCode}>
                      Didn't Code? Resend!
                    </ButtonOutline>
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

export default VerifyAuth;
