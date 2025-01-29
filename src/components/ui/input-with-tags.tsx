"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Tag {
  text: string;
  onRemove: () => void;
}

const Tag = ({ text, onRemove }: Tag) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: -10, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.8, y: -10, filter: "blur(10px)" }}
      transition={{
        duration: 0.4,
        ease: "circInOut",
        type: "spring",
      }}
      className="bg-white py-[2px] px-[10px] rounded-xl gap-[10px] text-sm flex items-center  text-gradient border border-[#0057A8]"
    >
      {text}
      <motion.div>
        <Button
          onClick={onRemove}
          type="button"
          className="bg-white text-xs h-fit flex items-center justify-center text-black  rounded-[8px] shadow-none"
        >
          <X className="w-4 h-4" />
        </Button>
      </motion.div>
    </motion.span>
  );
};

interface InputWithTagsProps {
  placeholder?: string;
  className?: string;
  limit?: number;
  tags: string[]; // Add tags as a prop
  setTags: React.Dispatch<React.SetStateAction<string[]>>; // Add setTags as a prop
}

const InputWithTags = ({
  placeholder,
  className,
  limit = 10,
  tags,
  setTags,
}: InputWithTagsProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!limit || tags.length < limit) {
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <motion.div>
        <motion.input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Type something and press Enter..."}
          className="w-full px-4 py-2 border  rounded-[8px] disabled:opacity-50 disabled:cursor-not-allowed outline-none ring-0 border-[#9C9C9C] h-[54px]"
          disabled={limit ? tags.length >= limit : false}
        />
      </motion.div>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} onRemove={() => removeTag(index)} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export { InputWithTags };
