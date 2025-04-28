"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "VINTRA", href: "/vintra" },
  { name: "GoPilot", href: "/gopilot" },
  { name: "CONCEPT2CODE", href: "/c2c" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Inicializar o estado com base na posição atual
    handleScroll()
    setIsLoaded(true)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
        isScrolled ? "glass-panel-strong py-2 shadow-lg" : "bg-transparent py-4",
      )}
      style={{ position: "fixed" }}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-bold gradient-text tracking-tight">IREAJE.NET</span>
            </motion.div>
          </Link>
          <div className="hidden md:flex items-center border-l border-white/30 pl-6">
            <div className="flex items-center">
              <Image src="/microsoft-logo.png" alt="Microsoft" width={24} height={24} className="h-6 w-auto mr-2" />
              <span className="text-xs font-medium text-gray-800 truncate">
                Microsoft for Startups – Founders Hub Member
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - Mantido apenas para desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-brand transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Microsoft Badge - Visível apenas no mobile */}
        <div className="md:hidden flex items-center">
          <Image src="/microsoft-logo.png" alt="Microsoft" width={20} height={20} className="h-5 w-auto mr-1" />
          <span className="text-xs font-medium text-gray-800">Founders Hub Member</span>
        </div>
      </div>
    </header>
  )
}
