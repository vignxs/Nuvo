export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  tags: string[]
  rating: number
  stock: number
  description: string
  featured?: boolean
  new?: boolean
  sale?: boolean
}
