export const huayhuashPeaksData = {
  id: 'peaks',
  category: 'trekking',
  subCategory: 'huayhuash',
  es: {
    hero: {
      titleTop: "CUMBRES DE LA",
      titleMain: "CORDILLERA HUAYHUASH",
      backgroundImage: "/trekking/huayhuash/bg-cumbres.png",
      duration: "13 DÍAS / 12 NOCHES",
      price: "USD. 1,995.00",
      difficulty: "DIFÍCIL",
      difficultyLevel: "hard"
    },
    intro: {
      code: "HYH-CB-13D",
      titlePrefix: "Diablo Mudo",
      titleAccent: "& Pumarinri",
      description: "Una expedición técnica diseñada para montañistas que buscan combinar el espectacular trekking de Huayhuash con cumbres de más de 5,000 metros, incluyendo el Diablo Mudo y Pumarinri.",
      image: "/trekking/huayhuash/cumbres.png",
      lat: `10° 16' 18" S`,
      lon: `76° 54' 14" W`,
      specs: [
        { label: "INICIO / LOGÍSTICA", value: "Huaraz, Perú", icon: "location" },
        { label: "ACTIVIDAD", value: "Hiking & Montañismo", icon: "zone" },
        { label: "TEMPORADA", value: "Abril - Diciembre", icon: "season" },
        { label: "SERVICIO", value: "Guía UIAGM Especializado", icon: "service" }
      ]
    },
    itinerary: [
      { day: "DÍA 01", title: "LLEGADA A LIMA – PERÚ (161 MSNM) – HUARAZ (3100 MSNM)", content: "Llegada al aeropuerto Jorge Chávez. Traslado a Huaraz en bus (8 horas) o vuelo (50 min). Recepción y traslado al hotel.", stats: { time: "8 hs" } },
      { day: "DÍA 02", title: "ACLIMATACIÓN: LAGUNA ROCUTOYOC (4450 MSNM) – CORDILLERA BLANCA", content: "Visita al mirador Cashapunta, cascada Ruripaccha, pinturas rupestres y laguna Rocutuyoc. Caminata al glaciar Ruripaccha (4,650 msnm).", stats: { alt: "4450m", time: "9-10 hs" } },
      { day: "DÍA 03", title: "DÍA LIBRE", content: "Día de descanso estratégico para optimizar la aclimatación y recuperar energía antes de iniciar la expedición." },
      { day: "DÍA 04", title: "HUARAZ (3100M) - CUARTELWAIN (4180M) - MITUCOCHA (4230M)", content: "Traslado a Cuartelwain. Inicio del trekking cruzando el paso Cacananpunta (4,700 msnm). Vistas de los picos Ninashanca, Rondoy y Jirishanca.", stats: { alt: "4700 m", dist: "09 km", time: "04-05 hs" } },
      { day: "DÍA 05", title: "MITUCOCHA (4230 MSNM) - CARHUACOCHA (4280 MSNM)", content: "Caminata por el valle Jancapampa. Paso Carhuac (4,650 msnm) o ruta alterna al mirador de las tres lagunas.", stats: { alt: "4650 m", dist: "13 km", time: "6 hs" } },
      { day: "DÍA 06", title: "CARHUACOCHA (4280 MSNM) - HUAYHUASH (4300 MSNM)", content: "Día de mayor exigencia. Mirador de las tres lagunas (Siulacocha, Ganrajanca, Azulcocha). Paso Siula (4,800 msnm).", stats: { alt: "4800 m", dist: "15 km", time: "09 hs" } },
      { day: "DÍA 07", title: "HUAYHUASH (4350 MSNM) - VICONGA (4330 MSNM)", content: "Día tranquilo. Paso Portachuelo (4,750 msnm) con vistas de la Cordillera Raura. Campamento junto a las aguas termales de Viconga.", stats: { alt: "4750 m", dist: "11 km", time: "06 hs" } },
      { day: "DÍA 08", title: "ASCENSO NEVADO PUMARINRI (5465 MSNM) - CUYOCPAMPA", content: "Ataque a la cumbre (01:30 am). 2 horas de glaciar hasta la cima. Vistas de Raura y Huayhuash. Descenso vía paso Cuyoc (5,000m).", stats: { alt: "5465 m", dist: "18 km", time: "14 hs" } },
      { day: "DÍA 09", title: "CUYOCPAMPA (4550 MSNM) - HUAYLLAPA (3630 MSNM)", content: "Paso Santa Rosa (5,080 msnm) al amanecer. Descenso por el valle Calinca hasta el pueblo de Huayllapa.", stats: { alt: "5080 m", dist: "19 km", time: "10 hs" } },
      { day: "DÍA 10", title: "HUAYLLAPA (3630 MSNM) - GASHPAPAMPA (4550 MSNM)", content: "Ascenso exigente al paso Tapush (4,800 msnm). Vista del nevado Diablo Mudo. Campo base Gashpapampa.", stats: { alt: "4800 m", dist: "15 km", time: "08 hs" } },
      { day: "DÍA 11", title: "ASCENSO NEVADO DIABLO MUDO (5350 M) – JAHUACOCHA (4100 M)", content: "Ascenso por la arista y cumbre (01:30 am). Vista fenomenal de la cordillera Huayhuash. Descenso a laguna Jahuacocha.", stats: { alt: "5350 m", dist: "19 km", time: "14 hs" } },
      { day: "DÍA 12", title: "JAHUACOCHA (4100 MSNM) - LLAMAC (3300 MSNM)", content: "Último día de trekking. Paso Pampa Llamac (3,900 m). Descenso final a Llamac y traslado de regreso a Huaraz.", stats: { alt: "3950 m", dist: "13 km", time: "6 hs" } },
      { day: "DÍA 13", title: "TRASLADO AL TERMINAL O AEROPUERTO", content: "Traslado del hotel al terminal de bus o aeropuerto para el retorno a Lima. Fin de servicios." }
    ],
    includes: [
      "Briefing técnico en oficina Huaraz",
      "1 Día de aclimatación (compartido)",
      "Traslados privados Huaraz - Huayhuash",
      "Guía oficial de Trekking y Guía de Montaña UIAGM",
      "Cocinero especializado en expedición",
      "Alimentación completa en el trek (opciones Veg/GF)",
      "Burros y arrieros (6kg de carga personal)",
      "Equipo de camping completo",
      "Equipo técnico: Casco, Piolet, Arnés, Crampones, Cuerdas",
      "Radios y Botiquín de primeros auxilios"
    ],
    equipment: [
      "Bolsa de dormir -10°C y Colchoneta",
      "Mochila de ataque 40L",
      "Botas de trekking y Botas de montaña",
      "Ropa técnica por capas (Pluma, Impermeable)",
      "Gorro para frío y sol, Guantes",
      "Lentes de sol con protección UV",
      "Bloqueador solar y Poncho de lluvia",
      "Bastones de trekking"
    ],
    itineraryTitle: "Cronograma",
    itinerarySubtitle: "Expedición",
    includesTitle: "Servicios Incluidos",
    equipmentTitle: "Equipo Técnico",
    gallery: [
      "/trekking/huayhuash/cumbres/1.png",
      "/trekking/huayhuash/cumbres/2.png",
      "/trekking/huayhuash/cumbres/3.png",
      "/trekking/huayhuash/cumbres/4.png",
      "/trekking/huayhuash/cumbres/5.png",
      "/trekking/huayhuash/cumbres/6.png",
      "/trekking/huayhuash/cumbres/7.png",
      "/trekking/huayhuash/cumbres/8.png"
    ]
  },
  en: {
    hero: {
      titleTop: "PEAKS OF THE",
      titleMain: "HUAYHUASH RANGE",
      backgroundImage: "/trekking/huayhuash/bg-cumbres.png",
      duration: "13 DAYS / 12 NIGHTS",
      price: "USD. 1,995.00",
      difficulty: "HARD",
      difficultyLevel: "hard"
    },
    intro: {
      code: "HYH-CB-13D",
      titlePrefix: "Diablo Mudo",
      titleAccent: "& Pumarinri",
      description: "A technical expedition designed for mountaineers seeking to combine the spectacular Huayhuash trekking with summits over 5,000 meters, including Diablo Mudo and Pumarinri.",
      image: "/trekking/huayhuash/cumbres.png",
      lat: `10° 16' 18" S`,
      lon: `76° 54' 14" W`,
      specs: [
        { label: "START / LOGISTICS", value: "Huaraz, Peru", icon: "location" },
        { label: "ACTIVITY", value: "Hiking & Mountaineering", icon: "zone" },
        { label: "SEASON", value: "April - December", icon: "season" },
        { label: "SERVICE", value: "Specialized UIAGM Guide", icon: "service" }
      ]
    },
    itinerary: [
      { day: "DAY 01", title: "ARRIVAL IN LIMA – PERU (161 MASL) – HUARAZ (3100 MASL)", content: "Arrival at Jorge Chávez Airport. Transfer to Huaraz by bus (8 hours) or flight (50 min). Reception and transfer to hotel.", stats: { time: "8 hs" } },
      { day: "DAY 02", title: "ACCLIMATIZATION: ROCUTOYOC LAGOON (4450 MASL) – WHITE RANGE", content: "Visit to Cashapunta lookout, Ruripaccha waterfall, cave paintings and Rocutuyoc lagoon. Hike to Ruripaccha glacier (4,650 masl).", stats: { alt: "4450m", time: "9-10 hs" } },
      { day: "DAY 03", title: "FREE DAY", content: "Strategic rest day to optimize acclimatization and recover energy before starting the Huayhuash expedition." },
      { day: "DAY 04", title: "HUARAZ (3100M) - CUARTELWAIN (4180M) - MITUCOCHA (4230M)", content: "Transfer to Cuartelwain. Start of trekking crossing the Cacananpunta Pass (4,700 masl). Views of Ninashanca, Rondoy and Jirishanca peaks.", stats: { alt: "4700 m", dist: "09 km", time: "04-05 hs" } },
      { day: "DAY 05", title: "MITUCOCHA (4230 MASL) - CARHUACOCHA (4280 MASL)", content: "Hike through Jancapampa valley. Carhuac Pass (4,650 masl) or alternate route to the three lagoons lookout. Views of Yerupaja and Siula.", stats: { alt: "4650 m", dist: "13 km", time: "6 hs" } },
      { day: "DAY 06", title: "CARHUACOCHA (4280 MASL) - HUAYHUASH (4300 MASL)", content: "Most demanding day. Three lagoons lookout (Siulacocha, Ganrajanca, Azulcocha). Siula Pass (4,800 masl).", stats: { alt: "4800 m", dist: "15 km", time: "09 hs" } },
      { day: "DAY 07", title: "HUAYHUASH (4350 MASL) - VICONGA (4330 MASL)", content: "Easy day. Portachuelo Pass (4,750 masl) with views of Cordillera Raura. Camp next to the hot springs of Viconga.", stats: { alt: "4750 m", dist: "11 km", time: "06 hs" } },
      { day: "DAY 08", title: "PUMARINRI MOUNTAIN ASCENT (5465 MASL) - CUYOCPAMPA", content: "Summit push (01:30 am). 2 hours of glacier to the top. Views of Raura and Huayhuash. Descent via Cuyoc Pass (5,000m).", stats: { alt: "5465 m", dist: "18 km", time: "14 hs" } },
      { day: "DAY 09", title: "CUYOCPAMPA (4550 MASL) - HUAYLLAPA (3630 MASL)", content: "Santa Rosa Pass (5,080 masl) at sunrise. Descent through Calinca valley to the village of Huayllapa.", stats: { alt: "5080 m", dist: "19 km", time: "10 hs" } },
      { day: "DAY 10", title: "HUAYLLAPA (3630 MASL) - GASHPAPAMPA (4550 MASL)", content: "Demanding ascent to Tapush Pass (4,800 masl). View of Diablo Mudo peak. Base camp Gashpapampa.", stats: { alt: "4800 m", dist: "15 km", time: "08 hs" } },
      { day: "DAY 11", title: "DIABLO MUDO MOUNTAIN ASCENT (5350 M) – JAHUACOCHA (4100 M)", content: "Ascent to the ridge and summit (01:30 am). Phenomenal view of the Huayhuash range. Descent to Jahuacocha lagoon.", stats: { alt: "5350 m", dist: "19 km", time: "14 hs" } },
      { day: "DAY 12", title: "JAHUACOCHA (4100 MASL) - LLAMAC (3300 MASL)", content: "Last day of trekking. Pampa Llamac Pass (3,900m). Final descent to Llamac and transfer back to Huaraz.", stats: { alt: "3950 m", dist: "13 km", time: "6 hs" } },
      { day: "DAY 13", title: "TRANSFER TO TERMINAL OR AIRPORT", content: "Transfer from hotel to bus terminal or airport for the return to Lima. End of services." }
    ],
    includes: [
      "Technical briefing at Huaraz office",
      "1 Acclimatization day (shared)",
      "Private Huaraz - Huayhuash transfers",
      "Official Trekking Guide and UIAGM Mountain Guide",
      "Specialized Expedition Cook",
      "Full board during trek (Veg/GF options)",
      "Donkeys and muleteers (6kg personal gear allowance)",
      "Full camping equipment",
      "Technical gear: Helmet, Ice axe, Harness, Crampons, Ropes",
      "Woki toki and First Aid kit"
    ],
    equipment: [
      "Sleeping bag -10°C and Sleeping pad",
      "Daypack 40L",
      "Trekking boots and Mountain boots",
      "Layered technical clothing (Down, Waterproof)",
      "Hat for cold and sun, Gloves",
      "UV protection Sunglasses",
      "Sunblock and Rain poncho",
      "Trekking poles"
    ],
    itineraryTitle: "Timeline",
    itinerarySubtitle: "Expedition",
    includesTitle: "Services Included",
    equipmentTitle: "Technical Gear",
    gallery: [
      "/trekking/huayhuash/cumbres/1.png",
      "/trekking/huayhuash/cumbres/2.png",
      "/trekking/huayhuash/cumbres/3.png",
      "/trekking/huayhuash/cumbres/4.png",
      "/trekking/huayhuash/cumbres/5.png",
      "/trekking/huayhuash/cumbres/6.png",
      "/trekking/huayhuash/cumbres/7.png",
      "/trekking/huayhuash/cumbres/8.png"
    ]
  }
};
