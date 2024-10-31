import React from 'react'
import { motion } from 'framer-motion'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white"
  >
    {children}
  </a>
)

interface HeaderProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <img src="/logo.svg" alt="interview.dev logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">interview.dev</span>
        </motion.div>
        <div className="flex items-center space-x-4">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#waitlist">Join Waitlist</NavLink>
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header