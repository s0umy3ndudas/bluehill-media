import { Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export function BwFooter() {
  return (
    <div>
      <footer className="bg-white text-black py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Branding & Socials */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-bold">Bluehills AI</span>
              </div>
              <p className="mb-6">
                Transforming businesses through intelligent automation solutions.
              </p>
              <div className="flex space-x-4">
              <Link href="https://instagram.com/bluehills.ai" className="  hover:text-gray-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.147 4.771 1.691 4.918 4.918.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.147 3.225-1.662 4.771-4.918 4.918-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-3.255-.147-4.771-1.693-4.918-4.918-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.147-3.227 1.664-4.771 4.918-4.918 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.556.213-7.072 2.729-7.285 7.285-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.213 4.556 2.729 7.072 7.285 7.285 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.556-.213 7.072-2.729 7.285-7.285.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.213-4.556-2.729-7.072-7.285-7.285-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                  </svg>
                </Link>

                <Link href="https://x.com/bluehillsai" className="hover:text-gray-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://www.facebook.com/" className="hover:text-gray-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/bluehillsai/"  className="hover:text-gray-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Our Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-700 transition-colors">AI Automation</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Workflow Optimization</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Intelligent Chatbots</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Predictive Analytics</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Custom AI Solutions</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-700 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Why Choose Us</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Our Clients</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-700 transition-colors">AI Trends</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Guides & Ebooks</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Webinars & Events</a></li>
                <li><a href="#" className="hover:text-gray-700 transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bluehills AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-gray-700 transition-colors text-sm">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-700 transition-colors text-sm">Terms of Service</Link>
              <Link href="#" className="hover:text-gray-700 transition-colors text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
