import React from 'react';

interface InstitutionalProps {
  data: {
    identity: {
      name: string;
      type: string;
      regBadge: string;
      regText: string;
      netBadge: string;
      netText1: string;
      netHighlight: string;
      netText2: string;
    };
    pillars: Array<{
      num: string;
      icon: string;
      title: string;
      desc: string;
    }>;
  };
}

const Institutional: React.FC<InstitutionalProps> = ({ data }) => {
  return (
    <div className="bg-white">
      {/* 1. Identity Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-5xl mx-auto mb-20 md:mb-32">
            <h1 className="text-brand-dark text-3xl md:text-5xl font-black tracking-[0.15em] mb-4 leading-tight uppercase">
              {data.identity.name}
            </h1>
            <p className="text-slate-400 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase">
              {data.identity.type}
            </p>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-6">
              <span className="inline-block bg-slate-100 text-brand-dark/40 text-[10px] font-black tracking-[0.2em] px-4 py-2 rounded-sm">
                {data.identity.regBadge}
              </span>
              <p className="text-brand-dark/80 text-base md:text-lg leading-relaxed font-medium">
                {data.identity.regText}
              </p>
            </div>

            <div className="space-y-6">
              <span className="inline-block bg-slate-100 text-brand-dark/40 text-[10px] font-black tracking-[0.2em] px-4 py-2 rounded-sm">
                {data.identity.netBadge}
              </span>
              <div className="space-y-6">
                <p className="text-brand-dark/70 text-base leading-relaxed">
                  {data.identity.netText1}
                  <strong className="text-brand-dark font-bold underline decoration-brand-blue/30 decoration-2 underline-offset-4">
                    {data.identity.netHighlight}
                  </strong>
                </p>
                <p className="text-brand-dark/70 text-base leading-relaxed italic border-l-2 border-brand-blue/20 pl-6">
                  {data.identity.netText2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pillars Section */}
      <section className="pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-4">
            {data.pillars.map((pillar, idx) => (
              <div key={idx} className="group relative bg-[#fbfcfd] p-8 md:p-12 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2">
                <div className="flex justify-between items-start mb-16">
                  <span className="text-5xl font-black text-slate-100 group-hover:text-brand-blue/10 transition-colors duration-500">
                    {pillar.num}
                  </span>
                  <span className="text-3xl opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                    {pillar.icon}
                  </span>
                </div>
                
                <h3 className="text-brand-dark text-sm font-black tracking-[0.25em] uppercase mb-5 leading-tight">
                  {pillar.title}
                </h3>
                
                <div className="w-8 h-[2px] bg-brand-red mb-8"></div>
                
                <p className="text-slate-500 text-[0.85rem] leading-relaxed font-medium">
                  {pillar.desc}
                </p>

                {/* Decorative bottom accent that appears on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand-blue transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institutional;
