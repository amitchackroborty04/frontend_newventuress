import { auth } from "@/auth";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { PageHeader } from "@/components/shared/sections/page-header";
import PlansContainer from "./_components/PlansContainer";
import AdditionalPlans from "./_components/AdditionalPlans";

const page = async () => {
  const currentuser = await auth();

  

  const token = currentuser?.user.token;

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
        <PlansContainer token={token} userId={currentuser?.user.id} />
      </div>
       <div className="container section px-4 my-[80px]">
        <SectionHeading heading="Additional Plans" subheading="Plans" />
        <AdditionalPlans token={token} userId={currentuser?.user.id} />
      </div>
    </>
  );
};

export default page;
