export interface TourRoute {
  id: string;
  prefix: string;
  category: {
    es: string;
    en: string;
  };
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  duration: {
    es: string;
    en: string;
  };
  difficulty: {
    es: string;
    en: string;
  };
  difficultyLevel: 'hard' | 'modplus' | 'mod';
  image: string;
  path: string;
}

export const toursData: TourRoute[] = [
  {
    id: '360',
    prefix: 'HYH',
    category: { es: "EXPEDICIÓN TÉCNICA", en: "TECHNICAL EXPEDITION" },
    title: { es: "Huayhuash 360°", en: "Huayhuash 360°" },
    description: {
      es: "El trekking más espectacular de los Andes, rodeando la cordillera Huayhuash en una travesía técnica y épica.",
      en: "The most spectacular trekking in the Andes, circling the Huayhuash range in a technical and epic journey."
    },
    duration: { es: "15 Días", en: "15 Days" },
    difficulty: { es: "DIFÍCIL", en: "HARD" },
    difficultyLevel: 'hard',
    image: '/trekking/huayhuash/360.png',
    path: 'trekking/huayhuash/360'
  },
  {
    id: 'classic',
    prefix: 'HYH',
    category: { es: "TREKKING DE ALTURA", en: "HIGH ALTITUDE TREKKING" },
    title: { es: "Huayhuash Clásico", en: "Huayhuash Classic" },
    description: {
      es: "La esencia de la cordillera en 11 días. Una ruta equilibrada que visita las lagunas más icónicas del circuito.",
      en: "The essence of the range in 11 days. A balanced route visiting the most iconic lagoons of the circuit."
    },
    duration: { es: "11 Días", en: "11 Days" },
    difficulty: { es: "MODERADO +", en: "MODERATE +" },
    difficultyLevel: 'modplus',
    image: '/trekking/huayhuash/clasico.png',
    path: 'trekking/huayhuash/clasico'
  },
  {
    id: 'mini',
    prefix: 'HYH',
    category: { es: "TREKKING COMPACTO", en: "COMPACT TREKKING" },
    title: { es: "Huayhuash Mini", en: "Huayhuash Mini" },
    description: {
      es: "Una versión optimizada del circuito para quienes disponen de menos tiempo sin sacrificar la espectacularidad.",
      en: "An optimized version of the circuit for those with less time without sacrificing the spectacular views."
    },
    duration: { es: "8 Días", en: "8 Days" },
    difficulty: { es: "MODERADO", en: "MODERATE" },
    difficultyLevel: 'mod',
    image: '/trekking/huayhuash/mini.png',
    path: 'trekking/huayhuash/mini'
  },
  {
    id: 'peaks',
    prefix: 'HYH',
    category: { es: "ALPINISMO & TREK", en: "CLIMBING & TREK" },
    title: { es: "Huayhuash Cumbres", en: "Huayhuash Peaks" },
    description: {
      es: "Combina el trekking con ascensiones a picos técnicos de la cordillera. Solo para montañistas experimentados.",
      en: "Combines trekking with ascents to technical peaks. Only for experienced mountaineers."
    },
    duration: { es: "12 Días", en: "12 Days" },
    difficulty: { es: "DIFÍCIL", en: "HARD" },
    difficultyLevel: 'hard',
    image: '/trekking/huayhuash/cumbres.png',
    path: 'trekking/huayhuash/cumbres'
  },
  {
    id: 'spectacular',
    prefix: 'HYH',
    category: { es: "FOTOGRAFÍA & NATURALEZA", en: "PHOTO & NATURE" },
    title: { es: "Huayhuash Espectacular", en: "Huayhuash Spectacular" },
    description: {
      es: "Una travesía diseñada para amantes de la fotografía, con tiempos extendidos en los campamentos más bellos.",
      en: "A journey designed for photography lovers, with extended times at the most beautiful campsites."
    },
    duration: { es: "15 Días", en: "15 Days" },
    difficulty: { es: "MODERADO +", en: "MODERATE +" },
    difficultyLevel: 'modplus',
    image: '/trekking/huayhuash/bg-espectacular.png',
    path: 'trekking/huayhuash/espectacular'
  },
  {
    id: 'SC',
    prefix: 'BLN',
    category: { es: "TREKKING CLÁSICO", en: "CLASSIC TREKKING" },
    title: { es: "Santa Cruz Trek", en: "Santa Cruz Trek" },
    description: {
      es: "La ruta clásica de la Cordillera Blanca, cruzando el paso Punta Unión con vistas impresionantes al Taulliraju.",
      en: "The classic Cordillera Blanca route, crossing the Punta Unión pass with stunning views of Taulliraju."
    },
    duration: { es: "7 Días", en: "7 Days" },
    difficulty: { es: "MODERADO +", en: "MODERATE +" },
    difficultyLevel: 'modplus',
    image: '/trekking/blanca/trekking-clasico.png',
    path: 'trekking/blanca/santa-cruz'
  },
  {
    id: 'alpamayo-trek',
    prefix: 'BLN',
    category: { es: "EXPEDICIÓN TÉCNICA", en: "TECHNICAL EXPEDITION" },
    title: { es: "Los Cedros Alpamayo", en: "Alpamayo Trek" },
    description: {
      es: "La travesía técnica más espectacular de la Cordillera Blanca, contemplando la cara norte del Alpamayo.",
      en: "The most spectacular technical journey in the Cordillera Blanca, contemplating the north face of Alpamayo."
    },
    duration: { es: "11 Días", en: "11 Days" },
    difficulty: { es: "DIFÍCIL", en: "HARD" },
    difficultyLevel: 'hard',
    image: '/trekking/blanca/trekking-cedros.png',
    path: 'trekking/blanca/alpamayo'
  },
  {
    id: 'circuit',
    prefix: 'BLN',
    category: { es: "EXPEDICIÓN DE ÉLITE", en: "ELITE EXPEDITION" },
    title: { es: "Circuito Cordillera Blanca", en: "Cordillera Blanca Circuit" },
    description: {
      es: "La travesía definitiva de 15 días uniendo la ruta de Santa Cruz con el circuito de Los Cedros Alpamayo.",
      en: "The ultimate 15-day journey joining the Santa Cruz route with the Los Cedros Alpamayo circuit."
    },
    duration: { es: "15 Días", en: "15 Days" },
    difficulty: { es: "MUY DIFÍCIL", en: "VERY HARD" },
    difficultyLevel: 'hard',
    image: '/trekking/blanca/trekking-blanca.png',
    path: 'trekking/blanca/circuito'
  },
  {
    id: 'best',
    prefix: 'BLN',
    category: { es: "EXPEDICIÓN SUPREMA", en: "SUPREME EXPEDITION" },
    title: { es: "Lo Mejor de la Blanca", en: "The Best of Blanca" },
    description: {
      es: "Combina las lagunas más icónicas como la 69 y Parón con el clásico Santa Cruz Trek en 10 días de confort.",
      en: "Combines the most iconic lagoons like 69 and Parón with the classic Santa Cruz Trek in 10 comfort days."
    },
    duration: { es: "10 Días", en: "10 Days" },
    difficulty: { es: "MODERADO +", en: "MODERATE +" },
    difficultyLevel: 'modplus',
    image: '/slider_4.png',
    path: 'trekking/blanca/lo-mejor'
  },
  {
    id: 'pisco',
    prefix: 'CLB',
    category: { es: "BALCÓN DE LOS ANDES", en: "BALCONY OF THE ANDES" },
    title: { es: "Nevado Pisco 5752m", en: "Nevado Pisco 5752m" },
    description: {
      es: "La mejor vista panorámica de la Cordillera Blanca desde una cumbre accesible de casi seis mil metros.",
      en: "The best panoramic view of the Cordillera Blanca from an accessible summit of nearly six thousand meters."
    },
    duration: { es: "5 Días", en: "5 Days" },
    difficulty: { es: "MODERADO", en: "MODERATE" },
    difficultyLevel: 'mod',
    image: '/slider_2.png',
    path: 'climbing/pisco'
  },
  {
    id: 'huascaran',
    prefix: 'CLB',
    category: { es: "EL TECHO DEL PERÚ", en: "THE ROOF OF PERU" },
    title: { es: "Nevado Huascarán 6768m", en: "Nevado Huascarán 6768m" },
    description: {
      es: "Asciende a la montaña más alta del Perú. Una expedición de alto nivel para montañistas experimentados.",
      en: "Ascend to the highest mountain in Peru. A high-level expedition for experienced mountaineers."
    },
    duration: { es: "6 Días", en: "6 Days" },
    difficulty: { es: "TÉCNICA / EXTREMA", en: "TECHNICAL / EXTREME" },
    difficultyLevel: 'hard',
    image: '/slider_4.png',
    path: 'climbing/huascaran'
  },
  {
    id: 'artesonraju',
    prefix: 'CLB',
    category: { es: "LA PIRÁMIDE DE PARAMOUNT", en: "THE PARAMOUNT PEAK" },
    title: { es: "Nevado Artesonraju 6025m", en: "Nevado Artesonraju 6025m" },
    description: {
      es: "Escala la icónica montaña de Paramount Pictures. Una expedición técnica en paredes de hielo de hasta 70°.",
      en: "Scale the iconic Paramount Pictures mountain. A technical expedition on ice walls up to 70°."
    },
    duration: { es: "6 Días", en: "6 Days" },
    difficulty: { es: "TÉCNICO / ELITE", en: "TECHNICAL / ELITE" },
    difficultyLevel: 'hard',
    image: '/slider_1.png',
    path: 'climbing/artesonraju'
  },
  {
    id: 'cusco-choquequirao',
    prefix: 'CUZ',
    category: { es: "CULTURA INCA", en: "INCA CULTURE" },
    title: { es: "Choquequirao Trek", en: "Choquequirao Trek" },
    description: {
      es: "La hermana perdida de Machu Picchu. Una ruta exigente a través del cañón del Apurímac.",
      en: "The lost sister of Machu Picchu. A demanding route through the Apurímac canyon."
    },
    duration: { es: "4 Días", en: "4 Days" },
    difficulty: { es: "DIFÍCIL", en: "HARD" },
    difficultyLevel: 'hard',
    image: '/slider_2.png',
    path: 'trekking/cusco/choquequirao'
  },
  {
    id: 'cusco-inca',
    prefix: 'CUZ',
    category: { es: "RUTA LEGENDARIA", en: "LEGENDARY ROUTE" },
    title: { es: "Camino Inca Clásico", en: "Classic Inca Trail" },
    description: {
      es: "La ruta de senderismo más famosa del mundo. Historia y naturaleza unidas hacia Machu Picchu.",
      en: "The most famous trekking route in the world. History and nature united towards Machu Picchu."
    },
    duration: { es: "4 Días", en: "4 Days" },
    difficulty: { es: "MODERADO +", en: "MODERATE +" },
    difficultyLevel: 'modplus',
    image: '/trekking/huayhuash/clasico.png',
    path: 'trekking/cusco/camino-inca'
  },
  {
    id: 'arequipa-volcanes',
    prefix: 'AQP',
    category: { es: "EXPEDICIÓN VOLCÁNICA", en: "VOLCANIC EXPEDITION" },
    title: { es: "Arequipa Volcanes", en: "Arequipa Volcanoes" },
    description: {
      es: "Explora la majestuosidad de los volcanes Misti y Chachani en una travesía de altura única.",
      en: "Explore the majesty of Misti and Chachani volcanoes in a unique high-altitude journey."
    },
    duration: { es: "7 Días", en: "7 Days" },
    difficulty: { es: "DIFÍCIL", en: "HARD" },
    difficultyLevel: 'hard',
    image: '/slider_2.png',
    path: 'trekking/arequipa/arequipa-volcanes'
  },
  {
    id: 'aconcagua-arg',
    prefix: 'ARG',
    category: { es: "EL TECHO DE AMÉRICA", en: "ROOF OF AMERICA" },
    title: { es: "Aconcagua 6962m", en: "Aconcagua 6962m" },
    description: {
      es: "Asciende a la cumbre más alta de América. Una expedición de gran altitud en los Andes centrales.",
      en: "Ascend to the highest peak in America. A high-altitude expedition in the central Andes."
    },
    duration: { es: "17 Días", en: "17 Days" },
    difficulty: { es: "EXTREMA", en: "EXTREME" },
    difficultyLevel: 'hard',
    image: '/slider_1.png',
    path: 'argentina/aconcagua'
  },
  {
    id: 'avenida-volcanes-ecu',
    prefix: 'ECU',
    category: { es: "EXPEDICIÓN ANDINA", en: "ANDEAN EXPEDITION" },
    title: { es: "Avenida Volcanes", en: "Avenida Volcanes" },
    description: {
      es: "Asciende al Cotopaxi y Chimborazo en una expedición técnica por los picos más bellos del Ecuador.",
      en: "Ascend Cotopaxi and Chimborazo in a technical expedition through Ecuador's most beautiful peaks."
    },
    duration: { es: "12 Días", en: "12 Days" },
    difficulty: { es: "DIFÍCIL", en: "HARD" },
    difficultyLevel: 'hard',
    image: '/slider_4.png',
    path: 'ecuador/avenida-volcanes'
  }
];
