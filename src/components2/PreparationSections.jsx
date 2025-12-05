import { motion } from "framer-motion";
import { Flag, BookOpen, Star, CheckCircle, GraduationCap, FileText, Sword } from "lucide-react";

// ==================== VIET MINH SECTION ====================
export const VietMinhSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium mb-4">19/5/1941</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">Thành lập Mặt trận Việt Minh</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-3xl p-8 border border-red-100 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                <Flag className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-800">Mặt trận Việt Minh</h3>
                <p className="text-red-600">Việt Nam Độc lập Đồng minh</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Theo sáng kiến của Lãnh tụ Nguyễn Ái Quốc, <strong>Hội nghị Trung ương Đảng lần thứ 8</strong> quyết định 
              thành lập Mặt trận Việt Nam độc lập đồng minh, gọi tắt là <strong className="text-red-700">Việt Minh</strong>.
            </p>

            <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <Star className="w-5 h-5" /> Biểu tượng
              </h4>
              <p className="text-gray-700">
                Lấy <strong className="text-red-600">cờ đỏ sao vàng năm cánh</strong> làm cờ của Việt Minh 
                và sẽ làm cờ Tổ quốc khi thành lập nước. 
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h4 className="font-bold text-red-700 mb-3">Nội dung chính</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                  Tuyên ngôn, Chương trình và Điều lệ cụ thể
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                  Chính sách về chính trị, kinh tế, văn hóa, giáo dục, xã hội, ngoại giao
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                  Liên hiệp hết thảy các giới đồng bào yêu nước
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion. div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800">Thư "Kính cáo đồng bào"</h3>
                <p className="text-blue-600">Ngày 6/6/1941</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <blockquote className="text-gray-700 italic leading-relaxed">
                "Hiện thời, muốn đánh Pháp, Nhật, ta chỉ cần một điều: <strong className="text-blue-700">Toàn dân đoàn kết</strong>...  
                Hỡi đồng bào yêu quý!  Việc cứu quốc là việc chung.  Ai là người Việt Nam đều phải kề vai gánh vác một phần trách nhiệm."
              </blockquote>
            </div>

            <div className="bg-yellow-100 rounded-2xl p-6 border border-yellow-300">
              <blockquote className="text-yellow-900 italic leading-relaxed">
                <p className="mb-3">
                  "<strong>Người có tiền góp tiền, người có của góp của, người có sức góp sức, người có tài năng góp tài năng. </strong>"
                </p>
                <p>
                  "Riêng phần tôi, xin đem hết tâm lực đi cùng các bạn, vì đồng bào mưu giành tự do độc lập, 
                  <strong> dầu phải hy sinh tính mệnh cũng không nề</strong>."
                </p>
              </blockquote>
              <footer className="mt-4 text-yellow-700 font-semibold text-right">— Nguyễn Ái Quốc</footer>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ==================== TRAINING SECTION ====================
