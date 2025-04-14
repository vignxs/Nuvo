"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { colors } from "@/constants/colors";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AccessoriesPage() {
  const accessoryProducts = [
    {
      id: 1,
      name: "Premium Aquarium Filter",
      price: "$34.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Best Seller",
      description:
        "High-performance filter system for aquariums up to 50 gallons.",
    },
    {
      id: 2,
      name: "Decorative Aquarium Plants",
      price: "$15.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Popular",
      description:
        "Realistic artificial plants that add natural beauty to your aquarium.",
    },
    {
      id: 3,
      name: "Bird Toy Collection",
      price: "$14.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Sale",
      description:
        "Assortment of colorful toys to keep your bird entertained and mentally stimulated.",
    },
    {
      id: 4,
      name: "LED Aquarium Lighting",
      price: "$39.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
      description:
        "Energy-efficient LED lighting system with multiple color modes and brightness settings.",
    },
    {
      id: 5,
      name: "Automatic Bird Feeder",
      price: "$29.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: null,
      description:
        "Programmable bird feeder that dispenses food at scheduled times.",
    },
    {
      id: 6,
      name: "Aquarium Cleaning Kit",
      price: "$22.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "Premium",
      description:
        "Complete kit for aquarium maintenance including gravel vacuum and algae scraper.",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[${colors.background}] to-[${colors.backgroundLight}]`}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="h-64 md:h-80 bg-purple-900 overflow-hidden">
          <div className="absolute inset-0 bg-purple-900 opacity-70 z-10"></div>
          <img
            src="/placeholder.svg"
            alt="Pet accessories collection"
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
              Premium Pet Accessories
            </motion.h1>
            <motion.p
              className="text-white text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Everything your pets need for a happy and healthy life
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Accessories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl font-bold text-[${colors.primary}]`}>
              Featured Accessories
            </h2>
            <Button
              variant="outline"
              className={`border-[${colors.primary}] text-[${colors.primary}]`}
              onClick={() =>
                (window.location.href = "/shop?category=accessories")
              }
            >
              View All Accessories
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                onClick={() =>
                  (window.location.href = "/shop?category=accessories")
                }
                className="cursor-pointer"
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
                  <div
                    className={`relative h-48 bg-[${colors.backgroundLight}]`}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-contain p-4 w-full h-full rounded-lg"
                    />
                    {product.badge && (
                      <Badge
                        className={`absolute top-2 right-2 ${
                          product.badge === "Sale"
                            ? "bg-red-500"
                            : `bg-[${colors.primary}]`
                        }`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {product.description}
                    </p>
                    <p className={`text-[${colors.primary}] font-bold mb-3`}>
                      {product.price}
                    </p>
                    <Button
                      className={`w-full bg-[${colors.primary}] hover:bg-[${colors.primaryDark}]`}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = "/shop?category=accessories";
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

      {/* Accessory Categories Section */}
      <section className={`py-16 bg-[${colors.backgroundLight}]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl font-bold text-[${colors.primary}] mb-4`}>
              Shop By Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our extensive collection of pet accessories by category
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              onClick={() =>
                (window.location.href = "/shop?category=aquariums")
              }
            >
              <div className="text-4xl mb-4">🏞️</div>
              <h3 className="text-xl font-semibold mb-2">Aquarium Supplies</h3>
              <p className="text-gray-600 mb-4">
                Filters, decorations, lighting, and more for your aquatic pets.
              </p>
              <Button
                variant="outline"
                className={`border-[${colors.primary}] text-[${colors.primary}]`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "/shop?category=aquariums";
                }}
              >
                Browse
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onClick={() => (window.location.href = "/shop?category=cages")}
              className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Bird Accessories</h3>
              <p className="text-gray-600 mb-4">
                Cages, perches, toys, and feeders for your feathered friends.
              </p>
              <Button
                variant="outline"
                className={`border-[${colors.primary}] text-[${colors.primary}]`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "/shop?category=cages";
                }}
              >
                Browse
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={() => (window.location.href = "/shop?category=food")}
              className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer"
            >
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Pet Food</h3>
              <p className="text-gray-600 mb-4">
                Premium food options for fish, birds, and other small pets.
              </p>
              <Button
                variant="outline"
                className={`border-[${colors.primary}] text-[${colors.primary}]`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "/shop?category=food";
                }}
              >
                Browse
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
