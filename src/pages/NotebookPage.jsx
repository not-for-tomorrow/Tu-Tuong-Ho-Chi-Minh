import { useRef } from "react";
import { Banner } from "../components/Banner";
import BookSection from "../components/Book/BookSection";
import BookmarkSection from "../components/Bookmark/BookmarkSection";
import { DescriptionSection } from "../components/Description/DescriptionSection";
import BookTypeSection from "../components/Booktype/BookTypeSection";
import Introduction from "../components/Introduction";
import Applicability from "../components/Applicability";
import ShowTechnology from "../components/Showtechnology/Showtechnology";
import ShowBannerTechnology from "../components/Showtechnology/Showbannertechnology";
import AboutUs from "../components/AboutUs";
import { Footer } from "../components/Footer";

const NotebookPage = () => {
  const bookRef = useRef();

  return (
    <div className="min-h-screen bg-white">
      <main className="scroll-smooth">
        <div id="banner" className="-mt-[80px] pt-[80px] bg-red-800">
          <Banner />
        </div>
        
        <section id="introduction">
          <Introduction />
        </section>
        
        <section id="book-section" className="w-full bg-gradient-to-b from-red-50 to-white">
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

        <section id="description">
          <DescriptionSection />
        </section>

        <section id="thought">
          <BookTypeSection canvasHeight="800px" />
        </section>

        <section id="applicability">
          <Applicability />
        </section>
        
        <section id="technology-banner">
          <ShowBannerTechnology />
        </section>
        <section id="technology">
          <ShowTechnology />
        </section>

        {/* About Us Section */}
        <section id="about-us">
          <AboutUs />
        </section>
      </main>

      <footer id="contact">
        <Footer bookRef={bookRef} />
      </footer>
    </div>
  );
};

export default NotebookPage;