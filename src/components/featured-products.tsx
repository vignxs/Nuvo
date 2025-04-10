import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { colors } from "@/constants/colors"
import { motion } from "framer-motion"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Tropical Fish Starter Kit",
      price: "$49.99",
      image: "/FeaturedProducts/TropicalFishStarterKit.jpg",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Premium Bird Cage",
      price: "$89.99",
      image: "/FeaturedProducts/PremiumBirdCage.jpg",
      badge: "New",
    },
    {
      id: 3,
      name: "Aquarium Filter System",
      price: "$34.99",
      image: "/FeaturedProducts/AquariumFilterSystem.jpg",
      badge: null,
    },
    {
      id: 4,
      name: "Bird Food Variety Pack",
      price: "$19.99",
      image: "/FeaturedProducts/BirdFoodVarietyPack.jpg",
      badge: "Sale",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl font-bold text-[${colors.primary}]`}>Featured Products</h2>
          <Button variant="outline" className={`border-[${colors.primary}] text-[${colors.primary}]`}>
            View All
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="relative overflow-hidden h-[300px] rounded-lg shadow-md group">
                  <div className="absolute inset-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-[100px] group-hover:h-[70%] overflow-hidden">
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                      <div className="transition-all duration-300 ease-in-out max-h-[40px] group-hover:max-h-[calc(100%-40px)] overflow-hidden">
                        <p>{product.name}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
