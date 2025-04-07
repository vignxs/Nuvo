"use client"

import { Facebook, Instagram, Twitter } from "lucide-react"
import { colors } from "@/constants/colors"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className={`bg-[${colors.primary}] text-white py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-4">Nuvo</h4>
            <p className="text-sm opacity-80">
              We treats pets like family. Premium supplies for fish, birds, and more.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Fish
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Birds
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Aquariums
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Accessories
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm opacity-80">
              <p>123 Aqua Lane</p>
              <p>Birdsville, FL 12345</p>
              <p className="mt-2">Email: info@nuvo.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </motion.div>
        </motion.div>
        <motion.div
          className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Nuvo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a
              href="#"
              className="text-white hover:text-[#90e0ef]"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-white hover:text-[#90e0ef]"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-white hover:text-[#90e0ef]"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Twitter size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

