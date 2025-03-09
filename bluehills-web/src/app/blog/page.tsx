import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { BwFooter } from "@/components/BwFooter";
import { BwNavbar } from "@/components/BwNavbar";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="min-h-screen">
      {/* Full-Width Navbar */}
      <div className="w-full bg-white shadow-md">
        <div className="container mx-auto">
          <BwNavbar />
        </div>
      </div>

      {/* Full-Width Header Section */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Latest Blog Posts</h1>
        <p className="text-lg mt-2 opacity-80">Stay updated with our latest insights</p>
      </header>

      {/* Blog Post List */}
      <section className="container mx-auto max-w-3xl p-8">
        <ul className="grid gap-6">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug.current}`}>
                <div className="p-6 bg-white rounded-2xl shadow-lg transition-all hover:scale-105 hover:shadow-xl cursor-pointer">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <BwFooter />
    </main>
  );
}
