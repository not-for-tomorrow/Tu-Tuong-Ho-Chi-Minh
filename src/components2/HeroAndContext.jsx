import { motion } from "framer-motion";
import { Calendar, MapPin, Flag, AlertTriangle, Users, Flame, Sword, Star, Target } from "lucide-react";

// ==================== HERO SECTION ====================
export const HeroSection = () => (
  <section id="overview" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-red-900">
    {/* VIDEO BACKGROUND LAYER */}
    <div className="absolute inset-0 z-0">
      {/* Video gốc với bộ lọc tạo màu cũ */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 sepia-[0.6] grayscale-[0.4] contrast-125 mix-blend-luminosity"
      >
        <source src="videos/cmt8.mp4" type="video/mp4" />
      </video>

      {/* Lớp phủ Overlay để tạo tông màu đỏ cũ và làm rõ chữ */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/90 via-red-900/80 to-red-950/90 mix-blend-multiply" />
      
      {/* Hiệu ứng noise (hạt nhiễu) giả lập phim nhựa cũ - Optional */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/50 rounded-full px-4 py-2 mb-6 backdrop-blur-md shadow-lg">
          <Calendar className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-300 text-sm font-medium">1941 – 1945</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight drop-shadow-2xl">
          Hành Trình Trở Về
          <span className="block text-yellow-400 mt-2 drop-shadow-md">Lãnh Đạo Cách Mạng</span>
        </h1>

        <p className="text-xl md:text-2xl text-yellow-100/90 max-w-4xl mx-auto mb-6 leading-relaxed drop-shadow-lg font-medium">
          Từ Pác Bó đến Quảng trường Ba Đình — Kết thúc 30 năm bôn ba nước ngoài, 
          trực tiếp lãnh đạo cách mạng, đưa dân tộc tới kỷ nguyên độc lập tự do
        </p>

        <p className="text-lg text-yellow-200/80 max-w-3xl mx-auto mb-10 drop-shadow-md">
          Đỉnh cao là thành công của Cách mạng Tháng Tám năm 1945, khai sinh ra nước Việt Nam Dân chủ Cộng hòa
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            { icon: MapPin, label: "Pác Bó, Cao Bằng", sub: "28/01/1941" },
            { icon: Flag, label: "Mặt trận Việt Minh", sub: "19/5/1941" },
            { icon: Sword, label: "Đội VNTTGPQ", sub: "22/12/1944" },
            { icon: Star, label: "Tuyên ngôn Độc lập", sub: "2/9/1945" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 min-w-[160px] hover:bg-black/50 transition-colors"
            >
              <item.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2 drop-shadow-lg" />
              <div className="text-white font-semibold text-sm tracking-wide">{item.label}</div>
              <div className="text-yellow-200/80 text-xs">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// ==================== CONTEXT SECTION ====================
export const ContextSection = () => (
  <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Bối cảnh lịch sử</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">Tại sao 1941–1945 là bước ngoặt? </h2>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Đầu thập niên 1940, <strong className="text-red-700">Đông Dương trong trạng thái biến động</strong>: 
          Pháp suy yếu vì chiến tranh, Nhật chiếm đóng nhưng chính quyền bù nhìn hoạt động yếu ớt; 
          điều kiện kinh tế-xã hội (đặc biệt nạn đói 1944–1945 ở Bắc Trung Bộ) tạo ra lòng phẫn nộ sâu rộng trong dân chúng.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
          <p className="text-yellow-800 font-medium">
            💡 Các điều kiện này tạo <strong>"cửa sổ cơ hội"</strong> cho một lực lượng chính trị có tổ chức, 
            có đường lối rõ ràng và có mạng lưới quần chúng cơ sở tung ra phong trào giành chính quyền. 
          </p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src="images/japanese-invasion.jpg" alt="Quân Nhật tiến vào Hải Phòng" className="w-full h-64 md:h-[500px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-semibold text-lg">Quân phát xít Nhật tiến vào Hải Phòng</p>
            <p className="text-white/70 text-sm">Đông Dương dưới ách đô hộ kép Pháp - Nhật</p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: AlertTriangle, title: "Pháp suy yếu", desc: "Chiến tranh thế giới làm suy yếu nghiêm trọng quyền lực thực dân Pháp tại Đông Dương" },
          { icon: Flame, title: "Nhật chiếm đóng", desc: "Phát xít Nhật xâm lược từ 1940, chính quyền bù nhìn Bảo Đại - Trần Trọng Kim hoạt động yếu ớt" },
          { icon: Users, title: "Nạn đói 1944-1945", desc: "Hơn 2 triệu người chết đói ở 32 tỉnh miền Bắc và Bắc Trung Bộ, lòng phẫn nộ dâng cao" },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <item.icon className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ==================== RETURN HOME SECTION ====================
export const ReturnHomeSection = () => (
  <section className="relative py-20 overflow-hidden text-white">
    {/* Video Background Layer */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale-[0.4] sepia-[0.3]"
      >
        <source src="videos/return.mp4" type="video/mp4" />
      </video>
      {/* Overlay Gradient: Giữ tông đỏ đậm, tạo cảm giác cũ kỹ và giúp chữ nổi bật */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-red-800/90 to-red-950/95 mix-blend-multiply" />
      {/* Noise texture (optional) - giả lập nhiễu hạt film cFũ */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
    </div>

    {/* Content Container - Thêm relative và z-10 để nằm trên video */}
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-yellow-500 text-red-900 px-4 py-2 rounded-full font-bold mb-6 shadow-lg shadow-red-900/50">
          <MapPin className="w-5 h-5" />
          NGÀY 28/01/1941
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-shadow-sm">Trở Về Tổ Quốc</h2>
        <p className="text-xl text-yellow-200 font-medium text-shadow-sm">Kết thúc 30 năm bôn ba nước ngoài</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Trong quá trình hoạt động ở nước ngoài, <strong className="text-yellow-400">Nguyễn Ái Quốc</strong> luôn theo dõi sát sao 
              tình hình trong nước để tìm thời điểm thích hợp trở về Tổ quốc trực tiếp lãnh đạo cách mạng.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              <strong className="text-yellow-400">Cao Bằng</strong>, mảnh đất "phên dậu" phía Đông Bắc của Tổ quốc, chính là sự lựa chọn của Người. 
            </p>
            
            <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-2xl p-6 mb-6">
              <p className="text-yellow-100 font-medium">
                📍 <strong>Ngày 28/01/1941</strong> (mùng hai Tết Tân Tỵ), Lãnh tụ Nguyễn Ái Quốc 
                qua <strong>mốc 108</strong> (nay là cột mốc 675) biên giới Việt Nam - Trung Quốc 
                về đến <strong>Pác Bó, xã Trường Hà, huyện Hà Quảng, tỉnh Cao Bằng</strong>.
              </p>
            </div>

            <p className="text-white/80 italic">
              "Pác Bó - Hà Quảng - Cao Bằng đã trở thành <strong className="text-yellow-400">'đại bản doanh'</strong> của căn cứ Việt Bắc, 
              trở thành <strong className="text-yellow-400">'cội nguồn'</strong>, <strong className="text-yellow-400">'chiếc nôi của cách mạng Việt Nam'</strong>."
            </p>
          </div>
        </motion. div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="space-y-6">
            {[
              { icon: Target, title: "Mục tiêu rõ ràng", desc: "Trực tiếp lãnh đạo cách mạng, đưa tư tưởng chỉ đạo vào thực tế nhanh chóng và linh hoạt" },
              { icon: MapPin, title: "Địa điểm chiến lược", desc: "Cao Bằng - vùng núi hiểm trở, sát biên giới, thuận lợi cho việc xây dựng căn cứ địa" },
              { icon: Star, title: "Đỉnh cao thắng lợi", desc: "Từng bước đưa cách mạng cả nước tới thành công của Cách mạng Tháng Tám 1945" },
            ].map((item, i) => (
              <div key={i} className="bg-black/30 border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:bg-black/40 transition-colors">
                <div className="w-12 h-12 bg-yellow-600/80 rounded-xl flex items-center justify-center shrink-0 ring-1 ring-yellow-500/50">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-1">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default { HeroSection, ContextSection, ReturnHomeSection };