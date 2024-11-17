"use client";

import { motion } from "framer-motion";

export function TermsSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="prose max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="space-y-6 text-gray-600">
            <h2 className="text-xl font-bold mt-8">1. Geltungsbereich</h2>
            <p>
              Diese AGB gelten für alle Dienstleistungen und Produkte von Ajkune Professional GmbH.
            </p>

            <h2 className="text-xl font-bold mt-8">2. Terminvereinbarung</h2>
            <p>
              Termine können telefonisch, per E-Mail oder über unser Online-Buchungssystem vereinbart werden.
            </p>

            {/* Weitere AGB-Inhalte hier */}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 