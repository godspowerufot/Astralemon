import HeroSection from "../component/ui/Carousel";
import ExceptionalSolutions from "../component/ui/exceptional";
import FAQSection from "../component/ui/FAQSection";
import HowItWorks from "../component/ui/Howitworks";
import PricingPage from "../component/ui/pricingpage";
import TestimonialSlider from "../component/ui/Testimonials";
import UISection from "../component/ui/ultimatepage";
import Header from "../home/header";
import MyApp from "../_app";
import HeroSectiontwo from "../component/ui/Carouseltwo";
export default function Page() {
  return (
    <main className=" overflow-x-hidden">
      <MyApp />

      <Header />
      <UISection />
      <ExceptionalSolutions />
      <HowItWorks />
       <HeroSection />
      <PricingPage />
     <HeroSectiontwo/>
      <FAQSection />
      <TestimonialSlider />
    </main>
  );
}
