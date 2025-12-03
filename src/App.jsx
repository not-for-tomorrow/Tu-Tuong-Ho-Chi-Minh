import { useRef } from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import BookSection from "./components/Book/BookSection";
import BookmarkSection from "./components/Bookmark/BookmarkSection";
import { DescriptionSection } from "./components/Description/DescriptionSection";
import BookTypeSection from "./components/Booktype/BookTypeSection";
import { Footer } from "./components/Footer";
import Introduction from "./components/Introduction"; // Thêm dòng này
import Applicability from "./components/Applicability";
import ShowTechnology from "./components/Showtechnology/Showtechnology";
import ShowBannerTechnology from "./components/Showtechnology/Showbannertechnology";
import "./index.css";

function App() {
  const bookRef = useRef();

  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <Banner />
        <Introduction /> {/* Chèn vào đây */}
        <section className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[950px] gap-0">
            <div className="lg:col-span-2 h-full">
              <BookSection ref={bookRef} />
            </div>
            <aside className="lg:col-span-1 h-full">
              <BookmarkSection />
            </aside>
          </div>
        </section>

        <DescriptionSection />

        <BookTypeSection
          canvasHeight="800px"
        />

        <Applicability/>
        
        <ShowBannerTechnology/>
        <ShowTechnology />
        
        

        <Footer bookRef={bookRef} />
      </main>
    </>
  );
}

export default App;