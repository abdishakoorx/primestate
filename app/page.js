import HeroSection from "@/components/Home/HeroSection";
import FeaturedSection from "@/components/Home/FeaturedSection";
import FeaturedProperties from "@/components/Home/FeaturedProperties";
import AgentsSection from "@/components/Home/AgentsSection";
import HowItWorks from "@/components/Home/HowItWorks";
import FAQSection from "@/components/Home/FAQSection";
import Testimonials from "@/components/Home/Testimonials";
import CTASection from "@/components/Home/CTASection";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <FeaturedProperties />
      <AgentsSection />
      <HowItWorks />
      <FAQSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
