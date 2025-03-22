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
  // Create a fixed date formatter to ensure consistency
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section id="blog" className="py-20 px-4 bg-blue-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Insights</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => {
            // Format the date string in a consistent way
            const formattedDate = dateFormatter.format(new Date(post.publishedAt));
            
            return (
              <BlogCard
                key={post._id}
                title={post.title}
                date={formattedDate}
                image={post.image ?? null}
                slug={post.slug.current} // Pass the slug correctly
              />
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center">
            <p>View All Articles</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
