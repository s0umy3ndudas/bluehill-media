import { Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export  function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-950 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
             <span className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
             <Image src='https://res.cloudinary.com/dsccaob3y/image/upload/v1740783097/brand/zan0kxq7i3cllfvnooxe.png' height={100} width={100} alt=''/>
             </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#case-studies" className="hover:text-blue-300 transition-colors">Case Studies</a>
            <a href="#how-it-works" className="hover:text-blue-300 transition-colors">How It Works</a>
            <a href="#blog" className="hover:text-blue-300 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-blue-300 transition-colors">Contact Us</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </nav>
          
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
  )
}
