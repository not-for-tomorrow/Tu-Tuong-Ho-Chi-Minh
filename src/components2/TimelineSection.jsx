import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  MapPin, Flag, BookOpen, Users, Sword, AlertCircle, Star, 
  Megaphone, Crown, FileText, GraduationCap, ChevronLeft, ChevronRight, Menu, X
} from "lucide-react";

const timelineData = [
  {
    date: "28/01/1941",
    title: "Trở về Tổ quốc",
    location: "Pác Bó, Cao Bằng",
    icon: MapPin,
    color: "bg-red-600",
    category: "1941",
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
    category: "1941",
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
    category: "1941",
    content: "Nguyễn Ái Quốc viết thư kêu gọi toàn dân đoàn kết.",
    highlight: "\"Người có tiền góp tiền, người có của góp của, người có sức góp sức, người có tài năng góp tài năng\"",
    detail: "\"Riêng phần tôi, xin đem hết tâm lực đi cùng các bạn, vì đồng bào mưu giành tự do độc lập, dầu phải hy sinh tính mệnh cũng không nề. \"",
    image: "images/timeline3.jpg",
    imageCaption: "Bức Thư Kính cáo đồng bào"
  },
  {
    date: "10/1941",
    title: "Đội du kích đầu tiên",
    location: "Pác Bó, Cao Bằng",
    icon: Sword,
    color: "bg-green-600",
    category: "1941",
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
    category: "1942",
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
    category: "1942",
    content: "300 cán bộ được bồi dưỡng, huấn luyện tại Cao Bằng.",
    highlight: "Những hạt giống cách mạng đầu tiên",
    detail: "Từ những hạt giống này, các cơ sở cách mạng, các tổ chức cứu quốc nhanh chóng phát triển khắp địa phương.",
    image: "images/timeline6.jpg",
    imageCaption: "300 cán bộ được đào tạo"
  },
  {
    date: "06/1943",
    title: "Mở các lớp Quân chính",
    location: "Pác Bó, U Mả, Nguyên Bình, Hà Quảng",
    icon: GraduationCap,
    color: "bg-indigo-600",
    category: "1943",
    content: "Trung ương mở các lớp 'quân chính': Khóa I (40 học viên), Khóa II (100 học viên), Khóa III (30 học viên), Khóa IV (cán bộ Cao-Bắc-Lạng).",
    highlight: "Chương trình theo sách huấn luyện du kích của Nguyễn Ái Quốc",
    detail: "Tài liệu: 'Mười điều kỷ luật', 'Chiến thuật cơ bản của du kích', 'Cách đánh du kích', 'Kinh nghiệm du kích Nga', 'Kinh nghiệm du kích Tàu'.. .",
    image: "images/timeline8.jpg",
    imageCaption: "Các lớp Quân chính"
  },
  {
    date: "04/1941 - 10/1944",
    title: "Huấn luyện quân sự",
    location: "Tĩnh Tây, Điền Đông (Quảng Tây, TQ)",
    icon: Users,
    color: "bg-orange-600",
    category: "1944",
    content: "Cán bộ được học quân sự tại các trường quân sự ở Trung Quốc.",
    highlight: "Hạt nhân quan trọng trong lực lượng vũ trang",
    detail: "Đây là những hạt nhân quan trọng của căn cứ địa cách mạng Cao-Bắc-Lạng và khu giải phóng sau này.",
    image: "images/timeline7.jpg",
    imageCaption: "Huấn luyện quân sự"
  },
  {
    date: "22/12/1944",
    title: "Thành lập Đội VNTTGPQ",
    location: "Cao Bằng",
    icon: Sword,
    color: "bg-red-700",
    category: "1944",
    content: "Hồ Chí Minh ra chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân gồm 34 chiến sĩ.",
    highlight: "\"Chính trị trọng hơn quân sự.  Nó là đội tuyên truyền. \"",
    detail: "\"Cuộc kháng chiến của ta là cuộc kháng chiến của toàn dân, cần phải động viên toàn dân, vũ trang toàn dân. \"",
    image: "images/liberation-army.jpg",
    imageCaption: "34 chiến sĩ Đội Việt Nam Tuyên truyền Giải phóng quân"
  },
  {
    date: "25/12/1944",
    title: "Trận Phai Khắt",
    location: "Cao Bằng",
    icon: Sword,
    color: "bg-red-600",
    category: "1944",
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
    category: "1944",
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
    category: "1945",
    content: "Phát xít Nhật xâm lược Đông Dương, thiết lập chế độ cai trị hà khắc, trưng thu lương thực phục vụ chiến tranh.",
    highlight: "Đông Dương dưới ách đô hộ kép Pháp - Nhật",
    detail: "Năm 1944, Nhật buộc Pháp cung cấp hơn 900. 000 tấn gạo, cấm vận chuyển lúa từ miền Nam ra Bắc.",
    image: "images/japanese-invasion.jpg",
    imageCaption: "Quân phát xít Nhật tiến vào Hải Phòng"
  },
  {
    date: "1944-1945",
    title: "Nạn đói Ất Dậu",
    location: "32 tỉnh miền Bắc và Bắc Trung Bộ",
    icon: AlertCircle,
    color: "bg-gray-700",
    category: "1945",
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
    category: "1945",
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
    category: "1945",
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
    category: "1945",
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
    category: "1945",
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
    category: "1945",
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
    category: "1945",
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
    category: "1945",
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
    category: "1945",
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
    category: "1945",
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
    category: "1945",
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
    category: "1945",
    content: "Vua Bảo Đại tuyên bố thoái vị.",
    highlight: "Chấm dứt hoàn toàn chế độ phong kiến kéo dài hàng nghìn năm",
    image: "images/timeline21.jpg",
    imageCaption: "Bảo Đại thoái vị"
  },
   {
    date: "28/08 - 31/08/1945",
    title: "Soạn thảo Tuyên ngôn Độc lập",
    location: "48 Hàng Ngang, Hà Nội",
    icon: FileText, 
    color: "bg-red-700",
    category: "1945",
    content: "Hồ Chí Minh soạn thảo và hoàn thiện bản Tuyên ngôn Độc lập tại tầng 2, nhà số 48 Hàng Ngang.",
    highlight: "Văn bản pháp lý đặt nền móng cho nước Việt Nam mới, khẳng định quyền tự do và độc lập.",
    image: "images/timeline22.jpg", 
    imageCaption: "Ngôi nhà 48 Hàng Ngang nơi Bác Hồ soạn thảo Tuyên ngôn"
  },
  {
    date: "02/09/1945",
    title: "Tuyên ngôn Độc lập",
    location: "Quảng trường Ba Đình, Hà Nội",
    icon: Star,
    color: "bg-yellow-500",
    category: "1945",
    content: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, trịnh trọng tuyên bố quyền độc lập, tự do, bình đẳng của dân tộc Việt Nam trước thế giới.",
    highlight: "Khai sinh nước Việt Nam Dân chủ Cộng hòa",
    detail: "\"Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập.  Toàn thể dân tộc Việt Nam, quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy. \"",
    image: "images/declaration.jpg",
    imageCaption: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình"
  }
];

