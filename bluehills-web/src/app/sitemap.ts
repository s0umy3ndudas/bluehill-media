import { MetadataRoute } from "next";
import { client } from "@/lib/sanity"; // Adjust path if needed

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await client.fetch(`*[_type == "post"]{slug}`);

  return [
    { url: "https://bluehill.media/", lastModified: new Date() },
    { url: "https://bluehill.media/about", lastModified: new Date() },
    { url: "https://bluehill.media/services", lastModified: new Date() },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...blogPosts.map((post:any) => ({
      url: `https://bluehill.media/blog/${post.slug.current}`,
      lastModified: new Date(),
    })),
  ];
}
