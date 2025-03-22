'use client';

import React from 'react';
import Image from "next/image";

type BlogImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

export const BlogImage = ({ src, alt, width, height, className }: BlogImageProps) => {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
      onError={(e) => {
        console.error('Error loading image:', src);
        e.currentTarget.src = '/images/fallback-blog.jpg';
      }}
    />
  );
}; 