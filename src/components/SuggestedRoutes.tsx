import React from 'react';
import TourCard from './TourCard.tsx';
import { toursData } from '@data/tours/toursData';

interface SuggestedRoutesProps {
  lang: 'es' | 'en';
  currentId?: string;
}

const SuggestedRoutes: React.FC<SuggestedRoutesProps> = ({ lang, currentId }) => {
  const isEs = lang === 'es';

  const recommended = toursData
    .filter(p => p.id !== currentId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="bg-[#fafafa] pt-16 md:pt-24 pb-24 md:pb-32 px-6 text-slate-900">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-brand-blue text-[9px] font-black tracking-[0.4em] uppercase mb-3 block">
            {isEs ? 'CONTINUAR LA EXPEDICIÓN' : 'CONTINUE THE EXPEDITION'}
          </span>
          <div className="inline-flex items-center gap-4">
            <div className="w-1.5 h-8 bg-brand-red"></div>
            <h2 className="text-brand-dark text-lg md:text-2xl font-black uppercase tracking-tight leading-none">
              {isEs ? 'Rutas Sugeridas' : 'Suggested Routes'}
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommended?.map((route, idx) => (
            <TourCard 
              key={idx}
              lang={lang}
              id={route.id}
              prefix={route.prefix}
              title={route.title[lang]}
              image={route.image}
              duration={route.duration[lang]}
              difficulty={route.difficulty[lang]}
              difficultyLevel={route.difficultyLevel}
              description={route.description[lang]}
              category={route.category[lang]}
              href={lang === 'es' ? `/${route.path}` : `/en/${route.path}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestedRoutes;
