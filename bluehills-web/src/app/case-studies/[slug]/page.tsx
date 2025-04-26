import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BwNavbar } from '@/components/BwNavbar';
import { BwFooter } from '@/components/BwFooter';

// Case Study Data (synchronous)
type Section = {
  title: string;
  description: string;
};

type CaseStudy = {
  title: string;
  client: string;
  overview: string;
  sections: Section[];
  key: {
    title: string;
    description: string;
  };
};
// All case studies
const caseStudies: Record<string, CaseStudy> = {
    'fynx-cold-email-systems': {
      title: 'Cold Email Systems Drove 3x Pipeline Growth for B2B SaaS Company',
      client: 'FYNX',
      overview: `FYNX, an up-and-coming B2B SaaS platform, struggled to build a predictable outbound sales engine. We joined forces as fractional growth partners for one quarter, during which time their monthly lead flow tripled and their demo booking rate doubled.`,
      sections: [
        {
          title: 'Precision Targeting & Outreach Sequencing',
          description: `Before partnering with us, FYNX relied on inconsistent cold email strategies. We rebuilt their systems with segmented lists, targeted messaging, and a multi-touch email sequence that increased reply rates by over 60%.`,
        },
        {
          title: 'Lead Management Automation',
          description: `We integrated HubSpot CRM workflows to automatically tag, track, and score inbound and outbound leads, dramatically improving sales team efficiency and speeding up follow-up times.`,
        },
      ],
      key: {
        title: 'Consistency at Scale',
        description: `Cold email works when you can deliver consistent value at scale. Our systems empowered FYNX's small team to maintain personalized outreach across hundreds of prospects weekly, without burning out.`,
      },
    },
  
    'nova-instagram-growth': {
      title: 'Instagram Growth System Increased Audience Reach by 450%',
      client: 'NOVA ATHLETICS',
      overview: `NOVA Athletics, a boutique fitness apparel brand, needed a way to grow their Instagram following without sinking endless hours into manual engagement. In two months, their organic reach grew by over 450%, and their follower count more than quadrupled.`,
      sections: [
        {
          title: 'Smart Scraping & Audience Targeting',
          description: `We deployed automated tools to identify and engage with hyper-targeted accounts based on interest categories and competitor audiences, ensuring every new follower was a perfect fit.`,
        },
        {
          title: 'Viral Content Cadence',
          description: `With a daily mix of reels, carousels, and stories optimized for engagement, NOVA Athletics' content not only attracted attention but sustained it—boosting profile visits and follower retention rates dramatically.`,
        },
      ],
      key: {
        title: 'Quality Connections at Scale',
        description: `It's not just about more followers—it's about the *right* followers. By focusing on smart targeting and consistent high-value content, we helped NOVA build a community that actually converts.`,
      },
    },
  
    'ascendu-coaching-funnel': {
      title: 'Coaching Funnel Optimization Boosted Enrollment Rates by 85%',
      client: 'ASCENDU',
      overview: `AscendU, a personal development coaching platform, had a great product but a clunky enrollment experience. We collaborated for a quarter and saw their coaching enrollment rates increase by 85%, while drastically shortening their sales cycle.`,
      sections: [
        {
          title: 'Streamlined Onboarding Journey',
          description: `We rebuilt their enrollment process inside ClickFunnels and Kajabi, introducing smart forms, automated reminder sequences, and real-time qualification tracking.`,
        },
        {
          title: 'Improved Content Touchpoints',
          description: `We crafted a nurturing sequence of mini-videos, case studies, and testimonials to plug into the sales process, boosting lead warmth and increasing conversion rates from call to close.`,
        },
      ],
      key: {
        title: 'Frictionless Sales Experience',
        description: `People don't like to be "sold"—they like to be understood. By optimizing the flow from interest to enrollment, we made it easy for prospects to say "yes" at every step.`,
      },
    },
  
    'ember-content-systems': {
      title: 'Content Systems Drove 5x Monthly Output and Doubled Engagement',
      client: 'EMBER',
      overview: `EMBER, a wellness brand, knew content was critical but struggled to produce at scale without sacrificing quality. Within three months of system implementation, they increased content output by 5x and saw engagement rates double.`,
      sections: [
        {
          title: 'Centralized Content Pipeline',
          description: `We introduced an Airtable-based editorial calendar paired with AI-assisted brainstorming sessions, helping their small marketing team plan and execute 60+ pieces of content monthly.`,
        },
        {
          title: 'Distribution Expansion',
          description: `Content wasn't just created—it was repurposed intelligently across Instagram, TikTok, YouTube Shorts, and LinkedIn, maximizing reach from each original piece.`,
        },
      ],
      key: {
        title: 'Systems That Free Up Creativity',
        description: `The best systems don't replace creativity—they amplify it. By giving EMBER's team the structure they needed, we unlocked more of their creative potential at scale.`,
      },
    },
};
// Page Component (Synchronous)
  export default async function CaseStudyPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
  // Await params to access slug
  const { slug } = await params;

  const study = caseStudies[slug];

  // Handle not found case
  if (!study) {
    notFound();
  }

  return (
    <div className="bg-white">
      <BwNavbar />
      <div className="container mx-auto max-w-4xl space-y-12 py-16">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{study.title}</h1>
          <p className="text-blue-600 mt-2">{study.client}</p>
        </div>

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p className="text-lg text-gray-700">{study.overview}</p>
        </section>

        {/* Sections */}
        {study.sections.map((section, index) => (
          <section key={index}>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{`${index + 1}. ${section.title}`}</h3>
            <p className="text-gray-700">{section.description}</p>
          </section>
        ))}

        {/* The Key */}
        <section className="border-t border-gray-300 pt-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">The Key</h2>
          <h3 className="text-xl text-black font-bold mb-2">{study.key.title}</h3>
          <p className="text-gray-700">{study.key.description}</p>
        </section>

        {/* Other Case Studies */}
        <section className="mt-12 px-4 md:px-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Case Studies</h2>
          <ul className="space-y-6">
            {Object.keys(caseStudies).map((caseStudySlug) => (
              slug !== caseStudySlug && (
                <li key={caseStudySlug}>
                  <Link
                    href={`/case-studies/${caseStudySlug}`}
                    className="flex items-center gap-3 text-xl font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300"
                  >
                    <i className={`${
                      caseStudySlug.includes('email') ? 'fas fa-envelope' :
                      caseStudySlug.includes('instagram') ? 'fab fa-instagram' :
                      caseStudySlug.includes('coaching') ? 'fas fa-user-graduate' :
                      caseStudySlug.includes('content') ? 'fas fa-fire' :
                      'fas fa-file-alt'
                    } text-lg`}></i>
                    <span>{caseStudies[caseStudySlug].title.split(' ').slice(0, 3).join(' ')}...</span>
                  </Link>
                </li>
              )
            ))}
          </ul>
        </section>
      </div>
      <BwFooter />
    </div>
  );
}