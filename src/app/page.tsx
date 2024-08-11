import { CardSpotlightDemo } from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection"
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="">
        <HeroSection />
        <CardSpotlightDemo />
        <WhyChooseUs />
        <MusicSchoolTestimonials />
        <UpcomingWebinars />
        <Instructors />
        {/* <Footer /> */}
      </div>
    </main>

  );
}

/* CSS NOTES: bg-black/30 after slash opacity is given for more precise value we use [] brackets bg-black/[0.5]  */