import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { BwNavbar } from "@/components/BwNavbar";
import { BwFooter } from "@/components/BwFooter";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(500).url()
    : null;

  return (
    <main className="min-h-screen">
      {/* Full-Width Navbar */}
      <div className="w-full bg-white shadow-md">
        <div className="container mx-auto">
          <BwNavbar />
        </div>
      </div>

      {/* Hero Section */}
      <header className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">{post.title}</h1>
        <p className="text-lg mt-2 opacity-80">
          Published: {new Date(post.publishedAt).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      {/* Blog Content */}
      <section className="container mx-auto max-w-3xl p-8">
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← Back to posts
        </Link>

        {/* Blog Image */}
        {postImageUrl && (
          <div className="mt-6">
            <Image
              src={postImageUrl}
              alt={post.title}
              className="w-full h-auto rounded-xl shadow-lg"
              width="1200"
              height="500"
            />
          </div>
        )}

        {/* Blog Body with Black Text */}
        <div className="prose prose-lg mt-8 text-black">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </section>

      {/* Footer */}
      <BwFooter />
    </main>
  );
}
