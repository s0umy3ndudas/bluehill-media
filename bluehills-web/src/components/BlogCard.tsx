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
  slug: string;
};

export const BlogCard: React.FC<BlogCardProps> = ({ title, date, image, slug }) => {
  const imageUrl = image ? urlFor(image)?.width(800).height(500).url() : "/fallback-image.jpg";

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      
      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden">
        {imageUrl && (
          <Image 
            src={imageUrl} 
            alt={title} 
            width={800} 
            height={500} 
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <div className="text-sm text-gray-400 mb-2">{date}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <Link href={`/blog/${slug}`} className="inline-flex items-center text-blue-600 hover:underline">
            Read more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Bottom Read More */}
        <div className="mt-6 flex items-center justify-end">
          <Link href={`/blog/${slug}`} className="text-blue-500 flex items-center group-hover:text-blue-700 transition-colors">
            <span className="text-lg mr-1">Read More</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
