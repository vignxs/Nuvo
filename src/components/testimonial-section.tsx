import { Card, CardContent } from "@/components/ui/card"
import { colors } from "@/constants/colors"
import { motion } from "framer-motion"

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fish Enthusiast",
      content:
        "Nuvo has the best selection of tropical fish I've ever seen. Their staff is incredibly knowledgeable and helped me set up my first aquarium.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Bird Owner",
      content:
        "I've been buying supplies for my parakeets from Nuvo for years. The quality is outstanding and my birds are healthier than ever.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Pet Lover",
      content:
        "The accessories I purchased from Nuvo have transformed my pets' living spaces. They truly care about the well-being of animals.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className={`py-16 bg-[${colors.backgroundLight}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl font-bold text-[${colors.primary}] mb-2`}>What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from pet owners who trust Nuvo for their beloved companions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

