export const climbingPiscoData = {
  id: 'pisco',
  category: 'climbing',
  subCategory: 'blanca',
  es: {
    hero: {
      titleTop: "EL BALCÓN DE LOS ANDES",
      titleMain: "NEVADO PISCO 5752M",
      backgroundImage: "/pisco/bg-pisco.png",
      duration: "05 DÍAS",
      price: "USD 595.00",
      difficulty: "MODERADO",
      difficultyLevel: "mod"
    },
    intro: {
      code: "CLB-PIS-05",
      titlePrefix: "El Corazón de la",
      titleAccent: "Cordillera Blanca",
      description: "El Nevado Pisco es conocido como el balcón de los Andes por su ubicación estratégica. Ofrece vistas panorámicas inigualables del Huascarán, Chopicalqui y Huandoy.",
      image: "/pisco/pisco.png",
      lat: `09° 01' 14" S`,
      lon: `77° 35' 42" W`,
      specs: [
        { label: "PUNTO MÁXIMO", value: "5,752 MSNM", icon: "location" },
        { label: "TIPO", value: "Montañismo Glaciar", icon: "zone" },
        { label: "TEMPORADA", value: "Mayo - Septiembre", icon: "season" },
        { label: "SERVICIO", value: "Guía UIAGM Pro", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'HUARAZ – LAGUNA ROCUTUYOC (4450M)', content: 'Día de aclimatación visitando la laguna Rocutuyoc y el glaciar. Perfecto para adaptación cultural y física.', stats: { time: '9-10h Tour', alt: '4450m' } },
      { day: 'DÍA 02', title: 'NEVADO MATEO (5150M) – ACLIMATACIÓN', content: 'Ascensión técnica básica al Nevado Mateo. Práctica de uso de grampones y piolet sobre glaciar real.', stats: { time: '5-6h Ascenso', alt: '5150m' } },
      { day: 'DÍA 03', title: 'HUARAZ – CEBOLLAPAMPA – CAMPO BASE PISCO (4680M)', content: 'Traslado a Cebollapampa y caminata de ascenso hasta el campo base del Nevado Pisco.', stats: { time: '4-5h Caminata', alt: '4680m' } },
      { day: 'DÍA 04', title: 'CAMPO BASE (4680M) – CUMBRE PISCO (5752M)', content: 'Ataque a la cumbre. Cruce de morrena y glaciar. Vista panorámica de 360° de la Cordillera Blanca.', stats: { time: '13-14h Jornada', alt: '5752m' } },
      { day: 'DÍA 05', title: 'CAMPO BASE (4680M) – HUARAZ (3100M)', content: 'Descenso final hacia Cebollapampa y transporte privado de retorno a la ciudad de Huaraz.', stats: { estado: 'Retorno', alt: '3100m' } }
    ],
    includes: [
      'Tour Aclimatación Laguna Rocutuyoc',
      'Expedición Nevado Mateo (5150m)',
      'Transporte privado para todos los traslados',
      'Alimentación completa en expedición Pisco',
      'Equipo de campamento de alta montaña',
      'Guía de montaña Certificado UIAGM',
      'Cocinero especializado y asistente',
      'Burros y arriero para logística al base',
      'Tickets de entrada al P.N. Huascarán',
      'Botiquín de primeros auxilios y radios'
    ],
    excludes: [
      'Seguros de viaje y rescate',
      'Alimentación en la ciudad',
      'Equipo personal de montaña',
      'Saco de dormir y colchoneta personal',
      'Gastos personales y propinas'
    ],
    equipment: [
      'Saco de dormir (-20°C)',
      'Casco de montaña y frontal',
      'Gafas UV Cat 4 y bloqueador',
      'Chaqueta de plumas y Gore-Tex',
      'Arnés y piolet de travesía',
      'Botas de alta montaña y grampones',
      'Mochila de ataque (40L)'
    ],
    itineraryTitle: "Expedición",
    itinerarySubtitle: "Cronograma",
    includesTitle: "Qué Incluye",
    equipmentTitle: "Equipo Técnico",
    gallery: [
      "/pisco/1.png",
      "/pisco/2.png",
      "/pisco/3.png",
      "/pisco/4.png",
      "/pisco/5.png",
      "/pisco/6.png",
      "/pisco/7.png",
      "/pisco/8.png"
    ]
  },
  en: {
    hero: {
      titleTop: "THE BALCONY OF THE ANDES",
      titleMain: "NEVADO PISCO 5752M",
      backgroundImage: "/pisco/bg-pisco.png",
      duration: "05 DAYS",
      price: "USD 595.00",
      difficulty: "MODERATE",
      difficultyLevel: "mod"
    },
    intro: {
      code: "CLB-PIS-05",
      titlePrefix: "The Heart of the",
      titleAccent: "Cordillera Blanca",
      description: "Nevado Pisco is known as the balcony of the Andes because of its strategic location. It offers unparalleled panoramic views of Huascarán, Chopicalqui and Huandoy.",
      image: "/pisco/pisco.png",
      lat: `09° 01' 14" S`,
      lon: `77° 35' 42" W`,
      specs: [
        { label: "MAX POINT", value: "5,752 MASL", icon: "location" },
        { label: "TYPE", value: "Glacier Mountaineering", icon: "zone" },
        { label: "SEASON", value: "May - September", icon: "season" },
        { label: "SERVICE", value: "UIAGM Pro Guide", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'HUARAZ – ROCUTUYOC LAGOON (4450M)', content: 'Acclimatization day visiting Rocutuyoc lagoon and the glacier. Perfect for cultural and physical adaptation.', stats: { time: '9-10h Tour', alt: '4450m' } },
      { day: 'DAY 02', title: 'NEVADO MATEO (5150M) – ACCLIMATIZATION', content: 'Basic technical ascent of Nevado Mateo. Practice using crampons and ice axe on real glacier.', stats: { time: '5-6h Ascent', alt: '5150m' } },
      { day: 'DAY 03', title: 'HUARAZ – CEBOLLAPAMPA – PISCO BASE CAMP (4680M)', content: 'Transfer to Cebollapampa and approach hike to Nevado Pisco base camp.', stats: { time: '4-5h Hike', alt: '4680m' } },
      { day: 'DAY 04', title: 'BASE CAMP (4680M) – PISCO SUMMIT (5752M)', content: 'Summit attack. Moraine and glacier crossing. 360° panoramic view of the Cordillera Blanca.', stats: { time: '13-14h Day', alt: '5752m' } },
      { day: 'DAY 05', title: 'BASE CAMP (4680M) – HUARAZ (3100M)', content: 'Final descent to Cebollapampa and private transport back to Huaraz city.', stats: { status: 'Return', alt: '3100m' } }
    ],
    includes: [
      'Rocutuyoc Lagoon Acclimatization Tour',
      'Nevado Mateo Expedition (5150m)',
      'Private transport for all transfers',
      'Full meals during Pisco expedition',
      'High mountain camping equipment',
      'Certified UIAGM mountain guide',
      'Specialized cook and assistant',
      'Donkeys and muleteer for base logistics',
      'Huascaran National Park entrance tickets',
      'First aid kit and radios'
    ],
    excludes: [
      'Travel and rescue insurance',
      'Meals in town',
      'Personal mountain gear',
      'Personal sleeping bag and mat',
      'Personal expenses and tips'
    ],
    equipment: [
      'Sleeping bag (-20°C)',
      'Mountain helmet and headlamp',
      'UV Cat 4 goggles and sunblock',
      'Down and Gore-Tex jackets',
      'Harness and traversal ice axe',
      'High mountain boots and crampons',
      'Attack pack (40L)'
    ],
    itineraryTitle: "Expedition",
    itinerarySubtitle: "Timeline",
    includesTitle: "Included",
    equipmentTitle: "Technical Gear",
    gallery: [
      "/pisco/1.png",
      "/pisco/2.png",
      "/pisco/3.png",
      "/pisco/4.png",
      "/pisco/5.png",
      "/pisco/6.png",
      "/pisco/7.png",
      "/pisco/8.png"
    ]
  }
};
