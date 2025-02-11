import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

/**
 * Reusable Accordion Component
 * @param {string} title - The title displayed in the accordion header.
 * @param {ReactNode} children - Content to be shown when expanded.
 * @param {string} openColor - Background color when the accordion is expanded.
 * @param {string} closedColor - Background color when the accordion is closed.
 */
interface AccordionProps {
  title: string;
  children: ReactNode;
  openColor?: string;
  closedColor?: string;
}

const MotionAccordion: React.FC<AccordionProps> = ({
  title,
  children,
  openColor = "#FF0088",
  closedColor = "#0055FF"
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="accordion-item">
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? openColor : closedColor }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 cursor-pointer text-white"
      >
        {title}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-100">{children}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MotionAccordion


