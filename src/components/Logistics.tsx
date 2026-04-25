import React, { useState } from 'react';

interface LogisticsProps {
  data: {
    header: {
      title: string;
      subtitle: string;
      desc: string;
    };
    items: Array<{
      num: string;
      category: string;
      title: string;
      p1: string;
      p2: string;
    }>;
  };
}

const Logistics: React.FC<LogisticsProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f8fbff] pt-12 md:pt-16 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
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

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {data.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white border rounded-sm transition-all duration-500 ${openIndex === idx ? 'border-brand-blue shadow-xl shadow-blue-900/5' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 md:px-8 py-6 md:py-10 flex items-center gap-4 md:gap-8 text-left group"
              >
                <span className={`text-3xl md:text-5xl font-black font-serif transition-colors duration-500 ${openIndex === idx ? 'text-brand-blue opacity-30' : 'text-slate-200'}`}>
                  {item.num}
                </span>
                
                <div className="flex-1 flex flex-col gap-1.5">
                  <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-500 ${openIndex === idx ? 'text-brand-blue' : 'text-slate-400'}`}>
                    {item.category}
                  </span>
                  <h3 className="text-brand-dark text-base md:text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className={`relative w-6 h-6 transition-transform duration-500 ${openIndex === idx ? 'rotate-45' : ''}`}>
                  <span className={`absolute top-1/2 left-0 w-full h-0.5 transition-colors duration-500 ${openIndex === idx ? 'bg-brand-red' : 'bg-slate-300'}`}></span>
                  <span className={`absolute top-0 left-1/2 w-0.5 h-full transition-colors duration-500 ${openIndex === idx ? 'bg-brand-red' : 'bg-slate-300'}`}></span>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-32">
                  <div className="md:border-l-2 border-brand-blue/20 pl-0 md:pl-8 text-slate-500 text-sm md:text-base leading-relaxed">
                    <p className="mb-4">{item.p1}</p>
                    <p>{item.p2}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logistics;
