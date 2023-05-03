import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import ResetPassword from "../components/ResetPassword";

export default function forgetPassword() {
  return (
    <>
        <SeoHead title='X-Search : Reset Password' />
        <Layout>
           <ResetPassword/>
        </Layout>
    </>
  )
}
