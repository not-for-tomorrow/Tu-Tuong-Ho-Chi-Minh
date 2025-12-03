import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Center, ContactShadows } from "@react-three/drei";

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

export default function Introduction() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(prev => (prev + 1) % models.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="w-full flex bg-white rounded-xl shadow-md px-6 mb-8 h-[800px]" style={{ minHeight: 200 }}>
      {/* 1/3: model 3D auto chuyển, phóng to sản phẩm */}
      <div className="w-1/3 flex items-center justify-center h-full">
        <div style={{ width: "100%", height: 450 }}>
          <Canvas shadows camera={{ position: [-1, 6.5, 4.5], fov: 32 }}>
            <color attach="background" args={["#ffffff"]} />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={1.2} position={[2, 5, 5]} castShadow shadow-mapSize={[1024, 1024]} />
            <ContactShadows position={[0, -1, 0]} opacity={0.45} scale={10} blur={2.5} />
            <Environment preset="city" />
            <Suspense fallback={null}>
              <Center>
                <RotatingGLTFModel url={models[index].url} scale={models[index].scale ?? 1} duration={5000} />
              </Center>
            </Suspense>
          </Canvas>
        </div>
      </div>
    {/* 2/3: nội dung chủ đề giá trị thặng dư */}
<div className="w-2/3 pl-8 flex items-center h-full">
  <section className="w-full">
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 tracking-wide">
      GIÁ TRỊ THẬT ĐẾN TỪ NHỮNG TRANG VIẾT CỦA BẠN
    </h2>

    <p className="text-xl text-gray-800 mb-4 font-medium leading-relaxed">
      Sổ tay chủ đề <b>"Giá trị thặng dư"</b> được tạo ra với mong muốn mang đến cho người dùng không chỉ một cuốn sổ để ghi chép, 
      mà còn là một người bạn đồng hành giúp nuôi dưỡng tư duy, sáng tạo và nhận thức về giá trị của chính bản thân trong lao động và học tập.  
    </p>

    <ul className="list-disc pl-6 space-y-3 text-xl text-gray-800">
      <li>
        <span className="font-semibold text-gray-900">Ý nghĩa thực tiễn:</span>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-lg">
          <li>
            Mỗi dòng chữ, mỗi ý tưởng được viết ra là một <b>“giá trị mới”</b> – kết tinh của thời gian, công sức và tư duy cá nhân. 
            Sổ tay khuyến khích người dùng trân trọng sức lao động của chính mình và nhìn thấy giá trị trong từng hành động nhỏ.
          </li>
          <li>
            Giúp hình thành thói quen ghi chép, suy ngẫm và phát triển bản thân – nơi những trang giấy không chỉ lưu lại kiến thức, 
            mà còn phản chiếu hành trình tạo dựng giá trị cá nhân.
          </li>
        </ul>
      </li>

      <li>
        <span className="font-semibold text-gray-900">Ý nghĩa lý luận:</span>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-lg">
          <li>
            Lấy cảm hứng từ tư tưởng Mác về <b>giá trị thặng dư</b> – khái niệm phản ánh quá trình con người tạo ra giá trị mới 
            thông qua lao động, sáng tạo và tri thức – sổ tay nhấn mạnh vai trò của trí tuệ con người trong thời đại hiện nay.
          </li>
          <li>
            Mỗi trang viết là sự khẳng định rằng “giá trị” không chỉ đến từ kết quả, mà còn từ quá trình cố gắng, 
            sáng tạo và cống hiến – điều làm nên bản sắc riêng của mỗi cá nhân.
          </li>
        </ul>
      </li>
    </ul>
  </section>
</div>


    </section>
  );
}