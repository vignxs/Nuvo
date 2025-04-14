"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { colors } from "@/constants/colors"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BirdsPage() {
  const birdProducts = [
    {
      id: 1,
      name: "Colorful Canary",
      price: "$59.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Best Seller",
      description: "Beautiful canary known for its melodious singing. Makes a wonderful companion pet.",
    },
    {
      id: 2,
      name: "Parakeet Pair",
      price: "$79.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Popular",
      description: "Friendly and social parakeets that are perfect for beginners.",
    },
    {
      id: 3,
      name: "Finch Collection",
      price: "$89.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: null,
      description: "Set of 4 zebra finches known for their social nature and pleasant chirping.",
    },
    {
      id: 4,
      name: "Lovebird Couple",
      price: "$99.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
      description: "Affectionate pair of lovebirds that form strong bonds with their owners.",
    },
    {
      id: 5,
      name: "Cockatiel",
      price: "$129.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: null,
      description: "Intelligent and playful cockatiel that can learn to mimic sounds and whistle tunes.",
    },
    {
      id: 6,
      name: "Budgerigar Starter Kit",
      price: "$149.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Premium",
      description: "Complete starter kit with a beautiful budgie and all the essentials for proper care.",
    },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[${colors.background}] to-[${colors.backgroundLight}]`}>
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="h-64 md:h-80 bg-green-900 overflow-hidden">
          <div className="absolute inset-0 bg-green-900 opacity-70 z-10"></div>
          <img
            src="/placeholder.svg?height=500&width=1500"
            alt="Colorful birds in an aviary"
            width={1500}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover Our Bird Collection
            </motion.h1>
            <motion.p
              className="text-white text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find the perfect feathered companion to brighten your home
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Birds Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl font-bold text-[${colors.primary}]`}>Featured Birds</h2>
            <Button
              variant="outline"
              className={`border-[${colors.primary}] text-[${colors.primary}]`}
              onClick={() => (window.location.href = "/shop?category=birds")}
            >
              View All Birds
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {birdProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                onClick={() => (window.location.href = "/shop?category=birds")}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
                  <div className={`relative h-48 bg-[${colors.backgroundLight}]`}>
                  <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-contain p-4 w-full h-full rounded-lg"
                    />
                    {product.badge && (
                      <Badge className={`absolute top-2 right-2 bg-[${colors.primary}]`}>{product.badge}</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <p className={`text-[${colors.primary}] font-bold mb-3`}>{product.price}</p>
                    <Button
                      className={`w-full bg-[${colors.primary}] hover:bg-[${colors.primaryDark}]`}
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = "/shop?category=birds"
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bird Care Guide Section */}
      <section className={`py-16 bg-[${colors.backgroundLight}]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl font-bold text-[${colors.primary}] mb-4`}>Bird Care Guide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn how to properly care for your feathered friends with our expert tips
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Proper Housing</h3>
              <p className="text-gray-600">
                Provide a spacious cage with appropriate perches and toys to keep your bird happy and active.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Balanced Diet</h3>
              <p className="text-gray-600">
                Feed your bird a varied diet of seeds, pellets, fresh fruits, and vegetables for optimal health.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-2">Social Interaction</h3>
              <p className="text-gray-600">
                Spend time with your bird daily. Most birds are social creatures and need regular interaction.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Button
              className={`bg-[${colors.primary}] hover:bg-[${colors.primaryDark}]`}
              onClick={() => (window.location.href = "/shop?category=cages")}
            >
              Shop Bird Supplies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
