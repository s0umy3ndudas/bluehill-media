import { notFound } from "next/navigation";
import Link from "next/link";
import { BwNavbar } from "@/components/BwNavbar";
import { BwFooter } from "@/components/BwFooter";

// Case Study Types
type CaseStudy = {
  title: string;
  client: string;
  video: string;
  overview: string;
};

// Updated Case Studies
const caseStudies: Record<string, CaseStudy> = {
  "vocallabs-product-demo": {
    title: "Product Demo Video Increased Feature Clarity for AI Voice Platform",
    client: "VocalLabs",
    video: "https://youtu.be/XeIrrErzEbw?si=uFFLrHkeyyRDVT4L",
    overview: `VocalLabs is an AI voice technology company that needed a clear and engaging product demo to showcase its core features and platform capabilities. Bluehill Media produced a structured SaaS demo video focused on real product flows, helping the team communicate value faster and improve product understanding for potential customers.`,
  },

  "vocallabs-brand-identity": {
    title: "Brand Identity Video for AI SaaS Platform Launch",
    client: "VocalLabs",
    video: "https://youtu.be/6fndBvxRTpM?si=eQXSlSkwzfR6aNNm",
    overview: `VocalLabs partnered with Bluehill Media to create a visual identity and brand-focused product video to support its AI SaaS launch. The video was designed to communicate the platform’s positioning, product vision, and AI capabilities in a clear and professional format for marketing and website use.`,
  },

  "vocalstack-product-demo": {
    title: "SaaS Demo Video for AI Voice Automation Platform",
    client: "VocalStack",
    video: "https://youtu.be/gMAy_V3xQ5A?si=A1kwRL4qt_23jbqq",
    overview: `VocalStack is an AI voice automation SaaS product that required a concise walkthrough of its workflow and automation features. Bluehill Media produced a focused product demo video highlighting real use cases and system flows to support onboarding and sales conversations.`,
  },

  "vocalhire-product-demo": {
    title: "Product Walkthrough Video for AI Hiring Platform",
    client: "VocalHire",
    video: "https://youtu.be/zHzN6MVXM20?si=Cb4z8zJqdKWq1hmt",
    overview: `VocalHire is an AI-powered hiring and screening platform that needed a clear product walkthrough to demonstrate its recruitment workflows. Bluehill Media delivered a SaaS demo video explaining the end-to-end hiring process, helping prospects quickly understand the platform’s value and functionality.`,
  },
};

// Helper to convert YouTube URL to embed
function getYouTubeEmbedUrl(url: string) {
  const videoIdMatch = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : "";
  return `https://www.youtube.com/embed/${videoId}`;
}

// Page Component
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-white text-gray-900">
      <BwNavbar />

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {study.title}
          </h1>
          <p className="text-gray-500 mt-3">{study.client}</p>
        </div>

        {/* Video */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md">
          <iframe
            src={getYouTubeEmbedUrl(study.video)}
            title={study.title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>

        {/* Overview */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {study.overview}
          </p>
        </section>

        {/* Other Case Studies */}
        <section className="pt-16 border-t border-gray-100">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Other Case Studies
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.keys(caseStudies).map(
              (caseStudySlug) =>
                slug !== caseStudySlug && (
                  <Link
                    key={caseStudySlug}
                    href={`/case-studies/${caseStudySlug}`}
                    className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {caseStudies[caseStudySlug].client}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      {caseStudies[caseStudySlug].title
                        .split(" ")
                        .slice(0, 6)
                        .join(" ")}
                      ...
                    </p>
                  </Link>
                )
            )}
          </div>
        </section>
      </div>

      <BwFooter />
    </div>
  );
}