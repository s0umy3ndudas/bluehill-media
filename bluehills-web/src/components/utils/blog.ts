/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/blog.ts
import { Heading } from "@/components/TableOfContents";

export function extractHeadings(body: any[]): Heading[] {
  if (!Array.isArray(body)) return [];
  
  return body
    .filter(
      block => 
        block._type === 'block' && 
        ['h1', 'h2', 'h3'].includes(block.style)
    )
    .map(block => ({
      text: block.children
        .filter((child: { _type: string; }) => child._type === 'span')
        .map((span: { text: any; }) => span.text)
        .join(''),
      level: block.style,
      // Create an ID by slugifying the text
      id: block.children
        .filter((child: { _type: string; }) => child._type === 'span')
        .map((span: { text: any; }) => span.text)
        .join('')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
    }));
}