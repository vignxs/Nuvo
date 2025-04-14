"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { colors } from "@/constants/colors"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FishPage() {
  const fishProducts = [
    {
      id: 1,
      name: "Tropical Tetra Fish Pack",
      price: "$29.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Best Seller",
      description: "Set of 6 vibrant tetra fish that add color and activity to your aquarium.",
    },
    {
      id: 2,
      name: "Betta Fish - Male",
      price: "$15.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Popular",
      description: "Beautiful male betta fish with vibrant colors and flowing fins.",
    },
    {
      id: 3,
      name: "Goldfish Variety Pack",
      price: "$24.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: null,
      description: "Set of 4 fancy goldfish in various colors and patterns.",
    },
    {
      id: 4,
      name: "Angelfish Pair",
      price: "$39.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
      description: "Elegant pair of angelfish, perfect centerpiece for your aquarium.",
    },
    {
      id: 5,
      name: "Guppy Breeding Set",
      price: "$19.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: null,
      description: "Set of male and female guppies known for their colorful patterns.",
    },
    {
      id: 6,
      name: "Discus Fish Premium",
      price: "$59.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Premium",
      description: "Stunning discus fish with vibrant coloration, the king of freshwater aquariums.",
    },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[${colors.background}] to-[${colors.backgroundLight}]`}>
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="h-64 md:h-80 bg-blue-900 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-70 z-10"></div>
          <img
            src="/placeholder.svg?height=500&width=1500"
            alt="Colorful fish in an aquarium"
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
              Explore Our Fish Collection
            </motion.h1>
            <motion.p
              className="text-white text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover a vibrant world of freshwater and saltwater fish for your aquarium
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Fish Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl font-bold text-[${colors.primary}]`}>Featured Fish</h2>
            <Button
              variant="outline"
              className={`border-[${colors.primary}] text-[${colors.primary}]`}
              onClick={() => (window.location.href = "/shop?category=fish")}
            >
              View All Fish
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fishProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                onClick={() => (window.location.href = "/shop?category=fish")}
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
                        window.location.href = "/shop?category=fish"
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

      {/* Care Guide Section */}
      <section className={`py-16 bg-[${colors.backgroundLight}]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl font-bold text-[${colors.primary}] mb-4`}>Fish Care Guide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn how to properly care for your aquatic friends with our expert tips
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
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-semibold mb-2">Water Quality</h3>
              <p className="text-gray-600">
                Maintain proper pH levels and temperature for your specific fish species. Regular water changes are
                essential.
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
              <h3 className="text-xl font-semibold mb-2">Proper Feeding</h3>
              <p className="text-gray-600">
                Feed your fish the right amount and type of food. Overfeeding can lead to water quality issues.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Tank Setup</h3>
              <p className="text-gray-600">
                Provide appropriate hiding spots, plants, and decorations to create a stress-free environment.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Button
              className={`bg-[${colors.primary}] hover:bg-[${colors.primaryDark}]`}
              onClick={() => (window.location.href = "/shop?category=aquariums")}
            >
              Shop Aquarium Supplies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
