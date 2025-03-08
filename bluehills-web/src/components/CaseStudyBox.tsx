// components/CaseStudyBox.tsx
import Image from "next/image";
import Link from "next/link";

interface CaseStudyBoxProps {
  slug: string;
  title: string;
  imageUrl: string;
}

export default function CaseStudyBox({ slug, title, imageUrl }: CaseStudyBoxProps) {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image src={imageUrl} alt={title} width={800} height={600} layout="responsive" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link href={`/case-studies/${slug}`}>
          <h1 className="text-blue-600 hover:underline">Read More</h1>
        </Link>
      </div>
    </div>
  );
}
