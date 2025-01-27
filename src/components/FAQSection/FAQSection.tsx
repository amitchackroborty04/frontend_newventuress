import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

function FAQSection() {
  return (
    <section className="container h-auto relative py-[80px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[28px]">
        {/* Left Image Section */}
        <div className="w-[470px] h-[600px] hidden md:block">
          <Image
            src="/assets/img/faq-Image.png"
            width={470}
            height={600}
            alt="Decorative background"
            className="rounded-lg object-cover w-[470px] h-auto"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-3/5">
          <div className="text-center lg:text-left">
            <h1 className="text-[25px] lg:text-[32px] font-bold text-gradient py-2">
              What do you want to know?
            </h1>
            <p className="text-[16px] lg:text-[20px] text-[#444444] leading-6 mb-10">
              Connect with Trusted Sellers, Explore Quality Products, and
              Elevate Your Experience.
            </p>
          </div>

          {/* Accordion Section */}
          <Accordion type="single" collapsible className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <AccordionItem
                key={item}
                value={`item-${item}`}
                className="border border-[#0057A8] rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="flex justify-between items-center text-start lg:text-center py-4 px-6 text-gradient  bg-white hover:no-underline focus:outline-none max-w-[700px]">
                  <span className="text-lg font-semibold ">
                    How do I know if a seller is trustworthy?
                  </span>
                  <div className="shrink-0 bg-[#ECECEC] w-[32px] h-[32px] flex items-center justify-center rounded-2xl">
                    <Plus className="h-5 w-5 group-data-[state=closed]:block group-data-[state=open]:hidden text-black " />
                    <Minus className="h-5 w-5 group-data-[state=closed]:hidden group-data-[state=open]:block text-black" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-[#EAF0EA] border-t border-[#2A6C2D]">
                  <p className="text-[#4A4A4A]  text-wrap">
                    We vet all vendors before they join the platform and display
                    customer reviews and ratings on their product pages for
                    transparency. We use secure encryption to protect your
                    personal and payment information. Additionally, all
                    transactions are discreetly processed.
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQSection