import React from 'react';
import { 
  Twitter, 
  ChevronRight, 
  BarChart2, 
  Zap, 
  Users, 
  Code, 
  MessageSquare, 
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
<div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 text-white">
{/* Header/Navigation */}
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Automate Your Business with Advanced AI Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                We help businesses leverage cutting-edge AI technology to streamline operations, 
                increase efficiency, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#case-studies" className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                  View Case Studies
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* <img 
                src="https://images.unsplash.com/photo-1677442135968-6bd241f26c68?q=80&w=1000&auto=format&fit=crop" 
                alt="AI Automation" 
                className="rounded-xl shadow-2xl w-full"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 bg-blue-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See how we&apos;ve helped businesses across industries transform with AI automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Inventory Optimization",
                description: "Reduced stockouts by 78% and increased inventory turnover by 34% for a major online retailer.",
                image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1000&auto=format&fit=crop",
                icon: <BarChart2 className="h-6 w-6" />
              },
              {
                title: "Customer Service Automation",
                description: "Implemented AI chatbots that resolved 65% of customer inquiries without human intervention.",
                image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000&auto=format&fit=crop",
                icon: <MessageSquare className="h-6 w-6" />
              },
              {
                title: "Manufacturing Process Optimization",
                description: "Reduced production defects by 42% and increased throughput by 28% using predictive maintenance.",
                image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1000&auto=format&fit=crop",
                icon: <Zap className="h-6 w-6" />
              }
            ].map((study, index) => (
              <div key={index} className="bg-blue-900/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                 <div className="relative h-48 overflow-hidden">
  <Image 
    src={study.image} 
    alt={study.title} 
    fill 
    className="object-cover"
  />
</div>
                <div className="p-6">
                  <div className="bg-blue-700 rounded-full p-3 inline-block mb-4">
                    {study.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-blue-100 mb-4">{study.description}</p>
                  <a href="#" className="inline-flex items-center text-blue-300 hover:text-white">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our proven process for implementing AI automation solutions that deliver real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Discovery",
                description: "We analyze your business processes to identify automation opportunities.",
                icon: <Users className="h-10 w-10" />
              },
              {
                title: "Strategy",
                description: "We develop a customized AI implementation plan tailored to your needs.",
                icon: <BarChart2 className="h-10 w-10" />
              },
              {
                title: "Implementation",
                description: "Our experts build and deploy AI solutions seamlessly into your workflow.",
                icon: <Code className="h-10 w-10" />
              },
              {
                title: "Optimization",
                description: "We continuously monitor and improve performance for maximum ROI.",
                icon: <Zap className="h-10 w-10" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-blue-800/30 rounded-xl hover:bg-blue-700/50 transition-colors">
                <div className="bg-gradient-to-br from-blue-500 to-blue-300 rounded-full p-4 inline-flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
                <div className="mt-4 text-2xl font-bold text-blue-300">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-blue-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in AI automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of AI in Business Automation",
                date: "May 15, 2025",
                excerpt: "Explore how emerging AI technologies are reshaping business operations across industries.",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Implementing Machine Learning for Predictive Analytics",
                date: "May 8, 2025",
                excerpt: "Learn how predictive analytics can help your business anticipate market trends and customer behavior.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Ethical Considerations in AI Automation",
                date: "April 29, 2025",
                excerpt: "Understanding the ethical implications of AI implementation and how to address them responsibly.",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((post, index) => (
              <div key={index} className="bg-blue-900/50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
   <div className="relative h-48 overflow-hidden">
  <Image 
    src={post.image} 
    alt={post.title} 
    fill 
    className="object-cover"
  />
</div>


                <div className="p-6">
                  <div className="text-blue-300 text-sm mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-blue-100 mb-4">{post.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-blue-300 hover:text-white">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center">
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-blue-900/70 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-blue-100 mb-8">
                  Ready to transform your business with AI automation? Contact us today to schedule a consultation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-300 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-blue-100">contact@bluehillsai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-300 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-blue-100">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-300 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-blue-100">123 AI Boulevard, Tech City, CA 94103</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg bg-blue-800/50 border border-blue-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg bg-blue-800/50 border border-blue-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 rounded-lg bg-blue-800/50 border border-blue-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-blue-800/50 border border-blue-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-400 hover:to-blue-300 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
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
  );
}

