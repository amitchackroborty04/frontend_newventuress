
import AuthUIProvider from "../../_components/provider/AuthUIProvider"
import SignUpOverview from "./_components/sign-up-overview"

const Page = () => {
    
  return (
    <AuthUIProvider sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png" fullWidth>
      <div className="py-[30px] md:py-0">
      <h1 className="font-medium text-[32px] leading-[38.4px] font-inter">All Information</h1>
<SignUpOverview />
      </div>
    </AuthUIProvider>
  )
}

export default Page