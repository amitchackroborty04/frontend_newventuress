import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { PageHeader } from "@/components/shared/sections/page-header";
import PlansContainer from "./_components/PlansContainer";

const page = () => {
  return (
    <>
      <PageHeader
        title="Membership Plans"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Membership Plans",
            href: "/plans",
          },
        ]}
      />
      <div className="container section px-4 my-[80px]">
        <SectionHeading heading="Membership Plans" subheading="Plans" />
        <PlansContainer />
      </div>
    </>
  );
};

export default page;
