import Generate from "../components/Generate";
import ActivePlan from "../components/ActivePlan";
import History from "../components/History";
import Settings from "../components/Settings";
import AuthLayout from "../components/Layout/AuthLayout";
import SeoHead from "../components/SeoHead";

import { injectStyle } from "react-toastify/dist/inject-style";
import { useEffect, useState } from "react";
import services from "../config/services";
import Pricing from "../components/Pricing";

export default function generate() {
  const [sitedetails, setSitedetails] = useState(null)

  useEffect(() => {
    injectStyle();

    const _details =  services.getSession('sitedetails')
    setSitedetails(_details)
  })

  return (
    <>
      <SeoHead title="X-Search : Generate Cover Letter" />
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
