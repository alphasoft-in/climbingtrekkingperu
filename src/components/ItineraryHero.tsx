import React from 'react';

interface ItineraryHeroProps {
  titleTop: string;
  titleMain: string;
  backgroundImage: string;
  duration: string;
  price: string;
  difficulty: string;
  difficultyLevel: 'hard' | 'modplus' | 'mod' | 'easy';
}

const ItineraryHero: React.FC<ItineraryHeroProps> = ({
  titleTop,
  titleMain,
  backgroundImage,
  duration,
  price,
  difficulty,
  difficultyLevel
}) => {
  const isHard = difficultyLevel === 'hard';
  
  return (
    <section className="relative h-[55vh] md:h-[65vh] min-h-[450px] flex items-center overflow-hidden bg-[#06090f]">
      {/* Cinematic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] hover:scale-110"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      
      {/* Architectural Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06090f]/95 via-transparent to-[#06090f]/98"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-[70px] md:pt-[90px] pb-12">
        <div className="flex flex-col items-center text-center gap-2">
          {/* Subtitle: Consistent with PageHero style */}
          <span className="block text-[8px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] text-white/90 uppercase mb-1 drop-shadow-md">
            {titleTop}
          </span>

          {/* Main Title: Balanced scale, non-italic */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {titleMain}
          </h1>

          {/* Line Accent: RED for consistency with PageHero */}
          <div className="w-10 md:w-12 h-1 bg-brand-red mt-2 md:mt-3 shadow-[0_0_15px_rgba(216,2,2,0.4)]"></div>

          {/* Technical Metrics Row: Refined and Scaled */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 md:gap-x-16 gap-y-6 mt-4 md:mt-8 pt-4 md:pt-6 border-t border-white/10 w-full max-w-3xl">
            {/* Duration */}
            <div className="flex flex-col gap-1 items-center min-w-[80px]">
              <span className="text-[7px] md:text-[9px] font-black tracking-[0.2em] text-brand-blue uppercase">DURACIÓN</span>
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight text-center">
                {duration}
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-1 items-center min-w-[80px]">
              <span className="text-[7px] md:text-[9px] font-black tracking-[0.2em] text-brand-blue uppercase">DESDE</span>
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight text-center">
                {price}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex flex-col gap-1 items-center min-w-[80px]">
              <span className="text-[7px] md:text-[9px] font-black tracking-[0.2em] text-brand-blue uppercase">DIFICULTAD</span>
              <div className={`px-3 py-1 ${isHard ? 'bg-red-950/40 border border-brand-red/30' : 'bg-brand-blue/10 border border-brand-blue/20'} backdrop-blur-md`}>
                <span className={`text-[8px] md:text-[9px] font-black tracking-widest uppercase ${isHard ? 'text-brand-red' : 'text-brand-blue'}`}>
                  {difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryHero;
