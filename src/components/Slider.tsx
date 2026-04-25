import React, { useState, useEffect, useRef } from 'react';

interface Slide {
  src: string;
  pretitle: string;
  title: string;
  subtitle: string;
}

interface SliderProps {
  lang: 'es' | 'en';
  slides: Slide[];
  buttonLabel: string;
}

const Slider: React.FC<SliderProps> = ({ lang, slides, buttonLabel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideDuration = 6000;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, slideDuration);

    return () => clearInterval(timer);
  }, [currentIndex, isTransitioning]); // Reset timer on interaction to prevent jumpiness

  const resetAutoPlay = () => {
    // The useEffect above handles reset automatically when currentIndex changes
  };

  return (
    <div className="relative w-full h-[100vh] min-h-[500px] md:min-h-[600px] overflow-hidden bg-black">
      <div className="absolute inset-0 z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 visible z-20' : 'opacity-0 invisible z-10'
            }`}
          >
            {/* Image with Ken Burns Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.src}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out will-change-transform ${
                  index === currentIndex ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-20 md:block hidden" />
            <div className="absolute inset-0 bg-black/50 z-20 md:hidden block" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />

            {/* Content Container */}
            <div className="absolute inset-0 z-30 flex items-center px-6 sm:px-10 md:px-[8%] pt-[10vh] md:pt-[12vh]">
              <div className="max-w-[800px] w-full text-center md:text-left mx-auto md:mx-0">
                <div className={`transition-all duration-700 delay-200 transform ${
                  index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className="inline-flex items-center gap-3 md:gap-4 text-brand-blue text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] font-bold uppercase tracking-[0.2em] mb-3 md:mb-4">
                    <span className="hidden md:block w-8 md:w-12 h-[2px] bg-brand-blue"></span>
                    {slide.pretitle}
                  </span>
                </div>
                
                <div className={`transition-all duration-700 delay-400 transform ${
                  index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] mb-3 md:mb-5 drop-shadow-2xl">
                    {slide.title}
                  </h2>
                </div>

                <div className={`transition-all duration-700 delay-600 transform ${
                  index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p className="text-white/90 text-xs sm:text-base leading-relaxed max-w-[550px] mb-6 md:mb-10 font-medium drop-shadow-lg mx-auto md:mx-0">
                    {slide.subtitle}
                  </p>
                </div>

                <div className={`transition-all duration-700 delay-800 transform ${
                  index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <a
                    href={lang === 'es' ? '/tours' : '/en/tours'}
                    className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-dark text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg font-black text-[0.75rem] sm:text-[0.8rem] uppercase transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-brand-red/30"
                  >
                    {buttonLabel}
                    <svg className="transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on small mobile */}
      <div className="absolute inset-y-0 left-4 lg:left-10 hidden sm:flex items-center z-40 pointer-events-none">
        <button
          onClick={() => { prevSlide(); resetAutoPlay(); }}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto group"
        >
          <svg className="transition-transform group-hover:scale-110" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 lg:right-10 hidden sm:flex items-center z-40 pointer-events-none">
        <button
          onClick={() => { nextSlide(); resetAutoPlay(); }}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto group"
        >
          <svg className="transition-transform group-hover:scale-110" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Progress Bars - Centered on mobile */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 md:left-[8%] md:translate-x-0 w-[80%] sm:w-[300px] md:w-[400px] flex gap-2 md:gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { goToSlide(index); resetAutoPlay(); }}
            className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden relative group"
          >
            <div
              className={`absolute inset-0 bg-brand-blue rounded-full transition-all duration-[6000ms] linear ${
                index === currentIndex ? 'w-full' : 'w-0 transition-none'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
