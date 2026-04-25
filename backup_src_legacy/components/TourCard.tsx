import React from 'react';

interface TourCardProps {
  id: string;
  prefix: string;
  title: string;
  category: string;
  difficulty: string;
  difficultyLevel: 'hard' | 'modplus' | 'mod' | 'easy';
  duration: string;
  description: string;
  image: string;
  href: string;
  lang?: 'es' | 'en';
}

const TourCard: React.FC<TourCardProps> = ({
  id,
  prefix,
  title,
  category,
  difficulty,
  difficultyLevel,
  duration,
  description,
  image,
  href,
  lang = 'es'
}) => {
  const isHard = difficultyLevel === 'hard';
  const isModPlus = difficultyLevel === 'modplus';
  const isMod = difficultyLevel === 'mod';

  const dotColor = isHard ? 'bg-brand-red' : (isModPlus || isMod ? 'bg-brand-blue' : 'bg-green-500');
  const textColor = isHard ? 'text-brand-red' : (isModPlus || isMod ? 'text-brand-blue' : 'text-green-600');

  return (
    <div className="group bg-white flex flex-col h-full transition-all duration-700 border border-slate-100 border-b-4 border-b-brand-blue hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
      {/* MEDIA ZONE: High-Contrast Cinematic */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-slate-900">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-90 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
        
        {/* Technical ID: Glassmorphism */}
        <div className="absolute bottom-5 left-5 flex items-center bg-white/10 backdrop-blur-xl px-4 py-2 border border-white/20 shadow-2xl">
          <span className="text-[10px] font-black tracking-[0.2em] text-white/60 uppercase mr-3">{prefix}</span>
          <div className="w-[1px] h-3 bg-white/20 self-center mr-3"></div>
          <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">{id}</span>
        </div>

        {/* Duration Badge: High-Contrast */}
        <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 flex items-center gap-3 shadow-xl">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </div>
          <span className="text-[10px] font-black tracking-[0.15em] text-brand-dark uppercase">
            {duration}
          </span>
        </div>
      </div>

      {/* CONTENT ZONE: Architectural Layout */}
      <div className="p-8 md:p-10 flex flex-col flex-1 border-x border-slate-100">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-50">
          <span className="text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">
            {category}
          </span>
          <div className="flex items-center gap-2.5">
            <span className={`w-2 h-2 rounded-full ${dotColor} ${isHard ? 'shadow-[0_0_8px_rgba(239,68,68,0.5)]' : ''}`}></span>
            <span className={`text-[10px] font-black tracking-[0.1em] uppercase ${textColor}`}>
              {difficulty}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-5 group-hover:text-brand-blue transition-colors duration-500 uppercase">
          {title}
        </h3>

        <p className="text-slate-500 text-[13px] leading-relaxed mb-10 line-clamp-3 font-medium tracking-tight group-hover:text-slate-600 transition-colors duration-500">
          {description}
        </p>

        {/* ACTION BUTTON: Industrial Control */}
        <a 
          href={href}
          className="mt-auto group/btn relative flex items-center justify-between bg-brand-dark text-white pl-8 pr-6 py-5 overflow-hidden transition-all duration-500 hover:bg-brand-blue"
        >
          <span className="relative z-10 text-[10px] font-black tracking-[0.4em] uppercase">
            {lang === 'es' ? 'VER ITINERARIO' : 'VIEW ITINERARY'}
          </span>
          <div className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-2">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </div>
          
          {/* Subtle hover effect */}
          <div className="absolute inset-0 bg-white/5 translate-y-full transition-transform duration-500 group-hover/btn:translate-y-0"></div>
        </a>
      </div>
    </div>
  );
};

export default TourCard;
