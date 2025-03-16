import { Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (
    <div>
         <footer className="bg-blue-950 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                 <span className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  Bluehills AI
                </span>
              </div>
              <p className="text-blue-200 mb-6">
                Transforming businesses through intelligent automation solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <Link href="https://www.linkedin.com/company/bluehillsai/" target='_blank' className="text-blue-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">AI Consulting</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Process Automation</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Machine Learning</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Data Analytics</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Custom AI Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Whitepapers</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 mb-4 md:mb-0">
              &copy; 2025 Bluehills AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-blue-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
