// app/case-studies/page.tsx
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import CaseStudyBox from "@/components/CaseStudyBox";

const caseStudies = [
  { slug: "ai-automation", title: "AI Automation in Healthcare", imageUrl: "https://source.unsplash.com/random/800x600/?healthcare,technology" },
  { slug: "ml-predictive", title: "Machine Learning for Predictive Analytics", imageUrl: "https://source.unsplash.com/random/800x600/?machinelearning,data" },
  { slug: "cyber-security", title: "Advancements in Cyber Security", imageUrl: "https://source.unsplash.com/random/800x600/?cybersecurity" },
  { slug: "blockchain-finance", title: "Blockchain Transformations in Finance", imageUrl: "https://source.unsplash.com/random/800x600/?blockchain,finance" },
  { slug: "iot-smart-cities", title: "IoT Applications in Smart Cities", imageUrl: "https://source.unsplash.com/random/800x600/?iot,smartcity" },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 text-white">
      <Navbar />
      <h1 className="text-2xl font-bold">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {caseStudies.map((study) => (
          <CaseStudyBox key={study.slug} slug={study.slug} title={study.title} imageUrl={study.imageUrl} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
