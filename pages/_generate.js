import Generate from "../components/Generate";
import ActivePlan from "../components/ActivePlan";
import History from "../components/History";
import Settings from "../components/Settings";
import AuthLayout from "../components/Layout/AuthLayout";
import SeoHead from "../components/SeoHead";

import { injectStyle } from "react-toastify/dist/inject-style";
import { useEffect } from "react";

export default function generate() {
  useEffect(() => {
    injectStyle();
  })

  return (
    <>
      <SeoHead title="X-Search : Generate Cover Letter" />
      <AuthLayout>
          <Generate />
          <ActivePlan />
          <History />
          <Settings />
      </AuthLayout>
    </>
  );
}
