import React from 'react';

interface GastronomyProps {
  lang: 'es' | 'en';
}

const Gastronomy: React.FC<GastronomyProps> = ({ lang }) => {
  const isEs = lang === 'es';

  const content = {
    header: {
      title: isEs ? "GASTRONOMÍA DE ALTA MONTAÑA" : "HIGH MOUNTAIN GASTRONOMY",
      subtitle: isEs ? "COCINA TÉCNICA Y NUTRICIÓN DE CAMPO" : "TECHNICAL CULINARY & FIELD NUTRITION",
      desc: isEs
        ? "Nuestra cocina es un pilar fundamental de la expedición. Diseñamos menús de alto valor calórico preparados por chefs especializados en altitud, garantizando la recuperación física completa."
        : "Our kitchen is a fundamental pillar of the expedition. We design high-calorie menus prepared by specialized altitude chefs, ensuring full physical recovery."
    },
    dietary: {
      label: isEs ? "REGÍMENES DISPONIBLES" : "AVAILABLE DIETARY OPTIONS",
      options: [
        { label: isEs ? "OMNÍVORO" : "OMNIVORE", color: "border-slate-200" },
        { label: isEs ? "VEGETARIANO" : "VEGETARIAN", color: "border-green-500" },
        { label: isEs ? "VEGANO" : "VEGAN", color: "border-orange-500" },
        { label: isEs ? "SIN GLUTEN" : "GLUTEN FREE", color: "border-blue-400" }
      ]
    },
    programs: [
      {
        unit: isEs ? "PROGRAMA 01" : "PROGRAM 01",
        title: isEs ? "DESAYUNOS ENÉRGICOS" : "ENERGY BREAKFASTS",
        items: isEs 
          ? ["Avena Andina con Frutos Secos", "Quinua Ancestral Digestiva", "Huevos al Comal (Técnica Local)", "Omelet Premium de Montaña", "Panqueques Dulces & Fruta", "Café de Filtro Nativo"]
          : ["Andean Oatmeal with Nuts", "Digestive Ancestral Quinoa", "Comal Eggs (Local Technique)", "Mountain Premium Omelet", "Sweet Pancakes & Fruit", "Native Filtered Coffee"]
      },
      {
        unit: isEs ? "PROGRAMA 02" : "PROGRAM 02",
        title: isEs ? "ALMUERZOS DE RECOBRO" : "RECOVERY LUNCHES",
        items: isEs
          ? ["Salpicón de Pollo Energético", "Sopa de Verduras de la Huaca", "Trucha Grillada (Río Blanco)", "Pollo Saltado al Wok Técnico", "Frutas de Estación Trozadas", "Bebidas Hidratantes Locales"]
          : ["Energy Chicken Salad", "Huaca Vegetable Soup", "Grilled Trout (White River)", "Technical Wok Chicken Stir-Fry", "Sliced Seasonal Fruits", "Local Hydrating Drinks"]
      },
      {
        unit: isEs ? "PROGRAMA 03" : "PROGRAM 03",
        title: isEs ? "BRUNCH & RECARGA" : "BRUNCH & RECHARGE",
        items: isEs
          ? ["Mate de Coca Verde (Infusión)", "Muña Rústica Natural", "Té de Hierbas de Altura", "Café Caliente de Especialidad", "Galletas Artesanales & Snacks", "Queso Local & Embutidos"]
          : ["Green Coca Leaf Tea (Infusion)", "Natural Rustic Muña", "High Altitude Herbal Tea", "Specialty Hot Coffee", "Artisanal Crackers & Snacks", "Local Cheese & Cold Cuts"]
      }
    ],
    dinner: {
      unit: isEs ? "PROGRAMA 04" : "PROGRAM 04",
      title: isEs ? "CENA TÉCNICA CALIENTE" : "HOT TECHNICAL DINNER",
      groups: [
        {
          label: isEs ? "ENTRADAS & SOPAS" : "STARTERS & SOUPS",
          items: isEs
            ? ["Sopa Criolla Revitalizante", "Crema de Zapallo Fina", "Sopa a la Minuta Técnica", "Chupe de Olluco Andino"]
            : ["Revitalizing Sopa Criolla", "Fine Pumpkin Cream Soup", "Technical Sopa a la Minuta", "Andean Olluco Chupe"]
        },
        {
          label: isEs ? "PLATOS DE FONDO MAESTROS" : "MASTER MAIN COURSES",
          items: isEs
            ? ["Lomo Saltado al Fuego", "Trucha Andina (Rellena o Frita)", "Pollo al Curry con Verduras", "Spaghetti a la Boloniesa Artesanal"]
            : ["Flame-Seared Lomo Saltado", "Andean Trout (Stuffed or Fried)", "Curry Chicken with Vegetables", "Artisanal Spaghetti Bolognese"]
        }
      ]
    },
    dessert: {
      unit: isEs ? "FIN DE JORNADA" : "END OF JOURNEY",
      title: isEs ? "POSTRES PREMIUM" : "PREMIUM DESSERTS",
      items: isEs
        ? ["Naranja Flameada Exótica", "Plátano Flameado Acaramelado", "Mazamorra Morada Peruana", "Pie de Limón Artesanal"]
        : ["Exotic Flamed Orange", "Caramelized Flamed Banana", "Peruvian Mazamorra Morada", "Artisanal Lemon Pie"]
    }
  };

  return (
    <section className="bg-white pt-24 md:pt-32 pb-12 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
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

        {/* Dietary Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-20">
          <span className="text-[10px] font-black tracking-widest text-brand-dark/40 uppercase mr-4 w-full text-center md:w-auto mb-4 md:mb-0">
            {content.dietary.label}
          </span>
          {content.dietary.options.map((opt, idx) => (
            <span key={idx} className={`text-[9px] md:text-[10px] font-bold tracking-widest px-3 md:px-4 py-2 border-2 ${opt.color} text-brand-dark rounded-sm`}>
              {opt.label}
            </span>
          ))}
        </div>

        {/* Grid 1: Basic Programs */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {content.programs.map((prog, idx) => (
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
              {content.dinner.unit}
            </span>
            <h3 className="text-brand-dark text-lg md:text-xl font-black uppercase tracking-wider mb-6">
              {content.dinner.title}
            </h3>
            <div className="w-8 h-[2px] bg-brand-red/30 mb-8"></div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {content.dinner.groups.map((group, idx) => (
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
              {content.dessert.unit}
            </span>
            <h3 className="text-brand-dark text-lg md:text-xl font-black uppercase tracking-wider mb-6">
              {content.dessert.title}
            </h3>
            <div className="w-8 h-[2px] bg-brand-red/30 mb-8"></div>
            <ul className="space-y-4">
              {content.dessert.items.map((item, i) => (
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
