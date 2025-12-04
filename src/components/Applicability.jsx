// components/Applicability.jsx
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
  { url: "models/Notebook3.glb", scale: 0.016 }
];

const applicationPoints = [
  {
    icon: "🎁",
    title: "Quà tặng ý nghĩa",
    description: "Sổ tay không chỉ là vật dụng hữu ích mà còn là món quà mang giá trị giáo dục, phù hợp để tặng trong các dịp lễ, kỷ niệm."
  },
  {
    icon: "📚",
    title: "Công cụ học tập",
    description: "Hỗ trợ ghi chép, nghiên cứu về tư tưởng Hồ Chí Minh một cách có hệ thống và khoa học."
  },
  {
    icon: "💡",
    title: "Truyền cảm hứng",
    description: "Các câu nói, bài học của Bác được lồng ghép giúp người dùng suy ngẫm và phát triển bản thân."
  },
  {
    icon: "🌱",
    title: "Giáo dục thế hệ trẻ",
    description: "Phương tiện truyền tải giá trị đạo đức, lịch sử dân tộc đến thế hệ trẻ một cách sinh động."
  },
  {
    icon: "🌏",
    title: "Bảo tồn di sản",
    description: "Góp phần gìn giữ và phát huy di sản tư tưởng, văn hóa của Chủ tịch Hồ Chí Minh."
  }
];

const Applicability = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(prev => (prev + 1) % models.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section 
      id="applicability"
      className="relative py-20 bg-gradient-to-b from-amber-50 via-white to-red-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-medium mb-4">
            <span>✨</span>
            Ứng dụng thực tiễn
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tính <span className="text-red-600">Ứng Dụng</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sổ tay tư tưởng Hồ Chí Minh mang đến nhiều giá trị thiết thực trong cuộc sống
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-3xl p-6 shadow-2xl">
              <div className="absolute top-4 left-4 flex gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/30"></div>
              </div>
              
              <div className="h-[350px] mt-6">
                <Canvas shadows camera={{ position: [-1, 3.5, 4.5], fov: 32 }}>
                  <color attach="background" args={["transparent"]} />
                  <ambientLight intensity={0.5} />
                  <directionalLight intensity={1.2} position={[2, 5, 5]} castShadow />
                  <ContactShadows position={[0, -1, 0]} opacity={0.30} scale={6} blur={2.5} />
                  <Environment preset="city" />
                  <Suspense fallback={null}>
                    <Center>
                      <RotatingGLTFModel url={models[index].url} scale={models[index].scale} duration={5000} />
                    </Center>
                  </Suspense>
                </Canvas>
              </div>
              
              {/* Model indicator dots */}
              <div className="flex justify-center gap-2 mt-4">
                {models.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === index ? 'bg-yellow-400 w-6' : 'bg-yellow-400/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Application points */}
          <div className="order-1 lg:order-2 space-y-4">
            {applicationPoints.map((point, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-red-500"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-xl max-w-3xl">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-yellow-400 mx-auto mb-4" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <blockquote className="text-xl md:text-2xl italic">
              "Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng."
            </blockquote>
            <cite className="block mt-4 text-yellow-300 font-semibold not-italic">
              — Trích Di chúc của Chủ tịch Hồ Chí Minh
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Applicability;