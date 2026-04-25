import React from 'react';

interface EthicsBentoProps {
  lang: 'es' | 'en';
}

const EthicsBento: React.FC<EthicsBentoProps> = ({ lang }) => {
  const isEs = lang === 'es';

  const content = {
    header: {
      title: isEs ? "CÓDIGO DE HONOR Y ÉTICA" : "CODE OF HONOR & ETHICS",
      subtitle: isEs ? "NUESTROS VALORES INTRANSIGENTES" : "OUR UNCOMPROMISING VALUES",
      desc: isEs 
        ? "Antes de elegir una expedición económica, exija respeto absoluto por la integridad de la montaña y la dignidad del personal andino."
        : "Before choosing a low-budget expedition, demand absolute respect for the integrity of the mountain and the dignity of the Andean personnel."
    },
    items: [
      {
        tag: isEs ? "ADVERTENCIA / MALA PRÁCTICA" : "WARNING / MALPRACTICE",
        title: isEs ? "Integridad vs. Explotación" : "Integrity vs. Exploitation",
        desc: isEs 
          ? "Es alarmante ver cómo agencias \"low-cost\" desangran la montaña humillando el peso mular y pagando sueldos miserables a arrieros locales para ganar por volumen. Nosotros elegimos la ética sobre el margen de beneficio."
          : "It is alarming to see how \"low-cost\" agencies bleed the mountain by humiliating mule weight and paying miserable wages to local muleteers to profit from volume. We choose ethics over profit margins.",
        color: "red",
        span: "col-span-1 md:col-span-2 xl:col-span-2"
      },
      {
        tag: isEs ? "ESTÁNDAR 40KG" : "40KG STANDARD",
        title: isEs ? "Bienestar Animal" : "Animal Welfare",
        desc: isEs 
          ? "Nuestras acémilas cargan un máximo ético de 40kg. Protegemos la vida del animal como pilar de nuestra identidad."
          : "Our pack animals carry an ethical maximum of 40kg. We protect the life of the animal as a pillar of our identity.",
        icon: "⚖️",
        color: "blue"
      },
      {
        tag: isEs ? "SEGURIDAD / 01" : "SECURE / 01",
        title: isEs ? "Seguridad Radical" : "Radical Safety",
        desc: isEs 
          ? "No transigimos con el margen de seguridad, sin importar las condiciones extremas."
          : "We do not compromise on the safety margin, regardless of the extreme conditions.",
        icon: "🛡️",
        color: "slate"
      },
      {
        tag: isEs ? "LIMPIEZA / 02" : "CLEAN / 02",
        title: isEs ? "Huella Cero" : "Zero Footprint",
        desc: isEs 
          ? "Gestión letal de residuos. Devolvemos a la ciudad el 100% de lo que llevamos al campo."
          : "Strict waste management. We return 100% of what we take to the field back to the city.",
        icon: "🌱",
        color: "green"
      },
      {
        tag: isEs ? "TÉCNICO / 03" : "TECH / 03",
        title: isEs ? "Calidad Técnica" : "Technical Quality",
        desc: isEs 
          ? "Equipamiento de alta gama probado en los escenarios más hostiles de los Andes."
          : "High-end equipment tested in the most hostile scenarios of the Andes.",
        icon: "⭐",
        color: "slate"
      },
      {
        tag: isEs ? "JURAMENTO DE MARCA" : "BRAND OATH",
        title: "",
        desc: isEs 
          ? "\"VALORAMOS con lealtad andina el esfuerzo del equipo humano y el peso justo animal, en devoto cuidado del ambiente prístino que nos late la vida.\""
          : "\"WE VALUE with Andean loyalty the effort of our human team and the fair animal weight, in devoted care of the pristine environment that pulses our lives.\"",
        color: "gold",
        span: "col-span-1 md:col-span-2 xl:col-span-3",
        isQuote: true,
        signature: {
          name: "FRANPISCO ADVENTURE",
          rank: isEs ? "COMANDO DE EXPEDICIÓN" : "EXPEDITION COMMAND"
        }
      }
    ]
  };

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
            {content.header.title}
          </h2>
          <p className="text-brand-blue/60 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-8">
            {content.header.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-10"></div>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-3xl mx-auto">
            {content.header.desc}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {content.items.map((item, idx) => (
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
