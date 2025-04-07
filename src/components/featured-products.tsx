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
      image: "/placeholder.svg?height=300&width=300",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Premium Bird Cage",
      price: "$89.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
    },
    {
      id: 3,
      name: "Aquarium Filter System",
      price: "$34.99",
      image: "/placeholder.svg?height=300&width=300",
      badge: null,
    },
    {
      id: 4,
      name: "Bird Food Variety Pack",
      price: "$19.99",
      image: "/placeholder.svg?height=300&width=300",
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
              <motion.div whileHover={{ y: -10 }}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className={`relative h-48 bg-[${colors.backgroundLight}]`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain p-4"
                    />
                    {product.badge && (
                      <Badge className={`absolute top-2 right-2 bg-[${colors.primary}]`}>
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    <p className={`text-[${colors.primary}] font-bold mb-3`}>{product.price}</p>
                    <Button className={`w-full bg-[${colors.primary}] hover:bg-[${colors.primaryDark}]`}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

