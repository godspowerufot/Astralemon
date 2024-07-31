import Header from "./home/header";
import UISection from "./component/ui/ultimatepage";
import ExceptionalSolutions from "./component/ui/exceptional";
import HowItWorks from "./component/ui/Howitworks";
import TestimonialSlider from "./component/ui/Testimonials";
import HeroSection from "./component/ui/Carousel";
import FAQSection from "./component/ui/FAQSection";
import PricingPage from "./component/ui/pricingpage";
export default function Page() {
  return (
    <main>
      <Header />
      <UISection />
      <ExceptionalSolutions />
      <HowItWorks />
      <PricingPage />
      <HeroSection />
      <FAQSection />
      <TestimonialSlider />
    </main>
  );
}
