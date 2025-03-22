'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";
import { SanityImage } from "@/types/SanityImage";
import { ArrowRight } from 'lucide-react';

type BlogCardProps = {
  title: string;
  date: string;
  image: SanityImage | null | undefined;
  slug: string; // Now correctly passing the slug
};

export const BlogCard: React.FC<BlogCardProps> = ({ title, date, image, slug }) => {
  const imageUrl = image ? urlFor(image)?.width(800).height(500).url() : "/fallback-image.jpg";

  return (
    <div className="relative bg-gradient-to-br from-blue-900/40 to-blue-700/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-blue-500/30 
      transition-all duration-300 hover:scale-105 hover:border-blue-400/50 hover:shadow-xl">
      
      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden">
        {imageUrl && (
          <Image 
            src={imageUrl} 
            alt={title} 
            width={800} 
            height={500} 
            className="object-cover transition-all duration-500 hover:scale-110"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <div className="text-blue-300 text-sm mb-2 opacity-80">{date}</div>
          <h3 className="text-2xl font-semibold text-white mb-3 leading-snug">{title}</h3>
          <Link href={`/blog/${slug}`} className="inline-flex items-center text-blue-300 hover:text-white underline">
            Read more about this article... <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Read More */}
        <Link href={`/blog/${slug}`} className="group flex items-center justify-end text-blue-300 hover:text-white transition-all">
          <span className="group-hover:underline group-hover:pr-2 transition-all text-lg">Read More</span>
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
