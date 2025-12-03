import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Banner = () => {
  // Thay các đường dẫn ảnh bằng ảnh thật của bạn
  const SLIDES = useMemo(
    () => [
      "textures/banner-1.jpg",
      "textures/bannertest1.jpg",
      "textures/bannertest2.jpg",
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const intervalRef = useRef(null);
  const AUTOPLAY_MS = 5000;

  const goTo = useCallback(
    (index) => {
      const next = ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;
      setCurrent(next);
    },
    [SLIDES.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (SLIDES.length <= 1) return;

    const start = () => {
      if (intervalRef.current != null) return;
      intervalRef.current = window.setInterval(() => {
        setCurrent((c) => (c + 1) % SLIDES.length);
      }, AUTOPLAY_MS);
    };

    const stop = () => {
      if (intervalRef.current != null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (!isHover) start();

    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else if (!isHover) {
        start();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [SLIDES.length, isHover]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section
  id="banner"
  className="mt-[69px] relative w-full bg-gradient-to-b from-indigo-600 to-indigo-900 text-white"
>
      <div className="mx-auto h max-w-7xl px-4 py-10 md:py-16">
        {/* Khung 16:9 */}
        <div
          className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Banner Sổ tay 3D"
        >
          {/* Slides */}
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {SLIDES.map((src, idx) => (
              <div className="relative w-full flex-shrink-0" key={idx}>
                <img
                  src={src}
                  alt={`Sổ tay 3D - Slide ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                {/* Overlay tối nhẹ để nổi nội dung */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Nội dung Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow">
                      Khám phá Sổ tay 3D
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
                      Cuốn sổ kỹ thuật số sống động mang đến trải nghiệm sáng tạo và ghi chú
                      chuyên nghiệp.
                    </p>
                    <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-indigo-800 hover:bg-indigo-200 transition focus:outline-none focus:ring-2 focus:ring-white/70">
                      Tìm hiểu thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nút điều hướng - nhỏ gọn */}
          {SLIDES.length > 1 && (
            <>
              <button
                aria-label="Ảnh trước"
                onClick={prev}
                className="group absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 transition-transform group-active:-translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 15.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5A1 1 0 1 1 12.707 5.293L8.414 9.586l4.293 4.293a1 1 0 0 1 0 1.414Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                aria-label="Ảnh sau"
                onClick={next}
                className="group absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 transition-transform group-active:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 7.293 14.293L11.586 10 7.293 5.707a1 1 0 0 1 0-1.414Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {SLIDES.length > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {SLIDES.map((_, i) => {
              const active = i === current;
              return (
                <button
                  key={i}
                  aria-label={`Chuyển tới slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    active ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;