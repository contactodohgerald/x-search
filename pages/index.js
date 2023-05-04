import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Tryout from "../components/Tryout";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";

export default function Home() {
  const sitedetails = {
    name: "X-Search",
    email: "support@domain.com",
    phone: "+2340934898934",
    address: "Lagos, Nigeria"
  }
  return (
    <>
      <SeoHead title={sitedetails.name} />
      <Layout>
        <About details={sitedetails} />
        <Feature />
        <Tryout details={sitedetails} />
        <Pricing details={sitedetails} />
        <FAQ  details={sitedetails} />
        <Contact details={sitedetails} />
      </Layout>
    </>
  );
}
