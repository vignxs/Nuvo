import { Input } from "@/components/ui/input";
import { Search, Facebook, Instagram, Twitter } from "lucide-react";

export default function AppBar() {
  return (
    <header className="flex items-center justify-between p-6">
      {/* Logo and Branding */}
      <div className="flex items-center gap-2">
        <div className="text-[#2c5282]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C7.58,2,4,5.58,4,10c0,2.29,1.06,4.31,2.71,5.71L12,20l5.29-4.29C18.94,14.31,20,12.29,20,10C20,5.58,16.42,2,12,2z M12,5c0.83,0,1.5,0.67,1.5,1.5S12.83,8,12,8s-1.5-0.67-1.5-1.5S11.17,5,12,5z M17,10c0,0.83-0.67,1.5-1.5,1.5S14,10.83,14,10s0.67-1.5,1.5-1.5S17,9.17,17,10z M7,10c0,0.83-0.67,1.5-1.5,1.5S4,10.83,4,10s0.67-1.5,1.5-1.5S7,9.17,7,10z M12,14c-0.83,0-1.5-0.67-1.5-1.5S11.17,11,12,11s1.5,0.67,1.5,1.5S12.83,14,12,14z" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-[#2c5282]">
          <span className="font-normal">Paw</span>PERFECT
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-[#2c5282] font-medium">HOME</a>
        <a href="#" className="text-[#2c5282] font-medium">PRODUCTS</a>
        <a href="#" className="text-[#2c5282] font-medium">SERVICES</a>
        <a href="#" className="text-[#2c5282] font-medium">ABOUT US</a>
      </nav>

      {/* Search Bar */}
      <div className="relative w-48 hidden md:block">
        <Input placeholder="Search..." className="pr-8 bg-[#e2e8f0] border-none" />
        <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
      </div>
    </header>
  );
}
