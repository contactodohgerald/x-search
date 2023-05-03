import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import VerifyEmail from "../components/VerifyEmail";

export default function forgetPassword() {
  return (
    <>
        <SeoHead title='X-Search : Forget Password' />
        <Layout>
           <VerifyEmail/>
        </Layout>
    </>
  )
}
