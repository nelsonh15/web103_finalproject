import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section id="waitlist" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-blue-400">Join the Waitlist</h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Be the first to know when interview.dev launches. Sign up for early access and exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 transition-all duration-300"
            >
              Join
            </button>
          </div>
        </form>
        <AnimatePresence>
          {isSubmitted && (
            <motion.p 
              className="mt-4 text-green-600 dark:text-green-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Thank you for joining the waitlist!
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Waitlist