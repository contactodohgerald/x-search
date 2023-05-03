import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Register from "../components/Register";

export default function register() {
  return (
    <>
        <SeoHead title='X-Search : Register' />
        <Layout>
            <Register />          
        </Layout>
    </>
  )
}
