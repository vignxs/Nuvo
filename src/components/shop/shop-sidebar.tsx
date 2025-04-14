"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { colors } from "@/constants/colors"

interface ShopSidebarProps {
  isOpen: boolean
  onClose: () => void
  activeFilters: {
    category: string
    priceRange: number[]
    sortBy: string
  }
  setActiveFilters: (filters: any) => void
}

export default function ShopSidebar({ isOpen, onClose, activeFilters, setActiveFilters }: ShopSidebarProps) {
  // Use local state for price range to avoid unnecessary updates
  const [priceRange, setPriceRange] = useState(activeFilters.priceRange)

  // Update local price range when activeFilters change from parent
  useEffect(() => {
    setPriceRange(activeFilters.priceRange)
  }, [activeFilters.priceRange])

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
  }

  const applyPriceFilter = () => {
    setActiveFilters({
      ...activeFilters,
      priceRange,
    })
  }

  const handleCategoryChange = (category: string) => {
    if (category !== activeFilters.category) {
      setActiveFilters({
        ...activeFilters,
        category,
      })
    }
  }

  const handleSortChange = (sortBy: string) => {
    if (sortBy !== activeFilters.sortBy) {
      setActiveFilters({
        ...activeFilters,
        sortBy,
      })
    }
  }

  const categories = [
    { id: "all", label: "All Products" },
    { id: "fish", label: "Fish" },
    { id: "birds", label: "Birds" },
    { id: "aquariums", label: "Aquariums" },
    { id: "cages", label: "Bird Cages" },
    { id: "food", label: "Pet Food" },
    { id: "accessories", label: "Accessories" },
  ]

  const sortOptions = [
    { id: "featured", label: "Featured" },
    { id: "newest", label: "Newest" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "rating", label: "Highest Rated" },
  ]

  return (
    <>
      {/* Mobile sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Filter content - same as desktop */}
              <div className="space-y-8">
                {/* Categories */}
                <div>
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox
                          id={`mobile-category-${category.id}`}
                          checked={activeFilters.category === category.id || activeFilters.category === "all"}
                          onCheckedChange={() => handleCategoryChange(category.id)}
                        />
                        <Label
                          htmlFor={`mobile-category-${category.id}`}
                          className="ml-2 text-sm font-normal cursor-pointer"
                        >
                          {category.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <Slider
                    defaultValue={[0, 500]}
                    value={priceRange}
                    min={0}
                    max={500}
                    step={10}
                    onValueChange={handlePriceChange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2 w-full" onClick={applyPriceFilter}>
                    Apply
                  </Button>
                </div>

                {/* Sort By */}
                <div>
                  <h4 className="font-medium mb-3">Sort By</h4>
                  <RadioGroup value={activeFilters.sortBy} onValueChange={handleSortChange}>
                    {sortOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.id} id={`mobile-sort-${option.id}`} />
                        <Label htmlFor={`mobile-sort-${option.id}`}>{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <motion.div
        className="hidden md:block w-64 shrink-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
          <h3 className={`text-lg font-semibold text-[${colors.primary}] mb-6`}>Filters</h3>

          <div className="space-y-8">
            {/* Categories */}
            <div>
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={activeFilters.category === category.id || activeFilters.category === "all"}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    <Label htmlFor={`category-${category.id}`} className="ml-2 text-sm font-normal cursor-pointer">
                      {category.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="font-medium mb-3">Price Range</h4>
              <Slider
                defaultValue={[0, 500]}
                value={priceRange}
                min={0}
                max={500}
                step={10}
                onValueChange={handlePriceChange}
                className="mb-4"
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <Button variant="outline" size="sm" className="mt-2 w-full" onClick={applyPriceFilter}>
                Apply
              </Button>
            </div>

            {/* Sort By */}
            <div>
              <h4 className="font-medium mb-3">Sort By</h4>
              <RadioGroup value={activeFilters.sortBy} onValueChange={handleSortChange}>
                {sortOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={`sort-${option.id}`} />
                    <Label htmlFor={`sort-${option.id}`}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
