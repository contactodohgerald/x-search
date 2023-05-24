import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import VerifyEmail from "../components/VerifyEmail";
import { injectStyle } from "react-toastify/dist/inject-style";

export default function forgetPassword() {
  useEffect(() => {
    injectStyle()
  })
  return (
    <>
        <SeoHead title='X-Search : Forget Password' />
        <Layout>
           <VerifyEmail/>
        </Layout>
    </>
  )
}
