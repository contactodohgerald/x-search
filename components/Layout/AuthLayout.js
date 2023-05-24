import React from "react";
import Footer from "./Footer";
import AuthHeader from "./AuthHeader";

const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthHeader />
      {children}
      <Footer />
    </>
  );
};

export default AuthLayout;
