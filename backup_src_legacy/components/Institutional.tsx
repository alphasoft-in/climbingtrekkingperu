import React from 'react';

interface InstitutionalProps {
  lang: 'es' | 'en';
}

const Institutional: React.FC<InstitutionalProps> = ({ lang }) => {
  const isEs = lang === 'es';

  const content = {
    identity: {
      name: "FRANPISCO ADVENTURE E.I.R.L.",
      type: isEs ? "Agencia de Viajes y Turismo" : "Travel and Tourism Agency",
      regBadge: isEs ? "REGISTRO OFICIAL" : "OFFICIAL REGISTRATION",
      regText: isEs 
        ? "Consolidada en pleno corazón de Huaraz, Perú. Se encuentra debidamente inscrita en los registros públicos de Perú como empresa prestadora de servicios turísticos (Toda operación protegida bajo derechos reservados)."
        : "Consolidated in the very heart of Huaraz, Peru. We are duly registered in the public registries of Peru as a specialized mountain tourist service provider company (All operations fully protected under reserved rights).",
      netBadge: isEs ? "RED INTERNACIONAL" : "INTERNATIONAL NETWORK",
      netText1: isEs
        ? "Todos nuestros equipos integran profesionales con amplio conocimiento en los países de Sudamérica donde ofrecemos destinos turísticos: "
        : "All our teams integrate highly qualified professionals from various backgrounds with extensive and deep knowledge of the South American countries where we operate epic tourist destinations: ",
      netHighlight: "Perú, Bolivia, Chile, Argentina, y Ecuador.",
      netText2: isEs
        ? "Nuestro personal comparte una gran pasión con un inquebrantable compromiso de calidad, alto profesionalismo y emoción por su trabajo."
        : "Our solid staff shares a massive passion for their work in demanding trekking and mountaineering activities, offering an unbreakable commitment to supreme quality, professionalism, and thrill."
    },
    pillars: [
      {
        num: "01",
        icon: "🎯",
        title: isEs ? "NUESTRO OBJETIVO" : "OUR OBJECTIVE",
        desc: isEs
          ? "Ser una empresa innovadora y exitosa en el rubro del turismo. Formar y dar oportunidades a las nuevas generaciones, logrando realizar los sueños de nuestros clientes en expediciones de alto nivel."
          : "To be an innovative and successful company in the tourism field. To train and provide opportunities to new generations, fulfilling our clients' dreams in high-level expeditions."
      },
      {
        num: "02",
        icon: "🤝",
        title: isEs ? "NUESTRO COMPROMISO" : "OUR COMMITMENT",
        desc: isEs
          ? "Innovar con programas competitivos en oferta y experiencia. Ofrecemos expediciones preparadas por nuestra propia travesía y reconocimiento técnico en Perú, Bolivia, Chile, Argentina y Ecuador."
          : "Innovating with competitive programs. We provide unique expeditions pre-crafted by our own technical traversing in Peru, Bolivia, Chile, Argentina, and Ecuador."
      },
      {
        num: "03",
        icon: "🏔️",
        title: isEs ? "NUESTRA EXPERIENCIA" : "OUR EXPERIENCE",
        desc: isEs
          ? "El conocimiento profundo de los itinerarios es vital. Nuestro equipo evoluciona continuamente visitando distintas cordilleras. La asesoría personalizada es el núcleo de nuestros servicios."
          : "Deeply knowing our itineraries is vital. Our team perpetually evolves by exploring different Andean ranges. Personalized expert advice is the true core of our services."
      },
      {
        num: "04",
        icon: "🌱",
        title: isEs ? "LA PRIORIDAD" : "THE PRIORITY",
        desc: isEs
          ? "Nuestros clientes, el respeto absoluto por la limpieza del entorno y la cultura andina. Cada destino merece el máximo respeto y cuidado por parte de nuestra marca."
          : "Our clients, the absolute respect for a clean environment and the rich Andean cultural tradition. Every destination deserves maximum respect and care from our brand."
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* 1. Identity Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-5xl mx-auto mb-20 md:mb-32">
            <h1 className="text-brand-dark text-3xl md:text-5xl font-black tracking-[0.15em] mb-4 leading-tight uppercase">
              {content.identity.name}
            </h1>
            <p className="text-slate-400 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase">
              {content.identity.type}
            </p>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-6">
              <span className="inline-block bg-slate-100 text-brand-dark/40 text-[10px] font-black tracking-[0.2em] px-4 py-2 rounded-sm">
                {content.identity.regBadge}
              </span>
              <p className="text-brand-dark/80 text-base md:text-lg leading-relaxed font-medium">
                {content.identity.regText}
              </p>
            </div>

            <div className="space-y-6">
              <span className="inline-block bg-slate-100 text-brand-dark/40 text-[10px] font-black tracking-[0.2em] px-4 py-2 rounded-sm">
                {content.identity.netBadge}
              </span>
              <div className="space-y-6">
                <p className="text-brand-dark/70 text-base leading-relaxed">
                  {content.identity.netText1}
                  <strong className="text-brand-dark font-bold underline decoration-brand-blue/30 decoration-2 underline-offset-4">
                    {content.identity.netHighlight}
                  </strong>
                </p>
                <p className="text-brand-dark/70 text-base leading-relaxed italic border-l-2 border-brand-blue/20 pl-6">
                  {content.identity.netText2}
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
            {content.pillars.map((pillar, idx) => (
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
