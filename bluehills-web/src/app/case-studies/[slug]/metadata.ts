import { getCaseStudyBySlug } from "@/components/lib/getCaseStudies";
import { Metadata } from "next";

interface CaseStudyParams {
    params: { slug: string };
}

export async function generateMetadata({ params }: CaseStudyParams): Promise<Metadata> {
    const caseStudy = getCaseStudyBySlug(params.slug);

    if (!caseStudy) {
        return {
            title: "Case Study Not Found",
            description: "This case study does not exist.",
        };
    }

    return {
        title: caseStudy.title,
        description: caseStudy.description,
        openGraph: {
            title: caseStudy.title,
            description: caseStudy.description,
            url: `/case-studies/${caseStudy.slug}`,
            type: "article",
        },
    };
}
