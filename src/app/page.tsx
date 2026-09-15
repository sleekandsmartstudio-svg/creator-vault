import { CheckoutModal } from "@/components/CheckoutModal";
import { CheckoutProvider } from "@/components/CheckoutContext";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Friction } from "@/components/Friction";
import { Goods } from "@/components/Goods";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { Pricing } from "@/components/Pricing";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <CheckoutProvider>
      <Header />
      <main>
        <Hero />
        <Friction />
        <Marquee />
        <Goods />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <CheckoutModal />
    </CheckoutProvider>
  );
}
