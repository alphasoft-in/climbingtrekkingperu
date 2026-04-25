import React from 'react';

interface TechItem {
  label: string;
  value: string;
}

interface PageHeroProps {
  titleTop: string;
  titleMain: string;
  backgroundImage: string;
  techData: TechItem[];
}

const PageHero: React.FC<PageHeroProps> = ({ titleTop, titleMain, backgroundImage, techData }) => {
  return (
    <section className="relative h-[75vh] min-h-[550px] flex items-center overflow-hidden bg-[#06090f]">
      <div
        className="absolute inset-0 bg-cover bg-[center_40%] transition-transform duration-[10000ms] hover:scale-110"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#06090f]/80 via-[#06090f]/40 to-[#06090f]/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-transparent to-transparent opacity-60"></div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-[100px]">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white uppercase font-extralight leading-[0.95] tracking-tighter drop-shadow-2xl">
              {titleTop} <br /><strong className="font-black block">{titleMain}</strong>
            </h1>
            <div className="w-16 h-1 bg-brand-red mt-5 shadow-[0_0_15px_rgba(216,2,2,0.4)]"></div>
          </div>

          <div className="flex justify-center gap-6 md:gap-12 pt-8 mt-2 border-t border-white/10 w-full max-w-2xl">
            {techData.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 items-center">
                <label className="text-[9px] md:text-[10px] text-brand-blue font-black tracking-[0.2em] uppercase">
                  {item.label}
                </label>
                <span className="text-xs md:text-sm text-white font-bold font-mono tracking-tight">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
