'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="https://bluehill.media" rel="noopener noreferrer">
            <Image 
              src='https://res.cloudinary.com/dsccaob3y/image/upload/v1743604755/brand/d7gcctsyl75pughx0ahh.png' 
              height={100} 
              width={100} 
              alt='Brand Logo'
            />
          </Link>
        </div>

        {/* Menu Button */}
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white p-4 text-xl rounded-full  transition-all text-sm"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* Small Dropdown Box */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-700"
              >
                 <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Blog</Link>
                <Link href="#case-studies" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Case Studies</Link>
             
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
