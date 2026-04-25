export const boliviaIllampuData = {
  id: 'illampu',
  category: 'trekking',
  subCategory: 'bolivia',
  es: {
    hero: {
      titleTop: "LOS ANDES SALVAJES",
      titleMain: "CIRCUITO ILLAMPU",
      backgroundImage: "/slider_4.png",
      duration: "8 DÍAS",
      price: "USD 695.00",
      difficulty: "MODERADA / DESAFIANTE",
      difficultyLevel: "mod"
    },
    intro: {
      code: "BOL-ILL-08",
      titlePrefix: "El Macizo",
      titleAccent: "Olvidado",
      description: "El **Circuito Illampu** es un viaje al corazón de la Cordillera Real norte. Es una ruta que rodea el imponente macizo del Illampu, cruzando pasos de alta montaña por encima de los 4000 metros en una de las zonas más prístinas y menos transitadas de los Andes bolivianos.",
      image: "/slider_4.png",
      lat: `15° 49' 18" S`,
      lon: `68° 32' 42" W`,
      specs: [
        { label: 'DESTINO', value: 'Sorata / Cordillera Real', icon: 'location' },
        { label: 'ACTIVIDAD', value: 'Trekking de Altura', icon: 'zone' },
        { label: 'DURACIÓN', value: '8 Días', icon: 'season' },
        { label: 'ALT. MÁX', value: '4,900 MSNM', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'LA PAZ – SORATA – LACHATHIYA (3850 M)', content: 'Viaje escénico hacia la Cordillera Real norte. Campamento en Lachathiya con vistas impresionantes del Illampu.', stats: { alt: '3850m' } },
      { day: 'DÍA 02', title: 'LACHATHIYA – PASO ANCOHUMA – CAMPAMENTO', content: 'Cruce del primer paso de altura (4749m). Vistas de los valles altos de Sorata y flora andina.', stats: { time: '6h Trek', alt: '3900m' } },
      { day: 'DÍA 03', title: 'ANCOHUMA – COCOYO (3850 M)', content: 'Caminata hacia el paso Kurahuasi (4479m) y descenso al remoto pueblo de Cocoyo.', stats: { time: '6h Trek', alt: '3850m' } },
      { day: 'DÍA 04', title: 'COCOYO – CHAJOLPAYA (3700 M)', content: 'Ascenso al paso Sarani (4500m). Observación de glaciares y diversidad de fauna andina.', stats: { time: '7h Trek', alt: '3700m' } },
      { day: 'DÍA 05', title: 'CHAJOLPAYA – LAGUNA CHUJNA QUTA (4100 M)', content: 'Cruce del paso Calzada (4900m) cerca de los glaciares del Kasiri. Campamento junto a la laguna turquesa.', stats: { time: '7h Trek', alt: '4100m' } },
      { day: 'DÍA 06', title: 'CHUJNA QUTA – WARA WARA (3900 M)', content: 'Trek hacia la laguna San Francisco y relajación en aguas termales naturales.', stats: { time: '6h Trek', alt: '3900m' } },
      { day: 'DÍA 07', title: 'WARA WARA – MILLIPAYA – LA PAZ', content: 'Descenso a través de minas abandonadas y pueblos agrícolas. Transporte de retorno a La Paz.', stats: { estado: 'Retorno' } },
      { day: 'DÍA 08', title: 'LA PAZ – AEROPUERTO', content: 'Traslado al aeropuerto de El Alto. Fin de servicios.', stats: { estado: 'Salida' } }
    ],
    includes: [
      'Traslados Aeropuerto - Hotel - Aeropuerto',
      'Transporte privado La Paz - Sorata y Millipaya - La Paz',
      'Guía de Trekking Especializado',
      'Cocinero y alimentación completa (D/A/C)',
      'Mulas para transporte de equipo',
      'Equipo de camping completo (Carpas, cocina, comedor)',
      'Agua hervida diaria para botellas',
      'Botiquín de primeros auxilios'
    ],
    excludes: [
      'Vuelos internacionales',
      'Hotel en La Paz',
      'Bolsa de dormir y aislante',
      'Entradas a Parques Nacionales',
      'Seguro personal',
      'Snacks y propinas'
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
      titleTop: "THE WILD ANDES",
      titleMain: "ILLAMPU CIRCUIT",
      backgroundImage: "/slider_4.png",
      duration: "8 DAYS",
      price: "USD 695.00",
      difficulty: "MODERATE / CHALLENGING",
      difficultyLevel: "mod"
    },
    intro: {
      code: "BOL-ILL-08",
      titlePrefix: "The Forgotten",
      titleAccent: "Massif",
      description: "The **Illampu Circuit** is a journey to the heart of the northern Cordillera Real. It is a route that circles the imposing Illampu massif, crossing high mountain passes above 4000 meters in one of the most pristine and least-traveled areas of the Bolivian Andes.",
      image: "/slider_4.png",
      lat: `15° 49' 18" S`,
      lon: `68° 32' 42" W`,
      specs: [
        { label: 'DESTINATION', value: 'Sorata / Cordillera Real', icon: 'location' },
        { label: 'ACTIVITY', value: 'High Altitude Trekking', icon: 'zone' },
        { label: 'DURATION', value: '8 Days', icon: 'season' },
        { label: 'MAX ALT.', value: '4,900 MSNM', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'LA PAZ – SORATA – LACHATHIYA (3850 M)', content: 'Scenic journey towards the northern Cordillera Real. Camp at Lachathiya with stunning views of Illampu.', stats: { alt: '3850m' } },
      { day: 'DAY 02', title: 'LACHATHIYA – ANCOHUMA PASS – CAMP', content: 'Crossing the first high pass (4749m). Views of the high valleys of Sorata and Andean flora.', stats: { time: '6h Trek', alt: '3900m' } },
      { day: 'DAY 03', title: 'ANCOHUMA – COCOYO (3850 M)', content: 'Hike to Kurahuasi pass (4479m) and descent to the remote village of Cocoyo.', stats: { time: '6h Trek', alt: '3850m' } },
      { day: 'DAY 04', title: 'COCOYO – CHAJOLPAYA (3700 M)', content: 'Ascent to Sarani pass (4500m). Observation of glaciers and diverse Andean wildlife.', stats: { time: '7h Trek', alt: '3700m' } },
      { day: 'DAY 05', title: 'CHAJOLPAYA – CHUJNA QUTA LAGOON (4100 M)', content: 'Cross Calzada pass (4900m) near the Kasiri glaciers. Camp by the turquoise lagoon.', stats: { time: '7h Trek', alt: '4100m' } },
      { day: 'DAY 06', title: 'CHUJNA QUTA – WARA WARA (3900 M)', content: 'Trek to San Francisco lagoon and relax in natural hot springs.', stats: { time: '6h Trek', alt: '3900m' } },
      { day: 'DAY 07', title: 'WARA WARA – MILLIPAYA – LA PAZ', content: 'Descent through abandoned mines and agricultural villages. Return transport to La Paz.', stats: { status: 'Return' } },
      { day: 'DAY 08', title: 'LA PAZ – AIRPORT', content: 'Transfer to El Alto airport. End of services.', stats: { status: 'Departure' } }
    ],
    includes: [
      'Airport - Hotel - Airport transfers',
      'Private transport La Paz - Sorata and Millipaya - La Paz',
      'Specialized Trekking Guide',
      'Cook and full meals (B/L/D)',
      'Mules for equipment transport',
      'Complete camping gear (Tents, kitchen, dining)',
      'Daily boiled water for bottles',
      'First aid kit'
    ],
    excludes: [
      'International flights',
      'Hotel in La Paz',
      'Sleeping bag and mat',
      'National Park entrance fees',
      'Personal insurance',
      'Snacks and tips'
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
