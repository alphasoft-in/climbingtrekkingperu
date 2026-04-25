export const climbingPrepPackageData = {
  id: 'prep-package',
  category: 'climbing',
  subCategory: 'blanca',
  es: {
    hero: {
      titleTop: "ENTRENAMIENTO DE ALTO NIVEL",
      titleMain: "PREPARACIÓN: 4 CUMBRES TÉCNICAS",
      backgroundImage: "/prep/bg-prep.png",
      duration: "06 DÍAS",
      price: "USD 1,395.00",
      difficulty: "ALTA / PROGRESIVA",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CLB-PREP-06",
      titlePrefix: "Domina los",
      titleAccent: "Andes Técnicos",
      description: "Programa intensivo diseñado para consolidar técnica en glaciar y pared. Cuatro cumbres emblemáticas para prepararte para desafíos como Alpamayo o Huascarán.",
      image: "/prep/prep.png",
      lat: `09° 08' 22" S`,
      lon: `77° 28' 14" W`,
      specs: [
        { label: "PUNTO MÁXIMO", value: "5,680 MSNM", icon: "location" },
        { label: "TIPO", value: "Entrenamiento Técnico", icon: "zone" },
        { label: "TEMPORADA", value: "Todo el Año", icon: "season" },
        { label: "SERVICIO", value: "Mando Táctico UIAGM", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'NEVADO MATEO (5150M) – ACLIMATACIÓN', content: 'Salida hacia Punta Olímpica. Ascensión técnica básica para iniciar el montañismo y asegurar una aclimatación óptima.', stats: { time: '5-6h Ascenso', alt: '5150m' } },
      { day: 'DÍA 02', title: 'ICHIC ULTA (5350M) – PREPARACIÓN TÉCNICA', content: 'Ascensión panorámica con vistas del Huascarán Sur. Práctica de progresión en glaciar y morrena.', stats: { time: '7-8h Ascenso', alt: '5350m' } },
      { day: 'DÍA 03', title: 'HUARAZ – QUEBRADA LLACA – CAMPO MORRENA VALLUNARAJU (4980M)', content: 'Traslado a Llaca y ascenso empinado hasta el campo morrena. Vistas espectaculares del valle de Huaraz.', stats: { time: '3h Caminata', alt: '4980m' } },
      { day: 'DÍA 04', title: 'CUMBRE VALLUNARAJU (5680M) – HUARAZ', content: 'Ataque a la cumbre sobre roca y glaciar. Retorno al campo base y traslado de regreso a la ciudad.', stats: { time: '10-11h Jornada', alt: '5680m' } },
      { day: 'DÍA 05', title: 'HUARAZ – CAMPO MORRENA YANAPACCHA (4800M)', content: 'Traslado vía Llanganuco. Ascenso al campamento morrena e inicio del curso técnico en el glaciar (PD+).', stats: { time: '4h Ascenso', alt: '4800m' } },
      { day: 'DÍA 06', title: 'CUMBRE YANAPACCHA (5460M) – HUARAZ', content: 'Escalada técnica hacia la cumbre. Vista de los colosos de la Blanca. Descenso final y retorno a Huaraz.', stats: { time: '10-11h Jornada', alt: '5460m' } }
    ],
    includes: [
      'Traslado privado para todas las expediciones',
      'Guía de montaña Certificado UIAGM',
      'Cocinero y logística de campamento completa',
      'Porteadores para equipos de expedición',
      'Equipos técnicos: Casco, Piolet, Arnés, Grampones',
      'Alimentación completa en Vallunaraju y Yanapaccha',
      'Carpas de alta montaña personales',
      'Mate de coca y snacks de energía',
      'Botiquín de primeros auxilios y comunicación'
    ],
    excludes: [
      'Seguros de viaje y rescate',
      'Alimentación en días de Mateo e Ichic Ulta',
      'Bolsa de dormir y esterilla personal',
      'Tickets de entrada al P.N. Huascarán',
      'Zapatos de montaña técnicos',
      'Gastos personales y propinas'
    ],
    equipment: [
      'Saco de dormir (-20°C)',
      'Casco de montaña y frontal',
      'Gafas UV Cat 4 y bloqueador',
      'Chaqueta de plumas y Gore-Tex',
      'Piolets técnicos y arnés',
      'Botas de alta montaña y grampones',
      'Mochila de carga y de ataque'
    ],
    itineraryTitle: "Expedición",
    itinerarySubtitle: "Cronograma",
    includesTitle: "Qué Incluye",
    equipmentTitle: "Equipo Técnico",
    gallery: [
      "/prep/1.png",
      "/prep/2.png",
      "/prep/3.png",
      "/prep/4.png"
    ]
  },
  en: {
    hero: {
      titleTop: "HIGH-LEVEL TRAINING",
      titleMain: "PREPARATION: 4 TECHNICAL SUMMITS",
      backgroundImage: "/prep/bg-prep.png",
      duration: "06 DAYS",
      price: "USD 1,395.00",
      difficulty: "HIGH / PROGRESSIVE",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CLB-PREP-06",
      titlePrefix: "Master the",
      titleAccent: "Technical Andes",
      description: "Intensive program designed to consolidate glacier and wall technique. Four emblematic summits to prepare you for challenges like Alpamayo or Huascaran.",
      image: "/prep/prep.png",
      lat: `09° 08' 22" S`,
      lon: `77° 28' 14" W`,
      specs: [
        { label: "MAX POINT", value: "5,680 MASL", icon: "location" },
        { label: "TYPE", value: "Technical Training", icon: "zone" },
        { label: "SEASON", value: "Year Round", icon: "season" },
        { label: "SERVICE", value: "UIAGM Tactical Command", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'NEVADO MATEO (5150M) – ACCLIMATIZATION', content: 'Departure to Punta Olimpica. Basic technical ascent to start mountaineering and ensure optimal acclimatization.', stats: { time: '5-6h Ascent', alt: '5150m' } },
      { day: 'DAY 02', title: 'ICHIC ULTA (5350M) – TECHNICAL PREPARATION', content: 'Panoramic ascent with views of South Huascaran. Practice of glacier and moraine progression.', stats: { time: '7-8h Ascent', alt: '5350m' } },
      { day: 'DAY 03', title: 'HUARAZ – LLACA CREEK – VALLUNARAJU MORAINE CAMP (4980M)', content: 'Transfer to Llaca and steep ascent to the moraine camp. Spectacular views of the Huaraz valley.', stats: { time: '3h Hike', alt: '4980m' } },
      { day: 'DAY 04', title: 'VALLUNARAJU SUMMIT (5680M) – HUARAZ', content: 'Summit attack on rock and glacier. Return to base camp and transfer back to the city.', stats: { time: '10-11h Day', alt: '5680m' } },
      { day: 'DAY 05', title: 'HUARAZ – YANAPACCHA MORAINE CAMP (4800M)', content: 'Transfer via Llanganuco. Ascent to the moraine camp and start of the technical course on the glacier (PD+).', stats: { time: '4h Ascent', alt: '4800m' } },
      { day: 'DAY 06', title: 'YANAPACCHA SUMMIT (5460M) – HUARAZ', content: 'Technical climbing to the summit. View of the Blanca colossi. Final descent and return to Huaraz.', stats: { time: '10-11h Day', alt: '5460m' } }
    ],
    includes: [
      'Private transport for all expeditions',
      'Certified UIAGM mountain guide',
      'Cook and full camp logistics',
      'Porters for expedition equipment',
      'Technical gear: Helmet, Ice axe, Harness, Crampons',
      'Full meals in Vallunaraju and Yanapaccha',
      'Personal high mountain tents',
      'Coca tea and energy snacks',
      'First aid kit and communication'
    ],
    excludes: [
      'Travel and rescue insurance',
      'Meals on Mateo and Ichic Ulta days',
      'Personal sleeping bag and mat',
      'Huascaran National Park entrance tickets',
      'Technical mountain boots',
      'Personal expenses and tips'
    ],
    equipment: [
      'Sleeping bag (-20°C)',
      'Mountain helmet and headlamp',
      'UV Cat 4 goggles and sunblock',
      'Down jacket and Gore-Tex',
      'Technical Ice Axes and harness',
      'High mountain boots and crampons',
      'Load pack and attack pack'
    ],
    itineraryTitle: "Expedition",
    itinerarySubtitle: "Timeline",
    includesTitle: "Included",
    equipmentTitle: "Technical Gear",
    gallery: [
      "/prep/1.png",
      "/prep/2.png",
      "/prep/3.png",
      "/prep/4.png"
    ]
  }
};
