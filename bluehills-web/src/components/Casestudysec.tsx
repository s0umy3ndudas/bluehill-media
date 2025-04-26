
import Link from 'next/link';

const CaseStudiesSection = () => {
  // Your case studies data here
  const caseStudies = {
    'fynx-cold-email-systems': {
      title: 'Cold Email Systems Drove 3x Pipeline Growth for B2B SaaS Company',
      client: 'FYNX',
      overview: `FYNX, an up-and-coming B2B SaaS platform, struggled to build a predictable outbound sales engine. We joined forces as fractional growth partners for one quarter, during which time their monthly lead flow tripled and their demo booking rate doubled.`,
    },
    'nova-instagram-growth': {
      title: 'Instagram Growth System Increased Audience Reach by 450%',
      client: 'NOVA ATHLETICS',
      overview: `NOVA Athletics, a boutique fitness apparel brand, needed a way to grow their Instagram following without sinking endless hours into manual engagement. In two months, their organic reach grew by over 450%, and their follower count more than quadrupled.`,
    },
    'ascendu-coaching-funnel': {
      title: 'Coaching Funnel Optimization Boosted Enrollment Rates by 85%',
      client: 'ASCENDU',
      overview: `AscendU, a personal development coaching platform, had a great product but a clunky enrollment experience. We collaborated for a quarter and saw their coaching enrollment rates increase by 85%, while drastically shortening their sales cycle.`,
    },
    'ember-content-systems': {
      title: 'Content Systems Drove 5x Monthly Output and Doubled Engagement',
      client: 'EMBER',
      overview: `EMBER, a wellness brand, knew content was critical but struggled to produce at scale without sacrificing quality. Within three months of system implementation, they increased content output by 5x and saw engagement rates double.`,
    },
  };

  return (
    <section id="case-studies" className="pt-32 pb-16 bg-white">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-12">
        What We Have Delivered
      </h2>

      {/* Case Studies Row for smaller screens */}
      <div className="overflow-x-auto flex space-x-6 px-4 py-4 md:hidden">
        {Object.entries(caseStudies).map(([slug, study]) => (
          <div
            key={slug}
            className="flex-shrink-0 w-80 p-6 border-2 border-blue-600 rounded-xl shadow-lg"
          >
            <Link
              href={`/case-studies/${slug}`}
              className="text-2xl font-semibold text-blue-600 hover:text-blue-800"
            >
              {study.title}
            </Link>
            <p className="mt-4 text-gray-600 text-lg">{study.client}</p>
            <p className="mt-2 text-gray-500 text-sm">{study.overview.slice(0, 120)}...</p>
          </div>
        ))}
      </div>

      {/* Case Studies Grid for larger screens */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-4">
        {Object.entries(caseStudies).map(([slug, study]) => (
          <div
            key={slug}
            className="p-6 border-2 border-blue-600 rounded-xl shadow-lg"
          >
            <Link
              href={`/case-studies/${slug}`}
              className="text-2xl font-semibold text-blue-600 hover:text-blue-800"
            >
              {study.title}
            </Link>
            <p className="mt-4 text-gray-600 text-lg">{study.client}</p>
            <p className="mt-2 text-gray-500 text-sm">{study.overview.slice(0, 120)}...</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { CaseStudiesSection };