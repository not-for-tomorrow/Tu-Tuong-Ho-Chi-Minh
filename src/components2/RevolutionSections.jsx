import { motion } from "framer-motion";
import { 
  Calendar, MapPin, Flag, AlertTriangle, Users, Flame, 
  BookOpen, Sword, AlertCircle, Star, Megaphone,
  Skull, Heart, TrendingUp, CheckCircle, FileText, Scroll, PenTool
} from "lucide-react";

// ==================== HERO SECTION ====================
export const HeroSection = () => (
  <section id="overview" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/50 rounded-full px-4 py-2 mb-6">
          <Calendar className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-300 text-sm font-medium">1941 – 1945</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight">
          Hành Trình Trở Về
          <span className="block text-yellow-400 mt-2">Lãnh Đạo Cách Mạng</span>
        </h1>

        <p className="text-xl md:text-2xl text-yellow-100/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Từ Pác Bó đến Quảng trường Ba Đình — 30 năm bôn ba kết thúc, mở ra kỷ nguyên độc lập tự do
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: MapPin, label: "Pác Bó, Cao Bằng", sub: "Điểm khởi đầu" },
            { icon: Flag, label: "19/5/1941", sub: "Thành lập Việt Minh" },
            { icon: Calendar, label: "2/9/1945", sub: "Tuyên ngôn Độc lập" },
          ].map((item, i) => (
            <motion. div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 min-w-[180px]"
            >
              <item.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-white font-semibold">{item.label}</div>
              <div className="text-yellow-200/70 text-sm">{item.sub}</div>
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
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Bối cảnh lịch sử</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">Tại sao 1941–1945 là bước ngoặt? </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Đông Dương biến động — tạo <span className="text-red-700 font-semibold">"cửa sổ cơ hội"</span> cho cách mạng
        </p>
      </motion.div>

      <motion. div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src="/images/japanese-invasion.jpg" alt="Quân Nhật tiến vào Hải Phòng" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-semibold text-lg">Quân phát xít Nhật tiến vào Hải Phòng</p>
            <p className="text-white/70 text-sm">Đông Dương dưới ách đô hộ kép Pháp - Nhật</p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: AlertTriangle, title: "Pháp suy yếu", desc: "Chiến tranh thế giới làm suy yếu quyền lực thực dân" },
          { icon: Flame, title: "Nhật chiếm đóng", desc: "Phát xít Nhật xâm lược, chính quyền bù nhìn yếu ớt" },
          { icon: Users, title: "Nạn đói 1944-1945", desc: "Hơn 2 triệu người chết, lòng phẫn nộ dâng cao" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <item. icon className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ==================== TIMELINE SECTION ====================
const timelineEvents = [
  { date: "28/01/1941", title: "Trở về Tổ quốc", location: "Pác Bó, Cao Bằng", icon: MapPin, color: "from-red-500 to-red-700", content: "Nguyễn Ái Quốc qua mốc 108 về Pác Bó, kết thúc 30 năm bôn ba.", highlight: "Chiếc nôi của cách mạng Việt Nam" },
  { date: "19/5/1941", title: "Thành lập Việt Minh", location: "Cao Bằng", icon: Flag, color: "from-yellow-500 to-orange-600", content: "Hội nghị TW8 thành lập Mặt trận Việt Minh, lấy cờ đỏ sao vàng.", highlight: "Quốc kỳ tương lai của Việt Nam" },
  { date: "06/6/1941", title: "Thư 'Kính cáo đồng bào'", location: "Cao Bằng", icon: BookOpen, color: "from-blue-500 to-blue-700", content: "\"Người có tiền góp tiền, người có sức góp sức... \"", highlight: "Kêu gọi toàn dân đoàn kết" },
  { date: "02/1942", title: "Dự đoán 1945 độc lập", location: "Cao Bằng", icon: Star, color: "from-purple-500 to-purple-700", content: "Viết \"Lịch sử nước ta\" 208 câu lục bát, dự đoán \"1945 Việt Nam độc lập\".", highlight: "Dự đoán thiên tài" },
  { date: "22/12/1944", title: "Thành lập Đội VNTTGPQ", location: "Cao Bằng", icon: Sword, color: "from-red-600 to-red-800", content: "34 chiến sĩ, thắng trận Phai Khắt và Nà Ngần.", highlight: "Tiền thân QĐND Việt Nam", hasImage: true },
  { date: "1944-1945", title: "Nạn đói & cứu trợ", location: "Bắc Bộ", icon: AlertCircle, color: "from-gray-600 to-gray-800", content: "2 triệu người chết.  Việt Minh chiếm kho thóc cứu đói.", highlight: "Từ bí mật thành phong trào quần chúng" },
  { date: "13-19/8/1945", title: "Tổng khởi nghĩa", location: "Toàn quốc", icon: Megaphone, color: "from-yellow-500 to-red-600", content: "15 ngày thắng lợi cả nước. 30/8 Bảo Đại thoái vị.", highlight: "Chấm dứt phong kiến nghìn năm" },
  { date: "02/9/1945", title: "Tuyên ngôn Độc lập", location: "Ba Đình, Hà Nội", icon: Star, color: "from-yellow-400 to-yellow-600", content: "Khai sinh nước Việt Nam Dân chủ Cộng hòa.", highlight: "Kỷ nguyên độc lập tự do" },
];

export const TimelineSection = () => (
  <section id="timeline" className="py-20 bg-gradient-to-b from-white to-slate-100">
    <div className="max-w-5xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Dòng thời gian</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Các mốc lịch sử quan trọng</h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-yellow-500 to-red-600 md:-translate-x-1/2" />

        {timelineEvents.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-red-600 rounded-full -translate-x-1/2 z-10" />

            <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ?  "md:pr-12" : "md:pl-12"}`}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className={`bg-gradient-to-r ${event.color} p-4 text-white`}>
                  <div className="flex items-center gap-3 mb-1">
                    <event.icon className="w-5 h-5" />
                    <span className="font-bold">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <div className="flex items-center gap-1 text-white/80 text-sm">
                    <MapPin className="w-3 h-3" />{event.location}
                  </div>
                </div>
                
                {event.hasImage && (
                  <div className="relative">
                    <img src="/images/liberation-army.jpg" alt="Đội Việt Nam Tuyên truyền Giải phóng quân" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                      <p className="text-white text-xs">34 chiến sĩ Đội VNTTGPQ - 22/12/1944</p>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <p className="text-gray-700 mb-3">{event.content}</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded-r-lg">
                    <p className="text-yellow-800 text-sm font-medium">⭐ {event. highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion. div>
        ))}
      </div>
    </div>
  </section>
);

// ==================== FAMINE SECTION ====================
export const FamineSection = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="inline-block bg-red-900/50 text-red-300 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-red-700">1944 – 1945</span>
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Nạn Đói Lịch Sử</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <img src="/images/famine-1945.jpg" alt="Nạn đói năm 1945" className="w-full h-64 md:h-80 object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-semibold text-lg">Nạn đói Ất Dậu 1945</p>
            <p className="text-white/70 text-sm">Hơn 2 triệu đồng bào thiệt mạng</p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { value: "2 triệu+", label: "Người chết đói", icon: Skull },
          { value: "32", label: "Tỉnh bị ảnh hưởng", icon: MapPin },
          { value: "800đ/tạ", label: "Giá gạo chợ đen", icon: TrendingUp },
        ].map((stat, i) => (
          <motion. div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="bg-red-900/50 border-l-4 border-yellow-400 p-8 rounded-r-2xl mb-12">
        <p className="text-xl text-white italic leading-relaxed mb-4">
          "Nạn đói nguy hiểm hơn nạn chiến tranh.  Trong 6 năm chiến tranh, Pháp chết 1 triệu, Đức chết 3 triệu.  Thế mà nạn đói nửa năm ở Bắc Bộ, ta đã chết hơn 2 triệu người."
        </p>
        <footer className="text-yellow-400 font-semibold">— Chủ tịch Hồ Chí Minh</footer>
      </motion.blockquote>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2"><Skull className="w-5 h-5" />Nguyên nhân</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Nhật trưng thu 900. 000 tấn gạo</li>
            <li>• Pháp dùng thóc đốt lò, nấu rượu</li>
            <li>• Diện tích đay tăng từ 5. 000 → 45.000 ha</li>
            <li>• Cấm vận chuyển lúa Nam-Bắc</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Heart className="w-5 h-5" />Việt Minh hành động</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Chiếm kho thóc Nhật cứu đói</li>
            <li>• Tổ chức phân phát lương thực</li>
            <li>• Xây dựng hình ảnh "vì dân"</li>
            <li>• Biến thành phong trào quần chúng</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// ==================== AUGUST REVOLUTION SECTION ====================
export const AugustRevolutionSection = () => (
  <section className="py-20 bg-gradient-to-br from-red-800 via-red-700 to-red-900 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-yellow-500 text-red-900 px-4 py-2 rounded-full font-bold mb-6">
          <Flag className="w-5 h-5" />THÁNG 8/1945
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Cách Mạng Tháng Tám</h2>
        <p className="text-xl text-yellow-200">"Thời cơ ngàn năm có một" — 15 ngày làm nên lịch sử</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-3 mb-12">
        {[
          { date: "13/8", event: "Quân lệnh số 1" },
          { date: "16/8", event: "Đại hội Tân Trào" },
          { date: "19/8", event: "Hà Nội khởi nghĩa" },
          { date: "23/8", event: "Huế khởi nghĩa" },
          { date: "25/8", event: "Sài Gòn khởi nghĩa" },
          { date: "30/8", event: "Bảo Đại thoái vị" },
          { date: "2/9", event: "Tuyên ngôn Độc lập" },
        ].map((m, i) => (
          <motion. div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="bg-white/10 border border-white/20 rounded-xl p-3 text-center">
            <div className="w-8 h-8 bg-yellow-400 text-red-900 rounded-full flex items-center justify-center font-bold mx-auto mb-2 text-sm">
              {m.date. split('/')[0]}
            </div>
            <p className="text-xs text-white/90">{m.event}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src="/images/declaration. jpg" alt="Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập" className="w-full h-72 md:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="text-yellow-400 font-bold text-xl mb-1">2 tháng 9 năm 1945</p>
            <p className="text-white text-lg">Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình</p>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="bg-yellow-400 text-red-900 rounded-3xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-6">
          <svg viewBox="0 0 100 100"><polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" fill="#DC2626"/></svg>
        </div>
        <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed mb-4">
          "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập."
        </blockquote>
        <footer className="font-bold">— Tuyên ngôn Độc lập, 2/9/1945</footer>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" />Ý nghĩa trong nước</h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li>• Chấm dứt chế độ phong kiến nghìn năm</li>
            <li>• Khai sinh nước Việt Nam DCCH</li>
            <li>• Mở ra kỷ nguyên độc lập tự do</li>
          </ul>
        </div>
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2"><Users className="w-5 h-5" />Ý nghĩa quốc tế</h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li>• Cổ vũ phong trào giải phóng thế giới</li>
            <li>• Chứng minh sức mạnh đoàn kết</li>
            <li>• Góp phần phi thực dân hóa toàn cầu</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// ==================== DOCUMENTS SECTION ====================
const documents = [
  { icon: Scroll, title: "Thư 'Kính cáo đồng bào'", date: "6/6/1941", excerpt: "\"Người có tiền góp tiền, người có sức góp sức... \"", significance: "Kêu gọi đoàn kết toàn dân" },
  { icon: BookOpen, title: "Lịch sử nước ta", date: "2/1942", excerpt: "208 câu lục bát, dự đoán \"1945 Việt Nam độc lập\"", significance: "Giáo dục lịch sử quần chúng" },
  { icon: FileText, title: "Chỉ thị Đội VNTTGPQ", date: "12/1944", excerpt: "\"Chính trị trọng hơn quân sự\"", significance: "Đường lối quân sự cách mạng" },
  { icon: PenTool, title: "Tài liệu du kích", date: "1941-1944", excerpt: "\"Mười điều kỷ luật\", \"Cách đánh du kích\".. .", significance: "Nền tảng lực lượng vũ trang" },
  { icon: Scroll, title: "Tuyên ngôn Độc lập", date: "2/9/1945", excerpt: "\"Tất cả mọi người đều sinh ra bình đẳng... \"", significance: "Khai sinh nước Việt Nam mới" },
];

export const DocumentsSection = () => (
  <section id="documents" className="py-20 bg-gradient-to-b from-slate-100 to-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion. div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Di sản văn kiện</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Tài liệu lịch sử quan trọng</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <doc.icon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{doc.title}</h3>
                <span className="text-sm text-gray-500">{doc.date}</span>
              </div>
            </div>
            <blockquote className="text-gray-600 italic border-l-4 border-yellow-400 pl-4 mb-4 text-sm">{doc.excerpt}</blockquote>
            <div className="bg-yellow-50 text-yellow-800 text-sm px-3 py-2 rounded-lg">📌 {doc.significance}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);