import { getAllCaseStudies } from "@/components/lib/getCaseStudies";

import Link from "next/link";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

export default function CaseStudyList() {
    const caseStudies = getAllCaseStudies();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 text-white">
            <Navbar />
            <main className="max-w-4xl mx-auto py-12">
                <h1 className="text-4xl font-bold mb-6 text-center">Case Studies</h1>
                <div className="space-y-6">
                    {caseStudies.map((study) => (
                        <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                            <div className="p-6 bg-blue-800 hover:bg-blue-700 transition rounded-lg">
                                <h2 className="text-2xl font-semibold">{study.title}</h2>
                                <p className="text-gray-300">{study.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer/>
        </div>
    );
}
