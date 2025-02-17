import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { PageHeader } from "@/components/shared/sections/page-header";
import Rewards from "./_components/rewards";

const Contact: React.FC = () => {
  return (
    <div>
      <PageHeader
                  title="Rewards"
                  items={[
                    {
                    label: "Home",
                    href: "/",
                  },
                  {
                  label: "Rewards",
                  href: "/rewards",
                },
              ]}
            />
            <section className="py-[80px]">
            <SectionHeading heading={"Rewards"} subheading="" />
          
      <Rewards/>
      </section>
    </div>
  );
};

export default Contact;
