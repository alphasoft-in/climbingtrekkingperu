import React from 'react';

interface SpecItem {
  label: string;
  value: string;
  icon: 'location' | 'zone' | 'season' | 'service';
}

interface ItineraryIntroProps {
  code: string;
  titlePrefix: string;
  titleAccent: string;
  description: string;
  specs: SpecItem[];
  image: string;
  lat: string;
  lon: string;
  verticalLabel?: string;
}

const Icons = {
  location: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  zone: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  season: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  service: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
    </svg>
  )
};

const ItineraryIntro: React.FC<ItineraryIntroProps> = ({
  code,
  titlePrefix,
  titleAccent,
  description,
  specs,
  image,
  lat,
  lon,
  verticalLabel = "PAQUETE TÉCNICO"
}) => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col relative lg:pl-16">
            <div className="mb-8">
              <span className="text-[10px] font-black tracking-[0.2em] text-brand-blue uppercase mb-3 block">
                CÓDIGO: {code}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-none">
                {titlePrefix} <span className="text-brand-blue">{titleAccent}</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-12 relative pl-10 border-l-2 border-slate-100 min-h-[100px] flex items-center">
              {/* Vertical Label: Perfectly centered with the paragraph */}
              <div className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 h-full items-center justify-center">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black tracking-[0.6em] text-slate-300 uppercase whitespace-nowrap">
                  {verticalLabel}
                </span>
              </div>
              {description}
            </p>

            {/* Technical Specs Dashboard */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {specs.map((spec, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="mt-1 text-brand-blue opacity-50 group-hover:opacity-100 transition-opacity">
                    {Icons[spec.icon]}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                      {spec.label}
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase: High-Density Frame */}
          <div className="relative group w-full">
            <div className="relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] bg-slate-900 aspect-[4/5] md:h-[450px] lg:h-[600px] lg:aspect-auto w-full">
              <img 
                src={image} 
                alt={titlePrefix}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Data Overlay: Coordinates */}
              <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 backdrop-blur-md border-t border-white/10 px-8 py-5 flex justify-center gap-10 items-center">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-1">LATITUDE</span>
                  <span className="text-[11px] font-bold text-white font-mono">{lat}</span>
                </div>
                <div className="w-px h-6 bg-white/10"></div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-1">LONGITUDE</span>
                  <span className="text-[11px] font-bold text-white font-mono">{lon}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ItineraryIntro;
