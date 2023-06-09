import Generate from "../components/Generate";
import ActivePlan from "../components/ActivePlan";
import History from "../components/History";
import Settings from "../components/Settings";
import AuthLayout from "../components/Layout/AuthLayout";
import SeoHead from "../components/SeoHead";

import { injectStyle } from "react-toastify/dist/inject-style";
import { useEffect, useState } from "react";
import { getSession } from "../config/services";
import Pricing from "../components/Pricing";

export default function generate() {
  const [sitedetails, setSitedetails] = useState(null)

  useEffect(() => {
    injectStyle();

    const _details =  getSession('sitedetails')
    setSitedetails(_details)
  })

  return (
    <>
      <SeoHead title="X-Search : Revolutionizing Cover Letter Generation with AI" />
      <AuthLayout>
          <Generate />
          <ActivePlan />
          <Pricing details={sitedetails} />
          <History />
          <Settings />
      </AuthLayout>
    </>
  );
}
