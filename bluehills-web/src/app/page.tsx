/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { 
   ChevronRight, 
  BarChart2, 
  Zap, 
  Users, 
  Code, 
  MessageSquare, 
  ArrowRight,
  
} from 'lucide-react';
import Image from 'next/image';
  import { Navbar } from '@/components/Navbar';
import {Footer} from '@/components/Footer';
import Link from 'next/link';
 import { client } from "@/sanity/client";
import BlogSection from '@/components/BlogSection';

 
const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  publishedAt,
  image
}`;

export default async function Home() {

  const posts = await client.fetch(POSTS_QUERY); // Fetch posts from Sanity

  return (
<div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 text-white">
{/* Header/Navigation */}
     <Navbar/>
 
 
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
                <Link href="/sales"   className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
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
      <BlogSection posts={posts} />

 
      {/* Contact Section
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
      </section> */}

      {/* Footer */}
      <Footer/> 
      </div>  
  );
}

