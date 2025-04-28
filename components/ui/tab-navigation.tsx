"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TabOption {
  id: string
  label: string
}

interface TabNavigationProps {
  options: TabOption[]
  activeTab: string
  onChange: (tabId: string) => void
  className?: string
}

export default function TabNavigation({ options, activeTab, onChange, className }: TabNavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn("flex justify-center mb-8 md:mb-12", className)}
    >
      <div className="glass-panel-strong rounded-full p-1 inline-flex">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              "px-4 md:px-6 py-2 rounded-full transition-all duration-300",
              activeTab === option.id
                ? "bg-gradient-to-r from-brand-light to-brand text-white shadow-md"
                : "hover:bg-white/30",
            )}
          >
            <span className="text-sm md:text-base">{option.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
