export const cuscoAusangateData = {
  id: 'ausangate',
  category: 'trekking',
  subCategory: 'cusco',
  es: {
    hero: {
      titleTop: "EL GUARDIÁN DEL CUSCO",
      titleMain: "TREKKING AUSANGATE 4D",
      backgroundImage: "/trekking/cusco/trek-4d/bg-ausangate.png",
      duration: "4 DÍAS / 3 NOCHES",
      price: "USD. 695.00",
      difficulty: "DIFÍCIL",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CSQ-AUS-04D",
      titlePrefix: "Aventura",
      titleAccent: "Cusco",
      description: "Ausangate es el Apu más importante del sur andino. Esta ruta te lleva por faldas glaciares y lagunas de colores vibrantes, conectando de forma épica con la Montaña de 7 Colores. Un desafío de altura con paisajes que parecen de otro mundo.",
      image: "/trekking/cusco/trekking-4d.png",
      lat: `13° 47' 18" S`,
      lon: `71° 13' 52" W`,
      specs: [
        { label: 'COSTO', value: 'USD. 695.00', icon: 'location' },
        { label: 'ALTURA MÁX', value: '5,200 MSNM', icon: 'zone' },
        { label: 'DURACIÓN', value: '4 Días', icon: 'season' },
        { label: 'PARTIDA', value: 'Cusco', icon: 'service' }
      ]
    },
    itinerary: [
      { 
        day: 'DÍA 01', 
        title: 'CUSCO - PACCHANTA - CAMPAMENTO JAMPA', 
        content: 'Recojo 5:00 am. Viaje por el Valle Sur hasta Upis. Inicio del trek con vistas del Nevado Ausangate. Exploración de la laguna Huayna Ausangate. Campamento a 4350 msnm.', 
        stats: { dist: '8 km', time: '5 h' } 
      },
      { 
        day: 'DÍA 02', 
        title: 'PASO JAMPA (5100M) - AUSANGATECOCHA', 
        content: 'Día exigente. Caminata entre lagunas de colores y picos glaciares hasta alcanzar el Paso Jampa a 5100 msnm. Descenso hacia el campamento Ausangatecocha.', 
        stats: { alt: '5100m', dist: '18 km', time: '9 h' } 
      },
      { 
        day: 'DÍA 03', 
        title: 'LAGUNA ROJA - ABRA WARMISAYANA (5200M)', 
        content: 'Ascenso al Paso Warmisayana (Palomani) a 5200 msnm, el punto más alto. Vistas panorámicas únicas de la Cordillera Vilcanota. Almuerzo en Ausangatecocha.', 
        stats: { alt: '5200m', dist: '17 km', time: '8 h' } 
      },
      { 
        day: 'DÍA 04', 
        title: 'MONTAÑA 7 COLORES - CUSCO', 
        content: 'Visita temprana a Vinicunca (Montaña de 7 Colores) para evitar multitudes. Mirador del Valle Rojo y retorno en transporte hacia la ciudad de Cusco.', 
        stats: { alt: '5040m', dist: '10 km', time: '4 h' } 
      }
    ],
    includes: [
      'Traslado Aeropuerto Cusco - Hotel (Ida y vuelta)',
      '2 noches de hotel en Cusco',
      'Transporte turístico Cusco – Upis / Regreso a Cusco',
      'Guía oficial de turismo bilingüe especializado',
      'Equipo de campamento completo',
      'Chef profesional y alimentación completa (3D, 3A, 3C)',
      'Caballos para transporte de equipo y 6kg de carga personal',
      'Duffle bag para pertenencias y botiquín de primeros auxilios'
    ],
    excludes: [
      'Vuelos y hoteles adicionales',
      'Tickets de entrada a las comunidades',
      'Bolsa de dormir y bastones (Alquiler disponible)',
      'Desayuno día 1 y cena día 4',
      'Propinas y gastos personales'
    ],
    equipment: [
      'Mochila pequeña y bolsa de dormir (-15°C)',
      'Ropa de abrigo extrema (Noches hasta -15°C)',
      'Botas de trekking técnicas',
      'Protector solar, sombrero y lentes de sol',
      'Linterna frontal y cámara',
      'Cantimplora para agua'
    ],
    itineraryTitle: "Itinerario",
    itinerarySubtitle: "4 Días",
    includesTitle: "Servicios Incluidos",
    equipmentTitle: "Recomendaciones"
  },
  en: {
    hero: {
      titleTop: "THE SACRED GUARDIAN",
      titleMain: "AUSANGATE TREKKING 4D",
      backgroundImage: "/trekking/cusco/trek-4d/bg-ausangate.png",
      duration: "4 DAYS / 3 NIGHTS",
      price: "USD. 695.00",
      difficulty: "HARD",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CSQ-AUS-04D",
      titlePrefix: "Cusco",
      titleAccent: "Adventure",
      description: "Ausangate is the most important Apu in the southern Andes. This route takes you through glacial slopes and vibrant lagoons, epically connecting with the 7 Colors Mountain. A high-altitude challenge with landscapes that seem out of this world.",
      image: "/trekking/cusco/trekking-4d.png",
      lat: `13° 47' 18" S`,
      lon: `71° 13' 52" W`,
      specs: [
        { label: 'COST', value: 'USD. 695.00', icon: 'location' },
        { label: 'MAX ALT', value: '5,200 MASL', icon: 'zone' },
        { label: 'DURATION', value: '4 Days', icon: 'season' },
        { label: 'START', value: 'Cusco', icon: 'service' }
      ]
    },
    itinerary: [
      { 
        day: 'DAY 01', 
        title: 'CUSCO - PACCHANTA - JAMPA CAMP', 
        content: 'Pickup 5:00 am. Travel through the South Valley to Upis. Start of the trek with views of Mt. Ausangate. Exploration of Huayna Ausangate lagoon. Camp at 4350 masl.', 
        stats: { dist: '8 km', time: '5 h' } 
      },
      { 
        day: 'DAY 02', 
        title: 'JAMPA PASS (5100M) - AUSANGATECOCHA', 
        content: 'Demanding day. Hike through colorful lagoons and glacial peaks reaching Jampa Pass at 5100 masl. Descent to Ausangatecocha camp.', 
        stats: { alt: '5100m', dist: '18 km', time: '9 h' } 
      },
      { 
        day: 'DAY 03', 
        title: 'RED LAGOON - WARMISAYANA PASS (5200M)', 
        content: 'Ascent to Warmisayana Pass (Palomani) at 5200 masl, the highest point. Unique panoramic views of the Vilcanota Range. Lunch at Ausangatecocha.', 
        stats: { alt: '5200m', dist: '17 km', time: '8 h' } 
      },
      { 
        day: 'DAY 04', 
        title: '7 COLORS MOUNTAIN - CUSCO', 
        content: 'Early visit to Vinicunca (7 Colors Mountain) to avoid crowds. Red Valley viewpoint and return by transport to Cusco city.', 
        stats: { alt: '5040m', dist: '10 km', time: '4 h' } 
      }
    ],
    includes: [
      'Cusco Airport - Hotel transfer (Round trip)',
      '2 nights hotel in Cusco',
      'Tourist transport Cusco – Upis / Return to Cusco',
      'Specialized bilingual official guide',
      'Complete camping equipment',
      'Professional chef and full board (3B, 3L, 3D)',
      'Horses for equipment transport and 6kg personal gear',
      'Duffle bag for belongings and first aid kit'
    ],
    excludes: [
      'Additional flights and hotels',
      'Entrance tickets to communities',
      'Sleeping bag and poles (Rent available)',
      'Day 1 breakfast and Day 4 dinner',
      'Tips and personal expenses'
    ],
    equipment: [
      'Small backpack and sleeping bag (-15°C)',
      'Extreme warm clothing (Nights down to -15°C)',
      'Technical trekking boots',
      'Sunblock, hat, and sunglasses',
      'Headlamp and camera',
      'Water canteen'
    ],
    itineraryTitle: "Timeline",
    itinerarySubtitle: "4 Days",
    includesTitle: "Included Services",
    equipmentTitle: "Recommendations"
  }
};
