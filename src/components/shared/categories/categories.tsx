"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Categories() {
  const [category, setCategory] = useState("All Categories");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    { name: "Flower", link: "#" },
    { name: "Topicals", link: "#" },
    { name: "Apparel", link: "#" },
    { name: "Concentrates", link: "#" },
    { name: "Tinctures", link: "#" },
    { name: "Accessories", link: "#" },
    { name: "Vape Products", link: "#" },
    { name: "Edibles", link: "#" }
  ];

  // Animation Variants for Dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 }
  };

  // Animation Variants for Links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <DropdownMenu
      onOpenChange={isOpen => setDropdownOpen(isOpen)} // Tracks dropdown open state
    >
      <DropdownMenuTrigger asChild className="">
        <Button
          variant="outline"
          className="mb-2 lg:mb-0 w-[178px] lg:w-[178px] text-[14px] lg:text-[16px] h-[44px] text-white hover:text-white gap-2 bg-primary dark:bg-pinkGradient dark:text-white focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-none"
        >
          {category}
          <ChevronDown className="h-4 " />
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        {isDropdownOpen &&
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <DropdownMenuContent
              align="start"
              className="w-[180px] rounded-lg p-0 font-medium leading-[24px] text-black mt-[30px] lg:mt-[10px] overflow-hidden bg-white"
            >
              {categories.map((item, index) =>
                <motion.div
                  key={item.name}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2, delay: index * 0.05 }} // Stagger effect for links
                >
                  <DropdownMenuItem
                    className="w-full p-0"
                    onClick={() => setCategory(item.name)}
                  >
                    <Link
                      className="w-full text-[20px] p-4 hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A]"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                </motion.div>
              )}
            </DropdownMenuContent>
          </motion.div>}
      </AnimatePresence>
    </DropdownMenu>
  );
}

export default Categories;
