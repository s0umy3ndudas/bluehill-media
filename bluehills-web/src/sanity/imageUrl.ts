/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client"; // Ensure this points to your Sanity client

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return source ? builder.image(source) : null;
}
