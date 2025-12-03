import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

// Logo và video
import ThreeJSLogo from "../../../public/logos/threejs.png";
import ChatGPTLogo from "../../../public/logos/chatgpt.png";
import BlenderLogo from "../../../public/logos/blender.png";
import SketchfabLogo from "../../../public/logos/sketchfab.png";
import ReactLogo from "../../../public/logos/reactjs.png";

import ThreeJSVideo from "../../../public/videos/Threejs.mp4";
import ChatGPTVideo from "../../../public/videos/Chatgpt.mp4";
import BlenderVideo from "../../../public/videos/Blender.mp4";
import SketchfabVideo from "../../../public/videos/Sketchfab.mp4";
import ReactVideo from "../../../public/videos/Reactjs.mp4";

const technologies = [
  { name: "Three.js", logo: ThreeJSLogo, video: ThreeJSVideo },
  { name: "ChatGPT", logo: ChatGPTLogo, video: ChatGPTVideo },
  { name: "Blender", logo: BlenderLogo, video: BlenderVideo },
  { name: "Sketchfab", logo: SketchfabLogo, video: SketchfabVideo },
  { name: "ReactJS", logo: ReactLogo, video: ReactVideo },
];

export default function TechnologyBanner() {
  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const intervalRef = useRef(null);
  const AUTOPLAY_MS = 5000;

  const goTo = useCallback(
    (index) => {
      const next = ((index % technologies.length) + technologies.length) % technologies.length;
      setCurrent(next);
    },
    []
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (technologies.length <= 1) return;

    const start = () => {
      if (intervalRef.current != null) return;
      intervalRef.current = window.setInterval(() => {
        setCurrent((c) => (c + 1) % technologies.length);
      }, AUTOPLAY_MS);
    };

    const stop = () => {
      if (intervalRef.current != null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (!isHover) start();

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (!isHover) start();
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [isHover]);

  return (
    <section className="w-full py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Công Nghệ Chúng Tôi Sử Dụng
      </h2>

      <div
        className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-2xl shadow-2xl"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {technologies.map((tech, idx) => (
            <div className="relative w-full flex-shrink-0" key={idx}>
              {/* Video nền */}
              <video
                src={tech.video}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover filter grayscale opacity-50"
              />
              {/* Logo + tên */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-40 h-40 object-contain mb-4 z-10"
                />
                <span className="text-3xl font-bold text-black z-10">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Nút điều hướng */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
        >
          &#8249;
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
        >
          &#8250;
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {technologies.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-3 rounded-full transition-all ${
                i === current ? "w-6 bg-white" : "w-3 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
