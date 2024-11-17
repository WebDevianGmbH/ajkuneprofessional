"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-xl font-bold">
            Ajkune Professional
          </Link>
          
          <div className="space-x-6">
            <Link href="/" className="hover:text-[#fe23d9] transition-colors">
              Home
            </Link>
            <Link href="/behandlungen" className="hover:text-[#fe23d9] transition-colors">
              Behandlungen
            </Link>
            <Link href="/kontakt" className="hover:text-[#fe23d9] transition-colors">
              Kontakt
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
} 