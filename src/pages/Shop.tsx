import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // R;eact Router for navigating
import ShopSidebar from "@/components/shop/shop-sidebar";
import ProductGrid from "@/components/shop/product-grid";
import MiniCart from "@/components/shop/mini-cart";
import { colors } from "@/constants/colors";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ShopPage() {
  const { search } = useLocation(); // Get the query string from the URL
//   const history = useHistory(); // For navigation
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, cartCount } = useCart();

  console.log(cartItems);
  
  // Initialize state with URL parameters only once
  const [activeFilters, setActiveFilters] = useState(() => {
    const queryParams = new URLSearchParams(search);
    return {
      category: queryParams.get("category") || "all",
      priceRange: [0, 500],
      sortBy: queryParams.get("sort") || "featured",
    };
  });

  // Update filters when URL parameters change, but only if they're different
  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const category = queryParams.get("category");
    const sort = queryParams.get("sort");

    let shouldUpdate = false;
    const newFilters = { ...activeFilters };

    if (category && category !== activeFilters.category) {
      newFilters.category = category;
      shouldUpdate = true;
    }

    if (sort && sort !== activeFilters.sortBy) {
      newFilters.sortBy = sort;
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      setActiveFilters(newFilters);
    }
  }, [search, activeFilters]); // Dependency on search params and activeFilters

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[${colors.background}] to-[${colors.backgroundLight}]`}
    >
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-3xl font-bold text-[${colors.primary}]`}>Shop</h1>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className={`border-[${colors.primary}] text-[${colors.primary}] md:hidden`}
              onClick={toggleFilter}
            >
              Filters
            </Button>

            <Button
              variant="outline"
              className={`border-[${colors.primary}] text-[${colors.primary}] relative`}
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span
                  className={`absolute -top-2 -right-2 bg-[${colors.primary}] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`}
                >
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <ShopSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />

          <ProductGrid activeFilters={activeFilters} />

          <MiniCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
