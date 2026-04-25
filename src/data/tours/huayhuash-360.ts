export const huayhuash360Data = {
  id: '360',
  category: 'trekking',
  subCategory: 'huayhuash',
  es: {
    hero: {
      titleTop: "TREKKING CORDILLERA",
      titleMain: "HUAYHUASH 360",
      backgroundImage: "/trekking/huayhuash/bg-huayhuash.png",
      duration: "15 DÍAS / 14 NOCHES",
      price: "USD. 1,695.00",
      difficulty: "DIFÍCIL",
      difficultyLevel: "hard"
    },
    intro: {
      code: "HYH-360-15D",
      titlePrefix: "Exploración",
      titleAccent: "Integral",
      description: "Esta expedición de 15 días es la experiencia definitiva en los Andes peruanos. Rodearemos la Cordillera Huayhuash en su totalidad, cruzando pasos de más de 5,000 metros y acampando junto a lagunas glaciares de color turquesa intenso.",
      image: "/trekking/huayhuash/360.png",
      lat: `9° 32' 26" S`,
      lon: `77° 31' 39" W`,
      specs: [
        { label: "BASE LOGÍSTICA", value: "Huaraz, Perú", icon: "location" },
        { label: "ZONA TÉCNICA", value: "Andes Centrales", icon: "zone" },
        { label: "TEMPORADA", value: "Abril - Diciembre", icon: "season" },
        { label: "SERVICIO", value: "Confort Superior", icon: "service" }
      ]
    },
    itinerary: [
      { day: "DÍA 01", title: "LIMA PERU (161 MSNM) – HUARAZ (3100 MSNM)", content: "Nosotros FRANPISCO ADVENTURE esperamos en el aeropuerto Jorge Chávez. Luego lo trasladamos al terminal de bus público para trasladarnos a la ciudad Huaraz. Una vez que llegamos a Huaraz lo trasladamos al hotel." },
      { day: "DÍA 02", title: "FULL DAY LAGUNA ROCUTOYOC (4450 MSNM) – ACLIMATACIÓN", content: "Salida de Huaraz a las 6:00 am hacia la laguna Rocutuyoc. Visita mirador Cashapunta, cascada de Ruripaccha, pintura rupestre, laguna Rocutuyoc y glaciar de Ruripaccha." },
      { day: "DÍA 03", title: "DÍA LIBRE", content: "Día libre por precaución de altura y para retomar energía antes de iniciar el circuito." },
      { day: "DÍA 04", title: "TRASLADO HUARAZ - CHIQUIÁN - CUARTELWAIN (4180 MSNM)", content: "Viaje de 5 horas hasta Cuartelwain. Primer campamento a 4180 msnm para aclimatación.", stats: { trans: "05 horas", alt: "4180m", food: "Almuerzo y Cena" } },
      { day: "DÍA 05", title: "CUARTELWAIN (4180M) – MITUCOCHA (4230M)", content: "Paso Cacananpunta 4,700 msnm. Observación de lagunas y el valle de Queropalca. Campamento con vista a Ninashanca y Jirishanca.", stats: { alt: "4700 m", dist: "09 km", time: "04-05 hs" } },
      { day: "DÍA 06", title: "MITUCOCHA (4,230 MSNM) - CARHUACOCHA (4,280 MSNM)", content: "Paso Carhuac 4,650 msnm. Camino alterno al mirador de tres lagunas. Vistas de montañas Siula y Yerupaja.", stats: { alt: "4650 m", dist: "13 km", time: "6 hs" } },
      { day: "DÍA 07", title: "CARHUACOCHA (4,280 MSNM) - HUAYHUASH (4,300 MSNM)", content: "Día de mayor dificultad. Mirador de las tres lagunas (Siulacocha, Ganrajanca, Azulcocha). Paso Siula 4,800 msnm.", stats: { alt: "4800 m", dist: "15 km", time: "09 hs" } },
      { day: "DÍA 08", title: "HUAYHUASH (4,350 MSNM) - VICONGA (4,330 MSNM)", content: "Paso Portachuelo 4,750 msnm. Vistas de Cordillera Raura. Campamento Viconga y baños termales naturales.", stats: { alt: "4750 m", dist: "11 km", time: "06 hs" } },
      { day: "DÍA 09", title: "VICONGA (4,330 MSNM)- CUYOCPAMPA (4,550 MSNM)", content: "Paso Cuyoc 5,000 msnm. Vistas totales de Raura y Huayhuash. Opcional: Mirador San Antonio 5,120 m.", stats: { alt: "5,050 m", dist: "13 km", time: "6 hs" } },
      { day: "DÍA 10", title: "CUYOCPAMPA (4,550 MSNM) - HUAYLLAPA (3,630 MSNM)", content: "Amanecer en el paso Santa Rosa 5,080 msnm. Descenso por laguna Jurao hasta el pueblo de Huayllapa.", stats: { alt: "5080 m", dist: "19 km", time: "10 hs" } },
      { day: "DÍA 11", title: "HUAYLLAPA (3,630 MSNM) - GASHPAPAMPA (4,550 MSNM)", content: "Subida al paso Tapush 4,800 msnm. Vista del nevado Diablo Mudo. Llegada a Gashpapampa.", stats: { alt: "4,800 m", dist: "15 km", time: "8 hs" } },
      { day: "DÍA 12", title: "GASHPAPAMPA (4,550 MSNM) - LAGUNA JAHUACOCHA (4,100 MSNM)", content: "Paso Yaucha 4,800 msnm. Mirador Huacrish con panorama de Jahuacocha y Soltera Cocha.", stats: { alt: "4800 m", dist: "12 km", time: "7 hs" } },
      { day: "DÍA 13", title: "JAHUACOCHA (4,100 MSNM) - LLAMAC (3,300 MSNM)", content: "Último día. Paso Pampa Llamac 3,900 m. Descenso al pueblo de Llamac y traslado a Huaraz.", stats: { alt: "3950 m", dist: "13 km", time: "6 hs" } },
      { day: "DÍA 14", title: "HUARAZ – LIMA", content: "Traslado al terminal de bus para el viaje de retorno a Lima." },
      { day: "DÍA 15", title: "LIMA – VUELO INTERNACIONAL", content: "Traslado al aeropuerto Jorge Chávez. Fin de nuestros servicios." }
    ],
    includes: [
      "Espera personalizada en aeropuerto Lima",
      "Tickets de bus Lima - Huaraz - Lima",
      "4 noches hotel (3*) en Huaraz, 1 noche en Lima",
      "Guía oficial de Trekking (AGMP/UIAGM)",
      "Cocinero especializado (menús variados)",
      "Tickets de entrada Huayhuash ($100 incluido)",
      "10kg equipaje personal en mulas",
      "Carpas de alta montaña y equipo de camping",
      "Alimentación completa durante el trek",
      "Botiquín y Oxígeno de primeros auxilios"
    ],
    equipment: [
      "Bolsa de dormir (-10°C / -15°C)",
      "Mochila de diario (30-40L)",
      "Botas de trekking (impermeables)",
      "Casaca de pluma y ropa térmica (capas)",
      "Gorro, guantes y lentes de sol",
      "Bloqueador solar y repelente",
      "Bastones de trekking",
      "Poncho de lluvia"
    ],
    itineraryTitle: "Cronograma",
    itinerarySubtitle: "Travesía",
    includesTitle: "Servicios Incluidos",
    equipmentTitle: "Equipo Sugerido",
    gallery: [
      "/trekking/huayhuash/360/1.png",
      "/trekking/huayhuash/360/2.png",
      "/trekking/huayhuash/360/3.png",
      "/trekking/huayhuash/360/4.png",
      "/trekking/huayhuash/360/5.png",
      "/trekking/huayhuash/360/6.png",
      "/trekking/huayhuash/360/7.png",
      "/trekking/huayhuash/360/8.png"
    ]
  },
  en: {
    hero: {
      titleTop: "TREKKING RANGE",
      titleMain: "HUAYHUASH 360",
      backgroundImage: "/trekking/huayhuash/bg-huayhuash.png",
      duration: "15 DAYS / 14 NIGHTS",
      price: "USD. 1,695.00",
      difficulty: "HARD",
      difficultyLevel: "hard"
    },
    intro: {
      code: "HYH-360-15D",
      titlePrefix: "Integral",
      titleAccent: "Exploration",
      description: "This 15-day expedition is the ultimate experience in the Peruvian Andes. We will circle the entire Huayhuash range, crossing passes over 5,000 meters and camping next to intense turquoise glacial lagoons.",
      image: "/trekking/huayhuash/360.png",
      lat: `9° 32' 26" S`,
      lon: `77° 31' 39" W`,
      specs: [
        { label: "LOGISTICS BASE", value: "Huaraz, Peru", icon: "location" },
        { label: "TECHNICAL ZONE", value: "Central Andes", icon: "zone" },
        { label: "SEASON", value: "April - December", icon: "season" },
        { label: "SERVICE", value: "Superior Comfort", icon: "service" }
      ]
    },
    itinerary: [
      { day: "DAY 01", title: "LIMA PERU (161 MASL) – HUARAZ (3100 MASL)", content: "We FRANPISCO ADVENTURE will wait for you at Jorge Chávez Airport. Then we transfer you to the public bus terminal for the trip to Huaraz. Upon arrival in Huaraz, we transfer you to your hotel." },
      { day: "DAY 02", title: "FULL DAY ROCUTOYOC LAGOON (4450 MASL) – ACCLIMATIZATION", content: "Departure from Huaraz at 6:00 am. Guided tour to Rocutuyoc Lagoon. Visit Cashapunta lookout, Ruripaccha waterfall, rock paintings, Rocutuyoc lagoon, and Ruripaccha glacier." },
      { day: "DAY 03", title: "FREE DAY", content: "Rest day for altitude adjustment and energy recovery before starting the circuit." },
      { day: "DAY 04", title: "TRANSFER HUARAZ - CHIQUIÁN - CUARTELWAIN (4180 MASL)", content: "At 8:00 am we drive to Cuartelwain (5 hours). Donkeys and muleteers await. First camp at 4,180 masl for acclimatization.", stats: { trans: "05 hours", alt: "4180m", food: "Lunch and Dinner" } },
      { day: "DAY 05", title: "CUARTELWAIN (4180M) – MITUCOCHA (4230M)", content: "Cacananpunta Pass (4,700 masl). Views of Pucacocha and Yanacocha lagoons and the Queropalca valley. Camp with views of Ninashanca and Jirishanca.", stats: { alt: "4700 m", dist: "09 km", time: "04 to 05 hs" } },
      { day: "DAY 06", title: "MITUCOCHA (4230 MASL) - CARHUACOCHA (4280 MASL)", content: "Carhuac Pass (4,650 masl). Alternate route to the three lagoons lookout. Views of Siula, Yerupaja, and Toro mountains.", stats: { alt: "4650 m", dist: "13 km", time: "6 hs" } },
      { day: "DAY 07", title: "CARHUACOCHA (4280 MASL) - HUAYHUASH (4300 MASL)", content: "Higher difficulty day. Lookout of the three lagoons (Siulacocha, Ganrajanca, Azulcocha). Siula Pass (4,800 masl).", stats: { alt: "4800 m", dist: "15 km", time: "09 hs" } },
      { day: "DAY 08", title: "HUAYHUASH (4350 MASL) - VICONGA (4330 MASL)", content: "Portachuelo Pass (4,750 masl). Views of Cordillera Raura. Viconga camp and natural thermal baths.", stats: { alt: "4750 m", dist: "11 km", time: "06 hs" } },
      { day: "DAY 09", title: "VICONGA (4330 MASL)- CUYOCPAMPA (4550 MASL)", content: "Cuyoc Pass (5,000 masl). Full views of Raura and Huayhuash. Optional: San Antonio Lookout (5,120 m).", stats: { alt: "5050 m", dist: "13 km", time: "6 hs" } },
      { day: "DAY 10", title: "CUYOCPAMPA (4550 MASL) - HUAYLLAPA (3630 MASL)", content: "Sunrise at Santa Rosa Pass (5,080 masl). Descent through Jurao lagoon to the village of Huayllapa.", stats: { alt: "5080 m", dist: "19 km", time: "10 hs" } },
      { day: "DAY 11", title: "HUAYLLAPA (3630 MASL) - GASHPAPAMPA (4550 MASL)", content: "Ascent to Tapush Pass (4,800 masl). View of Diablo Mudo peak. Arrival at Gashpapampa.", stats: { alt: "4.800 m", dist: "15 km", time: "8 hs" } },
      { day: "DAY 12", title: "GASHPAPAMPA (4550 MASL) - JAHUACOCHA LAGOON (4100 MASL)", content: "Yaucha Pass (4,800 masl). Huacrish lookout with panoramic views of Jahuacocha and Soltera Cocha.", stats: { alt: "4800 m", dist: "12 km", time: "7 hs" } },
      { day: "DAY 13", title: "JAHUACOCHA (4100 MASL) - LLAMAC (3300 MASL)", content: "Last day. Pampa Llamac Pass (3,900 m). Descent to Llamac village and transfer to Huaraz.", stats: { alt: "3950 m", dist: "13 km", time: "6 hs" } },
      { day: "DAY 14", title: "HUARAZ – LIMA", content: "Transfer to bus terminal for the return trip to Lima." },
      { day: "DAY 15", title: "LIMA – INTERNATIONAL FLIGHT", content: "Transfer to Jorge Chávez Airport. End of services." }
    ],
    includes: [
      "Airport reception in Lima",
      "Lima - Huaraz - Lima bus tickets",
      "4 nights hotel (3*) in Huaraz, 1 night in Lima",
      "Official Trekking Guide (AGMP/UIAGM)",
      "Specialized Cook (varied menus)",
      "Huayhuash entrance tickets ($100 included)",
      "10kg gear allowance on mules",
      "High mountain tents and camping equipment",
      "Full board during the trek",
      "Woki toki and First Aid kit"
    ],
    equipment: [
      "Sleeping bag (-10°C / -15°C)",
      "Daypack (30-40L)",
      "Waterproof trekking boots",
      "Down jacket and layered thermal clothing",
      "Hat, gloves, and sunglasses",
      "Sunblock and repellent",
      "Trekking poles",
      "Rain poncho"
    ],
    itineraryTitle: "Timeline",
    itinerarySubtitle: "Journey",
    includesTitle: "Services Included",
    equipmentTitle: "Suggested Equipment",
    gallery: [
      "/trekking/huayhuash/360/1.png",
      "/trekking/huayhuash/360/2.png",
      "/trekking/huayhuash/360/3.png",
      "/trekking/huayhuash/360/4.png",
      "/trekking/huayhuash/360/5.png",
      "/trekking/huayhuash/360/6.png",
      "/trekking/huayhuash/360/7.png",
      "/trekking/huayhuash/360/8.png"
    ]
  }
};
