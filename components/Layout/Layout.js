import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "vercel-toast/css";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Layout;
