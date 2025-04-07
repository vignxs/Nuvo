import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import AppBar from "./app-bar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f0f4f8] p-6 md:p-10">
      <AppBar />

      <main className="grid md:grid-cols-2 gap-6 p-6">
        {/* Left - Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-[40%] overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=400"
              alt="Cute dog"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="flex flex-col justify-center text-right space-y-6">
          <div className="space-y-2">
            <h2 className="text-5xl font-bold text-[#2c5282] leading-tight">
              PETS DESERVE <br /> PREMIUM CARE
            </h2>
            <p className="text-gray-600 max-w-md ml-auto">
              We offer high-quality pet supplies and accessories to ensure your furry friends receive the love and
              care they deserve.
            </p>
          </div>

          <Button className="bg-[#2c5282] hover:bg-[#1e3a5f] text-white rounded-full px-8 py-6">SHOP NOW</Button>

          <div className="flex justify-end space-x-4 pt-4">
            <a href="#" className="bg-[#2c5282] p-2 rounded-full text-white"><Facebook size={20} /></a>
            <a href="#" className="bg-[#2c5282] p-2 rounded-full text-white"><Instagram size={20} /></a>
            <a href="#" className="bg-[#2c5282] p-2 rounded-full text-white"><Twitter size={20} /></a>
          </div>
        </div>
      </main>

      {/* Featured Categories */}
      <section className="p-6 bg-[#f8fafc]">
        <h3 className="text-2xl font-semibold text-[#2c5282] mb-6 text-center">Featured Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Food & Treats", "Toys & Play", "Beds & Furniture", "Grooming"].map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#e6f0f5] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-[#2c5282]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2C7.58,2,4,5.58,4,10c0,2.29,1.06,4.31,2.71,5.71L12,20l5.29-4.29C18.94,14.31,20,12.29,20,10C20,5.58,16.42,2,12,2z" />
                </svg>
              </div>
              <h4 className="font-medium text-[#2c5282]">{category}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
