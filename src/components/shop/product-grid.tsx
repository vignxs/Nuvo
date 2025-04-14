"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { colors } from "@/constants/colors";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/types/product";
import { products } from "@/data/products";
import { toast } from "sonner"
import Pagination from "@/components/shop/pagination";

interface ProductGridProps {
  activeFilters: {
    category: string;
    priceRange: number[];
    sortBy: string;
  };
}

export default function ProductGrid({ activeFilters }: ProductGridProps) {
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Memoize the filtering logic to prevent unnecessary recalculations
  const filterProducts = useCallback(() => {
    let result = [...products];

    // Filter by category
    if (activeFilters.category !== "all") {
      result = result.filter(
        (product) => product.category === activeFilters.category
      );
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= activeFilters.priceRange[0] &&
        product.price <= activeFilters.priceRange[1]
    );

    // Apply sorting
    switch (activeFilters.sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // featured
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [activeFilters]);

  // Apply filters and sorting
  useEffect(() => {
    const filtered = filterProducts();
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filterProducts]);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    toast( "Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="flex-1">
      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-600">
          Showing {currentProducts.length} of {filteredProducts.length} products
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <motion.div
          className="bg-white rounded-lg p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-600">
            Try adjusting your filters to find what you're looking for.
          </p>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div
                    className={`relative h-48 bg-[${colors.backgroundLight}]`}
                  >
                    <img
                      src={
                        product.image || "/placeholder.svg?height=300&width=300"
                      }
                      alt={product.name}
                      className="object-contain p-4"
                      style={{ width: "100%", height: "auto" }} // Adjusts the size based on container
                    />

                    {product.sale && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        Sale
                      </Badge>
                    )}
                    {product.new && (
                      <Badge
                        className={`absolute top-2 right-2 bg-[${colors.primary}]`}
                      >
                        New
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 left-2 bg-white/80 hover:bg-white rounded-full"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.rating})
                      </span>
                    </div>
                    <h3 className="font-medium text-lg mb-1 flex-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-3">
                      <span className={`text-[${colors.primary}] font-bold`}>
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through ml-2">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button
                      className={`w-full bg-[${colors.primary}] hover:bg-[${colors.primaryDark}]`}
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
