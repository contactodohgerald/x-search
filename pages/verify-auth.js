import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import VerifyAuth from "../components/VerifyAuth";
import { injectStyle } from "react-toastify/dist/inject-style";

export default function login() {
  useEffect(() => {
    injectStyle();
  })
  return (
    <>
        <SeoHead title='X-Search : Verify Email' />
        <Layout>
           <VerifyAuth />
        </Layout>
    </>
  )
}
