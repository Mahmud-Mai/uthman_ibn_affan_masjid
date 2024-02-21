import DonationSection from "./DonationSection";
import Hero from "./Hero";
import LecturesSection from "./LecturesSection";
import ServicesSection from "./ServicesSection";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <LecturesSection />
      <ServicesSection />
      <DonationSection />
    </div>
  );
};

export default Homepage;
