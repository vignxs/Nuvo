"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"
import FeaturedProducts from "@/components/featured-products"
import CategorySection from "@/components/category-section"
import TestimonialSection from "@/components/testimonial-section"
import NewsletterSection from "@/components/newsletter-section"
import { colors } from "@/constants/colors"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-[${colors.background}] to-[${colors.backgroundLight}]`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 py-12">
            {/* Left Side - Content */}
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <motion.h2
                  className={`text-5xl font-bold text-[${colors.primary}] leading-tight`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  We Treats Pets
                  <br />
                  Like Family
                </motion.h2>
                <motion.p
                  className="text-gray-600 max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Discover premium supplies for your aquatic and avian companions. From vibrant fish tanks to cozy bird
                  cages, we provide everything your pets need to thrive in a loving environment.
                </motion.p>
              </div>

              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button
                  className={`bg-[${colors.primary}] hover:bg-[${colors.primaryDark}] text-white rounded-full px-8 py-6`}
                >
                  SHOP NOW
                </Button>
                <Button
                  variant="outline"
                  className={`border-[${colors.primary}] text-[${colors.primary}] hover:bg-[${colors.background}] rounded-full px-8 py-6`}
                >
                  LEARN MORE
                </Button>
              </motion.div>

              <motion.div
                className="flex space-x-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.a
                  href="#"
                  className={`bg-[${colors.primary}] p-2 rounded-full text-white`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className={`bg-[${colors.primary}] p-2 rounded-full text-white`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className={`bg-[${colors.primary}] p-2 rounded-full text-white`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Twitter size={20} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`relative w-full max-w-md aspect-square rounded-full overflow-hidden bg-[${colors.background}] p-8`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/fish_hero.png?height=500&width=500"
                  alt="Colorful fish and bird"
                  // fill
                  className="object-contain"
                  // priority
                />
              </motion.div>

              {/* Decorative bubbles */}
              <motion.div
                className="absolute -right-4 top-1/4"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <div className={`w-6 h-6 rounded-full bg-blue-400 opacity-80`}></div>
              </motion.div>
              <motion.div
                className="absolute right-1/4 bottom-1/4 z-10"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className={`w-8 h-8 rounded-full bg-blue-400 opacity-50`}></div>
              </motion.div>
              <motion.div
                className="absolute left-1/4 top-1/3 z-10"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className={`w-4 h-4 rounded-full bg-blue-400 opacity-50`}></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={`py-12 bg-[${colors.backgroundLight}]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className={`text-2xl font-semibold text-[${colors.primary}] mb-6 text-center`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Categories
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {[
              { name: "Tropical Fish", icon: "🐠" },
              { name: "Bird Species", icon: "🦜" },
              { name: "Aquariums", icon: "🏞️" },
              { name: "Bird Cages", icon: "🏠" },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                whileHover={{ y: -10, scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h4 className={`font-medium text-[${colors.primary}]`}>{category.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Category Sections */}
      <CategorySection
        title="Fish Collection"
        description="Explore our vibrant selection of freshwater and saltwater fish"
        bgColor="bg-white"
      />

      <CategorySection
        title="Bird Varieties"
        description="Discover beautiful and healthy birds for your home"
        bgColor={`bg-[${colors.backgroundLight}]`}
      />

      <CategorySection
        title="Premium Accessories"
        description="Everything your pets need for a happy and healthy life"
        bgColor="bg-white"
      />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

