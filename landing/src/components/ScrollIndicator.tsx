import React from 'react'
import { motion } from 'framer-motion'

interface ScrollIndicatorProps {
  currentSection: string
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ currentSection }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {['home', 'features', 'waitlist'].map((section) => (
          <motion.a
            key={section}
            href={`#${section}`}
            aria-label={`Scroll to ${section}`}
            className={`w-3 h-3 rounded-full ${
              currentSection === section
                ? 'bg-blue-600'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default ScrollIndicator
