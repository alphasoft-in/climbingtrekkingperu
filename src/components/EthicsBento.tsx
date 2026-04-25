import React from 'react';

interface EthicsBentoProps {
  data: {
    header: {
      title: string;
      subtitle: string;
      desc: string;
    };
    items: Array<{
      tag: string;
      title?: string;
      desc: string;
      color: string;
      span?: string;
      icon?: string;
      isQuote?: boolean;
      signature?: {
        name: string;
        rank: string;
      };
    }>;
  };
}

const EthicsBento: React.FC<EthicsBentoProps> = ({ data }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red': return 'border-brand-red text-brand-red';
      case 'blue': return 'border-brand-blue text-brand-blue';
      case 'green': return 'border-green-600 text-green-600';
      case 'gold': return 'border-amber-500 text-amber-500';
      default: return 'border-slate-800 text-slate-800';
    }
  };

  return (
    <section className="bg-white pt-24 md:pt-32 pb-12 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
          <h2 className="text-brand-dark text-2xl md:text-3xl font-black tracking-[0.2em] uppercase mb-4">
            {data.header.title}
          </h2>
          <p className="text-brand-blue/60 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-8">
            {data.header.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-10"></div>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-3xl mx-auto">
            {data.header.desc}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 md:p-12 bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 group ${item.span || 'col-span-1'}`}
            >
              {/* Top Bar Accent */}
              <div className={`absolute top-0 left-0 w-full h-1.5 border-t-4 ${getColorClasses(item.color).split(' ')[0]} transition-all duration-500`}></div>
              
              <span className={`text-[10px] font-black tracking-[0.2em] uppercase mb-8 block ${getColorClasses(item.color).split(' ')[1]}`}>
                {item.tag}
              </span>

              {item.icon && (
                <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  {item.icon}
                </div>
              )}

              {item.title && (
                <h3 className="text-brand-dark text-lg md:text-xl font-black uppercase tracking-wider mb-6">
                  {item.title}
                </h3>
              )}

              {item.isQuote ? (
                <div className="mt-4">
                  <p className="text-slate-600 text-lg md:text-xl font-serif italic leading-relaxed mb-10">
                    {item.desc}
                  </p>
                  <div className="flex flex-col border-l-4 border-amber-500 pl-6">
                    <span className="text-brand-dark font-black tracking-widest text-sm uppercase">
                      {item.signature?.name}
                    </span>
                    <span className="text-slate-400 font-bold tracking-widest text-[10px] uppercase">
                      {item.signature?.rank}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              )}

              {/* Bottom Accent Bar for Red Card */}
              {item.color === 'red' && (
                <div className="w-12 h-1 bg-brand-red mt-10 transition-all duration-500 group-hover:w-24"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicsBento;
