import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} interview.dev. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer