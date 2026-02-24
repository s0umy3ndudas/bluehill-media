import Image from "next/image";
import { BwFooter } from "@/components/BwFooter";
import { BwNavbar } from "@/components/BwNavbar";

export default function AboutUsPage() {
  return (
    <main className="bg-white text-gray-900">
      <BwNavbar />

      {/* Hero Section */}
      <section className="px-6 py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          About Bluehill Media
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
         At Bluehill Media we help SaaS founders with high-converting
          explainer videos and product animations, simplifying complex software
          through strategic storytelling and precision-crafted motion design.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100 max-w-6xl mx-auto"></div>

      {/* Founders Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Meet the team!  
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Founder 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-56 mb-6">
              <Image
                src="https://www.soumyendudas.com/profile.jpg"
                alt="Som Das - Co Founder of Bluehill Media"
                fill
                className="rounded-3xl object-cover shadow-md"
              />
            </div>
            <h3 className="text-xl font-semibold">Som Das</h3>
            <p className="text-gray-500 mt-1">Co-Founder</p>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-56 mb-6">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4E03AQGOL64KruVzWg/profile-displayphoto-scale_200_200/B4EZqBCUbaKMAc-/0/1763101462412?e=1773273600&v=beta&t=DLY7PjGT31ENK7BlQUbe_IN2VLc6sgM84wiRtcwIW3U"
                alt="Dilli Varaprasad - Co Founder of Bluehill Media"
                fill
                className="rounded-3xl object-cover shadow-md"
              />
            </div>
            <h3 className="text-xl font-semibold">Dilli Varaprasad</h3>
            <p className="text-gray-500 mt-1">Co-Founder </p>
          </div>

        </div>
      </section>

      <BwFooter />
    </main>
  );
}