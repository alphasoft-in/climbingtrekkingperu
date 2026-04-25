export const climbingChileOjosData = {
  id: 'ojos-del-salado',
  category: 'chile',
  subCategory: 'atacama',
  es: {
    hero: {
      titleTop: "THE WORLD'S HIGHEST VOLCANO",
      titleMain: "OJOS DEL SALADO 6893M",
      backgroundImage: "/slider_5.png",
      duration: "13 DÍAS",
      price: "USD 4,950.00",
      difficulty: "EXTREMA / ALTA MONTAÑA",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CHI-OJS-13",
      titlePrefix: "El Gigante del",
      titleAccent: "Atacama",
      description: "El Volcán Ojos del Salado, con sus imponentes 6893 metros, ostenta el título del volcán más alto del mundo y la segunda cumbre más elevada de América. Ubicado en el corazón del Desierto de Atacama, es un desafío de aislamiento absoluto y condiciones extremas.",
      image: "/slider_5.png",
      lat: `27° 06' 34" S`,
      lon: `68° 32' 32" W`,
      specs: [
        { label: 'PUNTO PARTIDA', value: 'Copiapó, Chile', icon: 'location' },
        { label: 'ACTIVIDAD', value: 'Expedición 6000+', icon: 'zone' },
        { label: 'TEMPORADA', value: 'Octubre - Abril', icon: 'season' },
        { label: 'DIFICULTAD', value: 'Física Extrema', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DÍA 01', title: 'LLEGADA A SANTIAGO - COPIAPÓ', content: 'Recepción en Copiapó (vía aérea o terrestre desde Santiago). Traslado al hotel y descanso.', stats: { alt: '391m' } },
      { day: 'DÍA 02', title: 'DÍA LIBRE EN COPIAPÓ', content: 'Día de preparación, revisión de equipo técnico y última logística antes de internarnos en el desierto de Atacama.', stats: { status: 'Logistics' } },
      { day: 'DÍA 03', title: 'COPIAPÓ – LAGUNA SANTA ROSA (3800 M)', content: 'Traslado en 4x4 al altiplano. Primer campamento junto a la laguna. Aclimatación suave con vistas de flamencos y volcanes.', stats: { time: '4h Drive', alt: '3800m' } },
      { day: 'DÍA 04', title: 'LAGUNA SANTA ROSA – LAGUNA VERDE (4350 M)', content: 'Continuamos hacia Laguna Verde. Campamento cerca de aguas termales naturales. Paisajes surrealistas de color turquesa.', stats: { time: '3h Drive', alt: '4350m' } },
      { day: 'DÍA 05', title: 'CUMBRE VOLCÁN MULAS MUERTAS (5897 M)', content: 'Ascensión de aclimatación activa. Una cumbre de casi 6000m para preparar el cuerpo para la altitud extrema. Retorno a Laguna Verde.', stats: { time: '6-7h Ascent', alt: '5897m' } },
      { day: 'DÍA 06', title: 'LAGUNA VERDE – REFUGIO ATACAMA (5250 M)', content: 'Traslado al campo base alto. Establecimiento del campamento en el Refugio Atacama.', stats: { time: '4h Drive', alt: '5250m' } },
      { day: 'DÍA 07', title: 'REFUGIO ATACAMA – TEJOS (PORTEO)', content: 'Caminata de porteo de equipo al Refugio Tejos (5800m) y retorno a Atacama para dormir. Mejora la aclimatación.', stats: { time: '5h Day', alt: '5800m' } },
      { day: 'DÍA 08', title: 'ESTABLECIMIENTO EN REFUGIO TEJOS (5800 M)', content: 'Ascenso final al Refugio Tejos para pernoctar. Preparación táctica para el ataque a la cumbre.', stats: { time: '3h Ascent', alt: '5800m' } },
      { day: 'DÍA 09', title: 'DÍA EXTRA / FLEXIBLE', content: 'Día de reserva para mal tiempo o refuerzo de aclimatación. Crucial para el éxito en esta altitud.', stats: { status: 'Flexible' } },
      { day: 'DÍA 10', title: 'CUMBRE OJOS DEL SALADO (6893 M)', content: 'Ataque a la cumbre del volcán más alto del mundo. Escalada técnica final en el cráter. El techo de Chile alcanzado. Descenso a Atacama.', stats: { time: '14h Day', alt: '6893m' } },
      { day: 'DÍA 11', title: 'REFUGIO ATACAMA – COPIAPÓ', content: 'Largo descenso en 4x4 desde el altiplano de regreso a la civilización. Noche en hotel en Copiapó.', stats: { time: '8h Drive', alt: '391m' } },
      { day: 'DÍA 12', title: 'COPIAPÓ – SANTIAGO', content: 'Traslado al aeropuerto o terminal para el retorno a Santiago.', stats: { status: 'Transfer' } },
      { day: 'DÍA 13', title: 'SANTIAGO – VUELO INTERNACIONAL', content: 'Fin de los servicios. Vuelo de retorno a su país de origen.', stats: { status: 'Departure' } }
    ],
    includes: [
      'Traslados Aeropuerto/Terminal - Hotel en Copiapó',
      '2 noches de hotel en Copiapó con desayuno',
      'Transporte privado 4x4 durante toda la expedición',
      'Guía de Montaña Profesional Certificado',
      'Alimentación completa durante la expedición',
      'Equipos de campamento (Carpas, cocina, gas)',
      'Permisos de ascensión y acceso al Parque Nacional',
      'Oxígeno de emergencia y comunicaciones satelitales',
      'Botiquín de primeros auxilios avanzado'
    ],
    excludes: [
      'Vuelos internacionales y domésticos (Santiago - Copiapó)',
      'Seguro de montaña obligatorio (con rescate)',
      'Equipo técnico personal (Saco de dormir, botas, etc.)',
      'Gastos personales y propinas',
      'Hoteles y comidas en Santiago'
    ],
    equipment: [
      'Saco de dormir de alta montaña (-30°C)',
      'Botas dobles o triples para 7000m',
      'Grampones de 12 puntas y Piolet (según temporada)',
      'Arnés de montaña y Casco',
      'Ropa técnica extrema (Gore-Tex, Pluma pesada)',
      'Guantes de expedición y mitones de pluma',
      'Gafas de ventisca y sol (Cat. 4)',
      'Mochila de expedición (70L) y mochila de ataque (40L)',
      'Termos de acero inoxidable'
    ],
    itineraryTitle: "Expedición",
    itinerarySubtitle: "Cronograma",
    includesTitle: "Servicios Incluidos",
    equipmentTitle: "Equipo Requerido",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  },
  en: {
    hero: {
      titleTop: "THE WORLD'S HIGHEST VOLCANO",
      titleMain: "OJOS DEL SALADO 6893M",
      backgroundImage: "/slider_5.png",
      duration: "13 DAYS",
      price: "USD 4,950.00",
      difficulty: "EXTREME / HIGH MOUNTAIN",
      difficultyLevel: "hard"
    },
    intro: {
      code: "CHI-OJS-13",
      titlePrefix: "The Giant of",
      titleAccent: "Atacama",
      description: "Ojos del Salado Volcano, with its imposing 6893 meters, holds the title of the highest volcano in the world and the second highest summit in America. Located in the heart of the Atacama Desert, it is a challenge of absolute isolation and extreme conditions.",
      image: "/slider_5.png",
      lat: `27° 06' 34" S`,
      lon: `68° 32' 32" W`,
      specs: [
        { label: 'START POINT', value: 'Copiapo, Chile', icon: 'location' },
        { label: 'ACTIVITY', value: '6000+ Expedition', icon: 'zone' },
        { label: 'SEASON', value: 'October - April', icon: 'season' },
        { label: 'DIFFICULTY', value: 'Extreme Physical', icon: 'service' }
      ]
    },
    itinerary: [
      { day: 'DAY 01', title: 'ARRIVAL IN SANTIAGO - COPIAPÓ', content: 'Reception in Copiapo (by air or land from Santiago). Transfer to the hotel and rest.', stats: { alt: '391m' } },
      { day: 'DAY 02', title: 'FREE DAY IN COPIAPÓ', content: 'Preparation day, technical equipment review and final logistics before entering the Atacama desert.', stats: { status: 'Logistics' } },
      { day: 'DAY 03', title: 'COPIAPÓ – SANTA ROSA LAGOON (3800 M)', content: '4x4 transfer to the highlands. First camp next to the lagoon. Gentle acclimatization with views of flamingos and volcanoes.', stats: { time: '4h Drive', alt: '3800m' } },
      { day: 'DAY 04', title: 'SANTA ROSA LAGOON – VERDE LAGOON (4350 M)', content: 'Continue towards Verde Lagoon. Camp near natural hot springs. Surreal turquoise landscapes.', stats: { time: '3h Drive', alt: '4350m' } },
      { day: 'DAY 05', title: 'MULAS MUERTAS VOLCANO SUMMIT (5897 M)', content: 'Active acclimatization ascent. A summit of almost 6000m to prepare the body for extreme altitude. Return to Verde Lagoon.', stats: { time: '6-7h Ascent', alt: '5897m' } },
      { day: 'DAY 06', title: 'VERDE LAGOON – ATACAMA REFUGE (5250 M)', content: 'Transfer to the high base camp. Establishment of the camp at the Atacama Refuge.', stats: { time: '4h Drive', alt: '5250m' } },
      { day: 'DAY 07', title: 'ATACAMA REFUGE – TEJOS (PORTAGE)', content: 'Portage walk to Tejos Refuge (5800m) and return to Atacama to sleep. Improves acclimatization.', stats: { time: '5h Day', alt: '5800m' } },
      { day: 'DAY 08', title: 'ESTABLISHMENT IN TEJOS REFUGE (5800 M)', content: 'Final ascent to Tejos Refuge to overnight. Tactical preparation for the summit attack.', stats: { time: '3h Ascent', alt: '5800m' } },
      { day: 'DAY 09', title: 'EXTRA / FLEXIBLE DAY', content: 'Reserve day for bad weather or reinforcement of acclimatization. Crucial for success at this altitude.', stats: { status: 'Flexible' } },
      { day: 'DAY 10', title: 'OJOS DEL SALADO SUMMIT (6893 M)', content: 'Attack on the summit of the highest volcano in the world. Final technical climb in the crater. The roof of Chile reached. Descent to Atacama.', stats: { time: '14h Day', alt: '6893m' } },
      { day: 'DAY 11', title: 'ATACAMA REFUGE – COPIAPÓ', content: 'Long 4x4 descent from the highlands back to civilization. Night in hotel in Copiapo.', stats: { time: '8h Drive', alt: '391m' } },
      { day: 'DAY 12', title: 'COPIAPÓ – SANTIAGO', content: 'Transfer to the airport or terminal for the return to Santiago.', stats: { status: 'Transfer' } },
      { day: 'DAY 13', title: 'SANTIAGO – INTERNATIONAL FLIGHT', content: 'End of services. Return flight to your country of origin.', stats: { status: 'Departure' } }
    ],
    includes: [
      'Airport/Terminal transfers - Hotel in Copiapo',
      '2 hotel nights in Copiapo with breakfast',
      'Private 4x4 transport throughout the expedition',
      'Certified Professional Mountain Guide',
      'Full meals during the expedition',
      'Camping equipment (Tents, stove, gas)',
      'Ascent permits and National Park access',
      'Emergency oxygen and satellite communications',
      'Advanced first aid kit'
    ],
    excludes: [
      'International and domestic flights (Santiago - Copiapo)',
      'Mandatory mountain insurance (with rescue)',
      'Personal technical equipment (Sleeping bag, boots, etc.)',
      'Personal expenses and tips',
      'Hotels and meals in Santiago'
    ],
    equipment: [
      'High mountain sleeping bag (-30°C)',
      'Double or triple boots for 7000m',
      '12-point crampons and Ice Axe (depending on season)',
      'Mountain harness and helmet',
      'Extreme technical clothing (Gore-Tex, heavy down)',
      'Expedition gloves and down mittens',
      'Goggles and sunglasses (Cat. 4)',
      'Expedition backpack (70L) and attack backpack (40L)',
      'Stainless steel thermos'
    ],
    itineraryTitle: "Expedition",
    itinerarySubtitle: "Timeline",
    includesTitle: "Included Services",
    equipmentTitle: "Required Gear",
    gallery: [
      '/slider_1.png', '/slider_2.png', '/slider_3.png', '/slider_4.png', '/slider_5.png'
    ]
  }
};
