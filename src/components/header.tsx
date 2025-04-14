import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { colors } from "@/constants/colors"
import { motion } from "framer-motion"

export default function Header() {
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
            {/* <div className={`text-[${colors.primary}]`}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5,3.09L15,7.59V4c0-.55-.45-1-1-1H10C9.45,3,9,3.45,9,4v3.59l-4.5-4.5C4.11,2.7,3.5,2.91,3.5,3.5v6.18 c0,0.27,0.1,0.53,0.29,0.71l2.5,2.5c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L6.35,10.12V6.41l3.15,3.15 C9.68,9.75,9.89,9.85,10.12,9.9c0.23,0.04,0.46-0.01,0.66-0.14C11.08,9.58,11.18,9.3,11.18,9V5h2v4c0,0.3,0.11,0.59,0.3,0.77 c0.2,0.13,0.43,0.18,0.66,0.14c0.23-0.04,0.44-0.15,0.62-0.33l3.15-3.15v3.7l-1.35,1.36c-0.39,0.39-0.39,1.02,0,1.41 c0.39,0.39,1.02,0.39,1.41,0l2.5-2.5c0.19-0.19,0.29-0.44,0.29-0.71V3.5C20.5,2.91,19.89,2.7,19.5,3.09z M9.17,15.13 C8.9,14.92,8.56,14.75,8.17,14.75c-0.39,0-0.73,0.15-1.02,0.37C6.44,14.55,5.5,14.15,4.5,14.15c-1.54,0-4,1.17-4,3.54V18 c0,0.55,0.45,1,1,1h6.5c0.55,0,1-0.45,1-1v-2.5C9,15.34,8.92,15.23,8.83,15.13z M5.5,18h-3v-0.31c0-0.38,0.9-1.04,1.5-1.04 c0.51,0,1.5,0.69,1.5,1.04V18z M21.5,14.15c-1,0-1.94,0.4-2.65,0.98c-0.28-0.22-0.62-0.38-1.01-0.38c-0.39,0-0.74,0.17-1.01,0.38 c-0.09,0.1-0.17,0.21-0.17,0.37V18c0,0.55,0.45,1,1,1H24c0.55,0,1-0.45,1-1v-0.31C25,15.32,23.04,14.15,21.5,14.15z M23,18h-3 v-0.31c0-0.35,0.99-1.04,1.5-1.04c0.6,0,1.5,0.66,1.5,1.04V18z M11.66,13.26c-0.39,0.39-0.39,1.02,0,1.41l2.5,2.5 c0.39,0.39,1.02,0.39,1.41,0l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0L15,14.91l-1.66-1.66 C12.68,12.87,12.05,12.87,11.66,13.26z" />
              </svg>
            </div> */}
            <h1 className={`text-2xl font-semibold text-[${colors.primary}]`}>
             Nuvō
            </h1>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="/"
              className={`text-[${colors.primary}] font-medium`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              HOME
            </motion.a>
            <motion.a
              href="/shop"
              className={`text-gray-600 hover:text-[${colors.primary}] font-medium`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              SHOP
            </motion.a>
            <motion.a
              href="/fish"
              className={`text-gray-600 hover:text-[${colors.primary}] font-medium`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              FISH
            </motion.a>
            <motion.a
              href="/birds"
              className={`text-gray-600 hover:text-[${colors.primary}] font-medium`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              BIRDS
            </motion.a>
            <motion.a
              href="/accessories"
              className={`text-gray-600 hover:text-[${colors.primary}] font-medium`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              ACCESSORIES
            </motion.a>
            <motion.a
              href="#"
              className={`text-gray-600 hover:text-[${colors.primary}] font-medium`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              ABOUT US
            </motion.a>
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
        </div>
      </div>
    </motion.header>
  )
}


