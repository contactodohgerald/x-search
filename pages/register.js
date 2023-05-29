import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Register from "../components/Register";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useEffect } from "react";

export default function register() {
  useEffect(() => {
    injectStyle();
  })
  return (
    <>
        <SeoHead title='X-Search : Register' />
        <Layout>
            <Register />          
        </Layout>
    </>
  )
}
