import {
  HeroSection,
  ContextSection,
  TimelineSection,
  FamineSection,
  AugustRevolutionSection,
  DocumentsSection,
} from "../components2/RevolutionSections";
import Footer from "../components2/Footer"; // Import Footer từ components

const ThoughtPage = () => (
  <div className="min-h-screen bg-slate-50">
    <HeroSection />
    <ContextSection />
    <TimelineSection />
    <FamineSection />
    <AugustRevolutionSection />
    <DocumentsSection />
    <Footer />
  </div>
);

export default ThoughtPage;