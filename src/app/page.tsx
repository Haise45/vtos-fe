import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Services from "@/components/landing/Services";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
