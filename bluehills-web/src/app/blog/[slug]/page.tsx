/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/blog/[slug].tsx
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { BwNavbar } from "@/components/BwNavbar";
import { BwFooter } from "@/components/BwFooter";
import { TableOfContents } from "@/components/TableOfContents";
import { extractHeadings } from "@/components/utils/blog";
import Head from "next/head";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };
import {
  PortableTextReactComponents,
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";

const getComponents = (): Partial<PortableTextReactComponents> => ({
  block: {
    h1: ({  children }: PortableTextComponentProps<any>) => {
      const id = String(children)
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");
      return (
        <h1
          id={id}
          className="text-4xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-blue-500 pb-2 scroll-mt-24"
        >
          {children}
        </h1>
      );
    },
    h2: ({  children }: PortableTextComponentProps<any>) => {
      const id = String(children)
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");
      return (
        <h2
          id={id}
          className="text-3xl font-bold mt-10 mb-5 text-gray-800 border-l-4 border-blue-500 pl-3 scroll-mt-24"
        >
          {children}
        </h2>
      );
    },
    h3: ({   children }: PortableTextComponentProps<any>) => {
      const id = String(children)
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");
      return (
        <h3
          id={id}
          className="text-2xl font-semibold mt-8 mb-4 text-gray-800 relative pl-3 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-300 scroll-mt-24"
        >
          {children}
        </h3>
      );
    },
    normal: ({ children }: PortableTextComponentProps<any>) => (
      <p className="text-lg leading-relaxed my-6 text-gray-700">{children}</p>
    ),
    blockquote: ({ children }: PortableTextComponentProps<any>) => (
      <blockquote className="border-l-4 border-blue-400 pl-4 italic my-8 text-gray-600 bg-blue-50 py-3 pr-4 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <ul className="list-disc pl-6 my-6 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }: PortableTextComponentProps<any>) => (
      <ol className="list-decimal pl-6 my-6 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <li className="pl-2">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: PortableTextMarkComponentProps<any>) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: PortableTextMarkComponentProps<any>) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    code: ({ children }: PortableTextMarkComponentProps<any>) => (
      <code className="bg-gray-100 text-pink-500 px-1 py-0.5 rounded font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }: PortableTextMarkComponentProps<any>) => (
      <a
        href={value?.href || "#"}
        className="text-blue-600 hover:text-blue-800 underline transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
});

 
 


export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(500).url()
    : null;

  // Extract headings from the post body
  const headings = extractHeadings(post.body);
  
  // Get components
  const components =getComponents();
  
  // Format date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Extract author if available
  const author = post.author?.name || "Anonymous";
  
  // Extract categories if available
  const categories = post.categories?.map((cat: any) => cat.title).join(", ") || "Uncategorized";

  return (
    <>
         <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I optimize a blog for SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To optimize a blog for SEO, use keyword research, optimize meta descriptions, improve page speed, and acquire backlinks."
                }
              },
              {
                "@type": "Question",
                "name": "What are the best tools for SEO optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Some of the best SEO tools include Ahrefs, SEMrush, Google Search Console, and Yoast SEO."
                }
              }
            ]
          })}
        </script>
      </Head> 
      
     
    <main className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <div className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto">
          <BwNavbar />
        </div>
      </div>

      {/* Add spacing to account for fixed navbar */}
      <div className="pt-16"></div>

      {/* Hero Section */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-lg mt-4 opacity-90">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>{categories}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <div className="container mx-auto">
        <section className="max-w-5xl mx-auto -mt-10 relative z-20 mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - 2/3 width */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all posts
            </Link>

            {/* Blog Image */}
            {postImageUrl && (
              <div className="mb-8">
                <Image
                  src={postImageUrl}
                  alt={post.title}
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                  width="1200"
                  height="500"
                />
              </div>
            )}

            {/* Blog Body with enhanced components */}
            <div className="prose prose-lg max-w-none">
                
              {Array.isArray(post.body) && <PortableText value={post.body} components={components} />}
            </div>
            
            {/* Author section if available */}
            {post.author && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
                <div className="flex items-start">
                  {post.author.image && (
                    <Image 
                      src={urlFor(post.author.image)?.width(100).height(100).url() || ''}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="rounded-full mr-4"
                    />
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{post.author.name}</h4>
                    <p className="text-gray-600 mt-1">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Share buttons */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this post</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </button>
                <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                  </svg>
                </button>
                <button className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Table of Contents Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            <TableOfContents headings={headings} />
          </div>
        </section>
      </div>

      {/* Related Posts Section - if you have this data */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Map through related posts here */}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <BwFooter />
    </main>


    </>
  );
}