import React from 'react';

interface WorkAreaProps {
  data: {
    header: {
      title: string;
      subtitle: string;
      desc: string;
    };
    units: Array<{
      tag: string;
      title: string;
      desc?: string;
      items?: string[];
    }>;
  };
}

const WorkArea: React.FC<WorkAreaProps> = ({ data }) => {
  return (
    <section className="bg-slate-50 pt-12 md:pt-16 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <h2 className="text-brand-dark text-xl md:text-3xl font-black tracking-[0.2em] uppercase mb-4">
            {data.header.title}
          </h2>
          <p className="text-brand-blue text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-8">
            {data.header.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-10"></div>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            {data.header.desc}
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {data.units.map((unit, idx) => (
            <div key={idx} className="bg-white p-8 md:p-12 border border-slate-100 transition-all duration-500 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-slate-200">
              <span className="inline-block text-brand-blue text-[10px] font-black tracking-[0.2em] mb-6 border-b-2 border-brand-blue/10 pb-1">
                {unit.tag}
              </span>
              <h4 className="text-brand-dark text-lg md:text-xl font-black uppercase tracking-wider mb-6">
                {unit.title}
              </h4>
              
              {unit.desc ? (
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {unit.desc}
                </p>
              ) : (
                <ul className="space-y-4">
                  {unit.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500 text-sm md:text-base">
                      <span className="text-brand-blue font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkArea;
