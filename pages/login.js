import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Login from "../components/Login";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useEffect } from "react";

export default function login() {
  useEffect(() => {
    injectStyle();
  })
  return (
    <>
        <SeoHead title='X-Search : Login' />
        <Layout>
            <Login />    
        </Layout>
    </>
  )
}
