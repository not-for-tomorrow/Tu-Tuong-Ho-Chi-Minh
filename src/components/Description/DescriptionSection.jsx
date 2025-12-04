// components/Description/DescriptionSection.jsx
import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  Html,
  Loader,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { useAtom } from "jotai";
import { BOOK_LIBRARY, currentBookAtom } from "../../state/library";
import { Book } from "../Book/Book";
import { Bookmark } from "../Bookmark/Bookmark";
import * as THREE from "three";
import { motion } from "framer-motion";

// ✅ Chặn tương tác Book trong phần Description
function InteractionBlocker({ size = [3.5, 3.0], position = [0, 0.03, 0] }) {
  return (
    <mesh
      position={position}
      onPointerDown={(e) => e.stopPropagation()}
      onPointerUp={(e) => e.stopPropagation()}
      onPointerMove={(e) => e.stopPropagation()}
      onPointerEnter={(e) => e.stopPropagation()}
      onPointerLeave={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
    >
      <planeGeometry args={size} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  );
}

const DescriptionExperience = ({ pages, bookmark }) => (
  <>
    <group position={[-1.0, 0, 0.25]} rotation={[-Math.PI / 7, 0, 0]}>
      <Float floatIntensity={0.5} speed={0.4} rotationIntensity={0.4}>
        <Book pages={pages} />
        <InteractionBlocker />
      </Float>
    </group>

    <group position={[1, 0, 0.2]} rotation={[-Math.PI / 7, 0, 0]}>
      <Float floatIntensity={0.6} speed={0.5} rotationIntensity={0.8}>
        <Bookmark />
      </Float>
    </group>

    <ambientLight intensity={0.5} />
    <directionalLight
      position={[2, 5, 2]}
      intensity={0.85}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-bias={-0.0001}
    />
    <Environment preset="city" intensity={0.25} />

    <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial transparent opacity={0.15} />
    </mesh>

    <OrbitControls
      enableZoom={true}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
    />
  </>
);

// Component ngôi sao trang trí
const StarIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const DescriptionSection = () => {
  const [bookIndex, setBookIndex] = useAtom(currentBookAtom);
  const current = BOOK_LIBRARY[bookIndex] || BOOK_LIBRARY[0];
  const pages = current.pages;
  const bookmark = current.bookmark || {
    front: "bookmark3",
    back: "bookmark2",
  };
  const story = current.story;

  const prevBook = () => {
    setBookIndex((bookIndex - 1 + BOOK_LIBRARY.length) % BOOK_LIBRARY.length);
  };
  const nextBook = () => {
    setBookIndex((bookIndex + 1) % BOOK_LIBRARY.length);
  };

  useEffect(() => {
    pages.forEach((p) => {
      useTexture.preload(`textures/${p.front}.jpg`);
      useTexture.preload(`textures/${p.back}.jpg`);
    });
    if (bookmark.front) useTexture.preload(`textures/${bookmark.front}.jpg`);
    if (bookmark.back) useTexture.preload(`textures/${bookmark.back}.jpg`);
    useTexture.preload(`textures/ruled-paper.jpg`);
  }, [pages, bookmark.front, bookmark.back]);

  const cameraPos = useMemo(
    () =>
      typeof window !== "undefined" && window.innerWidth > 1024
        ? [0.8, 1.2, 5]
        : [0.6, 1.0, 7],
    []
  );

  return (
    <section
      id="description-section"
      className="relative w-full bg-gradient-to-b from-amber-50 via-white to-red-50 py-16 overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.4'%3E%3Cpath d='M30 5l2.5 5.1 5.6.8-4 3.9.9 5.5L30 18l-5 2.3.9-5.5-4-3.9 5.6-.8L30 5z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-medium mb-4">
            <StarIcon className="w-4 h-4 text-yellow-500" />
            <span>Nội dung chi tiết</span>
            <StarIcon className="w-4 h-4 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Khám Phá <span className="text-red-600">Nội Dung</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Trái 3/5: Book + Bookmark với 3D Canvas */}
          <motion.div
            className="lg:col-span-3 w-full h-[700px] rounded-2xl overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative frame */}
            <div className="absolute inset-0 p-1 bg-gradient-to-br from-yellow-400 via-red-500 to-yellow-400 rounded-2xl z-0">
              <div className="w-full h-full bg-gradient-to-b from-red-900 via-red-800 to-red-900 rounded-xl"></div>
            </div>

            {/* Corner stars */}
            <div className="absolute top-4 left-4 z-10">
              <StarIcon className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute top-4 right-4 z-10">
              <StarIcon className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-4 left-4 z-10">
              <StarIcon className="w-6 h-6 text-yellow-400/60" />
            </div>
            <div className="absolute bottom-4 right-4 z-10">
              <StarIcon className="w-6 h-6 text-yellow-400/60" />
            </div>

            {/* Canvas */}
            <div className="absolute inset-1 rounded-xl overflow-hidden">
              <Canvas
                shadows
                style={{ width: "100%", height: "100%" }}
                camera={{ position: cameraPos, fov: 45 }}
                gl={{
                  toneMapping: THREE.ACESFilmicToneMapping,
                  outputEncoding: THREE.sRGBEncoding,
                }}
              >
                <Suspense fallback={null}>
                  <DescriptionExperience pages={pages} bookmark={bookmark} />
                  <Html fullscreen>
                    <div className="absolute inset-0 pointer-events-none" />
                  </Html>
                </Suspense>
              </Canvas>
              <Loader />
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900/90 to-transparent p-4 z-10">
              <p className="text-center text-yellow-200 text-sm">
                🔄 Xoay để xem chi tiết • 🔍 Scroll để zoom
              </p>
            </div>
          </motion.div>

          {/* Phải 2/5: Description + Controls */}
          <motion.aside
            className="lg:col-span-2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Navigation với title */}
            <div className="relative mb-8">
              {/* Navigation buttons */}
              <div className="flex items-center justify-between mb-4">
                {/* <button
                  className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all shadow-lg"
                  onClick={prevBook}
                >
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="hidden sm:inline">Trước</span>
                </button> */}

                {/* Book indicator */}
                {/* <div className="flex items-center gap-2">
                  {BOOK_LIBRARY.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === bookIndex
                          ? "w-6 bg-yellow-500"
                          : "bg-red-300 hover:bg-red-400"
                      }`}
                      onClick={() => setBookIndex(idx)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div> */}

                {/* <button
                  className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all shadow-lg"
                  onClick={nextBook}
                >
                  <span className="hidden sm:inline">Tiếp</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button> */}
              </div>

              {/* Title with decoration */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-400"></div>
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-400"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  {story?.title}
                </h2>
                <div className="inline-flex items-center gap-3 mt-2">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-400"></div>
                  <span className="text-red-600 text-sm font-medium">
                    Cuốn {bookIndex + 1} / {BOOK_LIBRARY.length}
                  </span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-red-400"></div>
                </div>
              </div>
            </div>

            {/* Content card */}
            <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
                <div className="flex items-center gap-2 text-yellow-300">
                  <StarIcon className="w-5 h-5" />
                  <span className="font-semibold">Nội dung tóm tắt</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-4">
                {(story?.paragraphs || []).map((p, idx) => (
                  <motion.p
                    key={idx}
                    className="text-gray-700 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Card footer - Quote */}
              <div className="bg-gradient-to-r from-amber-50 to-red-50 px-6 py-4 border-t border-red-100">
                <blockquote className="text-gray-600 italic text-sm">
                  "Học hỏi là một việc phải tiếp tục suốt đời"
                </blockquote>
                <cite className="text-red-600 text-xs font-medium mt-1 block">
                  — Hồ Chí Minh
                </cite>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Đọc thêm
              </button>
              <button className="px-6 py-3 bg-white border-2 border-red-600 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all">
                Chia sẻ
              </button>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;