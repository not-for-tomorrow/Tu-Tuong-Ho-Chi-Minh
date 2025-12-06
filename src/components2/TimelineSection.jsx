import { motion } from "framer-motion";
import { 
  MapPin, Flag, BookOpen, Users, Sword, AlertCircle, Star, 
  Megaphone, Crown, FileText, GraduationCap
} from "lucide-react";

const timelineData = [
  {
    date: "28/01/1941",
    title: "Trở về Tổ quốc",
    location: "Pác Bó, Cao Bằng",
    icon: MapPin,
    color: "bg-red-600",
    content: "Lãnh tụ Nguyễn Ái Quốc qua mốc 108 (nay là cột mốc 675) biên giới Việt Nam - Trung Quốc về đến Pác Bó, xã Trường Hà, huyện Hà Quảng, tỉnh Cao Bằng.",
    highlight: "Kết thúc 30 năm bôn ba nước ngoài, trực tiếp lãnh đạo cách mạng",
    detail: "Pác Bó - Hà Quảng - Cao Bằng trở thành 'đại bản doanh' của căn cứ Việt Bắc, 'cội nguồn', 'chiếc nôi của cách mạng Việt Nam'.",
    image: "images/timeline1.jpg",
    imageCaption: "Nguyễn Ái Quốc trở về tổ quốc"
  },
  {
    date: "19/05/1941",
    title: "Thành lập Mặt trận Việt Minh",
    location: "Cao Bằng",
    icon: Flag,
    color: "bg-yellow-500",
    content: "Hội nghị Trung ương Đảng lần thứ 8 quyết định thành lập Mặt trận Việt Nam độc lập đồng minh (Việt Minh).",
    highlight: "Lấy cờ đỏ sao vàng năm cánh làm cờ Việt Minh và sẽ làm cờ Tổ quốc",
    detail: "Mặt trận Việt Minh ra đời với Tuyên ngôn, Chương trình và Điều lệ cụ thể, nêu rõ chính sách về chính trị, kinh tế, văn hóa, giáo dục, xã hội, ngoại giao.",
    image: "images/timeline2.jpg",
    imageCaption: "Thành lập Mặt trận Việt Minh"
  },
  {
    date: "06/06/1941",
    title: "Thư 'Kính cáo đồng bào'",
    location: "Cao Bằng",
    icon: BookOpen,
    color: "bg-blue-600",
    content: "Nguyễn Ái Quốc viết thư kêu gọi toàn dân đoàn kết.",
    highlight: "\"Người có tiền góp tiền, người có của góp của, người có sức góp sức, người có tài năng góp tài năng\"",
    detail: "\"Riêng phần tôi, xin đem hết tâm lực đi cùng các bạn, vì đồng bào mưu giành tự do độc lập, dầu phải hy sinh tính mệnh cũng không nề.\"",
    image: "images/timeline3.jpg",
    imageCaption: "Bức Thư Kính cáo đồng bào"
  },
  {
    date: "10/1941",
    title: "Đội du kích đầu tiên",
    location: "Pác Bó, Cao Bằng",
    icon: Sword,
    color: "bg-green-600",
    content: "Đội du kích tập trung đầu tiên của tỉnh Cao Bằng được thành lập tại Pác Bó.",
    highlight: "Hạt nhân đầu tiên của lực lượng vũ trang cách mạng",
    image: "images/timeline4.jpg",
    imageCaption: "Đội du kích đầu tiên"
  },
  {
    date: "02/1942",
    title: "Tác phẩm 'Lịch sử nước ta'",
    location: "Núi rừng Cao Bằng",
    icon: FileText,
    color: "bg-purple-600",
    content: "Nguyễn Ái Quốc viết tác phẩm 'Lịch sử nước ta' theo thể thơ lục bát gồm 208 câu, kèm bảng liệt kê 'Những năm quan trọng'.",
    highlight: "Dự đoán thiên tài: '1945 Việt Nam độc lập'",
    detail: "Tác phẩm nhằm giáo dục lịch sử cho quần chúng, nâng cao tinh thần yêu nước.",
    image: "images/timeline5.jpg",
    imageCaption: "Tác phẩm Lịch sử nước ta"
  },
  {
    date: "06/1941 - 04/1942",
    title: "Đào tạo 300 cán bộ",
    location: "Cao Bằng",
    icon: GraduationCap,
    color: "bg-teal-600",
    content: "300 cán bộ được bồi dưỡng, huấn luyện tại Cao Bằng.",
    highlight: "Những hạt giống cách mạng đầu tiên",
    detail: "Từ những hạt giống này, các cơ sở cách mạng, các tổ chức cứu quốc nhanh chóng phát triển khắp địa phương.",
    image: "images/timeline6.jpg",
    imageCaption: "300 cán bộ được đào tạo"
  },
  {
    date: "04/1941 - 10/1944",
    title: "Huấn luyện quân sự",
    location: "Tĩnh Tây, Điền Đông (Quảng Tây, TQ)",
    icon: Users,
    color: "bg-orange-600",
    content: "Cán bộ được học quân sự tại các trường quân sự ở Trung Quốc.",
    highlight: "Hạt nhân quan trọng trong lực lượng vũ trang",
    detail: "Đây là những hạt nhân quan trọng của căn cứ địa cách mạng Cao-Bắc-Lạng và khu giải phóng sau này.",
    image: "images/timeline7.jpg",
    imageCaption: "Huấn luyện quân sự"
  },
  {
    date: "06/1943",
    title: "Mở các lớp Quân chính",
    location: "Pác Bó, U Mả, Nguyên Bình, Hà Quảng",
    icon: GraduationCap,
    color: "bg-indigo-600",
    content: "Trung ương mở các lớp 'quân chính': Khóa I (40 học viên), Khóa II (100 học viên), Khóa III (30 học viên), Khóa IV (cán bộ Cao-Bắc-Lạng).",
    highlight: "Chương trình theo sách huấn luyện du kích của Nguyễn Ái Quốc",
    detail: "Tài liệu: 'Mười điều kỷ luật', 'Chiến thuật cơ bản của du kích', 'Cách đánh du kích', 'Kinh nghiệm du kích Nga', 'Kinh nghiệm du kích Tàu'...",
    image: "images/timeline8.jpg",
    imageCaption: "Các lớp Quân chính"
  },
  {
    date: "22/12/1944",
    title: "Thành lập Đội VNTTGPQ",
    location: "Cao Bằng",
    icon: Sword,
    color: "bg-red-700",
    content: "Hồ Chí Minh ra chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân gồm 34 chiến sĩ.",
    highlight: "\"Chính trị trọng hơn quân sự.  Nó là đội tuyên truyền. \"",
    detail: "\"Cuộc kháng chiến của ta là cuộc kháng chiến của toàn dân, cần phải động viên toàn dân, vũ trang toàn dân.\"",
    image: "images/liberation-army.jpg",
    imageCaption: "34 chiến sĩ Đội Việt Nam Tuyên truyền Giải phóng quân"
  },
  {
    date: "25/12/1944",
    title: "Trận Phai Khắt",
    location: "Cao Bằng",
    icon: Sword,
    color: "bg-red-600",
    content: "Chiến thắng đầu tiên của Đội Việt Nam Tuyên truyền Giải phóng quân.",
    highlight: "Chiến công tiêu biểu cho sức mạnh mưu trí và tinh thần quả cảm",
    image: "images/timeline9.jpg",
    imageCaption: "Chiến Trận Phai Khắt"
  },
  {
    date: "26/12/1944",
    title: "Trận Nà Ngần",
    location: "Cao Bằng",
    icon: Sword,
    color: "bg-red-600",
    content: "Chiến thắng thứ hai của Đội Việt Nam Tuyên truyền Giải phóng quân.",
    highlight: "Đội quân chính quy đầu tiên của cách mạng Việt Nam",
    image: "images/timeline10.jpg",
    imageCaption: "Chiến Trận Nà Ngần"
  },
  {
    date: "1940-1945",
    title: "Nhật chiếm đóng Đông Dương",
    location: "Toàn Đông Dương",
    icon: AlertCircle,
    color: "bg-gray-800",
    content: "Phát xít Nhật xâm lược Đông Dương, thiết lập chế độ cai trị hà khắc, trưng thu lương thực phục vụ chiến tranh.",
    highlight: "Đông Dương dưới ách đô hộ kép Pháp - Nhật",
    detail: "Năm 1944, Nhật buộc Pháp cung cấp hơn 900.000 tấn gạo, cấm vận chuyển lúa từ miền Nam ra Bắc.",
    image: "images/japanese-invasion.jpg",
    imageCaption: "Quân phát xít Nhật tiến vào Hải Phòng"
  },
  {
    date: "1944-1945",
    title: "Nạn đói Ất Dậu",
    location: "32 tỉnh miền Bắc và Bắc Trung Bộ",
    icon: AlertCircle,
    color: "bg-gray-700",
    content: "Nạn đói cực kỳ nghiêm trọng do chính sách trưng thu gạo của Nhật-Pháp, thiên tai, chiến tranh.  Giá gạo chợ đen từ 57đ (1943) tăng vọt lên 700-800đ (1945).",
    highlight: "Hơn 2 triệu người chết đói",
    detail: "Việt Minh tích cực cứu trợ: phát động chiếm kho thóc cứu đói, xây dựng hình ảnh 'người của dân, vì dân', biến từ lực lượng bí mật thành phong trào quần chúng rộng lớn.",
    image: "images/famine-1945.jpg",
    imageCaption: "Nạn đói Ất Dậu 1945 - Hơn 2 triệu đồng bào thiệt mạng"
  },
  {
    date: "16/04/1945",
    title: "Ủy ban dân tộc giải phóng",
    location: "Toàn quốc",
    icon: Users,
    color: "bg-blue-700",
    content: "Tổng bộ Việt Minh chỉ đạo thành lập các Ủy ban dân tộc giải phóng từ Trung ương đến địa phương.",
    highlight: "Chuẩn bị bộ máy chính quyền cách mạng",
    image: "images/timeline11.jpg",
    imageCaption: "Ủy ban dân tộc giải phóng"
  },
  {
    date: "Đầu 05/1945",
    title: "Căn cứ Tân Trào",
    location: "Tuyên Quang",
    icon: MapPin,
    color: "bg-green-700",
    content: "Chủ tịch Hồ Chí Minh từ Cao Bằng về Tuyên Quang, chọn Tân Trào làm căn cứ chỉ đạo toàn quốc.",
    highlight: "Thủ đô kháng chiến",
    image: "images/timeline12.jpg",
    imageCaption: "Căn cứ Tân Trào"
  },
  {
    date: "04/06/1945",
    title: "Khu Giải phóng Việt Bắc",
    location: "Việt Bắc",
    icon: Flag,
    color: "bg-green-600",
    content: "Khu Giải phóng Việt Bắc chính thức được thành lập.",
    highlight: "Căn cứ địa vững chắc của cách mạng",
    image: "images/timeline13.jpg",
    imageCaption: "Khu Giải phóng Việt Bắc"
  },
  {
    date: "13/08/1945",
    title: "Quân lệnh số 1",
    location: "Tân Trào",
    icon: Megaphone,
    color: "bg-red-600",
    content: "Ủy ban Khởi nghĩa toàn quốc được thành lập và ngay trong ngày đã ra Quân lệnh số 1.",
    highlight: "Phát động tổng khởi nghĩa trên toàn quốc",
    detail: "Thời cơ cách mạng đã chín muồi.  Trung ương Đảng nhận định: Đây là thời cơ 'ngàn năm có một'.",
    image: "images/timeline14.jpg",
    imageCaption: "Quân lệnh số 1"
  },
  {
    date: "16/08/1945",
    title: "Quốc dân đại hội Tân Trào",
    location: "Tân Trào, Tuyên Quang",
    icon: Star,
    color: "bg-yellow-600",
    content: "Quốc dân đại hội họp tại Tân Trào.",
    highlight: "Thông qua 10 chính sách lớn, chọn Quốc kỳ cờ đỏ sao vàng, Quốc ca 'Tiến quân ca'",
    detail: "Cử ra Ủy ban Giải phóng dân tộc Việt Nam (Chính phủ Lâm thời) do Chủ tịch Hồ Chí Minh đứng đầu.",
    image: "images/timeline15.jpg",
    imageCaption: "Quốc dân đại hội Tân Trào"
  },
  {
    date: "17/08/1945",
    title: "Mít tinh Nhà hát Lớn",
    location: "Hà Nội",
    icon: Megaphone,
    color: "bg-red-500",
    content: "Hàng vạn quần chúng từ nội, ngoại thành tham gia mít tinh lớn tại Nhà hát Lớn.",
    highlight: "Hô vang 'Ủng hộ Việt Minh! ', 'Việt Nam độc lập!'",
    detail: "Tuần hành qua các phố trung tâm.",
    image: "images/timeline16.jpg",
    imageCaption: "Mít tinh Nhà hát Lớn"
  },
  {
    date: "18/08/1945",
    title: "Cờ đỏ sao vàng tung bay",
    location: "Hà Nội",
    icon: Flag,
    color: "bg-red-500",
    content: "Cờ đỏ sao vàng rực rỡ trên nhiều tuyến phố chính Hà Nội.",
    highlight: "Khí thế cách mạng dâng cao",
    image: "images/timeline17.jpg",
    imageCaption: "Cờ đỏ sao vàng tung bay"
  },
  {
    date: "19/08/1945",
    title: "Khởi nghĩa Hà Nội thắng lợi",
    location: "Hà Nội",
    icon: Star,
    color: "bg-red-600",
    content: "Tổng khởi nghĩa nổ ra với khí thế áp đảo.  Chiếm Phủ Khâm sai Bắc Bộ, Sở Cảnh sát, Sở Bưu điện, Trại Bảo an binh.",
    highlight: "Đêm 19/8, hoàn toàn làm chủ Thủ đô",
    detail: "Chính quyền Bảo Đại - Trần Trọng Kim tan rã.",
    image: "images/timeline18.jpg",
    imageCaption: "Khởi nghĩa Hà Nội thắng lợi"
  },
  {
    date: "23/08/1945",
    title: "Khởi nghĩa Huế thắng lợi",
    location: "Huế",
    icon: Star,
    color: "bg-purple-600",
    content: "Hàng vạn người tiến vào thành phố, chiếm các công sở trọng yếu.",
    highlight: "Giành chính quyền trong hòa bình",
    detail: "Từ ngày 20/8: Thành lập Ủy ban Khởi nghĩa tỉnh.  Từ 21/8: Hàng loạt cuộc biểu tình thị uy tạo thế áp đảo.",
    image: "images/timeline19.jpg",
    imageCaption: "Khởi nghĩa Huế thắng lợi"
  },
  {
    date: "25/08/1945",
    title: "Khởi nghĩa Sài Gòn thắng lợi",
    location: "Sài Gòn - Gia Định",
    icon: Star,
    color: "bg-orange-600",
    content: "Các đoàn công nhân, nông dân, thanh niên từ Gia Định, Biên Hòa, Thủ Dầu Một, Mỹ Tho đổ về trung tâm.",
    highlight: "Chính quyền bù nhìn nhanh chóng sụp đổ",
    detail: "Chiếm lĩnh Sở Mật thám, Sở Cảnh sát, Bưu điện, nhà ga, nhà máy điện...  Chính quyền cách mạng được thiết lập.",
    image: "images/timeline20.jpg",
    imageCaption: "Khởi nghĩa Sài Gòn thắng lợi"
  },
  {
    date: "30/08/1945",
    title: "Bảo Đại thoái vị",
    location: "Huế",
    icon: Crown,
    color: "bg-purple-700",
    content: "Vua Bảo Đại tuyên bố thoái vị.",
    highlight: "Chấm dứt hoàn toàn chế độ phong kiến kéo dài hàng nghìn năm",
    image: "images/timeline21.jpg",
    imageCaption: "Bảo Đại thoái vị"
  },
  {
    date: "02/09/1945",
    title: "Tuyên ngôn Độc lập",
    location: "Quảng trường Ba Đình, Hà Nội",
    icon: Star,
    color: "bg-yellow-500",
    content: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, trịnh trọng tuyên bố quyền độc lập, tự do, bình đẳng của dân tộc Việt Nam trước thế giới.",
    highlight: "Khai sinh nước Việt Nam Dân chủ Cộng hòa",
    detail: "\"Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập.  Toàn thể dân tộc Việt Nam, quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.\"",
    image: "images/declaration.jpg",
    imageCaption: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình"
  }
];

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            1941 – 1945
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
            Các Mốc Sự Kiện Lịch Sử
          </h2>
          <p className="text-gray-600">
            Hành trình 4 năm chuẩn bị và thực hiện Tổng khởi nghĩa giành chính quyền
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Đường kẻ dọc */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-yellow-500 to-red-600 transform md:-translate-x-1/2" />

          {timelineData.map((event, index) => (
            <motion. div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              className={`relative flex items-start mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot trên timeline */}
              <div className={`absolute left-6 md:left-1/2 w-4 h-4 ${event.image ? 'w-6 h-6 border-[5px]' : 'border-4'} bg-white border-red-600 rounded-full transform -translate-x-1/2 z-10 mt-6`} />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-30px)] ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow ${event.image ? 'ring-2 ring-yellow-400' : ''}`}>
                  {/* Header */}
                  <div className={`${event.color} p-4 text-white`}>
                    <div className="flex items-center gap-3">
                      <event.icon className="w-5 h-5 shrink-0" />
                      <div>
                        <p className="font-bold text-sm opacity-90">{event.date}</p>
                        <h3 className="font-bold text-lg leading-tight">{event.title}</h3>
                      </div>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-1 mt-2 text-white/80 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Image nếu có */}
                  {event. image && (
                    <div className="relative">
                      <img 
                        src={event.image} 
                        alt={event.imageCaption} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-xs font-medium">{event.imageCaption}</p>
                      </div>
                    </div>
                  )}

                  {/* Body */}
                  <div className="p-4">
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {event.content}
                    </p>
                    
                    {event.highlight && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg mb-3">
                        <p className="text-yellow-800 text-sm font-medium">
                          ⭐ {event. highlight}
                        </p>
                      </div>
                    )}

                    {event.detail && (
                      <p className="text-gray-500 text-xs italic leading-relaxed">
                        {event.detail}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Kết thúc timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-4 rounded-full shadow-lg">
            <Star className="w-6 h-6" />
            <span className="font-bold text-lg">Kỷ nguyên Độc lập - Tự do</span>
            <Star className="w-6 h-6" />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Cách mạng Tháng Tám thắng lợi là kết quả tổng hòa của thời cơ lịch sử thuận lợi, 
            sự chuẩn bị công phu và sự lãnh đạo sáng suốt của Đảng do Chủ tịch Hồ Chí Minh đứng đầu. 
          </p>
        </motion. div>
      </div>
    </section>
  );
};

export default TimelineSection;