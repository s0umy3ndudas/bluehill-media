 
'use client'
// import { Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-blue-950 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            
          <Link href="https://bluehillsai.com"  rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
        

<Image 
              src='https://res.cloudinary.com/dsccaob3y/image/upload/v1743604755/brand/d7gcctsyl75pughx0ahh.png' 
             
     
              height={100} 
              width={100} 
              alt='Brand Logo'
            />


          </Link>

           
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#case-studies" className="hover:text-blue-300 transition-colors">Case Studies</Link>
          <Link href="#how-it-works" className="hover:text-blue-300 transition-colors">How It Works</Link>
          <Link href="/blog" className="hover:text-blue-300 transition-colors">Blog</Link>
          
          {/* <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
            <Twitter className="h-5 w-5" />
          </Link> */}

          <Link 
            href="/sales"  
            className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors animate-pulse"
          >
            Contact sales
          </Link>
        </nav>
        
        {/* Mobile View: Hamburger + Book a Demo */}
        <div className="md:hidden flex items-center space-x-4">
          <Link 
            href="/sales"   
            className="bg-yellow-500 text-black px-4 py-2 rounded-md  hover:bg-yellow-700  transition-colors animate-pulse text-sm"
          >
            Contact sales
          </Link>
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-950 px-4 py-4 flex flex-col space-y-4">
          <Link href="#case-studies" className="text-white hover:text-blue-300 transition-colors">Case Studies</Link>
          <Link href="#how-it-works" className="text-white hover:text-blue-300 transition-colors">How It Works</Link>
          <Link href="/blog" className="text-white hover:text-blue-300 transition-colors">Blog</Link>
          
          {/* <Link 
            href="https://twitter.com/bluehillsai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2"
          >
            <Twitter className="h-5 w-5" />
            <span>Twitter</span>
          </Link> */}
        </nav>
      )}
    </header>
  )
}
 