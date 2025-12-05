import { HeroSection, ContextSection, ReturnHomeSection } from "../components2/HeroAndContext";
import { VietMinhSection, TrainingSection, LiberationArmySection } from "../components2/PreparationSections";
import { TimelineSection } from "../components2/TimelineSection";
import { FamineSection, AugustRevolutionSection } from "../components2/RevolutionSections";
import Footer from "../components/Footer";

const ThoughtPage = () => (
  <div className="min-h-screen bg-slate-50">
    {/* Phần 1: Giới thiệu & Bối cảnh */}
    <section id="overview">
      <HeroSection />
    </section>
    <section id="context">
      <ContextSection />
    </section>

     {/* Phần 2: Timeline dọc các mốc sự kiện */}
    <section id="timeline">
      <TimelineSection />
    </section>
    <section id="return-home">
      <ReturnHomeSection />
    </section>
    
    {/* Phần 3: Chuẩn bị lực lượng */}
    <section id="preparation">
      <VietMinhSection />
      <TrainingSection />
      <LiberationArmySection />
    </section>
    
    
    {/* Phần 4: Nạn đói & Cách mạng */}
    <section id="famine">
      <FamineSection />
    </section>
    <section id="august-revolution">
      <AugustRevolutionSection />
    </section>
    
    {/* Footer */}
    <Footer />
  </div>
);

export default ThoughtPage;