import AuthUIProvider from "../_components/provider/AuthUIProvider";
import { ForgotPasswordForm } from "./_components/forgot-password-form";

const Page = () => {
  return (
    <AuthUIProvider sidebarImage="https://i.ibb.co.com/jPFh8S6d/image-5.png">
      <ForgotPasswordForm />
    </AuthUIProvider>
  );
};

export default Page;
