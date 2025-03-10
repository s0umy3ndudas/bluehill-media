// components/TableOfContents.tsx
"use client";
import { useEffect, useState } from "react";

export interface Heading {
  text: string;
  level: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState('');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );
    
    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });
    
    return () => {
      headings.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-32">
      <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {headings.map(heading => (
            <li 
              key={heading.id}
              className={`
                ${heading.level === 'h1' ? 'ml-0' : heading.level === 'h2' ? 'ml-4' : 'ml-8'}
                ${activeId === heading.id ? 'font-semibold text-blue-600' : 'text-gray-700 hover:text-blue-500'}
                transition-colors duration-200
              `}
            >
              <a 
                href={`#${heading.id}`}
                className="block py-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};