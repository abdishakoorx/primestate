import FooterSection from "./_components/FooterSection";
import HeroSection from "./_components/HeroSection";
import HomeSection from "./_components/HomeSection";
import OwnerSection from "./_components/OwnerSection";
import Testemonial from "./_components/Testemonial";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HomeSection />
      <OwnerSection />
      <Testemonial />
      <FooterSection />
    </div>
  );
}
