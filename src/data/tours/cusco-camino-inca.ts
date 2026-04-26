export const cuscoCaminoIncaData = {
  id: 'inca-trail',
  category: 'trekking',
  subCategory: 'cusco',
  es: {
    hero: {
      titleTop: "EL CAMINO DE LOS DIOSES",
      titleMain: "CAMINO INCA TODO INCLUIDO",
      backgroundImage: "/trekking/cusco/camino-inca/bg-camino-inca.png",
      duration: "4 DÍAS / 3 NOCHES",
      price: "USD. 1,595.00",
      difficulty: "MODERADA",
      difficultyLevel: "mod"
    },
    intro: {
      code: "CSQ-INC-04D",
      titlePrefix: "Trekking",
      titleAccent: "Cultural",
      description: "El Camino Inca es la ruta de senderismo más legendaria de América. Un viaje a través del tiempo que atraviesa bosques de queñuales, pasos de montaña a 4200m y senderos originales de granito blanco, culminando en la majestuosa Puerta del Sol con vista a Machu Picchu.",
      image: "/trekking/cusco/camino-inca.png",
      lat: `13° 13' 35" S`,
      lon: `72° 32' 59" W`,
      specs: [
        { label: 'COSTO', value: 'USD. 1,595.00', icon: 'location' },
        { label: 'DURACIÓN', value: '4 Días / 3 Noches', icon: 'zone' },
        { label: 'PARTIDA', value: 'Cusco', icon: 'season' },
        { label: 'TODO INCLUIDO', value: 'VIP Service', icon: 'service' }
      ]
    },
    itinerary: [
      { 
        day: 'DÍA 01', 
        title: 'CUSCO – KM 82 – HUAYLLABAMBA', 
        content: 'Recojo 6:00 am. Traslado al Km 82. Caminata por el río Urubamba con vistas al Nevado Verónica (5,900m). Visita a Llactapata y llegada a Huayllabamba (3,000 msnm).', 
        stats: { dist: '12 km', time: '5-6 h' } 
      },
      { 
        day: 'DÍA 02', 
        title: 'PASO WARMIWAÑUSCA – PACAYMAYO', 
        content: 'Ascenso al paso de Warmiwañusca (4200 msnm), el punto más alto. Atravesaremos bosques de Queñuales hasta Llulluchapampa. Descenso al valle de Pacaymayo.', 
        stats: { alt: '4200m', dist: '11 km', time: '6-7 h' } 
      },
      { 
        day: 'DÍA 03', 
        title: 'RUNKURAKAY – WIÑAYWAYNA', 
        content: 'Día de gran belleza arqueológica. Visita a Runkurakay, Sayacmarca, Phuyupatamarca y Wiñaywayna (2,700 msnm) a través de senderos de granito originales.', 
        stats: { alt: '3800m', dist: '16 km', time: '7-8 h' } 
      },
      { 
        day: 'DÍA 04', 
        title: 'PUERTA DEL SOL – MACHU PICCHU', 
        content: 'Caminata 4:00 am hacia Inti Punku (Puerta del Sol). Vista panorámica de la ciudadela. Visita guiada de 2.5h y retorno en tren a Ollantaytambo y bus a Cusco.', 
        stats: { alt: '2430m', dist: '5 km', time: '5 h' } 
      }
    ],
    includes: [
      'Traslado Aeropuerto Cusco - Hotel (Ida y vuelta)',
      '2 noches de hotel 3 estrellas en Cusco',
      'Transporte privado al Km 82',
      'Guía profesional bilingüe',
      'Tickets de entrada al Camino Inca y Machu Picchu',
      'Equipo de campamento completo (Carpas, cocina, comedor)',
      'Porteadores para equipo y cocineros',
      'Alimentación completa, snacks y agua hervida',
      'Mate de coca matutino en carpa y botiquín'
    ],
    excludes: [
      'Vuelos internacionales y locales',
      'Bolsa de dormir y bastones (Alquiler disponible)',
      'Almuerzo del día 4 y primer desayuno',
      'Porteador extra personal ($160.00)',
      'Ticket Waynapicchu ($60.00)',
      'Propinas'
    ],
    equipment: [
      'Pasaporte original',
      'Mochila de 25-35 Ltrs',
      'Zapatos de trekking de calidad',
      'Ropa de abrigo e impermeable',
      'Bloqueador solar y repelente',
      'Power bank (Energía solar limitada)'
    ],
    itineraryTitle: "Programa",
    itinerarySubtitle: "Legendario",
    includesTitle: "Incluye",
    equipmentTitle: "Recomendaciones"
  },
  en: {
    hero: {
      titleTop: "THE PATH OF THE GODS",
      titleMain: "INCA TRAIL ALL INCLUSIVE",
      backgroundImage: "/trekking/cusco/camino-inca/bg-camino-inca.png",
      duration: "4 DAYS / 3 NIGHTS",
      price: "USD. 1,595.00",
      difficulty: "MODERATE",
      difficultyLevel: "mod"
    },
    intro: {
      code: "CSQ-INC-04D",
      titlePrefix: "Cultural",
      titleAccent: "Trekking",
      description: "The Inca Trail is the most legendary hiking route in America. A journey through time crossing queñual forests, mountain passes at 4200m, and original white granite paths, culminating at the majestic Sun Gate overlooking Machu Picchu.",
      image: "/trekking/cusco/camino-inca.png",
      lat: `13° 13' 35" S`,
      lon: `72° 32' 59" W`,
      specs: [
        { label: 'COST', value: 'USD. 1,595.00', icon: 'location' },
        { label: 'DURATION', value: '4 Days / 3 Nights', icon: 'zone' },
        { label: 'START', value: 'Cusco', icon: 'season' },
        { label: 'ALL INCLUSIVE', value: 'VIP Service', icon: 'service' }
      ]
    },
    itinerary: [
      { 
        day: 'DAY 01', 
        title: 'CUSCO – KM 82 – HUAYLLABAMBA', 
        content: 'Pickup 6:00 am. Transfer to Km 82. Hike along the Urubamba river with views of Mt. Veronica (5,900m). Visit Llactapata and arrival at Huayllabamba (3,000 masl).', 
        stats: { dist: '12 km', time: '5-6 h' } 
      },
      { 
        day: 'DAY 02', 
        title: 'WARMIWAÑUSCA PASS – PACAYMAYO', 
        content: 'Ascent to Warmiwañusca pass (4200 masl), the highest point. Cross Queñual forests to Llulluchapampa. Descent to Pacaymayo valley.', 
        stats: { alt: '4200m', dist: '11 km', time: '6-7 h' } 
      },
      { 
        day: 'DAY 03', 
        title: 'RUNKURAKAY – WIÑAYWAYNA', 
        content: 'Day of great archaeological beauty. Visit Runkurakay, Sayacmarca, Phuyupatamarca, and Wiñaywayna (2,700 masl) through original granite paths.', 
        stats: { alt: '3800m', dist: '16 km', time: '7-8 h' } 
      },
      { 
        day: 'DAY 04', 
        title: 'SUN GATE – MACHU PICCHU', 
        content: '4:00 am hike to Inti Punku (Sun Gate). Panoramic view of the citadel. 2.5h guided visit and return by train to Ollantaytambo and bus to Cusco.', 
        stats: { alt: '2430m', dist: '5 km', time: '5 h' } 
      }
    ],
    includes: [
      'Cusco Airport - Hotel transfer (Round trip)',
      '2 nights 3-star hotel in Cusco',
      'Private transport to Km 82',
      'Professional bilingual guide',
      'Inca Trail and Machu Picchu entrance tickets',
      'Full camping equipment (Tents, kitchen, dining)',
      'Porters for equipment and chefs',
      'Full board, snacks, and boiled water',
      'Morning coca tea in tent and first aid kit'
    ],
    excludes: [
      'International and local flights',
      'Sleeping bag and poles (Rent available)',
      'Day 4 lunch and first breakfast',
      'Extra personal porter ($160.00)',
      'Waynapicchu ticket ($60.00)',
      'Tips'
    ],
    equipment: [
      'Original passport',
      '25-35 Ltr backpack',
      'Quality trekking shoes',
      'Warm and waterproof clothing',
      'Sunblock and repellent',
      'Power bank (Limited solar energy)'
    ],
    itineraryTitle: "Program",
    itinerarySubtitle: "Legendary",
    includesTitle: "Includes",
    equipmentTitle: "Recommendations"
  }
};
