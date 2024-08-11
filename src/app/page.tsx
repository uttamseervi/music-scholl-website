import { CardSpotlightDemo } from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection"
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="">
        <HeroSection />
        <CardSpotlightDemo />
        <WhyChooseUs />
        <MusicSchoolTestimonials />
      </div>
    </main>

  );
}

/* CSS NOTES: bg-black/30 after slash opacity is given for more precise value we use [] brackets bg-black/[0.5]  */