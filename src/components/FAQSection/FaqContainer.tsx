"use client";

// Packages
import { useQuery } from "@tanstack/react-query";
import { Minus, Plus } from "lucide-react";

// Local imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/types/faqs";
import ErrorContainer from "../ui/error-container";
import SkeletonWrapper from "../ui/skeleton-wrapper";
import { AnimatePresence, motion } from "framer-motion";

const FaqContainer = () => {
  // Fetch FAQs using React Query
  const { isLoading, data, isError, error } = useQuery<FAQItem[]>({
    queryKey: ["faqs"], // Unique key for caching
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faqs`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch FAQs"); // Throw error if response is not OK
      }
      const resData = await response.json();
      return resData.data; // Return the data from the API
    },
  });

  let content;

  // Loading state: Show skeleton loaders
  if (isLoading) {
    content = (
      <Accordion type="single" collapsible className="space-y-4 ">
        {[1, 2, 3, 4, 5].map((item) => (
          <SkeletonWrapper isLoading={isLoading} key={item}>
            <AccordionItem
              value={`item-${item}`}
              className="border border-[#0057A8] dark:border-[#6841A5] rounded-lg overflow-hidden w-full"
            >
              <AccordionTrigger className="flex justify-between items-center text-start lg:text-center py-4 px-6 text-gradient dark:text-gradient-pink bg-white hover:no-underline focus:outline-none max-w-[700px]">
                <span className="text-lg font-semibold">
                  How do I know if a seller is trustworthy?
                </span>
                <div className="shrink-0 bg-[#ECECEC] dark:bg-[#482D721A] w-[32px] h-[32px] flex items-center justify-center rounded-2xl">
                  <Plus className="h-5 w-5 group-data-[state=closed]:block group-data-[state=open]:hidden text-black" />
                  <Minus className="h-5 w-5 group-data-[state=closed]:hidden group-data-[state=open]:block text-black" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-[#EAF0EA] border-t border-[#2A6C2D] dark:border-[#6841A5]">
                <p className="text-[#4A4A4A] text-wrap">
                  We vet all vendors before they join the platform and display
                  customer reviews and ratings on their product pages for
                  transparency. We use secure encryption to protect your
                  personal and payment information. Additionally, all
                  transactions are discreetly processed.
                </p>
              </AccordionContent>
            </AccordionItem>
          </SkeletonWrapper>
        ))}
      </Accordion>
    );
  }
  // Error state: Show error message
  else if (isError) {
    content = <ErrorContainer message={error.message} />;
  }
  // Data state: Render FAQs if data is available
  else if (data?.length) {
    content = (
      <Accordion type="single" collapsible className="space-y-4">
        <AnimatePresence>
          {data.map((item, index) => (
            <SkeletonWrapper isLoading={isLoading} key={item._id}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={item._id}
                  className="border border-[#0057A8] dark:border-[#6841A5] rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="flex justify-between items-center text-start lg:text-center py-4 px-6 text-gradient bg-white hover:no-underline focus:outline-none lg:max-w-[700px]">
                    <span className="text-lg font-semibold text-black">{item.question}</span>
                    <motion.div
                      className="shrink-0 bg-[#ECECEC] dark:bg-[#482D721A] w-[32px] h-[32px] flex items-center justify-center rounded-2xl"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        key={`${item._id}-plus`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Plus className="h-5 w-5 group-data-[state=closed]:block group-data-[state=open]:hidden text-black" />
                      </motion.div>
                      <motion.div
                        key={`${item._id}-minus`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Minus className="h-5 w-5 group-data-[state=closed]:hidden group-data-[state=open]:block text-black" />
                      </motion.div>
                    </motion.div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.4, // Increased duration for a smoother effect
                        ease: [0.25, 0.8, 0.25, 1], // Custom cubic bezier for natural feel
                      }}
                    >
                      <p className="text-[#4A4A4A] text-wrap px-6 py-4 bg-[#E6EEF6] dark:bg-[#482D721A] border-t border-[#121D42]">{item.answer}</p>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </SkeletonWrapper>
          ))}
        </AnimatePresence>
      </Accordion>
    );
  }
  // Fallback state: Show message if no FAQs are available
  else {
    content = <div>No FAQs available.</div>;
  }

  return content;
};

export default FaqContainer;
