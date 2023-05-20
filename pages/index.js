import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Tryout from "../components/Tryout";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import { useEffect, useState } from "react";
import api_urls from "../config/urls";
import axios from "axios";
import Loader from "../components/Layout/Loader";
import { toast } from "react-toastify";
import get_request from "../config/get.request";

export default function Home() {
  const [sitedetails, setSitedetails] = useState(null)

  useEffect(async () => {
      await get_request.getSiteDetails()
        .then((res) => {
            setSitedetails(res.data.data)
        })
        .catch((error) => {
            toast.error(error.message);
        })
  }, []);

  return (
    <>
      <SeoHead title={sitedetails ? sitedetails.name : ""} />
      <Layout>
        {sitedetails ? (
          <>
            <About details={sitedetails} />
            <Feature />
            <Tryout details={sitedetails} />
            <Pricing details={sitedetails} />
            <FAQ  details={sitedetails} />
            <Contact details={sitedetails} />
          </>
        ):(
          <Loader/>
        )}
      </Layout>
    </>
  );
}
