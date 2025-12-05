import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, Html, useTexture } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { X, ArrowLeft } from "lucide-react";
import { Experience } from "../components/Book/Experience";
import { UI } from "../components/Book/UI";
import { Book } from "../components/Book/Book";
import { BOOK_LIBRARY, currentBookAtom } from "../state/library";
import { Cache } from "three";

const FullscreenBookPage = () => {
  const navigate = useNavigate();
  const [bookIndex] = useAtom(currentBookAtom);
  const pages = BOOK_LIBRARY[bookIndex].pages;

  // Lưu renderer để dispose khi unmount
  const glRef = useRef(null);

  useEffect(() => {
    // Preload textures (nên cân nhắc preload theo batch nếu số lượng lớn)
    pages.forEach((p) => {
      useTexture.preload(`textures/${p.front}.jpg`);
      useTexture.preload(`textures/${p.back}.jpg`);
    });
    useTexture.preload(`textures/book-cover-roughness.jpg`);
    useTexture.preload(`textures/ruled-paper.jpg`);

    // Cleanup: clear cache & giải phóng renderer khi rời trang
    return () => {
      try {
        Cache.clear();
      } catch (e) {}
      if (glRef.current) {
        try {
          glRef.current.dispose();
          // Thử ép mất context để browser giải phóng VRAM nhanh (nếu API có)
          if (glRef.current.forceContextLoss) {
            glRef.current.forceContextLoss();
          }
          // Ngắt tham chiếu tới canvas
          glRef.current.domElement = null;
        } catch (e) {} finally {
          glRef.current = null;
        }
      }
    };
  }, [pages]);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900 z-50">
      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-red-900/90 backdrop-blur-md border-b-2 border-yellow-500">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại</span>
          </button>

          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-yellow-400" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <h1 className="text-xl lg:text-2xl font-bold text-yellow-400">Sổ Tay 3D - Toàn Màn Hình</h1>
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-yellow-400" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          <button
            onClick={handleGoBack}
            className="p-2 rounded-lg hover:bg-red-700/50 text-yellow-400 hover:text-yellow-300 transition-colors"
            title="Đóng"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

      {/* 3D Canvas - Full screen */}
      <div className="absolute inset-0 pt-[65px]">
        <div className="absolute inset-4 top-[80px] border-2 border-yellow-500/30 rounded-xl pointer-events-none z-10"></div>

        <Canvas
          shadows
          gl={{
            logarithmicDepthBuffer: true,
            preserveDrawingBuffer: false,       // giảm bộ nhớ
            powerPreference: "high-performance", // hoặc "low-power" tùy thiết bị
            antialias: true,
          }}
          style={{ width: "100%", height: "100%" }}
          camera={{
            position: [-0.5, 1, 4],
            fov: 45,
            near: 0.2,
            far: 50,
          }}
          onCreated={(state) => {
            state.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            glRef.current = state.gl;
          }}
        >
          <Suspense fallback={null}>
            <Experience>
              <Book position={[0, 0.25, 0]} pages={pages} />
            </Experience>

            <Html fullscreen>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <UI showMarquee={false} />
              </div>
            </Html>
          </Suspense>
        </Canvas>
        <Loader />
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-50">
        <p className="text-yellow-200/60 text-sm">
          💡 Nhấp vào trang hoặc sử dụng nút điều hướng để lật sách • Kéo để xoay góc nhìn
        </p>
      </div>
    </div>
  );
};

export default FullscreenBookPage;