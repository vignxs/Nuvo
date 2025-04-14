import type { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: 1,
    name: "Tropical Fish Starter Kit",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "fish",
    tags: ["starter", "tropical", "kit"],
    rating: 4.5,
    stock: 15,
    description:
      "Everything you need to start your tropical fish aquarium. Includes tank, filter, and essential accessories.",
    featured: true,
  },
  {
    id: 2,
    name: "Premium Bird Cage",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "cages",
    tags: ["premium", "large", "cage"],
    rating: 4.8,
    stock: 8,
    description: "Spacious and elegant cage for medium to large birds. Features multiple perches and feeding stations.",
    new: true,
  },
  {
    id: 3,
    name: "Aquarium Filter System",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "aquariums",
    tags: ["filter", "water", "maintenance"],
    rating: 4.2,
    stock: 20,
    description:
      "High-performance filter system for aquariums up to 50 gallons. Keeps water crystal clear and healthy for your fish.",
  },
  {
    id: 4,
    name: "Bird Food Variety Pack",
    price: 19.99,
    originalPrice: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    tags: ["food", "variety", "nutrition"],
    rating: 4.7,
    stock: 30,
    description: "Nutritionally balanced variety pack of premium bird food. Contains seeds, nuts, and dried fruits.",
    sale: true,
  },
  {
    id: 5,
    name: "Decorative Aquarium Plants",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    tags: ["decoration", "plants", "aquarium"],
    rating: 4.3,
    stock: 25,
    description:
      "Realistic artificial plants that add natural beauty to your aquarium while providing hiding spots for fish.",
  },
  {
    id: 6,
    name: "Automatic Bird Feeder",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    tags: ["automatic", "feeder", "convenience"],
    rating: 4.1,
    stock: 12,
    description: "Programmable bird feeder that dispenses food at scheduled times. Perfect for busy bird owners.",
  },
  {
    id: 7,
    name: "Gourmet Fish Food",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "food",
    tags: ["premium", "nutrition", "fish"],
    rating: 4.6,
    stock: 40,
    description: "High-quality fish food formulated to enhance color and promote health in tropical fish.",
  },
  {
    id: 8,
    name: "Bird Bathing Station",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    tags: ["bath", "hygiene", "birds"],
    rating: 4.0,
    stock: 10,
    description: "Convenient bathing station that attaches to bird cages. Helps birds maintain clean feathers.",
  },
  {
    id: 9,
    name: "LED Aquarium Lighting",
    price: 39.99,
    originalPrice: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "aquariums",
    tags: ["lighting", "LED", "energy-efficient"],
    rating: 4.4,
    stock: 15,
    description:
      "Energy-efficient LED lighting system for aquariums. Features multiple color modes and brightness settings.",
    sale: true,
  },
  {
    id: 10,
    name: "Exotic Bird Perch Set",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    tags: ["perch", "natural", "birds"],
    rating: 4.2,
    stock: 20,
    description:
      "Set of natural wood perches in various sizes and textures. Promotes foot health and prevents boredom.",
  },
  {
    id: 11,
    name: "Aquarium Cleaning Kit",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    tags: ["cleaning", "maintenance", "aquarium"],
    rating: 4.5,
    stock: 18,
    description:
      "Complete kit for aquarium maintenance. Includes gravel vacuum, algae scraper, and water testing tools.",
  },
  {
    id: 12,
    name: "Colorful Canary",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "birds",
    tags: ["canary", "songbird", "pet"],
    rating: 4.9,
    stock: 5,
    description: "Beautiful canary known for its melodious singing. Makes a wonderful companion pet.",
    featured: true,
  },
  {
    id: 13,
    name: "Tropical Tetra Fish Pack",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "fish",
    tags: ["tetra", "tropical", "colorful"],
    rating: 4.7,
    stock: 25,
    description:
      "Set of 6 vibrant tetra fish that add color and activity to your aquarium. Easy to care for and peaceful.",
  },
  {
    id: 14,
    name: "Premium Birdcage Cover",
    price: 16.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    tags: ["cover", "sleep", "birds"],
    rating: 4.3,
    stock: 15,
    description: "Breathable cover that provides darkness for better sleep. Fits most standard bird cages.",
  },
  {
    id: 15,
    name: "Aquarium Heater",
    price: 27.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "aquariums",
    tags: ["heater", "temperature", "tropical"],
    rating: 4.4,
    stock: 20,
    description: "Reliable submersible heater that maintains optimal water temperature for tropical fish.",
  },
  {
    id: 16,
    name: "Bird Toy Collection",
    price: 14.99,
    originalPrice: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    tags: ["toys", "entertainment", "birds"],
    rating: 4.6,
    stock: 30,
    description: "Assortment of colorful toys to keep your bird entertained and mentally stimulated.",
    sale: true,
  },
  {
    id: 17,
    name: "Aquarium Decoration Set",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    tags: ["decoration", "ornaments", "aquarium"],
    rating: 4.2,
    stock: 12,
    description: "Set of themed aquarium decorations including a castle, treasure chest, and artificial coral.",
    new: true,
  },
  {
    id: 18,
    name: "Parakeet Starter Kit",
    price: 69.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "birds",
    tags: ["parakeet", "starter", "kit"],
    rating: 4.8,
    stock: 8,
    description: "Complete starter kit for new parakeet owners. Includes cage, food, toys, and care guide.",
    featured: true,
  },
]
