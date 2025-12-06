import { motion } from "framer-motion";

const teamMembers = [
   {
    name: "Nguyễn Nhất Huy",
    studentId: "SE184256",
    role: "Team Leader, Full-stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/116622843?v=4",
    description: "Đa năng trong cả frontend và backend. Luôn học hỏi công nghệ mới để nâng cao kỹ năng.",
    skills: ["React", "Node.js", "Project Management"],
  },
  {
    name: "Trần Tuấn Anh",
    studentId: "SE185016",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TuanAnh&backgroundColor=c0aede",
    description: "Chuyên về giao diện người dùng và trải nghiệm người dùng.  Yêu thích thiết kế đẹp và hiệu suất cao.",
    skills: ["React", "TailwindCSS", "UI/UX Design"],
  },
  {
    name: "Bùi Mạnh Hùng",
    studentId: "SE182612",
    role: "Backend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ManhHung&backgroundColor=ffd5dc",
    description: "Tập trung vào xây dựng hệ thống backend vững chắc và tối ưu hóa hiệu suất ứng dụng.",
    skills: ["Java", "Spring Boot", "Database"],
  },
 
  {
    name: "Trần Sơn Triều",
    studentId: "SE183638",
    role: "Full-stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/70458035?v=4",
    description: "Đam mê phát triển phần mềm và quản lý dự án.  Luôn tìm kiếm giải pháp sáng tạo cho mọi vấn đề.",
    skills: ["React", "Node.js", "MongoDB"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Đội Ngũ <span className="text-red-600">Phát Triển</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi là nhóm sinh viên đam mê công nghệ, cùng nhau xây dựng những sản phẩm chất lượng
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers. map((member) => (
            <motion.div
              key={member.studentId}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300">
                {/* Card Header with gradient */}
                <div className="h-24 bg-gradient-to-r from-red-600 to-red-800 relative">
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="pt-14 pb-6 px-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold text-sm mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs font-mono mb-4">
                    {member.studentId}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11. 387.599.111. 793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1. 416-.546-1.387-1.333-1.756-1.333-1. 756-1.089-.745.083-. 729.083-.729 1. 205.084 1.839 1.237 1.839 1. 237 1.07 1.834 2. 807 1.304 3.492.997. 107-.775.418-1.305.762-1. 604-2.665-.305-5.467-1.334-5.467-5.931 0-1. 311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3. 176 0 0 1. 008-.322 3.301 1.23. 957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3. 006.404 2.291-1. 552 3.297-1.23 3.297-1.23. 653 1.653.242 2. 874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2. 807 5.624-5.479 5.921. 43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1. 589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2. 239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2. 761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12. 268c-.966 0-1.75-. 79-1.75-1.764s.784-1.764 1.75-1.764 1. 75.79 1.75 1. 764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13. 909c0 . 904-. 732 1.636-1.636 1.636h-3.819V11. 73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5. 457z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-lg px-8 py-6 border border-red-100">
            <p className="text-gray-700 italic text-lg">
              "Cùng nhau, chúng tôi biến ý tưởng thành hiện thực"
            </p>
            <p className="text-red-600 font-semibold mt-2">— FPT University Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;