import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {


    const handleFeaturesButton = () => {
        const features = document.getElementById("features");
        features?.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-6 text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Master Your Coding Interviews
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Practice with AI-powered interview simulations. Get real-time feedback, track your progress, and boost your confidence.
        </motion.p>
        <motion.button
          className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFeaturesButton}
        >
          Get Started
        </motion.button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#features" className="text-blue-600 dark:text-blue-400 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero