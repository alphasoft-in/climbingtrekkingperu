export const culturalLimaCityData = {
  id: 'lima-city',
  category: 'tours',
  subCategory: 'lima',
  es: {
    hero: {
      titleTop: "CIUDAD DE LOS REYES",
      titleMain: "CITY TOUR LIMA - PERÚ",
      backgroundImage: "/slider_3.png",
      duration: "04 HORAS",
      price: "USD. 65.00",
      difficulty: "FÁCIL",
      difficultyLevel: "easy"
    },
    intro: {
      code: "LIM-CTY-04H",
      titlePrefix: "Lima",
      titleAccent: "Ancestral & Colonial",
      description: "Conozca Lima, Perú en sus tres períodos históricos: Ancestral, Colonial y Contemporáneo. Iniciamos con la mística Huaca Pucllana, centro ceremonial del siglo IV D.C. Continuamos por el Centro Histórico con más de cincuenta monumentos coloniales, destacando la Basílica Catedral y el Convento de San Francisco con sus famosas Catacumbas. Finalmente, visitamos las zonas residenciales de San Isidro y Miraflores con vistas espectaculares al Pacífico.",
      image: "/slider_1.png",
      lat: `12° 02' 35" S`,
      lon: `77° 01' 42" W`,
      specs: [
        { label: 'SALIDAS', value: '09:15 y 14:15', icon: 'location' },
        { label: 'HISTORIA', value: '3 Épocas', icon: 'zone' },
        { label: 'DURACIÓN', value: '3.5 a 4 Horas', icon: 'season' },
        { label: 'ADULTOS', value: 'USD. 65.00', icon: 'service' }
      ]
    },
    itinerary: [
      { 
        day: 'INICIO', 
        title: 'RECOJO Y LIMA ANCESTRAL', 
        content: 'Recojo del hotel en los distritos de Miraflores, San Isidro o Centro de Lima. Vista panorámica de la Huaca Pucllana, centro ceremonial edificado en el siglo IV y considerado pueblo sagrado por los Incas.', 
        stats: { time: '09:15 / 14:15' } 
      },
      { 
        day: 'COLONIAL', 
        title: 'CENTRO HISTÓRICO Y CATACUMBAS', 
        content: 'Visita al Centro Histórico: Paseo de la República, Plaza San Martín, Plaza Mayor, Palacio de Gobierno y la Catedral. Ingreso al Conjunto Monumental de San Francisco y sus criptas subterráneas (Catacumbas).', 
        stats: { status: 'Cultura' } 
      },
      { 
        day: 'MODERNA', 
        title: 'SAN ISIDRO Y MIRAFLORES', 
        content: 'Recorrido por las zonas residenciales más tradicionales: El Parque del Olivar en San Isidro y el Parque del Amor en Miraflores, con una vista espectacular del Océano Pacífico.', 
        stats: { status: 'Vistas' } 
      }
    ],
    includes: [
      'Recojo desde su hotel (Miraflores, San Isidro, Centro)',
      'Guía oficial de turismo bilingüe',
      'Transporte turístico con aire acondicionado',
      'Finalización en su hotel'
    ],
    excludes: [
      'Tickets de entrada a sitios turísticos',
      'Alimentación y bebidas',
      'Propinas para guía y chofer'
    ],
    equipment: [
      'Calzado cómodo para caminar',
      'Bloqueador solar y lentes de sol',
      'Cámara fotográfica',
      'Agua embotellada',
      'Casaca ligera'
    ],
    itineraryTitle: "Programa",
    itinerarySubtitle: "Tres Épocas",
    includesTitle: "Incluye",
    equipmentTitle: "Sugerencias"
  },
  en: {
    hero: {
      titleTop: "CITY OF KINGS",
      titleMain: "LIMA CITY TOUR",
      backgroundImage: "/slider_3.png",
      duration: "04 HOURS",
      price: "USD. 65.00",
      difficulty: "EASY",
      difficultyLevel: "easy"
    },
    intro: {
      code: "LIM-CTY-04H",
      titlePrefix: "Lima",
      titleAccent: "Ancestral & Colonial",
      description: "Explore Lima through its three historical periods: Ancestral, Colonial, and Contemporary. We start with the mystical Huaca Pucllana, a ceremonial center from the 4th century A.D. We continue through the Historic Center with over fifty colonial monuments, highlighting the Cathedral and the Convent of San Francisco with its famous Catacombs. Finally, we visit the residential areas of San Isidro and Miraflores with spectacular views of the Pacific.",
      image: "/slider_1.png",
      lat: `12° 02' 35" S`,
      lon: `77° 01' 42" W`,
      specs: [
        { label: 'DEPARTURES', value: '09:15 and 14:15', icon: 'location' },
        { label: 'HISTORY', value: '3 Periods', icon: 'zone' },
        { label: 'DURATION', value: '3.5 to 4 Hours', icon: 'season' },
        { label: 'ADULTS', value: 'USD. 65.00', icon: 'service' }
      ]
    },
    itinerary: [
      { 
        day: 'START', 
        title: 'PICKUP & ANCESTRAL LIMA', 
        content: 'Pickup from hotels in Miraflores, San Isidro, or Downtown Lima. Panoramic view of Huaca Pucllana, a ceremonial center built in the 4th century and considered a sacred village by the Incas.', 
        stats: { time: '09:15 / 14:15' } 
      },
      { 
        day: 'COLONIAL', 
        title: 'HISTORIC CENTER & CATACOMBS', 
        content: 'Visit to the Historic Center: Paseo de la República, Plaza San Martín, Plaza Mayor, Government Palace, and Cathedral. Entrance to the Monumental Complex of San Francisco and its underground crypts (Catacombs).', 
        stats: { status: 'Culture' } 
      },
      { 
        day: 'MODERN', 
        title: 'SAN ISIDRO & MIRAFLORES', 
        content: 'Tour of the most traditional residential areas: El Olivar Park in San Isidro and the Park of Love in Miraflores, with a spectacular view of the Pacific Ocean.', 
        stats: { status: 'Views' } 
      }
    ],
    includes: [
      'Pickup from your hotel (Miraflores, San Isidro, Downtown)',
      'Bilingual official tour guide',
      'Air-conditioned tourist transport',
      'Drop-off at your hotel'
    ],
    excludes: [
      'Entrance tickets to tourist sites',
      'Meals and drinks',
      'Tips for guide and driver'
    ],
    equipment: [
      'Comfortable walking shoes',
      'Sunscreen and sunglasses',
      'Camera',
      'Bottled water',
      'Light jacket'
    ],
    itineraryTitle: "Program",
    itinerarySubtitle: "Three Eras",
    includesTitle: "Includes",
    equipmentTitle: "Suggestions"
  }
};
