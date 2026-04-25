export const huayhuashSpectacularData = {
  id: 'spectacular',
  category: 'trekking',
  subCategory: 'huayhuash',
  es: {
    hero: {
      titleTop: "LA MEJOR RUTA",
      titleMain: "HUAYHUASH ESPECTACULAR",
      backgroundImage: "/trekking/huayhuash/bg-espectacular.png",
      duration: "15 DÍAS / 14 NOCHES",
      price: "USD. 1,995.00",
      difficulty: "DIFÍCIL",
      difficultyLevel: "hard"
    },
    intro: {
      code: "HYH-SPEC-15D",
      titlePrefix: "Circuito",
      titleAccent: "Supremo",
      description: "Esta es nuestra ruta más completa y exclusiva. 15 días de inmersión total en la Cordillera Huayhuash, incluyendo el mirador Cero Gran Vista frente al Siula Grande y servicios logísticos de nivel superior.",
      image: "/trekking/huayhuash/espectacular/1.png",
      lat: `10° 17' 22" S`,
      lon: `76° 54' 01" W`,
      specs: [
        { label: "INICIO / LOGÍSTICA", value: "Lima / Huaraz, Perú", icon: "location" },
        { label: "PUNTOS CLAVE", value: "Cero Gran Vista, Santa Rosa", icon: "zone" },
        { label: "TEMPORADA", value: "Marzo - Diciembre", icon: "season" },
        { label: "SERVICIO", value: "Logística Confort Total", icon: "service" }
      ]
    },
    itinerary: [
      { day: "DÍA 01", title: "LIMA – PERÚ (100 MSNM) – HUARAZ (3100 M)", content: "Recepción en el aeropuerto de Lima y traslado directo a Huaraz (8 horas) en bus público o vuelo privado opcional. Traslado al hotel.", stats: { time: "8 hs" } },
      { day: "DÍA 02", title: "ACLIMATACIÓN: LAGUNA ROCUTOYOC (4450 MSNM) – CORDILLERA BLANCA", content: "Tour de aclimatación visitando el mirador Cashapunta, cascada Ruripaccha, pinturas rupestres y laguna Rocutuyoc. Caminata al glaciar (4,650 msnm).", stats: { alt: "4450m", time: "9-10 hs" } },
      { day: "DÍA 03", title: "DÍA LIBRE EN HUARAZ", content: "Descanso estratégico en la ciudad para optimizar la aclimatación y preparación logística antes de la expedición." },
      { day: "DÍA 04", title: "HUARAZ (3100M) - CUARTELWAIN (4180M) - MITUCOCHA (4280M)", content: "Traslado a Cuartelwain (5h). Inicio del trekking cruzando el primer paso Cacananpunta (4,700 msnm). Campamento Jancapampa.", stats: { alt: "4700 m", time: "5 h" } },
      { day: "DÍA 05", title: "MITUCOCHA (4230 MSNM) - CARHUACOCHA (4280 MSNM)", content: "Caminata al mirador Carhuac (4,750 msnm). Vistas espectaculares de los picos Yerupaja (6,634m) y Siula (6,344m).", stats: { alt: "4750 m", dist: "13 km", time: "5 h" } },
      { day: "DÍA 06", title: "CARHUACOCHA (4280 MSNM) - HUAYHUASH (4350 MSNM)", content: "Día exigente. Visita al mirador de las tres lagunas (Siulacocha, Ganrajanca, Quesillacocha). Paso Siula (4,800 msnm).", stats: { alt: "4800 m", dist: "15 km", time: "09 hs" } },
      { day: "DÍA 07", title: "HUAYHUASH (4350 MSNM) - CUYOCPAMPA (4550 MSNM)", content: "Cruce entre las montañas Trapecio y Putscanturpa hacia el paso Trapecio (5,030 msnm). Opcional: Mirador San Antonio (5,120 msnm).", stats: { alt: "5,030 m", dist: "13 km", time: "7 h" } },
      { day: "DÍA 08", title: "CUYOCPAMPA (4550 MSNM) – CUTATAMBO (4280 MSNM)", content: "Paso Santa Rosa (5,080 msnm) con vista increíble de la cara norte de Huayhuash. Descenso a la laguna Jurao.", stats: { alt: "5080 m", dist: "11 km", time: "6 h" } },
      { day: "DÍA 09", title: "CUTATAMBO – MIRADOR CERO GRAN VISTA (5150 MSNM)", content: "Ascenso al mirador Cero Gran Vista para observar la ruta de Joe Simpson (Tocando el Vacío) en el Siula Grande.", stats: { alt: "5150 m", dist: "14 km", time: "8 h" } },
      { day: "DÍA 10", title: "CUTATAMBO (4280 MSNM) - HUAYLLAPA (3630 MSNM)", content: "Descenso por el valle Calinca hasta el pueblo de Huayllapa. Opcional: alojamiento en casa familiar con wifi y agua caliente.", stats: { dist: "8 km", time: "05 hs" } },
      { day: "DÍA 11", title: "HUAYLLAPA (3630 MSNM) - GASHPAPAMPA (4555 MSNM)", content: "Ascenso largo pero suave al paso Tapush (4,800 msnm). Vistas del nevado Diablo Mudo (5,350 msnm).", stats: { alt: "4800 m", dist: "15 km", time: "08 h" } },
      { day: "DÍA 12", title: "GASHPAPAMPA (4555 MSNM) - LAGUNA JAHUACOCHA (4100 MSNM)", content: "Paso Yaucha (4,800 msnm). Mirador Huacrish con panorama total de los picos más altos de la cordillera.", stats: { alt: "4800 m", dist: "12 km", time: "07 h" } },
      { day: "DÍA 13", title: "JAHUACOCHA (4100 MSNM) - LLAMAC (3300 MSNM)", content: "Último día de trekking. Paso Pampa Llamac (3,900 m). Descenso final a Llamac y traslado de regreso a Huaraz.", stats: { alt: "3900 m", dist: "13 km", time: "06 h" } },
      { day: "DÍA 14", title: "HUARAZ - TRASLADO AL TERMINAL O AEROPUERTO", content: "Traslado del hotel al terminal de bus o aeropuerto para el viaje de retorno a Lima." },
      { day: "DÍA 15", title: "LIMA - TRASLADO AL AEROPUERTO", content: "Traslado final al aeropuerto internacional para su vuelo de retorno. Fin de servicios." }
    ],
    includes: [
      "Recepción aeropuerto Lima y todos los traslados",
      "Tickets de bus Lima - Huaraz - Lima",
      "4 noches hotel en Huaraz + 1 noche en Lima",
      "Briefing técnico detallado en oficina Huaraz",
      "1 Día de aclimatación técnica",
      "Transporte privado a Cuartelwain",
      "Guía oficial de Trekking calificado",
      "Cocinero especializado en alta montaña",
      "10 Días de expedición Huayhuash",
      "10kg de equipaje personal en burros",
      "Equipo de camping completo de alta gama",
      "Radios y Botiquín de primeros auxilios"
    ],
    equipment: [
      "Bolsa de dormir (-10°C recomendado)",
      "Colchoneta aislante / Térmica",
      "Mochila de ataque (40L)",
      "Botas de trekking de alta montaña",
      "Ropa técnica por capas (Pluma, Gore-Tex)",
      "Protección solar (Gorro, lentes, bloqueador)",
      "Bastones de trekking",
      "Poncho de lluvia"
    ],
    itineraryTitle: "Cronograma",
    itinerarySubtitle: "Expedición",
    includesTitle: "Servicios Incluidos",
    equipmentTitle: "Equipo Requerido",
    gallery: [
      "/trekking/huayhuash/espectacular/1.png",
      "/trekking/huayhuash/espectacular/2.png",
      "/trekking/huayhuash/espectacular/3.png",
      "/trekking/huayhuash/espectacular/4.png",
      "/trekking/huayhuash/espectacular/5.png",
      "/trekking/huayhuash/espectacular/6.png",
      "/trekking/huayhuash/espectacular/7.png",
      "/trekking/huayhuash/espectacular/8.png"
    ]
  },
  en: {
    hero: {
      titleTop: "THE BEST ROUTE",
      titleMain: "HUAYHUASH SPECTACULAR",
      backgroundImage: "/trekking/huayhuash/bg-espectacular.png",
      duration: "15 DAYS / 14 NIGHTS",
      price: "USD. 1,995.00",
      difficulty: "HARD",
      difficultyLevel: "hard"
    },
    intro: {
      code: "HYH-SPEC-15D",
      titlePrefix: "Supreme",
      titleAccent: "Circuit",
      description: "This is our most complete and exclusive route. 15 days of total immersion in the Cordillera Huayhuash, including the Cero Gran Vista lookout facing Siula Grande and superior logistics services.",
      image: "/trekking/huayhuash/espectacular/1.png",
      lat: `10° 17' 22" S`,
      lon: `76° 54' 01" W`,
      specs: [
        { label: "START / LOGISTICS", value: "Lima / Huaraz, Peru", icon: "location" },
        { label: "KEY POINTS", value: "Cero Gran Vista, Santa Rosa", icon: "zone" },
        { label: "SEASON", value: "March - December", icon: "season" },
        { label: "SERVICE", value: "Full Comfort Logistics", icon: "service" }
      ]
    },
    itinerary: [
      { day: "DAY 01", title: "LIMA – PERU (100 MASL) – HUARAZ (3100 M)", content: "Reception at Lima airport and direct transfer to Huaraz (8 hours) by public bus or optional private flight. Transfer to hotel.", stats: { time: "8 hs" } },
      { day: "DAY 02", title: "ACCLIMATIZATION: ROCUTOYOC LAGOON (4450 MASL) – WHITE RANGE", content: "Acclimatization tour visiting Cashapunta lookout, Ruripaccha waterfall, cave paintings and Rocutuyoc lagoon. Hike to the glacier (4,650 masl).", stats: { alt: "4450m", time: "9-10 hs" } },
      { day: "DAY 03", title: "FREE DAY IN HUARAZ", content: "Strategic rest in the city to optimize acclimatization and logistical preparation before the expedition." },
      { day: "DAY 04", title: "HUARAZ (3100M) - CUARTELWAIN (4180M) - MITUCOCHA (4280M)", content: "Transfer to Cuartelwain (5h). Start of trekking crossing the first pass Cacananpunta (4,700 masl). Jancapampa camp.", stats: { alt: "4700 m", time: "5 h" } },
      { day: "DAY 05", title: "MITUCOCHA (4230 MASL) - CARHUACOCHA (4280 MASL)", content: "Hike to Carhuac lookout (4,750 masl). Spectacular views of Yerupaja (6,634m) and Siula (6,344m) peaks.", stats: { alt: "4750 m", dist: "13 km", time: "5 h" } },
      { day: "DAY 06", title: "CARHUACOCHA (4280 MASL) - HUAYHUASH (4350 MASL)", content: "Demanding day. Visit to the three lagoons lookout (Siulacocha, Ganrajanca, Quesillacocha). Siula Pass (4,800 masl).", stats: { alt: "4800 m", dist: "15 km", time: "09 hs" } },
      { day: "DAY 07", title: "HUAYHUASH (4350 MASL) - CUYOCPAMPA (4550 MASL)", content: "Crossing between Trapecio and Putscanturpa mountains to Trapecio Pass (5,030 masl). Optional: San Antonio Lookout (5,120 masl).", stats: { alt: "5,030 m", dist: "13 km", time: "7 h" } },
      { day: "DAY 08", title: "CUYOCPAMPA (4550 MASL) – CUTATAMBO (4280 MASL)", content: "Santa Rosa Pass (5,080 masl) with incredible view of the northern face of Huayhuash. Descent to Jurao lagoon.", stats: { alt: "5080 m", dist: "11 km", time: "6 h" } },
      { day: "DAY 09", title: "CUTATAMBO – CERO GRAN VISTA LOOKOUT (5150 MASL)", content: "Ascent to Cero Gran Vista lookout to observe Joe Simpson's route (Touching the Void) on Siula Grande.", stats: { alt: "5150 m", dist: "14 km", time: "8 h" } },
      { day: "DAY 10", title: "CUTATAMBO (4280 MASL) - HUAYLLAPA (3630 MASL)", content: "Descent through Calinca valley to the village of Huayllapa. Optional: homestay accommodation with wifi and hot water.", stats: { dist: "8 km", time: "05 hs" } },
      { day: "DAY 11", title: "HUAYLLAPA (3630 MASL) - GASHPAPAMPA (4555 MASL)", content: "Long but gentle ascent to Tapush Pass (4,800 masl). Views of Diablo Mudo peak (5,350 masl).", stats: { alt: "4800 m", dist: "15 km", time: "08 h" } },
      { day: "DAY 12", title: "GASHPAPAMPA (4555 MASL) - JAHUACOCHA LAGOON (4100 MASL)", content: "Yaucha Pass (4,800 masl). Huacrish Lookout with full panorama of the highest peaks of the range.", stats: { alt: "4800 m", dist: "12 km", time: "07 h" } },
      { day: "DAY 13", title: "JAHUACOCHA (4100 MASL) - LLAMAC (3300 MASL)", content: "Last day of trekking. Pampa Llamac Pass (3,900m). Final descent to Llamac and transfer back to Huaraz.", stats: { alt: "3900 m", dist: "13 km", time: "06 h" } },
      { day: "DAY 14", title: "HUARAZ - TRANSFER TO TERMINAL OR AIRPORT", content: "Transfer from hotel to bus terminal or airport for the return trip to Lima." },
      { day: "DAY 15", title: "LIMA - TRANSFER TO AIRPORT", content: "Final transfer to the international airport for your return flight. End of services." }
    ],
    includes: [
      "Lima airport reception and all transfers",
      "Lima - Huaraz - Lima bus tickets",
      "4 nights hotel in Huaraz + 1 night in Lima",
      "Detailed technical briefing at Huaraz office",
      "1 Technical acclimatization day",
      "Private transport to Cuartelwain",
      "Official Qualified Trekking Guide",
      "Specialized High Mountain Cook",
      "10 Days Huayhuash expedition",
      "10kg gear allowance on donkeys",
      "Full high-end camping equipment",
      "Woki toki and First Aid kit"
    ],
    equipment: [
      "Sleeping bag (-10°C recommended)",
      "Sleeping pad / Thermal mat",
      "Daypack (40L)",
      "High mountain trekking boots",
      "Layered technical clothing (Down, Gore-Tex)",
      "Sun protection (Hat, glasses, sunblock)",
      "Trekking poles",
      "Rain poncho"
    ],
    itineraryTitle: "Timeline",
    itinerarySubtitle: "Expedition",
    includesTitle: "Services Included",
    equipmentTitle: "Required Equipment",
    gallery: [
      "/trekking/huayhuash/espectacular/1.png",
      "/trekking/huayhuash/espectacular/2.png",
      "/trekking/huayhuash/espectacular/3.png",
      "/trekking/huayhuash/espectacular/4.png",
      "/trekking/huayhuash/espectacular/5.png",
      "/trekking/huayhuash/espectacular/6.png",
      "/trekking/huayhuash/espectacular/7.png",
      "/trekking/huayhuash/espectacular/8.png"
    ]
  }
};