const categories = [
  { id: "all", label: "Tất cả", count: timelineData.length },
  { id: "1941", label: "1941", count: timelineData.filter(e => e.category === "1941"). length },
  { id: "1942", label: "1942", count: timelineData.filter(e => e.category === "1942"). length },
  { id: "1943", label: "1943", count: timelineData.filter(e => e.category === "1943"). length },
  { id: "1944", label: "1944", count: timelineData.filter(e => e.category === "1944"). length },
  { id: "1945", label: "1945", count: timelineData.filter(e => e.category === "1945"). length },
];

export const TimelineSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const sectionRefs = useRef([]);
  const sectionContainerRef = useRef(null);
  const contentRef = useRef(null);

  const filteredData = activeCategory === "all" 
    ? timelineData 
    : timelineData.filter(event => event.category === activeCategory);

  // Reset refs khi filteredData thay đổi
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, filteredData.length);
  }, [filteredData]);

  // Kiểm tra xem section có đang trong viewport không
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInSection(entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    if (sectionContainerRef. current) {
      observer.observe(sectionContainerRef. current);
    }

    return () => observer.disconnect();
  }, []);

  // Track which event is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveEventIndex(index);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer. observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredData]);

  const scrollToEvent = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsSidebarOpen(false);
  };

  const setRef = (el, index) => {
    sectionRefs.current[index] = el;
  };

  return (
    <section 
      id="timeline" 
      ref={sectionContainerRef}
      className="py-20 bg-gradient-to-b from-slate-100 to-white relative"
    >
      {/* Fixed Sidebar Toggle Button - Mobile - Chỉ hiện khi trong section */}
      {isInSection && (
        <button
          onClick={() => setIsSidebarOpen(! isSidebarOpen)}
          className="fixed left-4 top-24 z-50 lg:hidden bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      )}

      {/* Sticky Sidebar Navigation - Chỉ sticky trong phạm vi section */}
      <div className="flex">
        {/* Sidebar Container */}
        <div className="hidden lg:block w-64 shrink-0">
          <aside
            className={`${isInSection ? 'lg:fixed lg:top-20' : 'lg:absolute lg:top-0'} w-64 bg-white/95 backdrop-blur-sm shadow-xl rounded-r-2xl z-40 transition-all duration-300 max-h-[calc(100vh-100px)] overflow-hidden`}
            style={{
              left: isInSection ? 0 : 'auto',
            }}
          >
            <div className="p-4 h-full flex flex-col max-h-[calc(100vh-100px)]">
              {/* Category Tabs */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Lọc theo năm
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat. id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setActiveEventIndex(0);
                      }}
                      className={`px-3 py-1. 5 rounded-full text-sm font-medium transition-all ${
                        activeCategory === cat.id
                          ? "bg-red-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {cat. label}
                      <span className="ml-1 text-xs opacity-75">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4" />

              {/* Event List */}
              <div className="flex-1 overflow-y-auto min-h-0">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 sticky top-0 bg-white/95 py-2">
                  Các sự kiện ({filteredData.length})
                </h3>
                <nav className="space-y-1 pb-4">
                  {filteredData.map((event, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToEvent(index)}
                      className={`w-full text-left px-3 py-2. 5 rounded-lg transition-all group ${
                        activeEventIndex === index
                          ? "bg-red-50 border-l-4 border-red-600"
                          : "hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full mt-1. 5 shrink-0 ${event.color}`} />
                        <div className="min-w-0">
                          <p className={`text-xs font-medium ${
                            activeEventIndex === index ?  "text-red-600" : "text-gray-500"
                          }`}>
                            {event.date}
                          </p>
                          <p className={`text-sm font-medium truncate ${
                            activeEventIndex === index ? "text-gray-900" : "text-gray-700"
                          }`}>
                            {event.title}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Progress Indicator */}
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>Tiến trình</span>
                  <span>{activeEventIndex + 1}/{filteredData.length}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-600 to-yellow-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeEventIndex + 1) / filteredData.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <aside className="fixed left-0 top-0 h-full w-72 bg-white/95 backdrop-blur-sm shadow-2xl z-40 pt-20 lg:hidden">
              <div className="p-4 h-full flex flex-col">
                {/* Category Tabs */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Lọc theo năm
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setActiveEventIndex(0);
                        }}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                          activeCategory === cat.id
                            ? "bg-red-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {cat.label}
                        <span className="ml-1 text-xs opacity-75">({cat. count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 my-4" />

                <div className="flex-1 overflow-y-auto">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Các sự kiện ({filteredData.length})
                  </h3>
                  <nav className="space-y-1">
                    {filteredData.map((event, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToEvent(index)}
                        className={`w-full text-left px-3 py-2. 5 rounded-lg transition-all ${
                          activeEventIndex === index
                            ? "bg-red-50 border-l-4 border-red-600"
                            : "hover:bg-gray-50 border-l-4 border-transparent"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${event.color}`} />
                          <div className="min-w-0">
                            <p className={`text-xs font-medium ${
                              activeEventIndex === index ? "text-red-600" : "text-gray-500"
                            }`}>
                              {event. date}
                            </p>
                            <p className={`text-sm font-medium truncate ${
                              activeEventIndex === index ? "text-gray-900" : "text-gray-700"
                            }`}>
                              {event.title}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>Tiến trình</span>
                    <span>{activeEventIndex + 1}/{filteredData.length}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-600 to-yellow-500"
                      animate={{ width: `${((activeEventIndex + 1) / filteredData.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </aside>
          </>
        )}

        {/* Main Content */}
        <div className="flex-1" ref={contentRef}>
          <div className="max-w-4xl mx-auto px-6">
            {/* Header */}
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
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-yellow-500 to-red-600 transform md:-translate-x-1/2" />

              <AnimatePresence mode="wait">
                {filteredData.map((event, index) => {
                  const IconComponent = event.icon;
                  return (
                    <motion.div
                      key={`${activeCategory}-${index}`}
                      ref={(el) => setRef(el, index)}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.02 }}
                      className={`relative flex items-start mb-8 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-6 md:left-1/2 w-4 h-4 ${event.image ?  'w-6 h-6 border-[5px]' : 'border-4'} bg-white border-red-600 rounded-full transform -translate-x-1/2 z-10 mt-6 ${
                        activeEventIndex === index ?  'ring-4 ring-red-200' : ''
                      }`} />

                      {/* Content Card */}
                      <div className={`ml-14 md:ml-0 md:w-[calc(50%-30px)] ${
                        index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                      }`}>
                        <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow ${event.image ? 'ring-2 ring-yellow-400' : ''} ${
                          activeEventIndex === index ?  'ring-2 ring-red-400' : ''
                        }`}>
                          {/* Header */}
                          <div className={`${event.color} p-4 text-white`}>
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-5 h-5 shrink-0" />
                              <div>
                                <p className="font-bold text-sm opacity-90">{event.date}</p>
                                <h3 className="font-bold text-lg leading-tight">{event.title}</h3>
                              </div>
                            </div>
                            {event.location && (
                              <div className="flex items-center gap-1 mt-2 text-white/80 text-xs">
                                <MapPin className="w-3 h-3" />
                                <span>{event. location}</span>
                              </div>
                            )}
                          </div>

                          {/* Image */}
                          {event.image && (
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
                                {event. detail}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* End of Timeline */}
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
        </div>
      </div>

      {/* Fixed Navigation Arrows - Chỉ hiện khi trong section */}
      {isInSection && (
        <div className="fixed bottom-8 right-8 flex flex-col gap-2 z-40">
          <button
            onClick={() => scrollToEvent(Math.max(0, activeEventIndex - 1))}
            disabled={activeEventIndex === 0}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Sự kiện trước"
          >
            <ChevronLeft className="w-5 h-5 rotate-90" />
          </button>
          <div className="bg-red-600 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
            {activeEventIndex + 1}
          </div>
          <button
            onClick={() => scrollToEvent(Math. min(filteredData.length - 1, activeEventIndex + 1))}
            disabled={activeEventIndex === filteredData.length - 1}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Sự kiện tiếp theo"
          >
            <ChevronRight className="w-5 h-5 rotate-90" />
          </button>
        </div>
      )}
    </section>
  );
};

export default TimelineSection;