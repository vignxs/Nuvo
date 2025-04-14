"use client"

import { Search, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { colors } from "@/constants/colors"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "SHOP", href: "/shop" },
    { label: "FISH", href: "/fish" },
    { label: "BIRDS", href: "/birds" },
    { label: "ACCESSORIES", href: "/accessories" },
    { label: "ABOUT US", href: "#" },
  ]

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className={`text-2xl font-semibold text-[${colors.primary}]`}>
              Nuvō
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`text-gray-600 hover:text-[${colors.primary}] font-medium`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Search */}
          <motion.div
            className="relative w-48 hidden md:block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Input placeholder="Search..." className="pr-8 bg-[#f0f9ff] border-none" />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className={`text-xl font-bold text-[${colors.primary}]`}>Menu</h2>
              <button onClick={() => setMobileNavOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="text-gray-700 font-medium hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
