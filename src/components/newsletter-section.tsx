"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { colors } from "@/constants/colors"
import { motion } from "framer-motion"

export default function NewsletterSection() {
  return (
    <section className={`py-16 bg-[${colors.primary}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Join Our Newsletter</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Subscribe to receive updates on new arrivals, special offers, and pet care tips
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="bg-white/90 border-none" required />
            <Button
              type="submit"
              className={`bg-white text-[${colors.primary}] hover:bg-white/90`}
              // whileHover={{ scale: 1.05 }}
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

