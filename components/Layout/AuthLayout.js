import React from "react";
import Footer from "./Footer";
import AuthHeader from "./AuthHeader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthHeader />
      {children}
      <ToastContainer />
      <Footer />
    </>
  );
};

export default AuthLayout;
