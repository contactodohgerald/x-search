import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import ResetPassword from "../components/ResetPassword";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useEffect } from "react";

export default function forgetPassword() {
  useEffect(() => {
    injectStyle();
  })
  return (
    <>
        <SeoHead title='X-Search : Reset Password' />
        <Layout>
           <ResetPassword/>
        </Layout>
    </>
  )
}
