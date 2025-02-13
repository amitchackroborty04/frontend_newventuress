import dynamic from "next/dynamic";
import AuthUIProvider from "../_components/provider/AuthUIProvider";
const ResetPasswordContainer = dynamic(
  () => import("./_componments/container")
);

const Page = () => {
  return (
    <AuthUIProvider sidebarImage="https://i.ibb.co.com/jPFh8S6d/image-5.png">
      <ResetPasswordContainer />
    </AuthUIProvider>
  );
};

export default Page;
