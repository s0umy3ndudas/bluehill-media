/* eslint-disable @typescript-eslint/no-unused-vars */
 import React from 'react';
import { 
   ChevronRight, 
  BarChart2, 
  Zap, 
  Users, 
  Code, 
 
  
} from 'lucide-react';

import Script from 'next/script';

// import Image from 'next/image';
  import { Navbar } from '@/components/Navbar';
import {Footer} from '@/components/Footer';
import Link from 'next/link';
 import { client } from "@/sanity/client";
import BlogSection from '@/components/BlogSection';

 
import fs from 'fs/promises';
import path from 'path';
import FloatingVideo from '@/components/FloatingVideo';
import { CaseStudiesSection } from '@/components/Casestudysec';
  
const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  publishedAt,
  image
}`;

const CACHE_DIR = path.resolve('./cache');
const CACHE_FILE = path.join(CACHE_DIR, 'posts.json');

// ⏱️ 1 day in ms. For now, we'll force it to re-fetch always for testing.
const CACHE_DURATION = 1000 *24 *60;


export default async function Home() {
  let posts;

  try {
    const cache = JSON.parse(await fs.readFile(CACHE_FILE, 'utf8'));
    const now = Date.now();

    // Always expired for now (for testing)
    if (now - cache.timestamp < CACHE_DURATION) {
      console.log('✅ Using cached posts');
      posts = cache.data;
    } else {
      throw new Error('Cache expired or disabled');
    }
  } catch (err) {
    console.log('♻️ Fetching posts from Sanity...');
    posts = await client.fetch(POSTS_QUERY);

    await fs.mkdir(CACHE_DIR, { recursive: true });

    await fs.writeFile(CACHE_FILE, JSON.stringify({
      timestamp: Date.now(),
      data: posts
    }));

    console.log('📝 Cache written to posts.json');
  }

  return (
<div 
  className="min-h-screen text-white"
  style={{
    background: 'linear-gradient(to bottom right, #3735e4, #17143d)',
  }}
>
 


{/* Header/Navigation */}
     <Navbar/>
 
 
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4">
  <div className="container mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
    
    {/* Button first */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link 
    href="/sales"
    className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-blue-900 transition-all duration-300 bg-white rounded-xl group hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-xl animate-jiggle"
  >
    <span className="relative flex items-center">
      Let&apos;s talk 
      <ChevronRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  </Link>
</div>


    {/* Then big heading */}
    <h1 
  className="text-5xl md:text-8xl font-extrabold leading-tight text-transparent bg-clip-text" 
  style={{
    WebkitTextStroke: '3px white', // Increase the stroke width here
    color: 'transparent',
  }}
>
  GROWTH SYSTEMS <br className="hidden md:inline" /> FOR ONLINE BIZ
</h1>


  </div>
</section>

  
      
<CaseStudiesSection/>


     {/* Blog Section */}
     <BlogSection posts={posts} />
      <Footer/> 
      </div>  
  );
}

