"use client"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 py-20 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          DreamForge AI
        </h1>

        <p className="text-gray-400 mt-4 text-lg md:text-xl">
          Create. Automate. Grow.  
          <span className="text-white font-medium"> — Digital tools for the new generation of entrepreneurs.</span>
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/products"
            className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Explore Products
          </a>

          <a
            href="/about"
            className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 text-sm text-gray-500"
      >
        © 2025 DreamForge AI — Empowering Digital Entrepreneurs Worldwide 🌎
      </motion.div>
    </div>
  )
}
