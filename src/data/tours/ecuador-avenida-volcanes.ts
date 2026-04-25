export const ecuadorAvenidaVolcanesData = {
  id: 'avenida-volcanes',
  category: 'trekking', // Categorized under trekking for consistency
  subCategory: 'ecuador',
  es: {
    hero: {
      titleTop: "EL DESAFÍO VOLCÁNICO DEFINITIVO",
      titleMain: "AVENIDA DE LOS VOLCANES",
      backgroundImage: "/slider_4.png",
      duration: "12 DÍAS",
      price: "USD 1,995",
      difficulty: "TÉCNICA",
      difficultyLevel: "hard"
    },
    intro: {
      code: "ECU-VOL-12",
      titlePrefix: "Tierra de",
      titleAccent: "Fuego y Hielo",
      description: "Los Andes ecuatorianos albergan una de las concentraciones de volcanes más impresionantes del planeta. Nuestra expedición recorre la mística Avenida de los Volcanes, uniendo cuatro picos icónicos.",
      image: "/slider_5.png",
      lat: `00° 01' 44" S`,
      lon: `78° 26' 06" W`,
      specs: [
        { label: 'REGIÓN', value: 'Quito, ECU', icon: 'location' },
        { label: 'CUMBRE', value: '6268 MSNM', icon: 'zone' },
        { label: 'ESTADO', value: 'Alta Técnica', icon: 'season' },
        { label: 'TIPO', value: 'Ascenso Glaciar', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'LLEGADA A QUITO (2850 M)', content: 'Recepción en el aeropuerto y traslado al hotel. Tarde libre para aclimatación básica y preparación de equipo.', stats: { alt: '2850m' } },
      { day: 'DÍA 02', title: 'QUITO – REFUGIO NUEVOS HORIZONTES (4700 M)', content: 'Traslado en 4x4 a los Ilinizas. Caminata hasta el refugio. Almuerzo y revisión técnica para el empuje a la cumbre.', stats: { time: '4h Ascenso', alt: '4700m' } },
      { day: 'DÍA 03', title: 'CUMBRE ILINIZA SUR (5246 M) – QUITO', content: 'Escalada técnica con pendientes de hasta 70°. Vistas espectaculares del Iliniza Norte. Descenso y retorno a Quito.', stats: { time: '9-10h Día', alt: '5246m' } },
      { day: 'DÍA 04', title: 'DÍA DE DESCANSO EN QUITO', content: 'Recuperación física. Opción de recorrer el centro histórico de Quito y disfrutar de la gastronomía local.', stats: { estado: 'Descanso' } },
      { day: 'DÍA 05', title: 'QUITO – REFUGIO CAYAMBE (4600 M)', content: 'Traslado al Volcán Cayambe, ubicado justo en la línea ecuatorial. Preparación en el Refugio Ruales Oleas Berge.', stats: { time: '2h Viaje', alt: '4600m' } },
      { day: 'DÍA 06', title: 'CUMBRE CAYAMBE (5796 M) – QUITO', content: 'Ascenso glaciar exigente. Es el único punto en la Tierra donde la línea ecuatorial cruza un glaciar permanente. Retorno a Quito.', stats: { time: '8-9h Día', alt: '5796m' } },
      { day: 'DÍA 07', title: 'QUITO – REFUGIO COTOPAXI (4864 M)', content: 'Entrada al Parque Nacional Cotopaxi. Caminata al Refugio José Rivas. Atardecer sobre la Avenida de los Volcanes.', stats: { time: '1h Trek', alt: '4864m' } },
      { day: 'DÍA 08', title: 'CUMBRE COTOPAXI (5897 M) – QUITO', content: 'Ascenso por pendientes de 45°. Vista del cráter activo y el panorama de los Andes ecuatorianos. Descenso y retorno a Quito.', stats: { time: '10-11h Día', alt: '5897m' } },
      { day: 'DÍA 09', title: 'DÍA DE REPOSO ESTRATÉGICO', content: 'Día libre en Quito para recargar energías antes del objetivo final: Chimborazo.', stats: { estado: 'Recuperación' } },
      { day: 'DÍA 10', title: 'QUITO – CAMPO ALTO CHIMBORAZO (5300 M)', content: 'Viaje al sur por la Avenida de los Volcanes. Caminata al campo alto para optimizar el empuje a la cumbre.', stats: { time: '3h Trek', alt: '5300m' } },
      { day: 'DÍA 11', title: 'CUMBRE CHIMBORAZO (6268 M) – QUITO', content: 'Ascenso al punto más cercano al sol. El Chimborazo es la montaña más alta de Ecuador. Retorno triunfal a Quito.', stats: { time: '11-12h Día', alt: '6268m' } },
      { day: 'DÍA 12', title: 'SALIDA DE QUITO', content: 'Traslado final al aeropuerto para su vuelo internacional. Fin de la expedición.', stats: { estado: 'Traslado' } }
    ],
    includes: [
      'Recepción en aeropuerto y traslados ida y vuelta',
      'Transporte privado 4x4 para todas las aproximaciones',
      'Noches de hotel en Quito según itinerario',
      'Estancia en refugios de montaña y Campo Alto',
      'Guía Certificado (UIAGM / IFMGA) para todos los ascensos',
      'Alimentación de montaña completa (Desayuno, Picnic, Cena)',
      'Entradas y permisos para Parques Nacionales',
      'Logística de seguridad y comunicaciones'
    ],
    excludes: [
      'Vuelos internacionales',
      'Equipo técnico de montaña personal',
      'Seguro de accidentes de montaña obligatorio',
      'Bebidas alcohólicas y gastos personales',
      'Propinas para el equipo de apoyo'
    ],
    equipment: [
      'Botas de alta montaña (preferible dobles)',
      'Grampones de 12 puntas y Piolet técnico',
      'Arnés de montaña y Casco',
      'Bolsa de dormir técnica (-10°C)',
      'Sistema técnico de capas (Gore-Tex, Pluma)',
      'Gafas de sol (Cat. 4) y Linterna frontal',
      'Mochila de expedición (45L)'
    ],
    itineraryTitle: "Misión",
    itinerarySubtitle: "Cronograma",
    includesTitle: "Incluido",
    equipmentTitle: "Equipo Técnico",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  },
  en: {
    hero: {
      titleTop: "THE ULTIMATE VOLCANO CHALLENGE",
      titleMain: "AVENUE OF VOLCANOES",
      backgroundImage: "/slider_4.png",
      duration: "12 DAYS",
      price: "USD 1,995",
      difficulty: "TECHNICAL",
      difficultyLevel: "hard"
    },
    intro: {
      code: "ECU-VOL-12",
      titlePrefix: "Land of",
      titleAccent: "Fire & Ice",
      description: "The Ecuadorian Andes house one of the most impressive concentrations of volcanoes on the planet. Our expedition traverses the mystical Avenue of Volcanoes, uniting four iconic peaks.",
      image: "/slider_5.png",
      lat: `00° 01' 44" S`,
      lon: `78° 26' 06" W`,
      specs: [
        { label: 'REGION', value: 'Quito, ECU', icon: 'location' },
        { label: 'PEAK', value: '6268 MSNM', icon: 'zone' },
        { label: 'STATUS', value: 'High Technical', icon: 'season' },
        { label: 'TYPE', value: 'Glacial Ascent', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'ARRIVAL IN QUITO (2850 M)', content: 'Reception at the airport and transfer to the hotel. Free afternoon for basic acclimatization and gear preparation.', stats: { alt: '2850m' } },
      { day: 'DAY 02', title: 'QUITO – NUEVOS HORIZONTES REFUGE (4700 M)', content: 'Transfer in 4x4 to the Ilinizas. Hike to the refuge. Lunch and technical review for the summit push.', stats: { time: '4h Ascent', alt: '4700m' } },
      { day: 'DAY 03', title: 'ILINIZA SUR SUMMIT (5246 M) – QUITO', content: 'Technical climbing with slopes up to 70°. Spectacular views of Iliniza North. Descent and return to Quito.', stats: { time: '9-10h Day', alt: '5246m' } },
      { day: 'DAY 04', title: 'REST DAY IN QUITO', content: 'Physical recovery. Option to tour Quito\'s historic center and enjoy local gastronomy.', stats: { status: 'Rest' } },
      { day: 'DAY 05', title: 'QUITO – CAYAMBE REFUGE (4600 M)', content: 'Transfer to Cayambe Volcano, located right on the equatorial line. Preparation at Ruales Oleas Berge Refuge.', stats: { time: '2h Drive', alt: '4600m' } },
      { day: 'DAY 06', title: 'CAYAMBE SUMMIT (5796 M) – QUITO', content: 'Demanding glacier ascent. It is the only point on Earth where the equatorial line crosses a permanent glacier. Return to Quito.', stats: { time: '8-9h Day', alt: '5796m' } },
      { day: 'DAY 07', title: 'QUITO – COTOPAXI REFUGE (4864 M)', content: 'Entry to Cotopaxi National Park. Hike to José Rivas Refuge. Sunset over the Avenue of Volcanoes.', stats: { time: '1h Trek', alt: '4864m' } },
      { day: 'DAY 08', title: 'COTOPAXI SUMMIT (5897 M) – QUITO', content: 'Ascent via 45° slopes. View of the active crater and the panorama of the Ecuadorian Andes. Descent and return to Quito.', stats: { time: '10-11h Day', alt: '5897m' } },
      { day: 'DAY 09', title: 'STRATEGIC REPOSE DAY', content: 'Free day in Quito to recharge before the final objective: Chimborazo.', stats: { status: 'Recovery' } },
      { day: 'DAY 10', title: 'QUITO – CHIMBORAZO HIGH CAMP (5300 M)', content: 'Travel south along the Avenue of Volcanoes. Hike to the high camp to optimize the summit push.', stats: { time: '3h Trek', alt: '5300m' } },
      { day: 'DAY 11', title: 'CHIMBORAZO SUMMIT (6268 M) – QUITO', content: 'Ascent to the closest point to the sun. Chimborazo is the highest mountain in Ecuador. Triumphant return to Quito.', stats: { time: '11-12h Day', alt: '6268m' } },
      { day: 'DAY 12', title: 'DEPARTURE FROM QUITO', content: 'Final airport transfer for your international flight. End of expedition.', stats: { status: 'Transfer' } }
    ],
    includes: [
      'Airport reception and Round-trip transfers',
      'Private 4x4 transport for all approaches',
      'Hotel nights in Quito as per itinerary',
      'Stay in mountain refuges and High Camp',
      'Certified Guide (UIAGM / IFMGA) for all ascents',
      'Full mountain meals (Breakfast, Picnic, Dinner)',
      'Entrance fees and permits for National Parks',
      'Safety logistics and communications'
    ],
    excludes: [
      'International flights',
      'Personal technical mountain gear',
      'Compulsory mountain accident insurance',
      'Alcoholic beverages and personal expenses',
      'Tips for the support team'
    ],
    equipment: [
      'High mountain boots (doubles preferred)',
      '12-point Crampons and technical Ice Axe',
      'Mountain Harness and Helmet',
      'Technical Sleeping bag (-10°C)',
      'Technical layer system (Gore-Tex, Down)',
      'Sun glasses (Cat. 4) and Headlamp',
      'Expedition pack (45L)'
    ],
    itineraryTitle: "Mission",
    itinerarySubtitle: "Timeline",
    includesTitle: "Included",
    equipmentTitle: "Technical Gear",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  }
};
