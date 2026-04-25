export const boliviaCotiaHuaynaData = {
  id: 'cotia-huayna',
  category: 'trekking',
  subCategory: 'bolivia',
  es: {
    hero: {
      titleTop: "TRANSVERSAL CORDILLERA REAL",
      titleMain: "TREK COTIA - HUAYNA",
      backgroundImage: "/slider_3.png",
      duration: "7 DÍAS",
      price: "USD 795.00",
      difficulty: "MODERADA / TÉCNICA",
      difficultyLevel: "mod"
    },
    intro: {
      code: "BOL-COT-07",
      titlePrefix: "La Senda de los",
      titleAccent: "Cóndores",
      description: "Este trek es considerado una de las rutas más bellas de la Cordillera Real. Atraviesa el macizo permitiendo observar desde ángulos privilegiados los picos más famosos de Bolivia.",
      image: "/slider_3.png",
      lat: `16° 11' 22" S`,
      lon: `68° 14' 55" W`,
      specs: [
        { label: 'INICIO', value: 'Laguna Cotia', icon: 'location' },
        { label: 'ACTIVIDAD', value: 'Trekking Transversal', icon: 'zone' },
        { label: 'DURACIÓN', value: '7 Días', icon: 'season' },
        { label: 'ALT. MÁX', value: '5,350 MSNM', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'LA PAZ – LAGUNA COTIA (3800 M)', content: 'Salida en transporte privado hacia el corazón de la Cordillera Real. Caminata hasta el mirador para observar los nevados.', stats: { alt: '3800m' } },
      { day: 'DÍA 02', title: 'COTIA – PASO CONTADORA – AJUANI', content: 'Ascenso al paso Contadora (4900m). Descenso escénico hacia el campamento de Ajuani.', stats: { time: '6h Trek', alt: '3820m' } },
      { day: 'DÍA 03', title: 'AJUANI – PASO JANCHANLLANI – JURIKOTA', content: 'Cruce del paso Janchallani (4800m). Campamento cerca de la laguna turquesa Jurikota.', stats: { time: '7h Trek', alt: '3780m' } },
      { day: 'DÍA 04', title: 'JURIKOTA – PICO AUSTRIA (5350 M) – CONDORIRI', content: 'Día estelar. Ascenso al Pico Austria para vistas 360° de la cordillera. Descenso al campo base de Condoriri.', stats: { time: '7h Día', alt: '5350m' } },
      { day: 'DÍA 05', title: 'CONDORIRI – MARIA LLOCO (4720 M)', content: 'Cruce del paso Condoriri (5100m). Paisajes glaciares y vistas directas del Huayna Potosí.', stats: { time: '8h Trek', alt: '4720m' } },
      { day: 'DÍA 06', title: 'MARIA LLOCO – PASO ZONGO – LA PAZ', content: 'Último paso de altura (5100m). Descenso al campo base del Huayna Potosí donde espera el transporte de retorno a La Paz.', stats: { estado: 'Retorno' } },
      { day: 'DÍA 07', title: 'LA PAZ – AEROPUERTO', content: 'Traslado al aeropuerto de El Alto. Fin de la travesía.', stats: { estado: 'Salida' } }
    ],
    includes: [
      'Traslados Aeropuerto - Hotel - Aeropuerto',
      'Transporte privado La Paz - Cotia y retorno desde Zongo',
      'Guía de Trekking Certificado',
      'Cocinero y alimentación completa (D, A, C)',
      'Mulas para carga de equipo de campamento',
      'Equipo de campamento completo (Carpas, cocina, comedor)',
      'Agua hervida diaria para consumo',
      'Botiquín de primeros auxilios'
    ],
    excludes: [
      'Vuelos internacionales',
      'Hotel en La Paz',
      'Bolsa de dormir y aislante',
      'Seguro de viaje personal',
      'Gastos extras y propinas'
    ],
    equipment: [
      'Mochila de 45L para caminatas diarias',
      'Chaqueta térmica',
      'Chaqueta impermeable',
      'Botas de trekking',
      'Bastones de trekking',
      'Gafas de sol con protección UV'
    ],
    itineraryTitle: "Expedición",
    itinerarySubtitle: "Cronograma",
    includesTitle: "Servicios Incluidos",
    equipmentTitle: "Equipo Sugerido",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  },
  en: {
    hero: {
      titleTop: "CORDILLERA REAL TRANSVERSE",
      titleMain: "TREK COTIA - HUAYNA",
      backgroundImage: "/slider_3.png",
      duration: "7 DAYS",
      price: "USD 795.00",
      difficulty: "MODERATE / TECHNICAL",
      difficultyLevel: "mod"
    },
    intro: {
      code: "BOL-COT-07",
      titlePrefix: "The Path of the",
      titleAccent: "Condors",
      description: "This trek is considered one of the most beautiful routes in the Cordillera Real. It traverses the massif, allowing you to observe Bolivia's most famous peaks from privileged angles.",
      image: "/slider_3.png",
      lat: `16° 11' 22" S`,
      lon: `68° 14' 55" W`,
      specs: [
        { label: 'START', value: 'Laguna Cotia', icon: 'location' },
        { label: 'ACTIVITY', value: 'Transverse Trekking', icon: 'zone' },
        { label: 'DURATION', value: '7 Days', icon: 'season' },
        { label: 'MAX ALT.', value: '5,350 MSNM', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'LA PAZ – COTIA LAGOON (3800 M)', content: 'Departure in private transport to the heart of the Cordillera Real. Hike to the viewpoint to observe the snowy peaks.', stats: { alt: '3800m' } },
      { day: 'DAY 02', title: 'COTIA – CONTADORA PASS – AJUANI', content: 'Ascent to Contadora pass (4900m). Scenic descent towards the Ajuani camp.', stats: { time: '6h Trek', alt: '3820m' } },
      { day: 'DAY 03', title: 'AJUANI – JANCHANLLANI PASS – JURIKOTA', content: 'Crossing the Janchallani pass (4800m). Camp near the turquoise Jurikota lagoon.', stats: { time: '7h Trek', alt: '3780m' } },
      { day: 'DAY 04', title: 'JURIKOTA – PICO AUSTRIA (5350 M) – CONDORIRI', content: 'Stellar day. Ascent to Pico Austria for 360° views of the range. Descent to the Condoriri base camp.', stats: { time: '7h Day', alt: '5350m' } },
      { day: 'DAY 05', title: 'CONDORIRI – MARIA LLOCO (4720 M)', content: 'Crossing the Condoriri pass (5100m). Glacial landscapes and direct views of Huayna Potosi.', stats: { time: '8h Trek', alt: '4720m' } },
      { day: 'DAY 06', title: 'MARIA LLOCO – ZONGO PASS – LA PAZ', content: 'Final high pass (5100m). Descent to the Huayna Potosi base camp where return transport to La Paz awaits.', stats: { status: 'Return' } },
      { day: 'DAY 07', title: 'LA PAZ – AIRPORT', content: 'Transfer to El Alto airport. End of the traverse.', stats: { status: 'Departure' } }
    ],
    includes: [
      'Airport - Hotel - Airport transfers',
      'Private transport La Paz - Cotia and return from Zongo',
      'Certified Trekking Guide',
      'Cook and full meals (Breakfast, Lunch, Dinner)',
      'Mules for camping equipment load',
      'Complete camping gear (Tents, kitchen, dining)',
      'Daily boiled water for consumption',
      'First aid kit'
    ],
    excludes: [
      'International flights',
      'Hotel in La Paz',
      'Sleeping bag and mat',
      'Personal travel insurance',
      'Extra expenses and tips'
    ],
    equipment: [
      '45L backpack for day hikes',
      'Thermal jacket',
      'Waterproof shell',
      'Trekking boots',
      'Trekking poles',
      'Sunglasses with UV protection'
    ],
    itineraryTitle: "Expedition",
    itinerarySubtitle: "Timeline",
    includesTitle: "Included Services",
    equipmentTitle: "Suggested Equipment",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  }
};
