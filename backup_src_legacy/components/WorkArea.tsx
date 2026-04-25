import React from 'react';

interface WorkAreaProps {
  lang: 'es' | 'en';
}

const WorkArea: React.FC<WorkAreaProps> = ({ lang }) => {
  const isEs = lang === 'es';

  const content = {
    header: {
      title: isEs ? "TRABAJAMOS EN LOS ANDES" : "WE OPERATE IN THE ANDES",
      subtitle: isEs ? "OPERACIONES TÉCNICAS REGIONALES" : "REGIONAL TECHNICAL OPERATIONS",
      desc: isEs
        ? "Nuestro personal es 100% local en cada destino. Seleccionados bajo estándares de alto entendimiento logístico y respeto absoluto por las reservas naturales."
        : "Our staff is 100% local at each destination. Rigorously selected for their impeccable professionalism and high tactical understanding of logistical programs."
    },
    units: [
      {
        tag: isEs ? "CERTIFICACIÓN AGMP – UIAGM" : "AGMP – UIAGM CERTIFICATION",
        title: isEs ? "GUÍAS DE MONTAÑA" : "MOUNTAIN GUIDES",
        desc: isEs
          ? "Especialistas en montañismo y alpinismo exigente, garantizando seguridad absoluta en cada ascenso técnico."
          : "Specialists in demanding mountaineering and ice climbing, guaranteeing absolute safety in any technical ascent."
      },
      {
        tag: isEs ? "SOPORTE CULTURAL" : "CULTURAL SUPPORT",
        title: isEs ? "GUÍAS DE TREKKING" : "TREKKING GUIDES",
        desc: isEs
          ? "Guías oficiales sumergidos en la cultura andina, entregando información técnica e histórica de alto nivel."
          : "Official guides deeply immersed in Andean culture, delivering historical and technical insights of the highest caliber."
      },
      {
        tag: isEs ? "LOGÍSTICA DE CAMPO" : "FIELD LOGISTICS",
        title: isEs ? "AUXILIARES TÉCNICOS" : "TECHNICAL AUXILIARIES",
        items: isEs
          ? ["Cocineros acreditados de altitud.", "Porteadores logísticos capacitados.", "Arrieros andinos certificados."]
          : ["Accredited High Altitude Mountain Chefs.", "Specialized Technical Porters.", "Certified Andean Horsemen."]
      }
    ]
  };

  return (
    <section className="bg-slate-50 pt-12 md:pt-16 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <h2 className="text-brand-dark text-xl md:text-3xl font-black tracking-[0.2em] uppercase mb-4">
            {content.header.title}
          </h2>
          <p className="text-brand-blue text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-8">
            {content.header.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-10"></div>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            {content.header.desc}
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {content.units.map((unit, idx) => (
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
