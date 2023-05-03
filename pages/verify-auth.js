import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import VerifyAuth from "../components/VerifyAuth";

export default function login() {
  return (
    <>
        <SeoHead title='X-Search : Verify Email' />
        <Layout>
           <VerifyAuth />
        </Layout>
    </>
  )
}
