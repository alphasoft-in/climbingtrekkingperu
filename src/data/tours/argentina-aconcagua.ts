export const argentinaAconcaguaData = {
  id: 'aconcagua',
  category: 'trekking', // Categorized under trekking for now as it's in the same template structure
  subCategory: 'argentina',
  es: {
    hero: {
      titleTop: "EL TECHO DE LAS AMÉRICAS",
      titleMain: "NEVADO ACONCAGUA 6962M",
      backgroundImage: "/slider_1.png",
      duration: "17 DÍAS",
      price: "USD 8,950",
      difficulty: "EXTREMA",
      difficultyLevel: "hard"
    },
    intro: {
      code: "ARG-ACON-17",
      titlePrefix: "El Centinela",
      titleAccent: "de Piedra",
      description: "El Monte Aconcagua es el pico más alto de las Américas y el más alto del mundo fuera de Asia. Un programa de 17 días diseñado para maximizar la aclimatación gradual.",
      image: "/slider_2.png",
      lat: `32° 39' 12" S`,
      lon: `70° 00' 40" W`,
      specs: [
        { label: 'REGIÓN', value: 'Mendoza, ARG', icon: 'location' },
        { label: 'CUMBRE', value: '6962 MSNM', icon: 'zone' },
        { label: 'ESTADO', value: 'Exp. Élite', icon: 'season' },
        { label: 'TIPO', value: 'Alta Altitud', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'LLEGADA A MENDOZA (746 MSNM)', content: 'Recepción en el Aeropuerto Internacional El Plumerillo y traslado privado al hotel en la ciudad de Mendoza.', stats: { alt: '746m' } },
      { day: 'DÍA 02', title: 'PERMISOS Y LOGÍSTICA EN MENDOZA', content: 'Trámites de permiso de ingreso al Parque Aconcagua con asistencia de guía. Revisión final de equipo y cena de bienvenida.', stats: { alt: '746m' } },
      { day: 'DÍA 03', title: 'MENDOZA – PENITENTES (2700 M)', content: 'Traslado hacia la montaña por la ruta internacional. Inicio de aclimatación gradual en la zona de Penitentes.', stats: { time: '5h Viaje', alt: '2700m' } },
      { day: 'DÍA 04', title: 'PENITENTES – CONFLUENCIA (3368 M)', content: 'Inicio del trekking en el Parque Aconcagua. Primer campamento con vistas a la impresionante Pared Sur.', stats: { time: '5h Trek', alt: '3368m' } },
      { day: 'DÍA 05', title: 'ACLIMATACIÓN A PLAZA FRANCIA (4200 M)', content: 'Caminata al mirador de la Pared Sur. Día crucial para la aclimatación gradual antes de moverse al campo base.', stats: { time: '7-8h Trek', alt: '4200m' } },
      { day: 'DÍA 06', title: 'CONFLUENCIA – PLAZA DE MULAS (4250 M)', content: 'Caminata por Playa Ancha hasta el campo base más grande de los Andes, una verdadera "ciudad de carpas".', stats: { time: '8-9h Trek', alt: '4250m' } },
      { day: 'DÍA 07', title: 'DÍA DE DESCANSO EN PLAZA DE MULAS', content: 'Día libre para recuperación, hidratación y chequeos médicos obligatorios en el campo base.', stats: { alt: '4250m' } },
      { day: 'DÍA 08', title: 'ASCENSO AL MT. BONETE (5000 M)', content: 'Cumbre de entrenamiento y aclimatación activa. Mejora dramáticamente las posibilidades de éxito en el Aconcagua.', stats: { time: '8-9h Trek', alt: '5000m' } },
      { day: 'DÍA 09', title: 'PLAZA DE MULAS – CAMPO 1 (5050 M)', content: 'Inicio del ascenso a los campos altos. Movimiento de carga y establecimiento del primer campo de altura.', stats: { time: '6-7h Ascenso', alt: '5050m' } },
      { day: 'DÍA 10', title: 'CAMPO 1 – CAMPO 2 NIDO DE CÓNDORES (5550 M)', content: 'Ascenso a uno de los campamentos más bellos con vistas panorámicas de la Cordillera Principal.', stats: { time: '6h Ascenso', alt: '5550m' } },
      { day: 'DÍA 11', title: 'ACLIMATACIÓN EN NIDO DE CÓNDORES', content: 'Día estratégico de descanso y ajuste del cuerpo a la altitud extrema por encima de los 5500 metros.', stats: { alt: '5550m' } },
      { day: 'DÍA 12', title: 'CAMPO 2 – CAMPO 3 CÓLERA (5970 M)', content: 'Establecimiento del último campamento antes de la cumbre. Preparación táctica y descanso temprano.', stats: { time: '4h Ascenso', alt: '5970m' } },
      { day: 'DÍA 13', title: 'DÍA DE RESERVA (CLIMA)', content: 'Contingencia para asegurar una buena ventana de clima para el empuje a la cumbre.', stats: { estado: 'Flexible' } },
      { day: 'DÍA 14', title: 'CUMBRE DEL ACONCAGUA (6962 M) – CAMPO 3', content: 'Empuje final vía Canaleta y Filo del Guanaco. Techo de América alcanzado. Retorno al Campo 3.', stats: { time: '12-13h Día', alt: '6962m' } },
      { day: 'DÍA 15', title: 'CAMPO 3 – PLAZA DE MULAS (4250 M)', content: 'Largo descenso de regreso al campo base. Cena de celebración y descanso profundo.', stats: { time: '8-9h Descenso', alt: '4250m' } },
      { day: 'DÍA 16', title: 'PLAZA DE MULAS – PENITENTES – MENDOZA', content: 'Descenso final hasta la salida del parque y traslado privado de regreso a la ciudad de Mendoza.', stats: { alt: '746m' } },
      { day: 'DÍA 17', title: 'SALIDA DE MENDOZA', content: 'Traslado al aeropuerto para el vuelo internacional de regreso. Fin de la expedición.', stats: { estado: 'Traslado' } }
    ],
    includes: [
      'Traslados Aeropuerto - Hotel - Aeropuerto en Mendoza',
      'Asistencia profesional para trámites de permiso de ingreso',
      '02 noches de hotel en Mendoza con desayuno',
      '01 noche en Puente del Inca (Hostel de montaña)',
      'Traslados en vehículos privados exclusivos',
      'Mulas para el transporte de equipo personal hasta Campo Base',
      'Guía de Montaña Profesional (Certificado Aconcagua)',
      'Alimentación completa durante toda la expedición',
      'Domo comedor equipado en Campo Base',
      'Carpas de alta montaña (2 personas en campos altos)',
      'Servicio de porteadores para equipo común y residuos',
      'Ducha caliente y baños exclusivos en Campo Base',
      'Equipo médico de emergencia y comunicaciones 24/7'
    ],
    excludes: [
      'Permiso de ingreso al Parque Aconcagua (tasa gubernamental)',
      'Seguro médico obligatorio para deportes extremos',
      'Equipo técnico personal (Bolsa de dormir, botas, etc.)',
      'Gastos por abandono temprano de la expedición',
      'Almuerzos y cenas en la ciudad de Mendoza',
      'Propinas para el personal de la expedición'
    ],
    equipment: [
      'Bolsa de dormir (-30°C) y aislante térmico',
      'Botas de alta montaña dobles o triples',
      'Grampones de 12 puntas y Piolet',
      'Chaqueta de pluma (heavy duty) y chaqueta Gore-Tex',
      'Mitones técnicos de gran altitud',
      'Gafas de glaciar (Cat. 4) y Antiparras',
      'Mochila de expedición (80L) y de ataque (40L)'
    ],
    itineraryTitle: "Misión",
    itinerarySubtitle: "Cronología",
    includesTitle: "Incluido",
    equipmentTitle: "Equipo Técnico",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  },
  en: {
    hero: {
      titleTop: "THE ROOF OF THE AMERICAS",
      titleMain: "NEVADO ACONCAGUA 6962M",
      backgroundImage: "/slider_1.png",
      duration: "17 DAYS",
      price: "USD 8,950",
      difficulty: "EXTREME",
      difficultyLevel: "hard"
    },
    intro: {
      code: "ARG-ACON-17",
      titlePrefix: "The Stone",
      titleAccent: "Sentinel",
      description: "Mount Aconcagua is the highest peak in the Americas and the highest in the world outside Asia. A 17-day program designed to maximize gradual acclimatization.",
      image: "/slider_2.png",
      lat: `32° 39' 12" S`,
      lon: `70° 00' 40" W`,
      specs: [
        { label: 'REGION', value: 'Mendoza, ARG', icon: 'location' },
        { label: 'SUMMIT', value: '6962 MSNM', icon: 'zone' },
        { label: 'STATUS', value: 'Elite Exp.', icon: 'season' },
        { label: 'TYPE', value: 'High Altitude', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'ARRIVAL IN MENDOZA (746 MASL)', content: 'Reception at El Plumerillo International Airport and private transfer to the hotel in Mendoza city.', stats: { alt: '746m' } },
      { day: 'DAY 02', title: 'PERMITS & LOGISTICS IN MENDOZA', content: 'Aconcagua Park entry permit procedures with guide assistance. Final gear check and welcome dinner.', stats: { alt: '746m' } },
      { day: 'DAY 03', title: 'MENDOZA – PENITENTES (2700 M)', content: 'Transfer towards the mountain via the international route. Start of gradual acclimatization in the Penitentes area.', stats: { time: '5h Drive', alt: '2700m' } },
      { day: 'DAY 04', title: 'PENITENTES – CONFLUENCIA (3368 M)', content: 'Start of trekking in Aconcagua Park. First camp with views of the impressive South Face.', stats: { time: '5h Trek', alt: '3368m' } },
      { day: 'DAY 05', title: 'ACCLIMATIZATION TO PLAZA FRANCIA (4200 M)', content: 'Trek to the South Wall lookout. Crucial day for gradual acclimatization before moving to base camp.', stats: { time: '7-8h Trek', alt: '4200m' } },
      { day: 'DAY 06', title: 'CONFLUENCIA – PLAZA DE MULAS (4250 M)', content: 'Hike through Playa Ancha to the largest base camp in the Andes, a true "tent city".', stats: { time: '8-9h Trek', alt: '4250m' } },
      { day: 'DAY 07', title: 'REST DAY IN PLAZA DE MULAS', content: 'Free day for recovery, hydration, and mandatory medical check-ups at base camp.', stats: { alt: '4250m' } },
      { day: 'DAY 08', title: 'MT. BONETE ASCENT (5000 M)', content: 'Training and active acclimatization summit. Dramatically improves success chances on Aconcagua.', stats: { time: '8-9h Trek', alt: '5000m' } },
      { day: 'DAY 09', title: 'PLAZA DE MULAS – CAMP 1 (5050 M)', content: 'Start of high camp ascent. Load movement and establishment of the first high camp.', stats: { time: '6-7h Ascent', alt: '5050m' } },
      { day: 'DAY 10', title: 'CAMP 1 – CAMP 2 NIDO DE CÓNDORES (5550 M)', content: 'Ascent to one of the most beautiful camps with panoramic views of the Main Range.', stats: { time: '6h Ascent', alt: '5550m' } },
      { day: 'DAY 11', title: 'ACCLIMATIZATION IN NIDO DE CÓNDORES', content: 'Strategic day for rest and body adjustment to extreme altitude above 5500 meters.', stats: { alt: '5550m' } },
      { day: 'DAY 12', title: 'CAMP 2 – CAMP 3 CÓLERA (5970 M)', content: 'Establishment of the last camp before the summit. Tactical preparation and early rest.', stats: { time: '4h Ascent', alt: '5970m' } },
      { day: 'DAY 13', title: 'RESERVE DAY (WEATHER)', content: 'Contingency to ensure a good weather window for the summit push.', stats: { status: 'Flexible' } },
      { day: 'DAY 14', title: 'ACONCAGUA SUMMIT (6962 M) – CAMP 3', content: 'Final push via Canaleta and Guanaco Ridge. Roof of America reached. Return to Camp 3.', stats: { time: '12-13h Day', alt: '6962m' } },
      { day: 'DAY 15', title: 'CAMP 3 – PLAZA DE MULAS (4250 M)', content: 'Long descent back to base camp. Celebration dinner and deep rest.', stats: { time: '8-9h Descent', alt: '4250m' } },
      { day: 'DAY 16', title: 'PLAZA DE MULAS – PENITENTES – MENDOZA', content: 'Final descent to the park exit and private transfer back to Mendoza city.', stats: { alt: '746m' } },
      { day: 'DAY 17', title: 'DEPARTURE FROM MENDOZA', content: 'Airport transfer for international return flight. End of expedition.', stats: { status: 'Transfer' } }
    ],
    includes: [
      'Airport - Hotel - Airport transfers in Mendoza',
      'Professional assistance for entry permit procedures',
      '02 nights hotel in Mendoza with breakfast',
      '01 night in Puente del Inca (Mountain hostel)',
      'Exclusive private vehicle transfers',
      'Mules for personal gear transport to Base Camp',
      'Professional Mountain Guide (Aconcagua Certified)',
      'Full board during the entire expedition',
      'Equipped dining dome in Base Camp',
      'High mountain tents (2 people in high camps)',
      'Porter service for common gear and waste',
      'Hot shower and exclusive toilets in Base Camp',
      'Emergency medical gear and 24/7 communications'
    ],
    excludes: [
      'Aconcagua Park entrance fee (government tax)',
      'Compulsory medical insurance for extreme sports',
      'Personal technical gear (Sleeping bag, boots, etc.)',
      'Expenses due to early abandonment',
      'Lunches and dinners in Mendoza city',
      'Tips for expedition staff'
    ],
    equipment: [
      'Sleeping bag (-30°C) and insulating Mat',
      'Double or triple high mountain Boots',
      '12-point Crampons and Ice Axe',
      'Down jacket (heavy duty) and Gore-Tex jacket',
      'Technical high-altitude mittens',
      'Glacier glasses (Cat. 4) and Goggles',
      'Expedition pack (80L) and Attack pack (40L)'
    ],
    itineraryTitle: "Mission",
    itinerarySubtitle: "Chronology",
    includesTitle: "Included",
    equipmentTitle: "Technical Gear",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  }
};
