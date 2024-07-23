import Image from "next/image";
import Header from "./home/header";
import UISection from "./component/ui/ultimatepage";
import ExceptionalSolutions from "./component/ui/exceptional";
import HowItWorks from "./component/ui/Howitworks";
import Pricing from "./component/ui/PricingTables";
import TestimonialSlider from "./component/ui/Testimonials";
import HeroSection from "./component/ui/Carousel";
export default function Home() {
  return (
    <main>
      <Header />
      <UISection />
      <ExceptionalSolutions />
      <HowItWorks />
      <Pricing />
      <HeroSection />
      <TestimonialSlider />
    </main>
  );
}
