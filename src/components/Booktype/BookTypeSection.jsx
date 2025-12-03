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
  Html,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";

// ✅ Component tải GLTF model
function GLTFModel({ url, scale = 1 }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene.clone()} scale={scale} />;
}

// ✅ Nút điều hướng
function ArrowButton({ onClick, direction = "right" }) {
  const isRight = direction === "right";
  return (
    <button
      onClick={onClick}
      aria-label={isRight ? "Next product" : "Previous product"}
      className="absolute top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 shadow-md rounded-full size-12 grid place-items-center transition"
      style={{ [isRight ? "right" : "left"]: "0.75rem" }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
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
        url: "models/Notebook1.glb",
        name: "Sản phẩm 1",
        description: "Mô tả 1",
        scale: 5,
      },
      {
        url: "models/Notebook2.glb",
        name: "Sản phẩm 2",
        description: "Mô tả 2",
        scale: 0.006,
      },
      {
        url: "models/Notebook3.glb",
        name: "Sản phẩm 3",
        description: "Mô tả 3",
        scale: 0.0055,
      },
      {
        url: "models/Notebook4.glb",
        name: "Sản phẩm 3",
        description: "Mô tả 3",
        scale: 8,
      },
    ],
    className = "",
    style,
    canvasHeight = "100%",
    background = "linear-gradient(180deg, #f8fafc 0%, #ffffff 60%)",
  },
  ref
) {
  const [index, setIndex] = useState(0);
  const count = models.length;
  const containerRef = useRef(null);

  // 👉 Lưu hướng điều hướng: 1 = next, -1 = prev
  const dirRef = useRef(1);

  // 👉 Điều khiển từ bên ngoài
  const next = () => {
    dirRef.current = 1;
    setIndex((i) => (i + 1) % count);
  };
  const prev = () => {
    dirRef.current = -1;
    setIndex((i) => (i - 1 + count) % count);
  };
  useImperativeHandle(ref, () => ({ next, prev }));

  // 🔧 Lưu index trước đó để biết item nào rời trung tâm
  const prevIndexRef = useRef(0);
  useEffect(() => {
    prevIndexRef.current = index;
  }, [index]);

  // 🔧 Lưu rotateY cuối cùng của mỗi item để "đóng băng" khi không entering/leaving
  const lastRotateYRef = useRef(
    models.map((_, i) => (i === 0 ? Math.PI : 0)) // sản phẩm 1 luôn 180°
  );

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ background, ...style }}
    >
      {/* 🧾 Thông tin sản phẩm */}
      <div className="absolute left-4 top-4 z-20 p-3 rounded-md bg-white/80 shadow-sm backdrop-blur-sm max-w-[60%]">
        <div className="text-sm uppercase tracking-wide text-sky-700 font-semibold">
          {models[index]?.name || "Sản phẩm"}
        </div>
        {models[index]?.description && (
          <div className="text-gray-700 text-sm mt-1">
            {models[index].description}
          </div>
        )}
      </div>

      {/* 🔘 Nút điều hướng */}
      <ArrowButton onClick={prev} direction="left" />
      <ArrowButton onClick={next} direction="right" />

      <div style={{ width: "100%", height: canvasHeight }}>
        <Canvas shadows camera={{ position: [0, 1.5, 4.5], fov: 32 }}>
          {/* 💡 Ánh sáng */}
          <color attach="background" args={["#ffffff"]} />
          <ambientLight intensity={0.5} />
          <directionalLight
            intensity={1.2}
            position={[2, 5, 5]}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          {/* ☁️ Bóng đổ */}
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.45}
            scale={10}
            blur={2.5}
          />

          <Environment preset="city" />

          {/* 🌀 Hiệu ứng chuyển sản phẩm */}
          <Suspense fallback={null}>
            {models.map((m, i) => {
              // Tính offset vòng tròn với tie-break theo hướng điều hướng
              const half = count / 2;

              let offset = i - index;
              if (offset > half) offset -= count;
              if (offset < -half) offset += count;

              // FIX: với số chẵn và |offset| === half, chọn phía dựa vào hướng
              if (count % 2 === 0 && Math.abs(offset) === half) {
                // next => đẩy item "đối diện" sang bên trái; prev => sang bên phải
                offset = dirRef.current === 1 ? -half : half;
              }

              const isActive = i === index;
              const wasActive = i === prevIndexRef.current;
              const isEnteringOrLeaving = isActive || wasActive;

              const targetX = offset * 2.5;
              const targetZ = Math.abs(offset) * -2;

              // Tính rotateY theo quy tắc cũ
              let rotateY;
              if (i === 0) {
                rotateY = Math.PI;
              } else if (isEnteringOrLeaving) {
                rotateY = offset * 0.4; // active ở giữa => 0, hai bên => ±0.4
              } else {
                rotateY = lastRotateYRef.current[i];
              }

              // Cập nhật bộ nhớ rotateY cho lần render sau
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
          {/* 👁️ Điều khiển camera */}
          {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
        </Canvas>
      </div>
    </section>
  );
});

export default BookTypeSection;