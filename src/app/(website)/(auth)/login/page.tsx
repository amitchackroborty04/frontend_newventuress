import dynamic from "next/dynamic";
import AuthUIProvider from "../_components/provider/AuthUIProvider";

const LoginForm = dynamic(() => import("./_components/login-form"), {
  ssr: false,
});

const Page = () => {
  return (
    <AuthUIProvider sidebarImage="https://i.ibb.co.com/jPFh8S6d/image-5.png">
      <LoginForm />
    </AuthUIProvider>
  );
};

export default Page;
