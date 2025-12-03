import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    // TODO: Gửi email lên backend/newsletter service
    // Ví dụ: fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) })
    alert(`Đã đăng ký nhận tin với email: ${email}`);
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Khu vực trên: Thương hiệu + cột liên kết */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Thương hiệu + mô tả + newsletter */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              {/* Logo placeholder - thay bằng <img src="/logo.svg" alt="Wawa Sensei Studio" className="h-8 w-auto" /> */}
              <div className="h-9 w-9 rounded-lg bg-indigo-600/80 ring-1 ring-indigo-400/40 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Tu Tuong Ho Chi Minh Studio
              </h3>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Xây dựng trải nghiệm 3D sáng tạo và hiệu suất cao cho học tập và
              công việc. Chúng tôi kết hợp thiết kế, công nghệ và nội dung để
              tạo ra sản phẩm khác biệt.
            </p>

            {/* Newsletter */}
            {/* <form onSubmit={handleSubscribe} className="mt-6">
              <label htmlFor="newsletter" className="sr-only">
                Email nhận bản tin
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="newsletter"
                  name="email"
                  type="email"
                  required
                  placeholder="Nhập email của bạn"
                  className="w-full rounded-lg bg-gray-900 text-gray-100 placeholder:text-gray-500 border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 px-3 py-2 outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400/70"
                >
                  Đăng ký
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Bằng việc đăng ký, bạn đồng ý với{" "}
                <a href="#" className="underline decoration-dotted hover:text-gray-300">
                  chính sách quyền riêng tư
                </a>
                .
              </p>
            </form> */}

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://x.com/NNH49946258"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M18.244 2H21.3l-6.52 7.45L22.5 22h-6.73l-5.27-6.86L4.35 22H1.29l7-8-7-12h6.73l4.77 6.22L18.244 2Zm-1.18 18h1.86L7.08 4H5.14l11.92 16Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@nguyenhuy7027"
                aria-label="YouTube"
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M23.5 6.2a4.9 4.9 0 0 0-3.4-3.4C17.9 2.2 12 2.2 12 2.2s-5.9 0-8.1.6A4.9 4.9 0 0 0 .5 6.2 51.6 51.6 0 0 0 0 12a51.6 51.6 0 0 0 .5 5.8 4.9 4.9 0 0 0 3.4 3.4c2.2.6 8.1.6 8.1.6s5.9 0 8.1-.6a4.9 4.9 0 0 0 3.4-3.4A51.6 51.6 0 0 0 24 12a51.6 51.6 0 0 0-.5-5.8ZM9.6 15.5v-7L16 12l-6.4 3.5Z" />
                </svg>
              </a>
              <a
                href="https://github.com/not-for-tomorrow"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3.2 1.5 4 .9.1-.9.5-1.5.8-1.8-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 0 1 1.3-3.2 4.3 4.3 0 0 1 .1-3.1s1-.3 3.3 1.3a11.2 11.2 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.4 1 .4 2.1.1 3.1a4.7 4.7 0 0 1 1.3 3.2c0 4.7-2.9 5.7-5.6 6 .5.4.9 1.2.9 2.4V23c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nguy%E1%BB%85n-huy-83a0ab29a/"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm-.75 6.5h3.01V21H4.23V10ZM10 10h2.88v1.5h.04c.4-.8 1.38-1.64 2.84-1.64 3.03 0 3.6 2 3.6 4.62V21h-3v-4.6c0-1.1 0-2.52-1.54-2.52s-1.78 1.2-1.78 2.44V21H10V10Z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/nguyen.huy.510844/"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M22.676 0H1.326C.596 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.797.142v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.327C24 .594 23.405 0 22.676 0" />
                </svg>
              </a>
            </div>
          </div>

          {/* Cột liên kết */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white">Sản phẩm</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Sổ tay 3D</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Mẫu Template</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Gói Pro</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Bảng giá</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Tài nguyên</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Tài liệu</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Hướng dẫn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Cộng đồng</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Công ty</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Về chúng tôi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Tuyển dụng</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Liên hệ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Báo chí</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Hỗ trợ</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Trạng thái hệ thống</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Bảo mật</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Báo lỗi</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Đường kẻ */}
        <hr className="mt-10 border-gray-800" />

        {/* Khu vực dưới: Thông tin liên hệ + bản quyền */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-gray-400">
            <p>Email: <a href="mailto:nhathuy139@gmail.com" className="hover:text-gray-200">nhathuyn1369@gmail.com</a></p>
            <p>Hotline: <a href="tel:+840909984643" className="hover:text-gray-200">+84 909 984 643</a></p>
          </div>

          <div className="text-sm text-gray-500">
            © {year} Tu Tuong Ho Chi Minh. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-gray-200">Điều khoản</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-400 hover:text-gray-200">Quyền riêng tư</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-400 hover:text-gray-200">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;