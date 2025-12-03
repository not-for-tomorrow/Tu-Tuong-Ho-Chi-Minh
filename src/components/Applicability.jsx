import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Center, ContactShadows } from "@react-three/drei";

// 3D GLTF model with rotation effect
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

// List 3 models to rotate
const models = [
  { url: "models/Notebook1.glb", scale: 15 },
  { url: "models/Notebook2.glb", scale: 0.018 },
  { url: "models/Notebook3.glb", scale: 0.016 }
];

// Applicability content
const applicationPoints = [
  "Sổ tay không chỉ là vật dụng hữu ích hàng ngày mà còn là món quà ý nghĩa, gần gũi, phù hợp để dành tặng cho bạn bè, đồng nghiệp, người thân trong nhiều dịp khác nhau.",
  "Ngoài chức năng ghi chép thông thường, sổ tay còn có thể trở thành vật sưu tầm hoặc trang trí góc làm việc, tạo điểm nhấn cá nhân cho không gian sống.",
  "Các chủ đề triết học được lồng ghép vào thiết kế hoặc nội dung của sổ tay giúp sản phẩm trở nên độc đáo, hiếm có và mang chiều sâu tri thức, thu hút những người yêu thích sự khác biệt và phong cách riêng biệt.",
  "Sổ tay mang chủ đề đặc biệt còn truyền cảm hứng, khơi gợi suy nghĩ sáng tạo, hỗ trợ phát triển bản thân và trở thành người bạn đồng hành trong quá trình khám phá, hoàn thiện chính mình.",
  "Việc sử dụng sổ tay tái chế và thiết kế ấn tượng còn phản ánh ý thức trách nhiệm với môi trường, tạo nên xu hướng tiêu dùng bền vững trong cộng đồng hiện đại."
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
    <section className="max-w-[1600px] mx-auto mt-16 mb-16 px-4 py-10 bg-white rounded-xl shadow-lg border flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
      {/* 3D Book - left on desktop, top on mobile */}
      <div className="w-full md:w-[40%] flex items-center justify-center mb-8 md:mb-0 md:mr-8" style={{ minWidth: 280, minHeight: 300 }}>
        <div style={{ width: "100%", height: 300 }}>
          <Canvas shadows camera={{ position: [-1, 3.5, 4.5], fov: 32 }}>
            <color attach="background" args={["#fff"]} />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={1.2} position={[2, 5, 5]} castShadow shadow-mapSize={[1024, 1024]} />
            <ContactShadows position={[0, -1, 0]} opacity={0.30} scale={6} blur={2.5} />
            <Environment preset="city" />
            <Suspense fallback={null}>
              <Center>
                <RotatingGLTFModel url={models[index].url} scale={models[index].scale} duration={5000} />
              </Center>
            </Suspense>
          </Canvas>
        </div>
      </div>
      {/* Application content */}
      <div className="w-full md:w-[60%]">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 text-center tracking-tight uppercase">
          TÍNH ỨNG DỤNG
        </h2>
        <ul className="space-y-6 text-lg md:text-xl text-gray-700 list-disc pl-8">
          {applicationPoints.map((point, idx) => (
            <li key={idx} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Applicability;