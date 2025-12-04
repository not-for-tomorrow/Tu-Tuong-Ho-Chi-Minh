// App.jsx
import { useRef } from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import BookSection from "./components/Book/BookSection";
import BookmarkSection from "./components/Bookmark/BookmarkSection";
import { DescriptionSection } from "./components/Description/DescriptionSection";
import BookTypeSection from "./components/Booktype/BookTypeSection";
import { Footer } from "./components/Footer";
import Introduction from "./components/Introduction";
import Applicability from "./components/Applicability";
import ShowTechnology from "./components/Showtechnology/Showtechnology";
import ShowBannerTechnology from "./components/Showtechnology/Showbannertechnology";
import "./index.css";

function App() {
  const bookRef = useRef();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <main className="scroll-smooth">
        <Banner />
        
        <Introduction />
        
        {/* Book & Bookmark Section */}
        <section className="w-full bg-gradient-to-b from-red-50 to-white">
          <div className="max-w-[1800px] mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[950px] gap-4">
              <div className="lg:col-span-2 h-full rounded-2xl overflow-hidden shadow-2xl">
                <BookSection ref={bookRef} />
              </div>
              <aside className="lg:col-span-1 h-full rounded-2xl overflow-hidden shadow-2xl">
                <BookmarkSection />
              </aside>
            </div>
          </div>
        </section>

        <DescriptionSection />

        <BookTypeSection canvasHeight="800px" />

        <Applicability />
        
        <ShowBannerTechnology />
        <ShowTechnology />
      </main>

      <Footer bookRef={bookRef} />
    </div>
  );
}

export default App;