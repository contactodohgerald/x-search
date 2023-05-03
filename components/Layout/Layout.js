import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
