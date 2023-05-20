import Generate from "../components/Generate";
import ActivePlan from "../components/ActivePlan";
import History from "../components/History";
import Settings from "../components/Settings";
import AuthLayout from "../components/Layout/AuthLayout";
import SeoHead from "../components/SeoHead";
import services from "../config/services";

export default function generate() {
  const user_id = services.getSession('token');
  return (
    <>
      <SeoHead title="X-Search : Generate Cover Letter" />
      <AuthLayout>
          <Generate />
          <ActivePlan />
          <History />
          <Settings />
      </AuthLayout>
    </>
  );
}
