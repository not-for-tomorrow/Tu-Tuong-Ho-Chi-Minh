// components/Introduction.jsx
import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Center, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";

function RotatingGLTFModel({ url, scale = 1, duration = 5000 }) {
  const { scene } = useGLTF(url);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frame;
    let start;
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const rot = (elapsed / duration) * Math.PI * 2;
      setRotation(rot > Math.PI * 2 ? Math.PI * 2 : rot);
      if (elapsed < duration) frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [url, duration]);

  return <primitive object={scene.clone()} scale={scale} rotation={[0, rotation, 0]} />;
}

const models = [
  { url: "models/Notebook1.glb", scale: 15 },
  { url: "models/Notebook2.glb", scale: 0.018 },
  { url: "models/Notebook3.glb", scale: 0.016 },
  { url: "models/Notebook4.glb", scale: 24 }
];

// Các nguyên lý cốt lõi của tư tưởng Hồ Chí Minh
const PRINCIPLES = [
  {
    title: "Độc lập dân tộc gắn liền với CNXH",
    description: "Đây là tư tưởng xuyên suốt, là sợi chỉ đỏ trong toàn bộ hệ thống tư tưởng Hồ Chí Minh.",
    icon: "🌟"
  },
  {
    title: "Đại đoàn kết dân tộc",
    description: "Đoàn kết là sức mạnh vô địch, là then chốt của mọi thành công.",
    icon: "🤝"
  },
  {
    title: "Xây dựng Nhà nước của dân, do dân, vì dân",
    description: "Nhân dân là chủ, Chính phủ là đày tớ của nhân dân.",
    icon: "🏛️"
  },
  {
    title: "Đạo đức cách mạng",
    description: "Cần, kiệm, liêm, chính, chí công vô tư - đó là phẩm chất đạo đức cốt lõi.",
    icon: "💎"
  }
];

export default function Introduction() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(prev => (prev + 1) % models.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section 
      id="introduction"
      className="relative w-full bg-gradient-to-b from-amber-50 via-white to-red-50 py-16 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"></div>
      
      {/* Lotus pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.4'%3E%3Cellipse cx='40' cy='60' rx='8' ry='15'/%3E%3Cellipse cx='30' cy='55' rx='6' ry='12' transform='rotate(-20 30 55)'/%3E%3Cellipse cx='50' cy='55' rx='6' ry='12' transform='rotate(20 50 55)'/%3E%3Cellipse cx='25' cy='50' rx='5' ry='10' transform='rotate(-40 25 50)'/%3E%3Cellipse cx='55' cy='50' rx='5' ry='10' transform='rotate(40 55 50)'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-medium mb-4">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Giới thiệu
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tư Tưởng <span className="text-red-600">Hồ Chí Minh</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model Display */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Decorative star pattern */}
              <div className="absolute top-4 right-4">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-yellow-400/50" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              <div className="h-[400px]">
                <Canvas shadows camera={{ position: [-1, 6.5, 4.5], fov: 32 }}>
                  <color attach="background" args={["transparent"]} />
                  <ambientLight intensity={0.6} />
                  <directionalLight intensity={1.2} position={[2, 5, 5]} castShadow />
                  <ContactShadows position={[0, -1, 0]} opacity={0.3} scale={10} blur={2.5} />
                  <Environment preset="city" />
                  <Suspense fallback={null}>
                    <Center>
                      <RotatingGLTFModel url={models[index].url} scale={models[index].scale} duration={5000} />
                    </Center>
                  </Suspense>
                </Canvas>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-yellow-400 font-semibold">Sổ tay học tập tư tưởng Hồ Chí Minh</p>
                <p className="text-yellow-100/70 text-sm">Mô hình 3D tương tác</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Quote box */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-xl mb-8">
              <blockquote className="text-xl italic">
                "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam."
              </blockquote>
              <cite className="block mt-3 text-yellow-300 font-semibold not-italic">
                — Chủ tịch Hồ Chí Minh
              </cite>
            </div>

            {/* Principles grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRINCIPLES.map((principle, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-3xl mb-2">{principle.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}