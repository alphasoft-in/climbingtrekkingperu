import React from 'react';
import TourCard from './TourCard.tsx';

interface Route {
  id: string;
  prefix: string;
  title: string;
  image: string;
  duration: string;
  difficulty: string;
  difficultyLevel: 'hard' | 'modplus' | 'mod';
  path: string;
  description: string;
  category: string;
}

interface SuggestedRoutesProps {
  lang: 'es' | 'en';
  currentId?: string;
}

const SuggestedRoutes: React.FC<SuggestedRoutesProps> = ({ lang, currentId }) => {
  const isEs = lang === 'es';

  const allPrograms: Route[] = [
    {
      id: '360',
      prefix: 'HYH',
      title: "Huayhuash 360°",
      image: '/trekking/huayhuash/360.png',
      duration: isEs ? "15 Días" : "15 Days",
      difficulty: isEs ? "DIFÍCIL" : "HARD",
      difficultyLevel: 'hard',
      path: 'trekking/huayhuash/360',
      category: isEs ? "EXPEDICIÓN TÉCNICA" : "TECHNICAL EXPEDITION",
      description: isEs 
        ? "El trekking más espectacular de los Andes, rodeando la cordillera Huayhuash en una travesía técnica y épica."
        : "The most spectacular trekking in the Andes, circling the Huayhuash range in a technical and epic journey."
    },
    {
      id: 'classic',
      prefix: 'HYH',
      title: isEs ? "Huayhuash Clásico" : "Huayhuash Classic",
      image: '/trekking/huayhuash/clasico.png',
      duration: isEs ? "11 Días" : "11 Days",
      difficulty: isEs ? "MODERADO +" : "MODERATE +",
      difficultyLevel: 'modplus',
      path: 'trekking/huayhuash/clasico',
      category: isEs ? "TREKKING DE ALTURA" : "HIGH ALTITUDE TREKKING",
      description: isEs
        ? "La esencia de la cordillera en 11 días. Una ruta equilibrada que visita las lagunas más icónicas del circuito."
        : "The essence of the range in 11 days. A balanced route visiting the most iconic lagoons of the circuit."
    },
    {
      id: 'mini',
      prefix: 'HYH',
      title: isEs ? "Huayhuash Mini" : "Huayhuash Mini",
      image: '/trekking/huayhuash/mini.png',
      duration: isEs ? "8 Días" : "8 Days",
      difficulty: isEs ? "MODERADO" : "MODERATE",
      difficultyLevel: 'mod',
      path: 'trekking/huayhuash/mini',
      category: isEs ? "TREKKING COMPACTO" : "COMPACT TREKKING",
      description: isEs
        ? "Una versión optimizada del circuito para quienes disponen de menos tiempo sin sacrificar la espectacularidad."
        : "An optimized version of the circuit for those with less time without sacrificing the spectacular views."
    },
    {
      id: 'peaks',
      prefix: 'HYH',
      title: isEs ? "Huayhuash Cumbres" : "Huayhuash Peaks",
      image: '/trekking/huayhuash/cumbres.png',
      duration: isEs ? "12 Días" : "12 Days",
      difficulty: isEs ? "DIFÍCIL" : "HARD",
      difficultyLevel: 'hard',
      path: 'trekking/huayhuash/cumbres',
      category: isEs ? "ALPINISMO & TREK" : "CLIMBING & TREK",
      description: isEs
        ? "Combina el trekking con ascensiones a picos técnicos de la cordillera. Solo para montañistas experimentados."
        : "Combines trekking with ascents to technical peaks. Only for experienced mountaineers."
    },
    {
      id: 'spectacular',
      prefix: 'HYH',
      title: isEs ? "Huayhuash Espectacular" : "Huayhuash Spectacular",
      image: '/trekking/huayhuash/bg-espectacular.png',
      duration: isEs ? "15 Días" : "15 Days",
      difficulty: isEs ? "MODERADO +" : "MODERATE +",
      difficultyLevel: 'modplus',
      path: 'trekking/huayhuash/espectacular',
      category: isEs ? "FOTOGRAFÍA & NATURALEZA" : "PHOTO & NATURE",
      description: isEs
        ? "Una travesía diseñada para amantes de la fotografía, con tiempos extendidos en los campamentos más bellos."
        : "A journey designed for photography lovers, with extended times at the most beautiful campsites."
    },
    {
      id: 'SC',
      prefix: 'BLN',
      title: "Santa Cruz Trek",
      image: '/trekking/blanca/trekking-clasico.png',
      duration: isEs ? "7 Días" : "7 Days",
      difficulty: isEs ? "MODERADO +" : "MODERATE +",
      difficultyLevel: 'modplus',
      path: 'trekking/blanca/santa-cruz',
      category: isEs ? "TREKKING CLÁSICO" : "CLASSIC TREKKING",
      description: isEs
        ? "La ruta clásica de la Cordillera Blanca, cruzando el paso Punta Unión con vistas impresionantes al Taulliraju."
        : "The classic Cordillera Blanca route, crossing the Punta Unión pass with stunning views of Taulliraju."
    },
    {
      id: 'alpamayo-trek',
      prefix: 'BLN',
      title: isEs ? "Los Cedros Alpamayo" : "Alpamayo Trek",
      image: '/trekking/blanca/trekking-cedros.png',
      duration: isEs ? "11 Días" : "11 Days",
      difficulty: isEs ? "DIFÍCIL" : "HARD",
      difficultyLevel: 'hard',
      path: 'trekking/blanca/alpamayo',
      category: isEs ? "EXPEDICIÓN TÉCNICA" : "TECHNICAL EXPEDITION",
      description: isEs
        ? "La travesía técnica más espectacular de la Cordillera Blanca, contemplando la cara norte del Alpamayo."
        : "The most spectacular technical journey in the Cordillera Blanca, contemplating the north face of Alpamayo."
    },
    {
      id: 'circuit',
      prefix: 'BLN',
      title: isEs ? "Circuito Cordillera Blanca" : "Cordillera Blanca Circuit",
      image: '/trekking/blanca/trekking-blanca.png',
      duration: isEs ? "15 Días" : "15 Days",
      difficulty: isEs ? "MUY DIFÍCIL" : "VERY HARD",
      difficultyLevel: 'hard',
      path: 'trekking/blanca/circuito',
      category: isEs ? "EXPEDICIÓN DE ÉLITE" : "ELITE EXPEDITION",
      description: isEs
        ? "La travesía definitiva de 15 días uniendo la ruta de Santa Cruz con el circuito de Los Cedros Alpamayo."
        : "The ultimate 15-day journey joining the Santa Cruz route with the Los Cedros Alpamayo circuit."
    },
    {
      id: 'best',
      prefix: 'BLN',
      title: isEs ? "Lo Mejor de la Blanca" : "The Best of Blanca",
      image: '/slider_4.png',
      duration: isEs ? "10 Días" : "10 Days",
      difficulty: isEs ? "MODERADO +" : "MODERATE +",
      difficultyLevel: 'modplus',
      path: 'trekking/blanca/lo-mejor',
      category: isEs ? "EXPEDICIÓN SUPREMA" : "SUPREME EXPEDITION",
      description: isEs
        ? "Combina las lagunas más icónicas como la 69 y Parón con el clásico Santa Cruz Trek en 10 días de confort."
        : "Combines the most iconic lagoons like 69 and Parón with the classic Santa Cruz Trek in 10 comfort days."
    },
    {
      id: 'pisco',
      prefix: 'CLB',
      title: isEs ? "Nevado Pisco 5752m" : "Nevado Pisco 5752m",
      image: '/slider_2.png',
      duration: isEs ? "5 Días" : "5 Days",
      difficulty: isEs ? "MODERADO" : "MODERATE",
      difficultyLevel: 'mod',
      path: 'climbing/pisco',
      category: isEs ? "BALCÓN DE LOS ANDES" : "BALCONY OF THE ANDES",
      description: isEs
        ? "La mejor vista panorámica de la Cordillera Blanca desde una cumbre accesible de casi seis mil metros."
        : "The best panoramic view of the Cordillera Blanca from an accessible summit of nearly six thousand meters."
    },
    {
      id: 'huascaran',
      prefix: 'CLB',
      title: isEs ? "Nevado Huascarán 6768m" : "Nevado Huascarán 6768m",
      image: '/slider_4.png',
      duration: isEs ? "6 Días" : "6 Days",
      difficulty: isEs ? "TÉCNICA / EXTREMA" : "TECHNICAL / EXTREME",
      difficultyLevel: 'hard',
      path: 'climbing/huascaran',
      category: isEs ? "EL TECHO DEL PERÚ" : "THE ROOF OF PERU",
      description: isEs
        ? "Asciende a la montaña más alta del Perú. Una expedición de alto nivel para montañistas experimentados."
        : "Ascend to the highest mountain in Peru. A high-level expedition for experienced mountaineers."
    },
    {
      id: 'artesonraju',
      prefix: 'CLB',
      title: isEs ? "Nevado Artesonraju 6025m" : "Nevado Artesonraju 6025m",
      image: '/slider_1.png',
      duration: isEs ? "6 Días" : "6 Days",
      difficulty: isEs ? "TÉCNICO / ELITE" : "TECHNICAL / ELITE",
      difficultyLevel: 'hard',
      path: 'climbing/artesonraju',
      category: isEs ? "LA PIRÁMIDE DE PARAMOUNT" : "THE PARAMOUNT PEAK",
      description: isEs
        ? "Escala la icónica montaña de Paramount Pictures. Una expedición técnica en paredes de hielo de hasta 70°."
        : "Scale the iconic Paramount Pictures mountain. A technical expedition on ice walls up to 70°."
    },
    {
      id: 'cusco-choquequirao',
      prefix: 'CUZ',
      title: "Choquequirao Trek",
      image: '/slider_2.png',
      duration: isEs ? "4 Días" : "4 Days",
      difficulty: isEs ? "DIFÍCIL" : "HARD",
      difficultyLevel: 'hard',
      path: 'trekking/cusco/choquequirao',
      category: isEs ? "CULTURA INCA" : "INCA CULTURE",
      description: isEs
        ? "La hermana perdida de Machu Picchu. Una ruta exigente a través del cañón del Apurímac."
        : "The lost sister of Machu Picchu. A demanding route through the Apurímac canyon."
    },
    {
      id: 'cusco-inca',
      prefix: 'CUZ',
      title: isEs ? "Camino Inca Clásico" : "Classic Inca Trail",
      image: '/trekking/huayhuash/clasico.png',
      duration: isEs ? "4 Días" : "4 Days",
      difficulty: isEs ? "MODERADO +" : "MODERATE +",
      difficultyLevel: 'modplus',
      path: 'trekking/cusco/camino-inca',
      category: isEs ? "RUTA LEGENDARIA" : "LEGENDARY ROUTE",
      description: isEs
        ? "La ruta de senderismo más famosa del mundo. Historia y naturaleza unidas hacia Machu Picchu."
        : "The most famous trekking route in the world. History and nature united towards Machu Picchu."
    },
    {
      id: 'arequipa-volcanes',
      prefix: 'AQP',
      title: isEs ? "Arequipa Volcanes" : "Arequipa Volcanoes",
      image: '/slider_2.png',
      duration: isEs ? "7 Días" : "7 Days",
      difficulty: isEs ? "DIFÍCIL" : "HARD",
      difficultyLevel: 'hard',
      path: 'trekking/arequipa/arequipa-volcanes',
      category: isEs ? "EXPEDICIÓN VOLCÁNICA" : "VOLCANIC EXPEDITION",
      description: isEs
        ? "Explora la majestuosidad de los volcanes Misti y Chachani en una travesía de altura única."
        : "Explore the majesty of Misti and Chachani volcanoes in a unique high-altitude journey."
    },
    {
      id: 'aconcagua-arg',
      prefix: 'ARG',
      title: "Aconcagua 6962m",
      image: '/slider_1.png',
      duration: isEs ? "17 Días" : "17 Days",
      difficulty: isEs ? "EXTREMA" : "EXTREME",
      difficultyLevel: 'hard',
      path: 'argentina/aconcagua',
      category: isEs ? "EL TECHO DE AMÉRICA" : "ROOF OF AMERICA",
      description: isEs
        ? "Asciende a la cumbre más alta de América. Una expedición de gran altitud en los Andes centrales."
        : "Ascend to the highest peak in America. A high-altitude expedition in the central Andes."
    },
    {
      id: 'avenida-volcanes-ecu',
      prefix: 'ECU',
      title: "Avenida Volcanes",
      image: '/slider_4.png',
      duration: isEs ? "12 Días" : "12 Days",
      difficulty: isEs ? "DIFÍCIL" : "HARD",
      difficultyLevel: 'hard',
      path: 'ecuador/avenida-volcanes',
      category: isEs ? "EXPEDICIÓN ANDINA" : "ANDEAN EXPEDITION",
      description: isEs
        ? "Asciende al Cotopaxi y Chimborazo en una expedición técnica por los picos más bellos del Ecuador."
        : "Ascend Cotopaxi and Chimborazo in a technical expedition through Ecuador's most beautiful peaks."
    }
  ];

  const recommended = allPrograms
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
              {...route}
              href={lang === 'es' ? `/${route.path}` : `/en/${route.path}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestedRoutes;
