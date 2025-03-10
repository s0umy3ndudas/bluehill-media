import { MetadataRoute } from "next";
import { client } from "@/lib/sanity"; // Adjust path if needed

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await client.fetch(`*[_type == "post"]{slug}`);

  return [
    { url: "https://bluehillsai.com/", lastModified: new Date() },
    { url: "https://bluehillsai.com/about", lastModified: new Date() },
    { url: "https://bluehillsai.com/services", lastModified: new Date() },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...blogPosts.map((post:any) => ({
      url: `https://bluehillsai.com/blog/${post.slug.current}`,
      lastModified: new Date(),
    })),
  ];
}
