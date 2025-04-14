"use client";

import { Button } from "@/components/ui/button";
import { getProductsByType } from "@/constants/category";
import { colors } from "@/constants/colors";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface CategorySectionProps {
  title: string;
  description: string;
  bgColor: string;
  type: string;
}


export default function CategorySection({
  title,
  description,
  bgColor,
  type,
}: CategorySectionProps) {
  // Sample products for each category
  const products = getProductsByType(type);
  const navigate = useNavigate()

  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl font-bold text-[${colors.primary}] mb-2`}>
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`relative aspect-square rounded-lg overflow-hidden bg-[${colors.backgroundLight}]`}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="absolute inset-0 object-contain p-6 w-full h-full transition-transform group-hover:scale-105"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className={`text-[${colors.primary}] font-bold`}>
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            className={`bg-[${colors.primary}] hover:bg-[${colors.primaryDark}] px-8`}
            onClick={() => navigate("/shop")}
          >
            View All {title}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
