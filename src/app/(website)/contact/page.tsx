import { PageHeader } from "@/components/shared/sections/page-header";
import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";
import ContactMap from "./_components/ContactMap";

const Contact: React.FC = () => {
  return (
    <div>
      <PageHeader
                  title="Contact Us"
                  items={[
                    {
                    label: "Home",
                    href: "/",
                  },
                  {
                  label: "Contact Us",
                  href: "/contact",
                },
              ]}
            />
      <div className="flex flex-col items-stretch md:flex-row justify-between gap-[30px] container section ">
        <div className="order-2 md:order-none max-h-full">
          <ContactInfo />
        </div>
        <div className="order-1 md:order-none max-h-full">
          <ContactForm />
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

export default Contact;
