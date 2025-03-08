import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define Case Study type for TypeScript safety
export interface CaseStudy {
    slug: string;
    title: string;
    description: string;
    date: string;
    content: string;
}

const caseStudiesDirectory = path.join(process.cwd(), "src/content/case-studies");

// 🔹 Get all case studies (for the listing page)
export function getAllCaseStudies(): CaseStudy[] {
    const fileNames = fs.readdirSync(caseStudiesDirectory);

    return fileNames
        .map((fileName) => {
            const fullPath = path.join(caseStudiesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug: fileName.replace(".mdx", ""),
                title: data.title || "Untitled Case Study",
                description: data.description || "No description available.",
                date: data.date || new Date().toISOString(),
                content,
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by latest date
}

// 🔹 Get a single case study by slug (for individual pages)
export function getCaseStudyBySlug(slug: string): CaseStudy | null {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title || "Untitled Case Study",
        description: data.description || "No description available.",
        date: data.date || new Date().toISOString(),
        content,
    };
}
