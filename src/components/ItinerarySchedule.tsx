import React from 'react';

interface DayItem {
  day: string;
  title: string;
  description: string;
  stats?: {
    alt?: string;
    dist?: string;
    time?: string;
    food?: string;
    trans?: string;
  };
}

interface ItineraryScheduleProps {
  days: DayItem[];
  title?: string;
  subtitle?: string;
}

const ItinerarySchedule: React.FC<ItineraryScheduleProps> = ({ 
  days, 
  title = "Cronograma Diario", 
  subtitle = "ITINERARIO TÉCNICO" 
}) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
        <div className="mb-6 md:mb-8 border-b border-slate-200 pb-4">
          <span className="text-[10px] font-black tracking-[0.4em] text-brand-blue uppercase mb-2 block">
            {subtitle}
          </span>
          <h3 className="text-lg md:text-2xl font-black text-slate-900 tracking-tighter leading-none uppercase">
            {title}
          </h3>
        </div>

        {/* Timeline Items */}
        <div className="relative flex flex-col gap-6 md:gap-8">
          {/* Vertical Line - More subtle */}
          <div className="absolute left-[19px] md:left-[27px] top-4 bottom-4 w-px bg-slate-200"></div>

          {days?.map((item, idx) => (
            <div key={idx} className="relative flex gap-4 md:gap-8 group">
              {/* Marker Badge - Refined */}
              <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 bg-white border border-slate-200 shadow-sm flex items-center justify-center relative z-10 transition-all group-hover:border-brand-blue/40 group-hover:shadow-lg rounded-sm">
                <span className="text-[9px] md:text-xs font-black text-slate-400 group-hover:text-brand-blue transition-colors font-mono">
                  {item.day.split(" ").pop()?.padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col pt-1 md:pt-2">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-[9px] font-black tracking-[0.2em] text-brand-blue uppercase">
                    {item.day}
                  </span>
                  <div className="h-px w-6 bg-brand-blue/20"></div>
                </div>
                
                <h4 className="text-base md:text-lg font-black text-slate-900 tracking-tight mb-3 uppercase leading-tight group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl font-light">
                  {item.description}
                </p>

                {/* Technical Day Stats */}
                {item.stats && (
                  <div className="flex flex-wrap gap-x-8 gap-y-3 mt-2">
                    {item.stats.alt && (
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">ALTITUD MÁX.</span>
                        <span className="text-xs font-bold text-slate-700 uppercase">{item.stats.alt}</span>
                      </div>
                    )}
                    {item.stats.dist && (
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">DISTANCIA</span>
                        <span className="text-xs font-bold text-slate-700 uppercase">{item.stats.dist}</span>
                      </div>
                    )}
                    {item.stats.time && (
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">TIEMPO ESTIMADO</span>
                        <span className="text-xs font-bold text-slate-700 uppercase">{item.stats.time}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ItinerarySchedule;
