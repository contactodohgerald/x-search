import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Tryout from "../components/Tryout";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import get_request from "../config/get.request";
import services from "../config/services";

import { injectStyle } from "react-toastify/dist/inject-style";

export default function Home() {
  const [sitedetails, setSitedetails] = useState(null)

  useEffect(async () => {
    injectStyle();
    
    await get_request.getSiteDetails()
      .then((res) => { 
          services.setSession("sitedetails", JSON.stringify(res.data.data));
          const _details =  services.getSession('sitedetails')
          setSitedetails(_details)
      })
      .catch((err) => {
        if(err.message = 'Network Error'){
          toast.error(err.message)
        }else{
          toast.error(err.response.data.message)
        }
      })
  }, []);

  return (
    <>
      <SeoHead title={sitedetails ? sitedetails.name : ""} />
      <Layout>
        <About details={sitedetails} />
        <Feature />
        <Tryout details={sitedetails} />
        <Pricing details={sitedetails} />
        <FAQ  details={sitedetails} />
        <Contact details={sitedetails} />
      </Layout>
    </>
  );
}
