import Navbar from "@/components/Navbar";
import HeroCityscape from "@/components/HeroCityscape";
import ServicesPreview from "@/components/ServicesPreview";
import StatsBar from "@/components/StatsBar";
import BuildingExploder from "@/components/BuildingExploder";
import SectorGrid from "@/components/SectorGrid";
import WhyTimshel from "@/components/WhyTimshel";
import TrustedBy from "@/components/TrustedBy";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroText from "@/components/HeroText";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <HeroCityscape />
        <HeroText />
      </section>

      {/* Content sections */}
      <div className="relative z-10 bg-[#08081a]">
        <ServicesPreview />
        <BuildingExploder />
        <StatsBar />
        <FeaturedProjects />
        <SectorGrid />
        <WhyTimshel />
        <TrustedBy />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
