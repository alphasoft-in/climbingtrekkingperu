export const climbingHuascaranData = {
  id: 'huascaran',
  category: 'climbing',
  subCategory: 'blanca',
  es: {
    hero: {
      titleTop: "EL TECHO DEL PERÚ",
      titleMain: "NEVADO HUASCARÁN 6768M",
      backgroundImage: "/slider_4.png",
      duration: "06 DÍAS",
      price: "USD 1,995.00",
      difficulty: "MUY ALTA",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CLB-HUA-06",
      titlePrefix: "El Coloso",
      titleAccent: "de los Andes",
      description: "El Huascarán Sur es la cumbre más alta de los Andes Peruanos. Un desafío máximo que requiere experiencia técnica sólida y una aclimatación rigurosa.",
      image: "/slider_4.png",
      lat: `09° 07' 17" S`,
      lon: `77° 36' 32" W`,
      specs: [
        { label: "PUNTO MÁXIMO", value: "6,768 MSNM", icon: "location" },
        { label: "ACTIVIDAD", value: "Escalada Técnica", icon: "zone" },
        { label: "TEMPORADA", value: "Junio - Agosto", icon: "season" },
        { label: "SERVICIO", value: "Logística de Élite", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'HUARAZ – MUSHO (3500M) – CAMPO MORRENA (4800M)', content: 'Traslado de Huaraz a Musho. Ascenso hasta el campo morrena. Espectacular puesta de sol sobre el Callejón de Huaylas.', stats: { time: '7-8h Ascenso', alt: '4800m' } },
      { day: 'DÍA 02', title: 'CAMPO MORRENA (4800M) – CAMPO I (5450M)', content: 'Ascenso desde Campo Morrena hasta el primer campo alto. Cruce del glaciar técnico para alcanzar el campamento.', stats: { time: '4-5h Ascenso', alt: '5450m' } },
      { day: 'DÍA 03', title: 'CAMPO I (5450M) – CAMPO II (5980M)', content: 'Tramo crítico cruzando la "Canaleta", sección técnica y expuesta. Llegada al Campo II (Escudo) con vistas de la Cordillera Negra.', stats: { time: '6-7h Ascenso', alt: '5980m' } },
      { day: 'DÍA 04', title: 'CAMPO II (5980M) – CUMBRE HUASCARÁN (6768M)', content: 'Ataque a la cumbre más alta del Perú. Navegación por grietas y cornisas hasta alcanzar el techo del país. Retorno al Campo II.', stats: { time: '12-13h Jornada', alt: '6768m' } },
      { day: 'DÍA 05', title: 'CAMPO II (5980M) – CAMPO MORRENA (4800M)', content: 'Descenso temprano cruzando nuevamente la Canaleta de forma segura. Continuación hasta el campo morrena.', stats: { time: '7-8h Descenso', alt: '4800m' } },
      { day: 'DÍA 06', title: 'CAMPO MORRENA (4800M) – MUSHO – HUARAZ', content: 'Descenso final hacia Musho y transporte privado de retorno triunfal a la ciudad de Huaraz.', stats: { estado: 'Retorno', alt: '3100m' } }
    ],
    includes: [
      'Traslado terminal - hotel en Huaraz',
      'Charla técnica en la oficina',
      'Transporte privado Huaraz - Musho - Huaraz',
      'Guía de montaña Certificado UIAGM',
      'Cocinero especializado y asistente',
      'Porteros para campos altos (Equipo colectivo)',
      'Alimentación completa en expedición',
      'Equipo de camping de alta montaña',
      'Tickets de entrada al P.N. Huascarán',
      'Cuerdas, estacas de nieve y equipo técnico',
      'Botiquín y Oxígeno de emergencia'
    ],
    excludes: [
      'Seguros de viaje y rescate técnico',
      'Alimentación en la ciudad',
      'Equipo personal de montaña',
      'Portero personal (opcional)',
      'Gastos personales y propinas'
    ],
    equipment: [
      'Mochila de ataque (50L) y carga (70L)',
      'Saco de dormir (-20°C)',
      'Casco, gafas UV Cat 4 y frontal',
      'Chaqueta de plumas y Gore-Tex',
      'Guantes técnicos de nieve (3 capas)',
      'Arnés y piolets técnicos (par)',
      'Botas dobles/triples y grampones'
    ],
    itineraryTitle: "Expedición",
    itinerarySubtitle: "Cronograma",
    includesTitle: "Qué Incluye",
    equipmentTitle: "Equipo Técnico",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  },
  en: {
    hero: {
      titleTop: "THE ROOF OF PERU",
      titleMain: "NEVADO HUASCARÁN 6768M",
      backgroundImage: "/slider_4.png",
      duration: "06 DAYS",
      price: "USD 1,995.00",
      difficulty: "VERY HIGH",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CLB-HUA-06",
      titlePrefix: "The Colossus",
      titleAccent: "of the Andes",
      description: "South Huascaran is the highest peak in the Peruvian Andes. A maximum challenge that requires solid technical experience and rigorous acclimatization.",
      image: "/slider_4.png",
      lat: `09° 07' 17" S`,
      lon: `77° 36' 32" W`,
      specs: [
        { label: "MAX POINT", value: "6,768 MASL", icon: "location" },
        { label: "ACTIVITY", value: "Technical Climbing", icon: "zone" },
        { label: "SEASON", value: "June - August", icon: "season" },
        { label: "SERVICE", value: "Elite Logistics", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'HUARAZ – MUSHO (3500M) – MORAINE CAMP (4800M)', content: 'Transfer from Huaraz to Musho. Ascent to the moraine camp. Spectacular sunset over the Callejon de Huaylas.', stats: { time: '7-8h Ascent', alt: '4800m' } },
      { day: 'DAY 02', title: 'MORAINE CAMP (4800M) – CAMP I (5450M)', content: 'Ascent from Moraine Camp to the first high camp. Technical glacier crossing to reach the camp.', stats: { time: '4-5h Ascent', alt: '5450m' } },
      { day: 'DAY 03', title: 'CAMP I (5450M) – CAMP II (5980M)', content: 'Critical section crossing the "Canaleta", a technical and exposed section. Arrival at Camp II (Shield) with views of the Cordillera Negra.', stats: { time: '6-7h Ascent', alt: '5980m' } },
      { day: 'DAY 04', title: 'CAMP II (5980M) – HUASCARÁN SUMMIT (6768M)', content: 'Attack on the highest summit in Peru. Navigation through crevasses and cornices until reaching the roof of the country. Return to Camp II.', stats: { time: '12-13h Day', alt: '6768m' } },
      { day: 'DAY 05', title: 'CAMP II (5980M) – MORAINE CAMP (4800M)', content: 'Early descent safely crossing the Canaleta again. Continuation to the moraine camp.', stats: { time: '7-8h Descent', alt: '4800m' } },
      { day: 'DAY 06', title: 'MORAINE CAMP (4800M) – MUSHO – HUARAZ', content: 'Final descent to Musho and triumphant private return transport to Huaraz city.', stats: { status: 'Return', alt: '3100m' } }
    ],
    includes: [
      'Terminal transfer - hotel in Huaraz',
      'Technical briefing at the office',
      'Private transport Huaraz - Musho - Huaraz',
      'Certified UIAGM mountain guide',
      'Specialized cook and assistant',
      'Porters for high camps (Collective gear)',
      'Full meals during expedition',
      'High mountain camping equipment',
      'Huascaran National Park entrance tickets',
      'Ropes, snow stakes and technical equipment',
      'First aid kit and Emergency Oxygen'
    ],
    excludes: [
      'Travel and technical rescue insurance',
      'Meals in town',
      'Personal mountain gear',
      'Personal porter (optional)',
      'Personal expenses and tips'
    ],
    equipment: [
      'Attack pack (50L) and load pack (70L)',
      'Sleeping bag (-20°C)',
      'Helmet, UV Cat 4 goggles and headlamp',
      'Down and Gore-Tex jackets',
      'Technical snow gloves (3 layers)',
      'Harness and technical ice axes (pair)',
      'Double/triple boots and crampons'
    ],
    itineraryTitle: "Expedition",
    itinerarySubtitle: "Timeline",
    includesTitle: "Included",
    equipmentTitle: "Technical Gear",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  }
};
