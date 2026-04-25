export const blancaCircuitData = {
  id: 'circuit',
  category: 'trekking',
  subCategory: 'blanca',
  es: {
    hero: {
      titleTop: "EXPEDICIÓN ELITE",
      titleMain: "CIRCUITO COMPLETO CORDILLERA BLANCA",
      backgroundImage: "/trekking/blanca/bg-cordillera-blanca.png",
      duration: "15 DÍAS / 14 NOCHES",
      price: "USD. 1,695.00",
      difficulty: "MUY DIFÍCIL",
      difficultyLevel: "hard"
    },
    intro: {
      code: "BLN-CIRC-15D",
      titlePrefix: "La Travesía",
      titleAccent: "Total",
      description: "Esta es nuestra expedición insignia en la Cordillera Blanca. Durante 15 días, recorreremos los valles más remotos, uniendo la ruta clásica de Santa Cruz con el imponente circuito Los Cedros Alpamayo.",
      image: "/trekking/blanca/trekking-blanca.png",
      lat: `08° 50' 11" S`,
      lon: `77° 40' 05" W`,
      specs: [
        { label: "COBERTURA", value: "Norte & Centro Blanca", icon: "location" },
        { label: "PUNTOS CLAVE", value: "Alpamayo, Punta Unión, Cullicocha", icon: "zone" },
        { label: "TEMPORADA", value: "Marzo - Diciembre", icon: "season" },
        { label: "LOGÍSTICA", value: "Confort de Expedición", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'PAÍS DE ORIGEN A LIMA (161 MSNM) – HUARAZ (3100 M)', content: 'Recepción en el aeropuerto de Lima y traslado al terminal de bus para el viaje a Huaraz (8 horas). Traslado al hotel.', stats: { time: '8 h' } },
      { day: 'DÍA 02', title: 'ACLIMATACIÓN: LAGUNA ROCUTOYOC (4450 MSNM)', content: 'Visita al mirador Cashapunta, cascada Ruripaccha y caminata al glaciar Ruripaccha (4650m). Retorno a Huaraz.', stats: { alt: '4450m', time: '9-10 h' } },
      { day: 'DÍA 03', title: 'DÍA LIBRE EN HUARAZ', content: 'Día de descanso y preparativos finales para la expedición. Opcional tours ligeros en los alrededores.' },
      { day: 'DÍA 04', title: 'HUARAZ (3100) – VAQUERIA – PARIA (3900 MSNM)', content: 'Traslado pasando por el paso Portachuelo (4760m). Inicio del trek en Vaquería hacia el campamento Paria.', stats: { trans: '05 h', alt: '4760m', dist: '8.5 km', time: '5 h' } },
      { day: 'DÍA 05', title: 'PARIA (3900 MSNM) – PUNTA UNIÓN (4750 MSNM) – TUCTU (4200 MSNM)', content: 'Cruce del icónico paso Punta Unión (4,750 msnm) con vistas del Taulliraju. Retorno al campamento Tuctu.', stats: { alt: '4750 m', dist: '10.3 km', time: '9 h' } },
      { day: 'DÍA 06', title: 'TUCTU (4200 MSNM) - HUECRUNCOCHA (3850 MSNM)', content: 'Ascenso al paso Pukaraju (4,650 msnm). Vistas de los picos Taulliraju y Pukaraju. Descenso a Huecruncocha.', stats: { alt: '4650 m', dist: '13.8 km', time: '8 h' } },
      { day: 'DÍA 07', title: 'HUECRUNCOCHA (3850 MSNM) – JANCAPAMPA (3700 MSNM)', content: 'Caminata por el valle Quisuar y cruce del paso Tupa Tupa (4,400 msnm). Descenso a Jancapampa.', stats: { alt: '4400 m', dist: '13.2 km', time: '6 h' } },
      { day: 'DÍA 08', title: 'JANCAPAMPA (3700 MSNM) – WILCA (4150 MSNM)', content: 'Ascenso técnico al paso Yanacón (4,600 msnm) con vista al valle Conchucos. Descenso a Wilca.', stats: { alt: '4600 m', dist: '14.8 km', time: '9 h' } },
      { day: 'DÍA 09', title: 'WILLCA (4200 MSNM) – JANCARURISH (4250 MSNM)', content: 'Cruce del paso Cara Cara (4,800 msnm). Impresionante vista de la cara norte del Alpamayo.', stats: { alt: '4800 m', dist: '14.4 km', time: '8 h' } },
      { day: 'DÍA 10', title: 'LAGUNA JANCARURISH (4650 MSNM) – VISTA ALPAMAYO', content: 'Día dedicado a explorar la base del Alpamayo y su laguna, contemplando la montaña más bella del mundo.', stats: { alt: '4650 m', dist: '7 km', time: '5 h' } },
      { day: 'DÍA 11', title: 'JANCARURISH (4250 MSNM) - OSORURI (4,380 MSNM)', content: 'Caminata por el cañón Los Cedros y ascenso al paso Vientunan (4,790 msnm). Campamento balcón.', stats: { alt: '4790 m', dist: '8.9 km', time: '8 h' } },
      { day: 'DÍA 12', title: 'OSORURI (4380 MSNM) – HUISHCASH (4100 MSNM)', content: 'Cruce del paso Toropishtanan (4,850 msnm). Vistas de la laguna Cullicocha y el pico Santa Cruz.', stats: { alt: '4850 m', dist: '12.2 km', time: '9 h' } },
      { day: 'DÍA 13', title: 'HUISHCASH (4100 MSNM) – HUALCAYAN (3000 MSNM) – HUARAZ', content: 'Descenso final hasta el pueblo de Hualcayán. Traslado de regreso a la ciudad de Huaraz.', stats: { alt: '3000 m', dist: '9.3 km', time: '4 h' } },
      { day: 'DÍA 14', title: 'TRASLADO HUARAZ – LIMA', content: 'Traslado al terminal de bus para el viaje de retorno a Lima. Traslado al hotel.' },
      { day: 'DÍA 15', title: 'LIMA – VUELO DE RETORNO', content: 'Traslado al aeropuerto para su vuelo internacional. Fin de servicios.' }
    ],
    includes: [
      'Recepción aeropuerto Lima y todos los traslados',
      'Tickets de bus Lima - Huaraz - Lima',
      '4 Noches en Huaraz + 1 noche en Lima',
      '1 Día de aclimatación técnica + 1 día de preparación',
      '10 Días de trekking de alta intensidad',
      'Entradas PNH incluidas ($95.00)',
      'Guía oficial de Trekking UIAGM/AGMP',
      'Cocinero especializado y asistentes',
      'Alimentación completa durante la expedición',
      'Equipo de camping Premium (incluye carpa baño)',
      'Burros para el transporte de carga total',
      'Oxígeno de emergencia y Radios'
    ],
    equipment: [
      'Bolsa de dormir (-10°C) y Colchoneta',
      'Botas de trekking impermeables',
      'Ropa técnica (Gore-Tex, Pluma)',
      'Mochila de ataque (40L)',
      'Bastones de trekking',
      'Linterna frontal y baterías de repuesto',
      'Lentes de sol 100% UV',
      'Botiquín personal'
    ],
    itineraryTitle: "Cronograma",
    itinerarySubtitle: "Expedición",
    includesTitle: "Servicios Incluidos",
    equipmentTitle: "Equipo Técnico",
    gallery: [
      "/trekking/blanca/blanca/1.png",
      "/trekking/blanca/blanca/2.png",
      "/trekking/blanca/blanca/3.png",
      "/trekking/blanca/blanca/4.png",
      "/trekking/blanca/blanca/5.png",
      "/trekking/blanca/blanca/6.png",
      "/trekking/blanca/blanca/7.png",
      "/trekking/blanca/blanca/8.png"
    ]
  },
  en: {
    hero: {
      titleTop: "ELITE EXPEDITION",
      titleMain: "WHITE RANGE FULL CIRCUIT",
      backgroundImage: "/trekking/blanca/bg-cordillera-blanca.png",
      duration: "15 DAYS / 14 NIGHTS",
      price: "USD. 1,695.00",
      difficulty: "VERY HARD",
      difficultyLevel: "hard"
    },
    intro: {
      code: "BLN-CIRC-15D",
      titlePrefix: "The Total",
      titleAccent: "Traverse",
      description: "This is our flagship expedition in the White Range. For 15 days, we will traverse the most remote valleys, joining the classic Santa Cruz route with the imposing Los Cedros Alpamayo circuit.",
      image: "/trekking/blanca/trekking-blanca.png",
      lat: `08° 50' 11" S`,
      lon: `77° 40' 05" W`,
      specs: [
        { label: "COVERAGE", value: "North & Central Blanca", icon: "location" },
        { label: "KEY POINTS", value: "Alpamayo, Punta Union, Cullicocha", icon: "zone" },
        { label: "SEASON", value: "March - December", icon: "season" },
        { label: "LOGISTICS", value: "Expedition Comfort", icon: "service" }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'ORIGIN COUNTRY TO LIMA (161 MASL) – HUARAZ (3100 M)', content: 'Reception at Lima airport and transfer to bus terminal for the trip to Huaraz (8 hours). Hotel transfer.', stats: { time: '8 h' } },
      { day: 'DAY 02', title: 'ACCLIMATIZATION: ROCUTOYOC LAGOON (4450 MASL)', content: 'Visit Cashapunta lookout, Ruripaccha waterfall, and hike to Ruripaccha glacier (4650m). Return to Huaraz.', stats: { alt: '4450m', time: '9-10 h' } },
      { day: 'DAY 03', title: 'FREE DAY IN HUARAZ', content: 'Rest day and final preparations for the expedition. Optional light tours in the surrounding areas.' },
      { day: 'DAY 04', title: 'HUARAZ (3100) – VAQUERIA – PARIA (3900 MASL)', content: 'Transfer passing through Portachuelo pass (4760m). Start of trek in Vaquería to Paria camp.', stats: { trans: '05 h', alt: '4760m', dist: '8.5 km', time: '5 h' } },
      { day: 'DAY 05', title: 'PARIA (3900 MASL) – PUNTA UNION (4750 MASL) – TUCTU (4200 MASL)', content: 'Crossing the iconic Punta Union pass (4,750 masl) with views of Taulliraju. Return to Tuctu camp.', stats: { alt: '4750 m', dist: '10.3 km', time: '9 h' } },
      { day: 'DAY 06', title: 'TUCTU (4200 MASL) - HUECRUNCOCHA (3850 MASL)', content: 'Ascent to Pukaraju pass (4,650 masl). Views of Taulliraju and Pukaraju peaks. Descent to Huecruncocha.', stats: { alt: '4650 m', dist: '13.8 km', time: '8 h' } },
      { day: 'DAY 07', title: 'HUECRUNCOCHA (3850 MASL) – JANCAPAMPA (3700 MASL)', content: 'Hike through Quisuar valley and cross Tupa Tupa pass (4,400 masl). Descent to Jancapampa.', stats: { alt: '4400 m', dist: '13.2 km', time: '6 h' } },
      { day: 'DAY 08', title: 'JANCAPAMPA (3700 MASL) – WILCA (4150 MASL)', content: 'Technical ascent to Yanacon pass (4,600 masl) overlooking Conchucos valley. Descent to Wilca.', stats: { alt: '4600 m', dist: '14.8 km', time: '9 h' } },
      { day: 'DAY 09', title: 'WILLCA (4200 MASL) – JANCARURISH (4250 MASL)', content: 'Crossing Cara Cara pass (4,800 masl). Impressive view of Alpamayo North Face.', stats: { alt: '4800 m', dist: '14.4 km', time: '8 h' } },
      { day: 'DAY 10', title: 'JANCARURISH LAGOON (4650 MASL) – ALPAMAYO VIEW', content: 'Day dedicated to exploring Alpamayo base and its lagoon, contemplating the most beautiful mountain in the world.', stats: { alt: '4650 m', dist: '7 km', time: '5 h' } },
      { day: 'DAY 11', title: 'JANCARURISH (4250 MASL) - OSORURI (4,380 MASL)', content: 'Hike through Los Cedros canyon and ascent to Vientunan pass (4,790 masl). Balcony camp.', stats: { alt: '4790 m', dist: '8.9 km', time: '8 h' } },
      { day: 'DAY 12', title: 'OSORURI (4380 MASL) – HUISHCASH (4100 MASL)', content: 'Crossing Toropishtanan pass (4,850 masl). Views of Cullicocha lagoon and Santa Cruz peak.', stats: { alt: '4850 m', dist: '12.2 km', time: '9 h' } },
      { day: 'DAY 13', title: 'HUISHCASH (4100 MASL) – HUALCAYAN (3000 MASL) – HUARAZ', content: 'Final descent to Hualcayan village. Transfer back to Huaraz city.', stats: { alt: '3000 m', dist: '9.3 km', time: '4 h' } },
      { day: 'DAY 14', title: 'TRANSFER HUARAZ – LIMA', content: 'Transfer to bus terminal for the return trip to Lima. Transfer to hotel.' },
      { day: 'DAY 15', title: 'LIMA – RETURN FLIGHT', content: 'Transfer to the airport for your international flight. End of services.' }
    ],
    includes: [
      'Lima airport reception and all transfers',
      'Lima - Huaraz - Lima bus tickets',
      '4 Nights in Huaraz + 1 night in Lima',
      '1 Technical acclimatization day + 1 preparation day',
      '10 Days of high-intensity trekking',
      'PNH Entrance fees included ($95.00)',
      'Official UIAGM/AGMP Trekking Guide',
      'Specialized cook and assistants',
      'Full board during the expedition',
      'Premium camping equipment (including toilet tent)',
      'Donkeys for total cargo transport',
      'Emergency oxygen and Woki toki'
    ],
    equipment: [
      'Sleeping bag (-10°C) and Mat',
      'Waterproof trekking boots',
      'Technical clothing (Gore-Tex, Down)',
      'Daypack (40L)',
      'Trekking poles',
      'Headlamp and spare batteries',
      '100% UV Sunglasses',
      'Personal First Aid kit'
    ],
    itineraryTitle: "Timeline",
    itinerarySubtitle: "Traverse",
    includesTitle: "Included Services",
    equipmentTitle: "Technical Gear",
    gallery: [
      "/trekking/blanca/blanca/1.png",
      "/trekking/blanca/blanca/2.png",
      "/trekking/blanca/blanca/3.png",
      "/trekking/blanca/blanca/4.png",
      "/trekking/blanca/blanca/5.png",
      "/trekking/blanca/blanca/6.png",
      "/trekking/blanca/blanca/7.png",
      "/trekking/blanca/blanca/8.png"
    ]
  }
};
