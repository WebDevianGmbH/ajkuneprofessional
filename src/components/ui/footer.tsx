"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <p className="text-gray-600">
                Mitteldorfstrasse 34<br />
                5722 Gränichen<br />
                Schweiz
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/agb" className="text-gray-600 hover:text-[#fe23d9] transition-colors">
                    AGB
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="text-gray-600 hover:text-[#fe23d9] transition-colors">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Öffnungszeiten</h3>
              <p className="text-gray-600">
                Mo-Fr: 09:00 - 18:00<br />
                Sa: Nach Vereinbarung<br />
                So: Geschlossen
              </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.footer>
  );
} 