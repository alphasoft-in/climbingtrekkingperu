export const climbingIshincaValleyData = {
  id: 'ishinca-valley',
  category: 'climbing',
  subCategory: 'blanca',
  es: {
    hero: {
      titleTop: "LA TRILOGÍA DEL VALLE",
      titleMain: "ISHINCA & TOCLLARAJU 6030M",
      backgroundImage: "/tocllaraju/bg-tocllaraju.png",
      duration: "07 DÍAS",
      price: "USD 1,795.00",
      difficulty: "ALTA / TÉCNICA",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CLB-ISH-07",
      titlePrefix: "El Valle de",
      titleAccent: "los Gigantes",
      description: "El valle de Ishinca permite un ascenso progresivo ideal. Urus e Ishinca sirven de aclimatación perfecta antes del desafío técnico del Tocllaraju (6030m).",
      image: "/tocllaraju/tocllaraju.png",
      lat: `09° 20' 52" S`,
      lon: `77° 19' 26" W`,
      specs: [
        { label: "PUNTO MÁXIMO", value: "6,030 MSNM", icon: "location" },
        { label: "TIPO", value: "Trilogía de Cumbres", icon: "zone" },
        { label: "TEMPORADA", value: "Mayo - Septiembre", icon: "season" },
        { label: "SERVICIO", value: "Guía UIAGM Élite", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'HUARAZ (3100M) – CAMPO BASE ISHINCA (4350M)', content: 'Traslado a Collon. Caminata de aproximación por el valle de Ishinca entre queñuales hasta el campo base.', stats: { time: '5h Caminata', alt: '4350m' } },
      { day: 'DÍA 02', title: 'CAMPO BASE (4350M) – CUMBRE URUS (5424M)', content: 'Ascensión técnica de aclimatación a la cumbre del Urus. Vistas del Ranrapalca y Tocllaraju. Retorno al base.', stats: { time: '9-10h Jornada', alt: '5424m' } },
      { day: 'DÍA 03', title: 'CAMPO BASE (4350M) – CUMBRE ISHINCA (5350M)', content: 'Ataque a la cumbre del Nevado Ishinca. Excelente pico de preparación técnica para el Tocllaraju.', stats: { time: '13-14h Jornada', alt: '5350m' } },
      { day: 'DÍA 04', title: 'DÍA DE DESCANSO ESTRATÉGICO', content: 'Día para recuperar energías y revisión de equipo técnico en el campo base.', stats: { time: 'Descanso', alt: '4350m' } },
      { day: 'DÍA 05', title: 'CAMPO BASE – CAMPO ALTO TOCLLARAJU (4950M)', content: 'Ascenso cargando equipo de alta montaña hasta el campamento morrena del Tocllaraju.', stats: { time: '4h Ascenso', alt: '4950m' } },
      { day: 'DÍA 06', title: 'CAMPO ALTO – CUMBRE TOCLLARAJU (6030M) – BASE', content: 'Ataque a la cumbre a medianoche. Escalada técnica para alcanzar los 6030m. Descenso hasta el campo base.', stats: { time: '13-14h Jornada', alt: '6030m' } },
      { day: 'DÍA 07', title: 'CAMPO BASE – COLLON – HUARAZ (3100M)', content: 'Retorno final por el valle hasta Collon y transporte privado de regreso a Huaraz.', stats: { time: 'Retorno', alt: '3100m' } }
    ],
    includes: [
      'Traslado terminal - hotel en Huaraz',
      'Información técnica y logística completa',
      'Transporte privado Huaraz - Collon - Huaraz',
      'Guía de montaña Certificado UIAGM',
      'Cocinero especializado en alta montaña',
      'Porteadores para equipos en campos altos',
      'Alimentación completa en expedición',
      'Equipo de campamento de alta montaña',
      'Burros y arriero para logística al base',
      'Tickets de entrada al P.N. Huascarán',
      'Cuerdas, estacas y radios de comunicación'
    ],
    excludes: [
      'Seguros de viaje y rescate',
      'Alimentación en la ciudad',
      'Equipo técnico personal',
      'Gastos personales y propinas',
      'Saco de dormir personal (-20°C)'
    ],
    equipment: [
      'Saco de dormir (-20°C)',
      'Casco de montaña y frontal',
      'Gafas UV Cat 4 y bloqueador',
      'Chaqueta de plumas y Gore-Tex',
      'Arnés y piolets técnicos (par)',
      'Botas de alta montaña y grampones',
      'Mochila de ataque (40L)'
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
      titleTop: "THE VALLEY TRILOGY",
      titleMain: "ISHINCA & TOCLLARAJU 6030M",
      backgroundImage: "/tocllaraju/bg-tocllaraju.png",
      duration: "07 DAYS",
      price: "USD 1,795.00",
      difficulty: "HIGH / TECHNICAL",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CLB-ISH-07",
      titlePrefix: "The Valley of",
      titleAccent: "the Giants",
      description: "The Ishinca valley allows for an ideal progressive ascent. Urus and Ishinca serve as perfect acclimatization before the technical challenge of Tocllaraju (6030m).",
      image: "/tocllaraju/tocllaraju.png",
      lat: `09° 20' 52" S`,
      lon: `77° 19' 26" W`,
      specs: [
        { label: "MAX POINT", value: "6,030 MASL", icon: "location" },
        { label: "TYPE", value: "Summit Trilogy", icon: "zone" },
        { label: "SEASON", value: "May - September", icon: "season" },
        { label: "SERVICE", value: "Elite UIAGM Guide", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'HUARAZ (3100M) – ISHINCA BASE CAMP (4350M)', content: 'Transfer to Collon. Approach hike through the Ishinca valley among queñuales to the base camp.', stats: { time: '5h Hike', alt: '4350m' } },
      { day: 'DAY 02', title: 'BASE CAMP (4350M) – URUS SUMMIT (5424M)', content: 'Technical acclimatization ascent to the summit of Urus. Views of Ranrapalca and Tocllaraju. Return to base camp.', stats: { time: '9-10h Day', alt: '5424m' } },
      { day: 'DAY 03', title: 'BASE CAMP (4350M) – ISHINCA SUMMIT (5350M)', content: 'Summit attack on Nevado Ishinca. Excellent technical preparation peak for Tocllaraju.', stats: { time: '13-14h Day', alt: '5350m' } },
      { day: 'DAY 04', title: 'STRATEGIC REST DAY', content: 'Day to recover energy and review technical gear at base camp.', stats: { time: 'Rest', alt: '4350m' } },
      { day: 'DAY 05', title: 'BASE CAMP – TOCLLARAJU HIGH CAMP (4950M)', content: 'Ascent carrying high mountain gear to the Tocllaraju moraine camp.', stats: { time: '4h Ascent', alt: '4950m' } },
      { day: 'DAY 06', title: 'HIGH CAMP – TOCLLARAJU SUMMIT (6030M) – BASE', content: 'Midnight summit attack. Technical climbing to reach 6030m. Descent to base camp.', stats: { time: '13-14h Day', alt: '6030m' } },
      { day: 'DAY 07', title: 'BASE CAMP – COLLON – HUARAZ (3100M)', content: 'Final return through the valley to Collon and private transport back to Huaraz.', stats: { status: 'Return', alt: '3100m' } }
    ],
    includes: [
      'Terminal transfer - hotel in Huaraz',
      'Complete technical and logistical information',
      'Private transport Huaraz - Collon - Huaraz',
      'Certified UIAGM mountain guide',
      'High mountain specialized cook',
      'Porters for high camp equipment',
      'Full meals during expedition',
      'High mountain camping equipment',
      'Donkeys and muleteer for base logistics',
      'Huascaran National Park entrance tickets',
      'Ropes, stakes and communication radios'
    ],
    excludes: [
      'Travel and rescue insurance',
      'Meals in town',
      'Personal technical gear',
      'Personal expenses and tips',
      'Personal sleeping bag (-20°C)'
    ],
    equipment: [
      'Sleeping bag (-20°C)',
      'Mountain helmet and headlamp',
      'UV Cat 4 goggles and sunblock',
      'Down and Gore-Tex jackets',
      'Harness and technical ice axes (pair)',
      'High mountain boots and crampons',
      'Attack pack (40L)'
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
