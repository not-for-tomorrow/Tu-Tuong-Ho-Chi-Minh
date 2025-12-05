// components/Booktype/BookTypeSection.jsx
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  Suspense,
  useEffect,
} from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Center,
  ContactShadows,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { motion as motionDOM } from "framer-motion";

// ✅ Component tải GLTF model
function GLTFModel({ url, scale = 1 }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene.clone()} scale={scale} />;
}

// Component ngôi sao
const StarIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// ✅ Nút điều hướng mới với theme đỏ-vàng
function ArrowButton({ onClick, direction = "right" }) {
  const isRight = direction === "right";
  return (
    <button
      onClick={onClick}
      aria-label={isRight ? "Sản phẩm tiếp theo" : "Sản phẩm trước"}
      className="absolute top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-red-900 shadow-lg rounded-full w-14 h-14 grid place-items-center transition-all hover:scale-110 border-2 border-yellow-300"
      style={{ [isRight ? "right" : "left"]: "1rem" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isRight ? "" : "rotate-180"}
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  );
}

const BookTypeSection = forwardRef(function BookTypeSection(
  {
    models = [
      {
        url: "models/Notebookhcm01.glb",
        name: "Sổ tay Đạo đức Cách mạng",
        description: "Ghi chép về phẩm chất cần, kiệm, liêm, chính",
        scale: 5,
      },
      {
        url: "models/Notebookhcm02.glb",
        name: "Sổ tay Học tập",
        description: "Tổng hợp tư tưởng về giáo dục và rèn luyện",
        scale: 0.006,
      },
      {
        url: "models/Notebookhcm03.glb",
        name: "Sổ tay Đoàn kết",
        description: "Tinh thần đại đoàn kết dân tộc",
        scale: 0.0055,
      },
      {
        url: "models/Notebookhcm04.glb",
        name: "Sổ tay Di chúc",
        description: "Những lời dặn dò của Bác với thế hệ mai sau",
        scale: 8,
      },
    ],
    className = "",
    style,
    canvasHeight = "100%",
  },
  ref
) {
  const [index, setIndex] = useState(0);
  const count = models.length;
  const containerRef = useRef(null);
  const dirRef = useRef(1);

  const next = () => {
    dirRef.current = 1;
    setIndex((i) => (i + 1) % count);
  };
  const prev = () => {
    dirRef.current = -1;
    setIndex((i) => (i - 1 + count) % count);
  };
  useImperativeHandle(ref, () => ({ next, prev }));

  const prevIndexRef = useRef(0);
  useEffect(() => {
    prevIndexRef.current = index;
  }, [index]);

  const lastRotateYRef = useRef(models.map((_, i) => (i === 0 ? Math.PI : 0)));

  // Quotes của Bác Hồ cho mỗi sản phẩm
  const quotes = [
    "Cần, kiệm, liêm, chính, chí công vô tư",
    "Học để làm việc, làm người, làm cán bộ",
    "Đoàn kết, đoàn kết, đại đoàn kết",
    "Việc gì lợi cho dân phải hết sức làm",
  ];

  return (
    <section
      id="booktype-section"
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={style}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-red-800 to-red-900"></div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.5'%3E%3Cpath d='M40 10l4 8.1 8.9 1.3-6.5 6.3 1.5 8.9L40 30l-7.9 4.1 1.5-8.9-6.5-6.3 8.9-1.3L40 10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

      {/* Header */}
      <div className="relative z-10 text-center py-12">
        <motionDOM.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-medium mb-4 border border-yellow-500/30">
            <StarIcon className="w-4 h-4" />
            <span>Bộ sưu tập</span>
            <StarIcon className="w-4 h-4" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Các Loại <span className="text-yellow-400">Sổ Tay</span>
          </h2>
          <p className="text-yellow-100/80 max-w-2xl mx-auto">
            Khám phá bộ sưu tập sổ tay với các chủ đề khác nhau về tư tưởng Hồ
            Chí Minh
          </p>
        </motionDOM.div>
      </div>

      {/* Product info card */}
      <motionDOM.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 max-w-xs"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-yellow-400">
          {/* Card header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-5 py-3">
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">
                Sản phẩm {index + 1}/{count}
              </span>
            </div>
          </div>

          {/* Card body */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {models[index]?.name || "Sản phẩm"}
            </h3>
            {models[index]?.description && (
              <p className="text-gray-600 text-sm mb-4">
                {models[index].description}
              </p>
            )}

            {/* Quote */}
            <div className="bg-gradient-to-r from-amber-50 to-red-50 rounded-lg p-3 border-l-4 border-yellow-500">
              <p className="text-gray-700 text-sm italic">
                "{quotes[index] || quotes[0]}"
              </p>
              <p className="text-red-600 text-xs font-medium mt-1">
                — Hồ Chí Minh
              </p>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="px-5 pb-4 flex justify-center gap-2">
            {models.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-red-600"
                    : "w-2 bg-gray-300 hover:bg-red-400"
                }`}
              />
            ))}
          </div>
        </div>
      </motionDOM.div>

      {/* Navigation buttons */}
      <ArrowButton onClick={prev} direction="left" />
      <ArrowButton onClick={next} direction="right" />

      {/* 3D Canvas */}
      <div style={{ width: "100%", height: canvasHeight }} className="relative">
        <Canvas shadows camera={{ position: [0, 1.5, 4.5], fov: 32 }}>
          {/* Background color - transparent to show gradient */}
          <color attach="background" args={["transparent"]} />

          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight
            intensity={1.4}
            position={[2, 5, 5]}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <spotLight
            position={[-5, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            color="#fbbf24"
          />

          {/* Shadow */}
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.35}
            scale={10}
            blur={2.5}
            color="#7f1d1d"
          />

          <Environment preset="city" />

          {/* 3D Models carousel */}
          <Suspense fallback={null}>
            {models.map((m, i) => {
              const half = count / 2;
              let offset = i - index;
              if (offset > half) offset -= count;
              if (offset < -half) offset += count;

              if (count % 2 === 0 && Math.abs(offset) === half) {
                offset = dirRef.current === 1 ? -half : half;
              }

              const isActive = i === index;
              const wasActive = i === prevIndexRef.current;
              const isEnteringOrLeaving = isActive || wasActive;

              const targetX = offset * 2.5;
              const targetZ = Math.abs(offset) * -2;

              let rotateY;
              if (i === 0) {
                rotateY = Math.PI;
              } else if (isEnteringOrLeaving) {
                rotateY = offset * 0.4;
              } else {
                rotateY = lastRotateYRef.current[i];
              }

              lastRotateYRef.current[i] = rotateY;

              return (
                <group key={m.url}>
                  <motion.group
                    initial={false}
                    animate={{
                      x: targetX,
                      z: targetZ,
                      y: 0,
                      rotateY,
                      rotateX: Math.PI / 3,
                      scale: isActive ? 1 : 0.8,
                      opacity: isActive ? 1 : 0.6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                      rotateY: isEnteringOrLeaving
                        ? { type: "spring", stiffness: 70, damping: 10 }
                        : { duration: 0 },
                    }}
                  >
                    <Center>
                      <GLTFModel url={m.url} scale={m.scale ?? 1} />
                    </Center>
                  </motion.group>
                </group>
              );
            })}
          </Suspense>
        </Canvas>
      </div>

      {/* Bottom decorative stars */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <StarIcon className="w-4 h-4 text-yellow-400/40" />
        <StarIcon className="w-6 h-6 text-yellow-400/60" />
        <StarIcon className="w-8 h-8 text-yellow-400" />
        <StarIcon className="w-6 h-6 text-yellow-400/60" />
        <StarIcon className="w-4 h-4 text-yellow-400/40" />
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
    </section>
  );
});

export default BookTypeSection;