"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { CartPopup } from "@/components/ui/cart-popup";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0_0%_9%/0.8)] backdrop-blur-sm border-b border-[#fe23d9]">
      <nav className="container mx-auto px-4 py-4">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="relative w-[120px] md:w-[180px] h-[48px] -my-2">
            <Image
              src="/ajkune_logo.png"
              alt="Ajkune Professional"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="space-x-6">
              <Link href="/produkte" className="text-white hover:text-[#fe23d9] transition-colors">
                Produkte
              </Link>
              <Link href="/behandlungen" className="text-white hover:text-[#fe23d9] transition-colors">
                Behandlungen
              </Link>
              <Link href="/uber-uns" className="text-white hover:text-[#fe23d9] transition-colors">
                Über uns
              </Link>
              <Link href="/kontakt" className="text-white hover:text-[#fe23d9] transition-colors">
                Kontakt
              </Link>
            </div>
          </div>

          <div className="hidden md:block relative">
            <button 
              className="text-white hover:text-[#fe23d9] transition-colors p-2"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart size={24} />
            </button>
            <CartPopup 
              isOpen={isCartOpen} 
              onClose={() => setIsCartOpen(false)} 
            />
          </div>
        </motion.div>
      </nav>
    </header>
  );
} 
