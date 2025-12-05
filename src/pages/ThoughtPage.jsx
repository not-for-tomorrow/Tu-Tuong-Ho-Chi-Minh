import { HeroSection, ContextSection, ReturnHomeSection } from "../components2/HeroAndContext";
import { VietMinhSection, TrainingSection, LiberationArmySection } from "../components2/PreparationSections";
import { TimelineSection } from "../components2/TimelineSection";
import { FamineSection, AugustRevolutionSection } from "../components2/RevolutionSections";
import Footer from "../components/Footer";

const ThoughtPage = () => (
  <div className="min-h-screen bg-slate-50">
    {/* Phần 1: Giới thiệu & Bối cảnh */}
    <HeroSection />
    <ContextSection />
    <ReturnHomeSection />
    
    {/* Phần 2: Chuẩn bị lực lượng */}
    <VietMinhSection />
    <TrainingSection />
    <LiberationArmySection />
    
    {/* Phần 3: Timeline dọc các mốc sự kiện */}
    <TimelineSection />
    
    {/* Phần 4: Nạn đói & Cách mạng */}
    <FamineSection />
    <AugustRevolutionSection />
    
    {/* Footer */}
    <Footer />
  </div>
);

export default ThoughtPage;