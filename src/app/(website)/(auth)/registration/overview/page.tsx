
import AuthUIProvider from "../../_components/provider/AuthUIProvider"
import EditDiolog from "./_components/EditModal"
import SignUpOverview from "./_components/sign-up-overview"

const Page = () => {

  return (
    <AuthUIProvider sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png" fullWidth>
      <div className="py-[30px] md:py-[50px]">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-[32px] leading-[38.4px] font-inter text-black">Your information</h1>
          <EditDiolog />
        </div>
        <SignUpOverview />
      </div>
    </AuthUIProvider>
  )
}

export default Page