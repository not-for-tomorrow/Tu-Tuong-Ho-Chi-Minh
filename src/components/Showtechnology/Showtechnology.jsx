import React from "react";
import { motion } from "framer-motion";

// Logo và video (có thể là URL hoặc import local)
import ThreeJSLogo from "../../../public/logos/threejs.png";
import ChatGPTLogo from "../../../public/logos/chatgpt.png";
import BlenderLogo from "../../../public/logos/blender.png";
import SketchfabLogo from "../../../public/logos/sketchfab.png";
import ReactLogo from "../../../public/logos/reactjs.png";

// Video đen trắng cho từng công nghệ (ví dụ url hoặc import local)
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
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
          }}
        >
          {/* Nhân đôi để chạy mượt */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="relative w-60 h-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
            >
              {/* Video nền */}
              <video
                src={tech.video}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover filter grayscale opacity-50"
              />

              {/* Nội dung logo + tên */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-24 h-24 object-contain mb-4 z-10"
                />
                <span className="text-lg font-bold text-black z-10">{tech.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
