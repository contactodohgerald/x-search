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
import { setSession } from "../config/services";

import { injectStyle } from "react-toastify/dist/inject-style";
import { siteDetail } from "../config/sitedetails";

export default function Home() {
  const [sitedetails, setSitedetails] = useState(null);
  const sitedetail = siteDetail

  useEffect(async () => {
    injectStyle();

    setSession("sitedetails", JSON.stringify(sitedetail));

    setSitedetails(siteDetail);
  }, []);

  return (
    <>
      <SeoHead title="X-Search : Revolutionizing Cover Letter Generation with AI" />
      <Layout>
        <About details={sitedetails} />
        <Feature />
        <Tryout details={sitedetails} />
        <Pricing details={sitedetails} />
        <FAQ details={sitedetails} />
        <Contact details={sitedetails} />
      </Layout>
    </>
  );
}
