import React, { useState } from 'react';

interface AccordionItem {
  num: string;
  category: string;
  title: string;
  content: React.ReactNode;
}

interface LogisticsProps {
  lang: 'es' | 'en';
}

const Logistics: React.FC<LogisticsProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = {
    header: {
      title: isEs ? "LOGÍSTICA Y REGLAMENTO DE OPERACIÓN" : "LOGISTICS AND OPERATION RULES",
      subtitle: isEs ? "PROTOCOLOS INSTITUCIONALES DE SEGURIDAD" : "INSTITUTIONAL SECURITY PROTOCOLS",
      desc: isEs 
        ? "Nuestra operación se rige por estándares de seguridad y eficiencia logística. Cada procedimiento está diseñado para maximizar la experiencia técnica y el bienestar del expedicionario."
        : "Our operation is governed by security standards and logistical efficiency. Each procedure is designed to maximize the technical experience and the well-being of the expeditioner."
    },
    items: [
      {
        num: "01",
        category: isEs ? "PROTOCOLO DE CAMPO" : "FIELD PROTOCOL",
        title: isEs ? "Rutina Matutina: Vida en el Campamento" : "Morning Routine: Life in the Camp",
        content: isEs ? (
          <>
            <p className="mb-4">Nuestras tiendas de alojamiento de camping las encontraremos impecablemente <strong>armadas de antemano por nuestros arrieros y cocineros</strong>, listas para recibirlo exhausto al atardecer para descansar sin levantar un solo dedo.</p>
            <p>En las mañanas, nuestras robustas tiendas las resguardan y recogen diligentes los arrieros nativos a las 6:00am. Solo precisarán de forma personal <strong>dejar firmemente empaquetados todos sus equipajes nocturnos</strong> cerrados antes de ir a disfrutar a la carpa nuestro rico desayuno matutino.</p>
          </>
        ) : (
          <>
            <p className="mb-4">Our camping accommodation tents will be found impeccably <strong>set up in advance by our muleteers and cooks</strong>, ready to receive you exhausted at sunset to rest without lifting a finger.</p>
            <p>In the mornings, our robust tents are sheltered and collected by diligent native muleteers at 6:00am. You will only need to personally <strong>leave all your night luggage firmly packed</strong> closed before going to enjoy our delicious morning breakfast in the tent.</p>
          </>
        )
      },
      {
        num: "02",
        category: isEs ? "SEGURIDAD Y RESGUARDO" : "SECURITY AND SAFEGUARD",
        title: isEs ? "Almacén Base Exclusivo (Equipaje de Ciudad)" : "Exclusive Base Warehouse (City Luggage)",
        content: isEs ? (
          <>
            <p className="mb-4">Contamos con un almacén privado y seguro en nuestra base de operaciones. Podrá dejar sus pertenencias de ciudad (maletas, ropa extra) <strong>perfectamente resguardadas</strong> durante toda la expedición sin costo adicional.</p>
            <p>Cada bulto es etiquetado y registrado en nuestro inventario de seguridad antes de la partida al campo.</p>
          </>
        ) : (
          <>
            <p className="mb-4">We have a private and secure warehouse at our operations base. You can leave your city belongings (suitcases, extra clothes) <strong>perfectly guarded</strong> throughout the expedition at no additional cost.</p>
            <p>Each bag is tagged and recorded in our security inventory before departing for the field.</p>
          </>
        )
      },
      {
        num: "03",
        category: isEs ? "EQUIPAMIENTO TÉCNICO" : "TECHNICAL EQUIPMENT",
        title: isEs ? "Supervivencia y Campamento de Alta Gama" : "High-End Survival and Camping",
        content: isEs ? (
          <>
            <p className="mb-4">Utilizamos exclusivamente <strong>equipamiento de marcas líderes</strong> (tiendas de 4 estaciones, sacos de dormir de alta montaña) diseñados para soportar condiciones extremas en la Cordillera Blanca y Huayhuash.</p>
            <p>Nuestra logística incluye carpas de comedor espaciosas, cocina profesional de campo y sillas ergonómicas para garantizar el confort tras la jornada técnica.</p>
          </>
        ) : (
          <>
            <p className="mb-4">We exclusively use <strong>leading brand equipment</strong> (4-season tents, high-mountain sleeping bags) designed to withstand extreme conditions in the Cordillera Blanca and Huayhuash.</p>
            <p>Our logistics include spacious dining tents, professional field kitchens, and ergonomic chairs to ensure comfort after the technical journey.</p>
          </>
        )
      },
      {
        num: "04",
        category: isEs ? "REGLAMENTO AMBIENTAL" : "ENVIRONMENTAL REGULATION",
        title: isEs ? "Compromiso Cero Rastro (Leave No Trace)" : "Leave No Trace Commitment",
        content: isEs ? (
          <>
            <p className="mb-4">Como guías certificados, aplicamos una política estricta de <strong>gestión de residuos</strong>. Todo desecho generado es transportado fuera de las áreas protegidas.</p>
            <p>Promovemos el respeto total a la biodiversidad andina, las fuentes de agua y las comunidades locales que nos acogen en sus territorios.</p>
          </>
        ) : (
          <>
            <p className="mb-4">As certified guides, we apply a strict <strong>waste management</strong> policy. All generated waste is transported out of protected areas.</p>
            <p>We promote total respect for Andean biodiversity, water sources, and the local communities that welcome us into their territories.</p>
          </>
        )
      }
    ]
  };

  return (
    <section className="bg-[#f8fbff] pt-12 md:pt-16 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-brand-dark text-2xl md:text-4xl font-black tracking-[0.2em] uppercase mb-4">
            {content.header.title}
          </h2>
          <p className="text-brand-blue text-xs md:text-sm font-black tracking-[0.4em] uppercase mb-8">
            {content.header.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-10"></div>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
            {content.header.desc}
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {content.items.map((item, idx) => (
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
                    {item.content}
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
