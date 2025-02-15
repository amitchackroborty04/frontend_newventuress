"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { type ReactNode, useState } from "react"

interface AccordionItemProps {
  title: string
  children: ReactNode
  variant?: "fill" | "outline"
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, variant = "outline", defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const variants = {
    fill: "bg-[#1a237e] text-white",
    outline: "bg-white border border-gray-200",
  }

  return (
    <div className="mb-2">
      <motion.button
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 flex items-center justify-between rounded-md ${variants[variant]}`}
      >
        <span className="font-medium">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 ">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-2xl mx-auto">{children}</div>
}

