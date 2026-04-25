export const culturalChurupData = {
  id: 'trekking-churup',
  category: 'tours',
  subCategory: 'ancash',
  es: {
    hero: {
      titleTop: "LA LAGUNA DE CRISTAL",
      titleMain: "TREKKING CHURUP 4450M",
      backgroundImage: "/slider_2.png",
      duration: "FULL DAY (8H)",
      price: "CONSULTAR",
      difficulty: "MODERADA+",
      difficultyLevel: "modplus"
    },
    intro: {
      code: "HZ-CHU-FD",
      titlePrefix: "El Ojo de la",
      titleAccent: "Montaña",
      description: "Laguna Churup es la ruta preferida para quienes buscan un desafío físico cercano a Huaraz. Con sus aguas de tonos turquesas, es una experiencia completa.",
      image: "/slider_3.png",
      lat: `09° 29' 00" S`,
      lon: `77° 24' 00" W`,
      specs: [
        { label: 'DISTANCIA', value: '7 KM (I/V)', icon: 'location' },
        { label: 'GRADIENTE', value: '+600m Ascenso', icon: 'zone' },
        { label: 'MARCHA', value: '4 - 5 Horas', icon: 'season' },
        { label: 'REQUISITO', value: 'Aclimatación Básica', icon: 'service' }
      ]
    },
    itinerary: [
      { day: '07:30 AM', title: 'SALIDA DE HUARAZ', content: 'Partida hacia el este de la ciudad hasta el pueblo de Pitec (3850m). Punto de inicio del trekking.', stats: { time: 'Inicio' } },
      { day: '08:30 AM', title: 'PITEC - ASCENSO', content: 'Inicio de la caminata. Sendero con pendiente pronunciada que ofrece vistas increíbles de la ciudad y el Huamashraju.', stats: { alt: '3850m' } },
      { day: '10:30 AM', title: 'ZONA DE CUERDAS', content: 'Superación del tramo técnico con cuerdas fijas (opcional) para alcanzar la parte alta de la morrena.', stats: { dist: 'Tramo Técnico' } },
      { day: '11:30 AM', title: 'LAGUNA CHURUP (4450 MSNM)', content: 'Arribo a la laguna "de los siete colores". Tiempo para relax, fotos y almuerzo frente al nevado Churup.', stats: { alt: '4450m', time: '1.5 h estancia' } },
      { day: '02:00 PM', title: 'DESCENSO A PITEC', content: 'Regreso por el mismo sendero con precaución en los tramos empinados.', stats: { time: 'Descenso' } },
      { day: '04:30 PM', title: 'RETORNO A HUARAZ', content: 'Llegada a la ciudad. Fin de la aventura.', stats: { time: 'Fin' } }
    ],
    includes: [
      'Recojo de su hotel en Huaraz',
      'Transporte turístico privado/compartido',
      'Guía Oficial de Turismo (Bilingüe)',
      'Botiquín de primeros auxilios',
      'Asistencia personalizada'
    ],
    excludes: [
      'Alimentación (Box lunch recomendado)',
      'Ticket de entrada PNH (S/. 10.00 diario)',
      'Seguro de viaje personal',
      'Gastos personales'
    ],
    equipment: [
      'Calzado de montaña (obligatorio)',
      'Mochila pequeña (20-30L)',
      '2L de agua y snacks',
      'Casaca cortaviento y polar',
      'Protección solar (gorro, lentes, bloqueador)',
      'Poncho de lluvia'
    ],
    itineraryTitle: "Expedición",
    itinerarySubtitle: "Cronograma",
    includesTitle: "Qué Incluye",
    equipmentTitle: "Equipo Sugerido",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  },
  en: {
    hero: {
      titleTop: "THE CRYSTAL LAGOON",
      titleMain: "CHURUP TREKKING 4450M",
      backgroundImage: "/slider_2.png",
      duration: "FULL DAY (8H)",
      price: "UPON REQUEST",
      difficulty: "MODERATE+",
      difficultyLevel: "modplus"
    },
    intro: {
      code: "HZ-CHU-FD",
      titlePrefix: "The Eye of",
      titleAccent: "The Mountain",
      description: "Laguna Churup is the preferred route for those looking for a physical challenge close to Huaraz. With its turquoise-toned waters, it is a complete experience.",
      image: "/slider_3.png",
      lat: `09° 29' 00" S`,
      lon: `77° 24' 00" W`,
      specs: [
        { label: 'DISTANCE', value: '7 KM (R/T)', icon: 'location' },
        { label: 'GRADIENT', value: '+600m Ascent', icon: 'zone' },
        { label: 'HIKE', value: '4 - 5 Hours', icon: 'season' },
        { label: 'REQUIREMENT', value: 'Basic Acclimatization', icon: 'service' }
      ]
    },
    itinerary: [
      { day: '07:30 AM', title: 'DEPARTURE FROM HUARAZ', content: 'Departure towards the east of the city to the village of Pitec (3850m). Start point of the trekking.', stats: { time: 'Start' } },
      { day: '08:30 AM', title: 'PITEC - ASCENT', content: 'Start of the walk. Path with steep slope that offers incredible views of the city and Huamashraju.', stats: { alt: '3850m' } },
      { day: '10:30 AM', title: 'ROPE ZONE', content: 'Overcoming the technical section with fixed ropes (optional) to reach the upper part of the moraine.', stats: { dist: 'Technical Section' } },
      { day: '11:30 AM', title: 'CHURUP LAGOON (4450 MASL)', content: 'Arrival at the "seven colors" lagoon. Time for relaxation, photos and lunch in front of the Churup peak.', stats: { alt: '4450m', time: '1.5 h stay' } },
      { day: '02:00 PM', title: 'DESCENT TO PITEC', content: 'Return by the same path with caution in steep sections.', stats: { time: 'Descent' } },
      { day: '04:30 PM', title: 'RETURN TO HUARAZ', content: 'Arrival in the city. End of the adventure.', stats: { time: 'End' } }
    ],
    includes: [
      'Pickup from your hotel in Huaraz',
      'Private/shared tourist transport',
      'Official Tour Guide (Bilingual)',
      'First aid kit',
      'Personalized assistance'
    ],
    excludes: [
      'Meals (Box lunch recommended)',
      'PNH entrance ticket (S/. 10.00 daily)',
      'Personal travel insurance',
      'Personal expenses'
    ],
    equipment: [
      'Mountain shoes (mandatory)',
      'Small backpack (20-30L)',
      '2L of water and snacks',
      'Windbreaker and fleece jacket',
      'Sun protection (hat, glasses, sunblock)',
      'Rain poncho'
    ],
    itineraryTitle: "Expedition",
    itinerarySubtitle: "Timeline",
    includesTitle: "What's Included",
    equipmentTitle: "Suggested Gear",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  }
};
