'use client';

import React from 'react';
import { BlogCard } from "./BlogCard";
import Link from "next/link";
import { SanityImage } from "@/types/SanityImage";

type BlogSectionProps = {
  posts: {
    _id: string;
    title: string;
    publishedAt: string;
    slug: { current: string };
    image?: SanityImage | null | undefined;
  }[];
};

export default function BlogSection({ posts }: BlogSectionProps) {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section id="blog" className="py-20 px-4 bg-white text-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-800">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => {
            const formattedDate = dateFormatter.format(new Date(post.publishedAt));
            return (
              <BlogCard
                key={post._id}
                title={post.title}
                date={formattedDate}
                image={post.image ?? null}
                slug={post.slug.current}
              />
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
