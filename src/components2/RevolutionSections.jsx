import { motion } from "framer-motion";
import { MapPin, Flag, Skull, Heart, TrendingUp, AlertCircle, CheckCircle, Users, Star, Calendar, Building, Crown } from "lucide-react";

// ==================== INTERACTIVE TIMELINE ====================
export const TimelineOverview = () => {
  const allEvents = [
    { year: "1941", month: "28/01", title: "Trở về Tổ quốc", desc: "Nguyễn Ái Quốc qua mốc 108 về Pác Bó, Cao Bằng", type: "milestone" },
    { year: "1941", month: "19/05", title: "Thành lập Việt Minh", desc: "Hội nghị TW8, lấy cờ đỏ sao vàng", type: "milestone" },
    { year: "1941", month: "06/06", title: "Thư 'Kính cáo đồng bào'", desc: "Kêu gọi toàn dân đoàn kết", type: "document" },
    { year: "1941", month: "10", title: "Đội du kích đầu tiên", desc: "Thành lập tại Pác Bó", type: "military" },
    { year: "1942", month: "02", title: "'Lịch sử nước ta'", desc: "208 câu lục bát, dự đoán 1945 độc lập", type: "document" },
    { year: "1942", month: "04", title: "Đào tạo cán bộ", desc: "300 cán bộ được huấn luyện (6/1941-4/1942)", type: "training" },
    { year: "1943", month: "06", title: "Lớp Quân chính I", desc: "40 học viên tại Pác Bó", type: "training" },
    { year: "1943", month: "", title: "Lớp Quân chính II", desc: "100 học viên tại U Mả", type: "training" },
    { year: "1944", month: "22/12", title: "Thành lập Đội VNTTGPQ", desc: "34 chiến sĩ đầu tiên", type: "military" },
    { year: "1944", month: "25/12", title: "Trận Phai Khắt", desc: "Chiến thắng đầu tiên", type: "military" },
    { year: "1944", month: "26/12", title: "Trận Nà Ngần", desc: "Chiến thắng thứ hai", type: "military" },
    { year: "1945", month: "03", title: "Nạn đói đỉnh điểm", desc: "Hơn 2 triệu người chết", type: "crisis" },
    { year: "1945", month: "16/04", title: "Ủy ban dân tộc giải phóng", desc: "Thành lập từ TW đến địa phương", type: "organization" },
    { year: "1945", month: "05", title: "Căn cứ Tân Trào", desc: "Hồ Chí Minh về Tuyên Quang", type: "milestone" },
    { year: "1945", month: "04/06", title: "Khu Giải phóng Việt Bắc", desc: "Chính thức thành lập", type: "organization" },
    { year: "1945", month: "13/08", title: "Quân lệnh số 1", desc: "Phát động tổng khởi nghĩa", type: "milestone" },
    { year: "1945", month: "16/08", title: "Quốc dân đại hội Tân Trào", desc: "Thông qua 10 chính sách, chọn Quốc kỳ, Quốc ca", type: "milestone" },
    { year: "1945", month: "19/08", title: "Khởi nghĩa Hà Nội", desc: "Làm chủ Thủ đô", type: "revolution" },
    { year: "1945", month: "23/08", title: "Khởi nghĩa Huế", desc: "Giành chính quyền", type: "revolution" },
    { year: "1945", month: "25/08", title: "Khởi nghĩa Sài Gòn", desc: "Giành chính quyền", type: "revolution" },
    { year: "1945", month: "30/08", title: "Bảo Đại thoái vị", desc: "Chấm dứt chế độ phong kiến", type: "milestone" },
    { year: "1945", month: "02/09", title: "Tuyên ngôn Độc lập", desc: "Khai sinh nước Việt Nam DCCH", type: "milestone" },
  ];

  const typeColors = {
    milestone: "bg-yellow-500",
    document: "bg-blue-500",
    military: "bg-red-600",
    training: "bg-green-500",
    crisis: "bg-gray-700",
    organization: "bg-purple-500",
    revolution: "bg-red-500",
  };

  const typeLabels = {
    milestone: "Mốc quan trọng",
    document: "Văn kiện",
    military: "Quân sự",
    training: "Đào tạo",
    crisis: "Khủng hoảng",
    organization: "Tổ chức",
    revolution: "Khởi nghĩa",
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-yellow-500/50">
            <Calendar className="w-4 h-4 inline mr-2" />
            1941 – 1945
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Dòng Thời Gian Lịch Sử</h2>
          <p className="text-gray-400">22 sự kiện quan trọng trong hành trình giành độc lập</p>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(typeLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${typeColors[key]}`} />
              <span className="text-xs text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Timeline by Year */}
        <div className="space-y-12">
          {["1941", "1942", "1943", "1944", "1945"].map((year) => (
            <motion. div
              key={year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-900">{year}</span>
                </div>
                <div className="flex-1 h-1 bg-yellow-500/30 rounded" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 md:ml-24">
                {allEvents
                  .filter((e) => e.year === year)
                  .map((event, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full ${typeColors[event.type]} mt-1. 5 shrink-0`} />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {event.month && (
                              <span className="text-yellow-400 text-xs font-bold">{event.month}</span>
                            )}
                          </div>
                          <h4 className="font-bold text-white text-sm mb-1">{event.title}</h4>
                          <p className="text-gray-400 text-xs">{event.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== FAMINE SECTION ====================
export const FamineSection = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block bg-red-900/50 text-red-300 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-red-700">
          Năm Ất Dậu 1944-1945
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Nạn Đói Lịch Sử</h2>
        <p className="text-gray-400">Bi kịch đau thương nhất trong lịch sử cận đại Việt Nam</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <img src="images/famine-1945.jpg" alt="Nạn đói năm 1945" className="w-full h-64 md:h-[500px] object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-semibold text-lg">Nạn đói Ất Dậu 1945</p>
            <p className="text-white/70 text-sm">Hơn 2 triệu đồng bào thiệt mạng tại 32 tỉnh miền Bắc và Bắc Trung Bộ</p>
          </div>
        </div>
      </motion. div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {[
          { value: "2 triệu+", label: "Người chết đói", icon: Skull },
          { value: "32", label: "Tỉnh bị ảnh hưởng", icon: MapPin },
          { value: "900.000", label: "Tấn gạo bị trưng thu", icon: TrendingUp },
          { value: "800đ/tạ", label: "Giá gạo chợ đen", icon: AlertCircle },
        ].map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
            <Skull className="w-5 h-5" />Nguyên nhân chi tiết
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• Nhật trưng thu <strong>hơn 900.000 tấn gạo</strong> để nuôi chiến tranh phát xít</li>
            <li>• Pháp dùng thóc <strong>đốt lò thay than đá</strong> và nấu rượu</li>
            <li>• Hàng chục nghìn mẫu ngô bị phá, hàng triệu tấn thóc bị thu nộp</li>
            <li>• Diện tích trồng đay tăng từ <strong>5.000 ha → 45.000 ha</strong> (thay ruộng lúa)</li>
            <li>• Nhật <strong>cấm vận chuyển lúa</strong> từ miền Nam ra Bắc</li>
            <li>• Mất mùa năm 1944, thiên tai, chiến tranh làm đứt gãy giao thông</li>
          </ul>
          
          <div className="mt-4 bg-gray-800 rounded-xl p-4">
            <h4 className="text-yellow-400 font-semibold mb-2">📈 Giá gạo "phi nước đại"</h4>
            <div className="grid grid-cols-3 gap-2 text-xs text-center">
              <div className="bg-gray-700 rounded p-2">
                <p className="text-gray-400">1943</p>
                <p className="text-white">Chính thức: 31đ</p>
                <p className="text-red-400 font-bold">Chợ đen: 57đ</p>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <p className="text-gray-400">1944</p>
                <p className="text-white">Chính thức: 40đ</p>
                <p className="text-red-400 font-bold">Chợ đen: 350đ</p>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <p className="text-gray-400">1945</p>
                <p className="text-white">Chính thức: 53đ</p>
                <p className="text-red-400 font-bold">Chợ đen: 700-800đ</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5" />Việt Minh hành động
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• Phát động phong trào <strong>chiếm kho thóc</strong> của Nhật/chính quyền chiếm đóng cứu đói</li>
            <li>• Tổ chức <strong>phân phát gạo, lương thực có hệ thống</strong></li>
            <li>• Vận dụng <strong>mạng lưới cơ sở, chi bộ, tổ chức tự vệ, tuyên truyền</strong></li>
            <li>• Kêu gọi phân phát gạo, hỗ trợ người nghèo đói, xây dựng lòng tin</li>
            <li>• Xây dựng hình ảnh <strong>"người của dân, vì dân"</strong></li>
          </ul>
          
          <div className="mt-4 bg-green-900/30 border border-green-700/50 rounded-xl p-4">
            <p className="text-green-200 text-sm">
              💡 <strong>Kết quả:</strong> Việt Minh biến từ lực lượng cách mạng <strong>bí mật, quân sự</strong> → 
              <strong> phong trào quần chúng rộng lớn</strong>, xây dựng uy tín chính trị vững chắc — từ "bí mật" ➝ "quần chúng rộng rãi". 
            </p>
          </div>
        </motion. div>
      </div>

      {/* Trọng điểm và diễn biến */}
      <motion. div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">📍 Trọng điểm và diễn biến</h3>
        <p className="text-gray-300 mb-4">
          Nạn đói diễn ra ở <strong>32 tỉnh miền Bắc và Bắc Trung Bộ</strong>, từ Quảng Trị trở ra. 
          Trọng tâm là những người dân nghèo, người lao động, đặc biệt là nông dân không có ruộng đất.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          {["Thái Bình", "Nam Định", "Hải Phòng", "Thanh Hóa", "Hà Nội"]. map((tinh, i) => (
            <span key={i} className="bg-red-900/50 border border-red-700 px-4 py-2 rounded-full text-sm text-red-200">{tinh}</span>
          ))}
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-sm text-gray-300">
          <p className="mb-2"><strong className="text-white">Tháng 3/1945:</strong> Nạn đói lên đến đỉnh điểm.  Lũ lượt người ngược, kẻ xuôi chạy đói đến các thành phố lớn.</p>
          <p className="mb-2">Người dân Hà Nội phát động <strong className="text-yellow-400">Ngày cứu đói</strong>, lập trại tế bần phát cháo. </p>
          <p>Người sắp chết được đưa về trại Giáp Bát, người chết đói xác chất đầy xe bò đem đi nghĩa trang Hợp Thiện (Hai Bà Trưng).</p>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="bg-red-900/50 border-l-4 border-yellow-400 p-8 rounded-r-2xl">
        <p className="text-xl text-white italic leading-relaxed mb-4">
          "Nạn đói nguy hiểm hơn nạn chiến tranh.  Thí dụ trong 6 năm chiến tranh, nước Pháp chết một triệu người, 
          nước Đức chết chừng 3 triệu.  <strong>Thế mà nạn đói nửa năm ở Bắc Bộ, ta đã chết hơn 2 triệu người</strong>."
        </p>
        <footer className="text-yellow-400 font-semibold">— Chủ tịch Hồ Chí Minh</footer>
      </motion. blockquote>

      {/* Hậu quả xã hội */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mt-8 bg-yellow-900/20 border border-yellow-600/30 rounded-2xl p-6 text-center">
        <p className="text-yellow-200">
          💡 Xã hội Việt Nam sau nạn đói ở trong trạng thái <strong>vừa đau khổ vừa bất mãn sâu sắc</strong>; 
          lòng dân tìm kiếm một lối thoát — điều mà <strong>Việt Minh đã mở hướng từ trước</strong> với hoạt động cứu trợ và tuyên truyền.
        </p>
      </motion.div>
    </div>
  </section>
);

// ==================== AUGUST REVOLUTION SECTION ====================
export const AugustRevolutionSection = () => (
  // Kỹ thuật quan trọng: style={{ clipPath: "inset(0)" }}
  // Nó tạo ra một khung nhìn giới hạn, giúp video "fixed" chỉ hiển thị khi scroll qua section này
  <section 
    className="relative w-full min-h-screen py-20 text-white bg-red-900" // Thêm bg-red-900 để dự phòng khi video chưa load
    style={{ clipPath: "inset(0)" }} 
  >
    {/* Video Background Layer */}
    {/* position: fixed để video luôn đứng yên đầy màn hình */}
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale-[0.3] sepia-[0.2]"
      >
        <source src="videos/cmt8toanthang.mp4" type="video/mp4" />
      </video>
      
      {/* Các lớp phủ Overlay cũng phải để trong div fixed này để phủ lên video */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-red-800/90 to-red-950/95 mix-blend-multiply" />
      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
    </div>

    {/* Content Container - Vẫn giữ relative để trôi lên trên lớp fixed video */}
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-yellow-500 text-red-900 px-4 py-2 rounded-full font-bold mb-6 shadow-lg shadow-red-900/50">
          <Flag className="w-5 h-5" />
          THÁNG 8/1945
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-shadow-sm">Cách Mạng Tháng Tám</h2>
        <p className="text-xl text-yellow-200 font-medium text-shadow-sm">"Thời cơ ngàn năm có một" — 15 ngày làm nên lịch sử</p>
      </motion.div>

      {/* Bối cảnh thế giới */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">🌍 Bối cảnh thế giới cuối 1944 - đầu 1945</h3>
          <p className="text-white/90 leading-relaxed">
            Cục diện thế giới thay đổi nhanh chóng. Sau loạt thất bại của phe trục ở Thái Bình Dương và châu Âu, 
            cùng với việc phát xít Nhật sắp thua tại Đông Dương, <strong className="text-yellow-400">quyền lực thực dân & chính quyền bù nhìn suy yếu rõ rệt</strong>.
            Trung ương Đảng nhận định: <strong className="text-yellow-400">Đây là thời cơ "ngàn năm có một"</strong> để nhân dân ta vùng lên giành lại độc lập.
          </p>
        </div>
      </motion.div>

      {/* Chuẩn bị khởi nghĩa */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Chuẩn bị Tổng khởi nghĩa</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { date: "16/4/1945", event: "Tổng bộ Việt Minh chỉ đạo thành lập Ủy ban dân tộc giải phóng từ TW đến địa phương" },
              { date: "Đầu 5/1945", event: "Hồ Chí Minh từ Cao Bằng về Tuyên Quang, chọn Tân Trào làm căn cứ chỉ đạo toàn quốc" },
              { date: "4/6/1945", event: "Khu Giải phóng Việt Bắc chính thức thành lập" },
              { date: "13/8/1945", event: "Ủy ban Khởi nghĩa toàn quốc thành lập, ra Quân lệnh số 1 phát động tổng khởi nghĩa" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                <p className="text-yellow-400 font-bold text-sm mb-2">{item.date}</p>
                <p className="text-white/90 text-sm">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quốc dân đại hội Tân Trào */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-400/30 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
              <Star className="w-8 h-8 text-red-900" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">Quốc dân đại hội Tân Trào</h3>
              <p className="text-yellow-200">Ngày 16/8/1945</p>
            </div>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-white/90">
            {[
              "Thông qua Mười chính sách lớn của Mặt trận Việt Minh",
              "Phê chuẩn Lệnh tổng khởi nghĩa",
              "Thống nhất Quốc kỳ nền đỏ sao vàng năm cánh",
              "Chọn 'Tiến quân ca' làm Quốc ca",
              "Cử Ủy ban Giải phóng dân tộc Việt Nam (Chính phủ Lâm thời) do Chủ tịch Hồ Chí Minh đứng đầu"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Chi tiết 3 thành phố */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center text-shadow-sm">Diễn biến tại 3 đô thị lớn</h3>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Hà Nội */}
          <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/50 transition-colors">
            <div className="bg-gradient-to-r from-red-700 to-red-600 p-4">
              <div className="flex items-center gap-3">
                <Building className="w-6 h-6" />
                <div>
                  <h4 className="text-xl font-bold">Hà Nội</h4>
                  <p className="text-white/90 text-sm">17-19/8/1945</p>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-yellow-400 font-bold shrink-0">17/8:</span>
                <span className="text-white/80">Hàng vạn quần chúng mít tinh tại Nhà hát Lớn, tuần hành hô vang "Ủng hộ Việt Minh!", "Việt Nam độc lập!"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-yellow-400 font-bold shrink-0">18/8:</span>
                <span className="text-white/80">Cờ đỏ sao vàng rực rỡ trên nhiều tuyến phố chính</span>
              </div>
              <div className="flex gap-3">
                <span className="text-yellow-400 font-bold shrink-0">19/8:</span>
                <span className="text-white/80">Tổng khởi nghĩa với khí thế áp đảo. Chiếm Phủ Khâm sai Bắc Bộ, Sở Cảnh sát. <strong className="text-green-400">Đêm 19/8 hoàn toàn làm chủ Thủ đô.</strong></span>
              </div>
            </div>
          </div>

          {/* Huế */}
          <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
            <div className="bg-gradient-to-r from-purple-700 to-purple-600 p-4">
              <div className="flex items-center gap-3">
                <Crown className="w-6 h-6" />
                <div>
                  <h4 className="text-xl font-bold">Huế</h4>
                  <p className="text-white/90 text-sm">20-23/8/1945</p>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-yellow-400 font-bold shrink-0">20/8:</span>
                <span className="text-white/80">Ủy ban Khởi nghĩa tỉnh được thành lập</span>
              </div>
              <div className="flex gap-3">
                <span className="text-yellow-400 font-bold shrink-0">21/8:</span>
                <span className="text-white/80">Hàng loạt cuộc biểu tình thị uy diễn ra, tạo thế áp đảo</span>
              </div>
              <div className="flex gap-3">
                <span className="text-yellow-400 font-bold shrink-0">23/8:</span>
                <span className="text-white/80">Hàng vạn người tiến vào thành phố, chiếm các công sở trọng yếu. <strong className="text-green-400">Giành chính quyền trong hòa bình.</strong></span>
              </div>
            </div>
          </div>

          {/* Sài Gòn */}
          <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-colors">
            <div className="bg-gradient-to-r from-orange-700 to-orange-600 p-4">
              <div className="flex items-center gap-3">
                <Building className="w-6 h-6" />
                <div>
                  <h4 className="text-xl font-bold">Sài Gòn</h4>
                  <p className="text-white/90 text-sm">25/8/1945</p>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-yellow-400 font-bold shrink-0">25/8:</span>
                <span className="text-white/80">Xứ ủy Nam Kỳ ấn định ngày khởi nghĩa. Các đoàn công nhân, nông dân, thanh niên đổ về trung tâm.</span>
              </div>
              <div className="text-white/80">
                Chiếm lĩnh Sở Mật thám, Sở Cảnh sát, Bưu điện. 
                <strong className="text-green-400"> Chính quyền bù nhìn nhanh chóng sụp đổ.</strong>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-yellow-200 mt-8 italic text-lg drop-shadow-md">
          "Từ thành thị đến nông thôn, từ miền xuôi đến miền ngược, từ đất liền đến hải đảo — phong trào khởi nghĩa dâng lên như vũ bão."
        </p>
      </motion.div>

      {/* Bảo Đại thoái vị */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="bg-purple-900/40 border border-purple-500/30 rounded-2xl p-6 text-center backdrop-blur-sm">
          <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4 drop-shadow-lg" />
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">Ngày 30/8/1945</h3>
          <p className="text-white text-lg">
            Vua <strong>Bảo Đại tuyên bố thoái vị</strong>, chấm dứt hoàn toàn 
            <strong className="text-yellow-400"> chế độ phong kiến kéo dài hàng nghìn năm</strong>. 
          </p>
        </div>
      </motion.div>

      {/* Ảnh Tuyên ngôn */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/20">
          <img src="images/declaration.jpg" alt="Tuyên ngôn Độc lập" className="w-full h-72 md:h-full object-cover sepia-[0.3]" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="text-yellow-400 font-bold text-xl mb-1 drop-shadow-md">2 tháng 9 năm 1945</p>
            <p className="text-white text-lg font-medium">Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình</p>
          </div>
        </div>
      </motion.div>

      {/* Tuyên ngôn */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-red-900 rounded-3xl p-8 md:p-12 text-center mb-12 shadow-2xl shadow-yellow-500/20">
        <div className="w-16 h-16 mx-auto mb-6">
          <svg viewBox="0 0 100 100" className="drop-shadow-sm"><polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" fill="#991B1B"/></svg>
        </div>
        <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed mb-4 font-semibold">
          "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập. 
          Toàn thể dân tộc Việt Nam, quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy."
        </blockquote>
        <footer className="font-bold text-lg opacity-90">— Tuyên ngôn Độc lập, 2/9/1945</footer>
        <p className="mt-6 text-red-950 font-medium border-t border-red-900/20 pt-6">
          <strong>Nước Việt Nam Dân chủ Cộng hòa ra đời</strong> — đánh dấu sự mở đầu kỷ nguyên mới của dân tộc: 
          kỷ nguyên độc lập, tự do và làm chủ vận mệnh đất nước. 
        </p>
      </motion.div>

      {/* Ý nghĩa */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />Ý nghĩa trong nước
          </h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li>• Chấm dứt chế độ phong kiến hàng nghìn năm</li>
            <li>• Khai sinh nước Việt Nam Dân chủ Cộng hòa</li>
            <li>• Đảng trở thành đảng cầm quyền, chuẩn bị điều kiện cho các thắng lợi tiếp theo</li>
            <li>• Mở ra kỷ nguyên độc lập, tự do, làm chủ vận mệnh đất nước</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />Ý nghĩa quốc tế
          </h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li>• Cổ vũ mạnh mẽ các dân tộc thuộc địa đứng lên đấu tranh</li>
            <li>• Chứng minh sức mạnh của đoàn kết toàn dân</li>
            <li>• Góp phần vào xu thế phi thực dân hóa toàn cầu</li>
            <li>• Khẳng định vị thế Việt Nam trong dòng chảy lịch sử thế giới hiện đại</li>
          </ul>
        </motion.div>
      </div>

      {/* Kết luận */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center shadow-xl">
        <p className="text-white/90 leading-relaxed text-lg">
          Cách mạng Tháng Tám năm 1945 giành thắng lợi là <strong className="text-yellow-400">kết quả tổng hòa của nhiều yếu tố</strong>, 
          trong đó nổi bật là sự kết hợp chặt chẽ giữa <strong className="text-yellow-400">thời cơ lịch sử thuận lợi</strong> với 
          <strong className="text-yellow-400"> sự chuẩn bị công phu, bài bản</strong> và 
          <strong className="text-yellow-400"> sự lãnh đạo sáng suốt, linh hoạt</strong> của Đảng ta 
          do <strong className="text-yellow-400">Chủ tịch Hồ Chí Minh</strong> đứng đầu.
        </p>
      </motion.div>
    </div>
  </section>
);

export default { TimelineOverview, FamineSection, AugustRevolutionSection };