export const TrainingSection = () => (
  <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">1941–1944</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">Đào tạo cán bộ & Chuẩn bị lực lượng</h2>
      </motion.div>

      {/* Lịch sử nước ta */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Tháng 2/1942</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tác phẩm "Lịch sử nước ta"</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Tại núi rừng Cao Bằng, Nguyễn Ái Quốc viết tác phẩm <strong>"Lịch sử nước ta"</strong> theo 
                thể thơ lục bát gồm <strong>208 câu</strong>, kèm bảng liệt kê "Những năm quan trọng". 
              </p>
              <div className="bg-yellow-400 text-purple-900 rounded-2xl p-4 font-bold text-center">
                ⭐ Dự đoán thiên tài: "<strong>1945 Việt Nam độc lập</strong>"
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h4 className="font-bold text-yellow-300 mb-4">Công tác đào tạo cán bộ</h4>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0. 5 shrink-0" />
                  <span>Từ 6/1941 đến 4/1942: <strong>300 cán bộ</strong> được bồi dưỡng tại Cao Bằng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span>Học quân sự tại Tĩnh Tây, Điền Đông (Quảng Tây, Trung Quốc)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0. 5 shrink-0" />
                  <span>Tháng 10/1941: Thành lập đội du kích tập trung đầu tiên tại Pác Bó</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Các lớp quân chính */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Các lớp Quân chính (từ tháng 6/1943)</h3>
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { khoa: "Khóa I", location: "Pác Bó", students: "40 học viên" },
            { khoa: "Khóa II", location: "U Mả (Hòa An)", students: "100 học viên" },
            { khoa: "Khóa III", location: "Nguyên Bình", students: "30 học viên" },
            { khoa: "Khóa IV", location: "Hà Quảng", students: "Cán bộ Cao-Bắc-Lạng" },
          ]. map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{item.khoa}</h4>
              <p className="text-green-600 font-medium text-sm mb-2">{item.location}</p>
              <p className="text-gray-500 text-sm">{item.students}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-600" />
            Tài liệu huấn luyện do Nguyễn Ái Quốc viết:
          </h4>
          <div className="flex flex-wrap gap-3">
            {["Mười điều kỷ luật", "Chiến thuật cơ bản của du kích", "Cách đánh du kích", "Kinh nghiệm du kích Nga", "Kinh nghiệm du kích Tàu"].map((doc, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                📄 {doc}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ==================== LIBERATION ARMY SECTION ====================
export const LiberationArmySection = () => (
  <section className="relative py-20 overflow-hidden text-white" style={{ clipPath: "inset(0)" }}>
    {/* Sticky Video Background */}
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-50 mix-blend-luminosity grayscale-[0.5] sepia-[0.4] contrast-125"
      >
        {/* SỬA LỖI QUAN TRỌNG: Bỏ dấu '/' ở đầu để khớp với thư mục deploy trên GitHub Pages */}
        {/* Hoặc dùng: "/Tu-Tuong-Ho-Chi-Minh/videos/liberation.mp4" nếu muốn tuyệt đối */}
        <source src="videos/liberation.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-red-800/90 to-red-950/95 mix-blend-multiply" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-yellow-500 text-red-900 px-4 py-2 rounded-full font-bold mb-6 shadow-lg shadow-red-900/50">
          <Sword className="w-5 h-5" />
          THÁNG 12/1944
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-shadow-sm">Đội Việt Nam Tuyên truyền Giải phóng quân</h2>
        <p className="text-xl text-yellow-200 font-medium text-shadow-sm">Tiền thân của Quân đội Nhân dân Việt Nam</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-500/20 bg-red-900/50">
            <img src="images/liberation-army.jpg" alt="34 chiến sĩ Đội VNTTGPQ" className="w-full h-80 object-cover sepia-[0.2]" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-yellow-400 font-bold text-xl mb-1 drop-shadow-md">34 chiến sĩ đầu tiên</p>
              <p className="text-white font-medium">Đội Việt Nam Tuyên truyền Giải phóng quân — 22/12/1944</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-black/50 transition-colors">
              <h3 className="font-bold text-yellow-400 mb-3 uppercase tracking-wide text-sm">Nguyên tắc hoạt động</h3>
              <blockquote className="text-white/90 italic border-l-4 border-yellow-500 pl-4 py-1">
                "Chính trị trọng hơn quân sự. Nó là đội tuyên truyền."
              </blockquote>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-black/50 transition-colors">
              <h3 className="font-bold text-yellow-400 mb-3 uppercase tracking-wide text-sm">Đường lối kháng chiến</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                "Cuộc kháng chiến của ta là cuộc kháng chiến của toàn dân, cần phải <strong className="text-yellow-300">động viên toàn dân, vũ trang toàn dân</strong>.  
                Trong khi tập trung lực lượng để lập một đội quân đầu tiên, cần phải duy trì lực lượng vũ trang trong các địa phương."
              </p>
            </div>

            <div className="bg-yellow-500 text-red-900 rounded-2xl p-6 shadow-lg shadow-yellow-500/20 transform hover:scale-[1.02] transition-transform">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 fill-red-900" />
                Chiến thắng đầu tiên
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-900/10 border border-red-900/20 rounded-xl p-4 text-center">
                  <p className="font-bold text-lg">Phai Khắt</p>
                  <p className="text-sm opacity-80">25/12/1944</p>
                </div>
                <div className="bg-red-900/10 border border-red-900/20 rounded-xl p-4 text-center">
                  <p className="font-bold text-lg">Nà Ngần</p>
                  <p className="text-sm opacity-80">26/12/1944</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-center font-medium opacity-90">
                Chiến công tiêu biểu cho sức mạnh mưu trí và tinh thần quả cảm
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default { VietMinhSection, TrainingSection, LiberationArmySection };