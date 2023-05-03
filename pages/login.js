import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Login from "../components/Login";

export default function login() {
  return (
    <>
        <SeoHead title='X-Search : Login' />
        <Layout>
            <Login />    
        </Layout>
    </>
  )
}
