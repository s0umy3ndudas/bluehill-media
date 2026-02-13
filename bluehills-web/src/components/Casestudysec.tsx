'use client';

import Link from 'next/link';
import { useState } from "react";

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);

    // youtu.be/<id>
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.slice(1);
    }

    // youtube.com/watch?v=<id>
    return u.searchParams.get('v');
  } catch {
    return null;
  }
}
   



export function HoverYouTubePreview({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [muted, setMuted] = useState(true);

  const id = getYouTubeId(url);

  if (!id) return null;

  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden bg-black"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setMuted(true);
      }}
    >
      {!hovered ? (
        <img
          src={thumb}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}

      {hovered && (
        <div className="absolute bottom-2 left-2 right-2 flex justify-between pointer-events-none">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMuted((m) => !m);
            }}
            className="pointer-events-auto bg-black/70 text-white text-xs px-2 py-1 rounded"
          >
            {muted ? 'Unmute' : 'Mute'}
          </button>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto bg-black/70 text-white text-xs px-2 py-1 rounded"
          >
            YouTube →
          </a>
        </div>
      )}
    </div>
  );
}

const CaseStudiesSection = () => {
  // Your case studies data here

  
  const caseStudies = {
    'vocallabs-product-demo': {
      title: 'Product Demo Video Increased Feature Clarity for AI Voice Platform',
      client: 'VocalLabs',
      video: 'https://youtu.be/XeIrrErzEbw?si=uFFLrHkeyyRDVT4L',
      overview: `VocalLabs is an AI voice technology company that needed a clear and engaging product demo to showcase its core features and platform capabilities. Bluehill Media produced a structured SaaS demo video focused on real product flows, helping the team communicate value faster and improve product understanding for potential customers.`,
    },
  
    'vocallabs-brand-identity': {
      title: 'Brand Identity Video for AI SaaS Platform Launch',
      client: 'VocalLabs',
      video: 'https://youtu.be/6fndBvxRTpM?si=eQXSlSkwzfR6aNNm',
      overview: `VocalLabs partnered with Bluehill Media to create a visual identity and brand-focused product video to support its AI SaaS launch. The video was designed to communicate the platform’s positioning, product vision, and AI capabilities in a clear and professional format for marketing and website use.`,
    },
  
    'vocalstack-product-demo': {
      title: 'SaaS Demo Video for AI Voice Automation Platform',
      client: 'VocalStack',
      video: 'https://youtu.be/gMAy_V3xQ5A?si=A1kwRL4qt_23jbqq',
      overview: `VocalStack is an AI voice automation SaaS product that required a concise walkthrough of its workflow and automation features. Bluehill Media produced a focused product demo video highlighting real use cases and system flows to support onboarding and sales conversations.`,
    },
  
    'vocalhire-product-demo': {
      title: 'Product Walkthrough Video for AI Hiring Platform',
      client: 'VocalHire',
      video: 'https://youtu.be/zHzN6MVXM20?si=Cb4z8zJqdKWq1hmt',
      overview: `VocalHire is an AI-powered hiring and screening platform that needed a clear product walkthrough to demonstrate its recruitment workflows. Bluehill Media delivered a SaaS demo video explaining the end-to-end hiring process, helping prospects quickly understand the platform’s value and functionality.`,
    },
  };

  return (
    <section id="case-studies" className="pt-32 pb-16 bg-white">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-12">
        What We Have Delivered
      </h2>
{/* Case Studies Row – small screens */}
<div className="overflow-x-auto flex space-x-6 px-4 py-4 md:hidden">
  {Object.entries(caseStudies).map(([slug, study]) => (
    <div
      key={slug}
      className="flex-shrink-0 w-80 p-6 border-2 border-blue-600 rounded-xl shadow-lg bg-white"
    >
      <HoverYouTubePreview
        url={study.video}
        title={study.title}
      />

      <Link
        href={`/case-studies/${slug}`}
        className="block mt-4 text-lg font-semibold text-blue-600 hover:text-blue-800"
      >
        {study.title}
      </Link>

      <p className="mt-2 text-gray-600 text-sm">
        {study.client}
      </p>

      <p className="mt-2 text-gray-500 text-sm">
        {study.overview.slice(0, 110)}...
      </p>
    </div>
  ))}
</div>


{/* Case Studies Grid – large screens */}
<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-4">
  {Object.entries(caseStudies).map(([slug, study]) => (
    <div
      key={slug}
      className="p-6 border-2 border-blue-600 rounded-xl shadow-lg bg-white"
    >
      <HoverYouTubePreview
        url={study.video}
        title={study.title}
      />

      <Link
        href={`/case-studies/${slug}`}
        className="block mt-4 text-lg font-semibold text-blue-600 hover:text-blue-800"
      >
        {study.title}
      </Link>

      <p className="mt-2 text-gray-600 text-sm">
        {study.client}
      </p>

      <p className="mt-2 text-gray-500 text-sm">
        {study.overview.slice(0, 110)}...
      </p>
    </div>
  ))}
</div>
    </section>
  );
};

export { CaseStudiesSection };