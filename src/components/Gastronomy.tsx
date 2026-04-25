import React from 'react';

interface GastronomyProps {
  data: {
    header: {
      title: string;
      subtitle: string;
      desc: string;
    };
    dietary: {
      label: string;
      options: Array<{ label: string; color: string }>;
    };
    programs: Array<{
      unit: string;
      title: string;
      items: string[];
    }>;
    dinner: {
      unit: string;
      title: string;
      groups: Array<{ label: string; items: string[] }>;
    };
    dessert: {
      unit: string;
      title: string;
      items: string[];
    };
  };
}

const Gastronomy: React.FC<GastronomyProps> = ({ data }) => {
  return (
    <section className="bg-white pt-24 md:pt-32 pb-12 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-brand-dark text-2xl md:text-4xl font-black tracking-[0.2em] uppercase mb-4">
            {data.header.title}
          </h2>
          <p className="text-brand-blue text-xs md:text-sm font-black tracking-[0.4em] uppercase mb-8">
            {data.header.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-10"></div>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
            {data.header.desc}
          </p>
        </div>

        {/* Dietary Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-20">
          <span className="text-[10px] font-black tracking-widest text-brand-dark/40 uppercase mr-4 w-full text-center md:w-auto mb-4 md:mb-0">
            {data.dietary.label}
          </span>
          {data.dietary.options.map((opt, idx) => (
            <span key={idx} className={`text-[9px] md:text-[10px] font-bold tracking-widest px-3 md:px-4 py-2 border-2 ${opt.color} text-brand-dark rounded-sm`}>
              {opt.label}
            </span>
          ))}
        </div>

        {/* Grid 1: Basic Programs */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {data.programs.map((prog, idx) => (
            <div key={idx} className="bg-slate-50 p-8 md:p-12 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-slate-200">
              <span className="inline-block text-brand-blue text-[10px] font-black tracking-[0.2em] mb-6">
                {prog.unit}
              </span>
              <h3 className="text-brand-dark text-lg md:text-xl font-black uppercase tracking-wider mb-6">
                {prog.title}
              </h3>
              <div className="w-8 h-[2px] bg-brand-red/30 mb-8"></div>
              <ul className="space-y-4">
                {prog.items.map((item, i) => (
                  <li key={i} className="text-slate-500 text-sm md:text-base border-b border-slate-200/50 pb-2 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Grid 2: Special Programs */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Dinner Card (Spans 2 columns on large+) */}
          <div className="xl:col-span-2 bg-slate-50 p-8 md:p-12 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-slate-200">
            <span className="inline-block text-brand-blue text-[10px] font-black tracking-[0.2em] mb-6">
              {data.dinner.unit}
            </span>
            <h3 className="text-brand-dark text-lg md:text-xl font-black uppercase tracking-wider mb-6">
              {data.dinner.title}
            </h3>
            <div className="w-8 h-[2px] bg-brand-red/30 mb-8"></div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {data.dinner.groups.map((group, idx) => (
                <div key={idx}>
                  <span className="block text-[10px] font-black tracking-[0.2em] text-brand-blue/50 uppercase mb-6">
                    {group.label}
                  </span>
                  <ul className="space-y-4">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-slate-500 text-sm md:text-base border-b border-slate-200/50 pb-2 last:border-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Dessert Card */}
          <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-slate-200">
            <span className="inline-block text-brand-blue text-[10px] font-black tracking-[0.2em] mb-6">
              {data.dessert.unit}
            </span>
            <h3 className="text-brand-dark text-lg md:text-xl font-black uppercase tracking-wider mb-6">
              {data.dessert.title}
            </h3>
            <div className="w-8 h-[2px] bg-brand-red/30 mb-8"></div>
            <ul className="space-y-4">
              {data.dessert.items.map((item, i) => (
                <li key={i} className="text-slate-500 text-sm md:text-base border-b border-slate-200/50 pb-2 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;
