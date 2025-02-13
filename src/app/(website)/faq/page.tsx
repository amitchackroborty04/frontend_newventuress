import FAQSection from "@/components/FAQSection/FAQSection";
import { PageHeader } from "@/components/shared/sections/page-header";


function page() {
  return (
    <div>
    <PageHeader
      title="Frequently Asked Questions"
      items={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "FAQ",
          href: "/faqs",
        },
      ]}
    />
    <FAQSection/>
  </div>
  )
}

export default page