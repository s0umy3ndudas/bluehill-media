import { getCaseStudyBySlug } from "@/components/lib/getCaseStudies";

import { notFound } from "next/navigation";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
    const caseStudy = await getCaseStudy(params.slug); // ✅ Fetch case study asynchronously

    if (!caseStudy) return notFound();

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 text-white">
            <Navbar /> {/* ✅ Include the Navbar */}
            <div className="max-w-4xl mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold mb-4">{caseStudy.title}</h1>
                <p className="text-lg text-gray-300">{caseStudy.description}</p>
                <article className="prose prose-lg mt-6 text-white">{caseStudy.content}</article>
            </div>
            <Footer /> {/* ✅ Include the Footer */}
        </main>
    );
}

// 🔹 Async function to fetch case study
async function getCaseStudy(slug: string) {
    return getCaseStudyBySlug(slug) || null;
}