import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header as NotebookHeader } from "./components/Header";
import { Header as ThoughtHeader } from "./components2/Header";

import NotebookPage from "./pages/NotebookPage";
import ThoughtPage from "./pages/ThoughtPage";
import "./index.css";

function App() {
  const [pageState, setPageState] = useState("notebook");

  const togglePage = () => {
    setPageState(prev => prev === "notebook" ? "thought" : "notebook");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Wrapper ngoài cùng có thể để màu đỏ để an toàn tuyệt đối
    <div className="min-h-screen bg-red-800 relative">
      
      {pageState === "notebook" ? (
        <NotebookHeader onTogglePage={togglePage} currentPage="notebook" />
      ) : (
        <ThoughtHeader onTogglePage={togglePage} />
      )}
      
      <AnimatePresence mode="wait">
        {pageState === "notebook" ? (
          <motion.div
            key="notebook"
            // ĐÃ XÓA "bg-white" ở đây. 
            // Để w-full và relative để nội dung hiển thị đúng.
            className="w-full relative z-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <NotebookPage />
          </motion.div>
        ) : (
          <motion.div
            key="thought"
            // Trang Thought vẫn cần nền trắng/xám
            className="w-full bg-slate-50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ThoughtPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;