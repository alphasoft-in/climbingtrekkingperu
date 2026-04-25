export const homeData = {
  es: {
    title: "Inicio - Franpisco Adventure",
    description: "Agencia de viajes y turismo Franpisco Adventure. Expediciones de montaña y trekking en Huaraz y toda Sudamérica.",
    slides: [
      { src: '/slider_1.png', pretitle: 'DESCUBRE LA MAGIA', title: 'CAMINO INCA CLÁSICO', subtitle: 'Sigue los pasos de los antiguos incas a través de selvas nubladas y valles sagrados, una expedición inolvidable.'},
      { src: '/slider_2.png', pretitle: 'EXPERIENCIA PREMIUM', title: 'MACHU PICCHU AL AMANECER', subtitle: 'Contempla la ciudadela perdida de los Incas bañado por la primera luz del sol entre las nubes.'},
      { src: '/slider_3.png', pretitle: 'TREKKING DE ALTURA', title: 'MONTAÑA VINICUNCA', subtitle: 'Camina por valles de ensueño hasta conquistar el surrealista y pintoresco valle rojo y la montaña de colores.'},
      { src: '/slider_4.png', pretitle: 'EL GIGANTE BLANCO', title: 'NEVADO HUASCARÁN', subtitle: 'Enfréntate a las inmensas cumbres del Parque Nacional Huascarán rodeado de lagunas glaciares.'},
      { src: '/slider_5.png', pretitle: 'EXPEDICIÓN ANDINA', title: 'RUTA DEL AUSANGATE', subtitle: 'Piérdete entre alpacas, picos nevados y lagunas turquesas bajo el aura del nevado más sagrado del Cusco.'}
    ],
    institutional: {
      identity: {
        name: "FRANPISCO ADVENTURE E.I.R.L.",
        type: "Agencia de Viajes y Turismo",
        regBadge: "REGISTRO OFICIAL",
        regText: "Consolidada en pleno corazón de Huaraz, Perú. Se encuentra debidamente inscrita en los registros públicos de Perú como empresa prestadora de servicios turísticos (Toda operación protegida bajo derechos reservados).",
        netBadge: "RED INTERNACIONAL",
        netText1: "Todos nuestros equipos integran profesionales con amplio conocimiento en los países de Sudamérica donde ofrecemos destinos turísticos: ",
        netHighlight: "Perú, Bolivia, Chile, Argentina, y Ecuador.",
        netText2: "Nuestro personal comparte una gran pasión con un inquebrantable compromiso de calidad, alto profesionalismo y emoción por su trabajo."
      },
      pillars: [
        { num: "01", icon: "🎯", title: "NUESTRO OBJETIVO", desc: "Ser una empresa innovadora y exitosa en el rubro del turismo. Formar y dar oportunidades a las nuevas generaciones, logrando realizar los sueños de nuestros clientes en expediciones de alto nivel." },
        { num: "02", icon: "🤝", title: "NUESTRO COMPROMISO", desc: "Innovar con programas competitivos en oferta y experiencia. Ofrecemos expediciones preparadas por nuestra propia travesía y reconocimiento técnico en Perú, Bolivia, Chile, Argentina y Ecuador." },
        { num: "03", icon: "🏔️", title: "NUESTRA EXPERIENCIA", desc: "El conocimiento profundo de los itinerarios es vital. Nuestro equipo evoluciona continuamente visitando distintas cordilleras. La asesoría personalizada es el núcleo de nuestros servicios." },
        { num: "04", icon: "🌱", title: "LA PRIORIDAD", desc: "Nuestros clientes, el respeto absoluto por la limpieza del entorno y la cultura andina. Cada destino merece el máximo respeto y cuidado por parte de nuestra marca." }
      ]
    },
    workArea: {
      header: {
        title: "TRABAJAMOS EN LOS ANDES",
        subtitle: "OPERACIONES TÉCNICAS REGIONALES",
        desc: "Nuestro personal es 100% local en cada destino. Seleccionados bajo estándares de alto entendimiento logístico y respeto absoluto por las reservas naturales."
      },
      units: [
        { tag: "CERTIFICACIÓN AGMP – UIAGM", title: "GUÍAS DE MONTAÑA", desc: "Especialistas en montañismo y alpinismo exigente, garantizando seguridad absoluta en cada ascenso técnico." },
        { tag: "SOPORTE CULTURAL", title: "GUÍAS DE TREKKING", desc: "Guías oficiales sumergidos en la cultura andina, entregando información técnica e histórica de alto nivel." },
        { tag: "LOGÍSTICA DE CAMPO", title: "AUXILIARES TÉCNICOS", items: ["Cocineros acreditados de altitud.", "Porteadores logísticos capacitados.", "Arrieros andinos certificados."] }
      ]
    },
    team: {
      title: "EQUIPO DE COMANDO",
      subtitle: "MANDO TÉCNICO Y OPERATIVO",
      members: [
        { name: "Francisco Mayhuay Colonia", badge: "LIDERAZGO ESTRATÉGICO", rank: "Gerente General & Fundador", avatar: "/perfiles/francisco.jpeg" },
        { name: "Milagros Moreno Correa", badge: "CONTROL DE MISIÓN", rank: "Jefa de Logística de Campo", avatar: "/perfiles/milagros.jpeg" },
        { name: "Nilo Aramburu Tafur", badge: "CUMBRE ÉLITE", rank: "Guía de Montaña IVBV – UIAGM", avatar: "/perfiles/nilo.jpeg" },
        { name: "Hosterling Guillermo Julca", badge: "PRIMERA LÍNEA", rank: "Aspirante a Guía de Montaña", avatar: "/perfiles/hosterling.jpeg" }
      ]
    },
    gastronomy: {
      header: {
        title: "GASTRONOMÍA DE ALTA MONTAÑA",
        subtitle: "COCINA TÉCNICA Y NUTRICIÓN DE CAMPO",
        desc: "Nuestra cocina es un pilar fundamental de la expedición. Diseñamos menús de alto valor calórico preparados por chefs especializados en altitud, garantizando la recuperación física completa."
      },
      dietary: {
        label: "REGÍMENES DISPONIBLES",
        options: [
          { label: "OMNÍVORO", color: "border-slate-200" },
          { label: "VEGETARIANO", color: "border-green-500" },
          { label: "VEGANO", color: "border-orange-500" },
          { label: "SIN GLUTEN", color: "border-blue-400" }
        ]
      },
      programs: [
        { unit: "PROGRAMA 01", title: "DESAYUNOS ENÉRGICOS", items: ["Avena Andina con Frutos Secos", "Quinua Ancestral Digestiva", "Huevos al Comal (Técnica Local)", "Omelet Premium de Montaña", "Panqueques Dulces & Fruta", "Café de Filtro Nativo"] },
        { unit: "PROGRAMA 02", title: "ALMUERZOS DE RECOBRO", items: ["Salpicón de Pollo Energético", "Sopa de Verduras de la Huaca", "Trucha Grillada (Río Blanco)", "Pollo Saltado al Wok Técnico", "Frutas de Estación Trozadas", "Bebidas Hidratantes Locales"] },
        { unit: "PROGRAMA 03", title: "BRUNCH & RECARGA", items: ["Mate de Coca Verde (Infusión)", "Muña Rústica Natural", "Té de Hierbas de Altura", "Café Caliente de Especialidad", "Galletas Artesanales & Snacks", "Queso Local & Embutidos"] }
      ],
      dinner: {
        unit: "PROGRAMA 04",
        title: "CENA TÉCNICA CALIENTE",
        groups: [
          { label: "ENTRADAS & SOPAS", items: ["Sopa Criolla Revitalizante", "Crema de Zapallo Fina", "Sopa a la Minuta Técnica", "Chupe de Olluco Andino"] },
          { label: "PLATOS DE FONDO MAESTROS", items: ["Lomo Saltado al Fuego", "Trucha Andina (Rellena o Frita)", "Pollo al Curry con Verduras", "Spaghetti a la Boloniesa Artesanal"] }
        ]
      },
      dessert: {
        unit: "FIN DE JORNADA",
        title: "POSTRES PREMIUM",
        items: ["Naranja Flameada Exótica", "Plátano Flameado Acaramelado", "Mazamorra Morada Peruana", "Pie de Limón Artesanal"]
      }
    },
    logistics: {
      header: {
        title: "LOGÍSTICA Y REGLAMENTO DE OPERACIÓN",
        subtitle: "PROTOCOLOS INSTITUCIONALES DE SEGURIDAD",
        desc: "Nuestra operación se rige por estándares de seguridad y eficiencia logística. Cada procedimiento está diseñado para maximizar la experiencia técnica y el bienestar del expedicionario."
      },
      items: [
        { num: "01", category: "PROTOCOLO DE CAMPO", title: "Rutina Matutina: Vida en el Campamento", p1: "Nuestras tiendas de alojamiento de camping las encontraremos impecablemente armadas de antemano por nuestros arrieros y cocineros, listas para recibirlo exhausto al atardecer para descansar sin levantar un solo dedo.", p2: "En las mañanas, nuestras robustas tiendas las resguardan y recogen diligentes los arrieros nativos a las 6:00am. Solo precisarán de forma personal dejar firmemente empaquetados todos sus equipajes nocturnos cerrados antes de ir a disfrutar a la carpa nuestro rico desayuno matutino." },
        { num: "02", category: "SEGURIDAD Y RESGUARDO", title: "Almacén Base Exclusivo (Equipaje de Ciudad)", p1: "Contamos con un almacén privado y seguro en nuestra base de operaciones. Podrá dejar sus pertenencias de ciudad (maletas, ropa extra) perfectamente resguardadas durante toda la expedición sin costo adicional.", p2: "Cada bulto es etiquetado y registrado en nuestro inventario de seguridad antes de la partida al campo." },
        { num: "03", category: "EQUIPAMIENTO TÉCNICO", title: "Supervivencia y Campamento de Alta Gama", p1: "Utilizamos exclusivamente equipamiento de marcas líderes (tiendas de 4 estaciones, sacos de dormir de alta montaña) diseñados para soportar condiciones extremas en la Cordillera Blanca y Huayhuash.", p2: "Nuestra logística incluye carpas de comedor espaciosas, cocina profesional de campo y sillas ergonómicas para garantizar el confort tras la jornada técnica." },
        { num: "04", category: "REGLAMENTO AMBIENTAL", title: "Compromiso Cero Rastro (Leave No Trace)", p1: "Como guías certificados, aplicamos una política estricta de gestión de residuos. Todo desecho generado es transportado fuera de las áreas protegidas.", p2: "Promovemos el respeto total a la biodiversidad andina, las fuentes de agua y las comunidades locales que nos acogen en sus territorios." }
      ]
    },
    ethics: {
      header: {
        title: "CÓDIGO DE HONOR Y ÉTICA",
        subtitle: "NUESTROS VALORES INTRANSIGENTES",
        desc: "Antes de elegir una expedición económica, exija respeto absoluto por la integridad de la montaña y la dignidad del personal andino."
      },
      items: [
        { tag: "ADVERTENCIA / MALA PRÁCTICA", title: "Integridad vs. Explotación", desc: "Es alarmante ver cómo agencias \"low-cost\" desangran la montaña humillando el peso mular y pagando sueldos miserables a arrieros locales para ganar por volumen. Nosotros elegimos la ética sobre el margen de beneficio.", color: "red", span: "col-span-1 md:col-span-2 xl:col-span-2" },
        { tag: "ESTÁNDAR 40KG", title: "Bienestar Animal", desc: "Nuestras acémilas cargan un máximo ético de 40kg. Protegemos la vida del animal como pilar de nuestra identidad.", icon: "⚖️", color: "blue" },
        { tag: "SEGURIDAD / 01", title: "Seguridad Radical", desc: "No transigimos con el margen de seguridad, sin importar las condiciones extremas.", icon: "🛡️", color: "slate" },
        { tag: "LIMPIEZA / 02", title: "Huella Cero", desc: "Gestión letal de residuos. Devolvemos a la ciudad el 100% de lo que llevamos al campo.", icon: "🌱", color: "green" },
        { tag: "TÉCNICO / 03", title: "Calidad Técnica", desc: "Equipamiento de alta gama probado en los escenarios más hostiles de los Andes.", icon: "⭐", color: "slate" },
        { tag: "JURAMENTO DE MARCA", title: "", desc: "\"VALORAMOS con lealtad andina el esfuerzo del equipo humano y el peso justo animal, en devoto cuidado del ambiente prístino que nos late la vida.\"", color: "gold", span: "col-span-1 md:col-span-2 xl:col-span-3", isQuote: true, signature: { name: "FRANPISCO ADVENTURE", rank: "COMANDO DE EXPEDICIÓN" } }
      ]
    }
  },
  en: {
    title: "Home - Franpisco Adventure",
    description: "Franpisco Adventure Travel and Tourism Agency. Epic mountain and trekking expeditions in Huaraz and across South America.",
    slides: [
      { src: '/slider_1.png', pretitle: 'DISCOVER THE MAGIC', title: 'CLASSIC INCA TRAIL', subtitle: 'Follow the footsteps of the ancient Incas through cloud forests and sacred valleys, an unforgettable expedition.'},
      { src: '/slider_2.png', pretitle: 'PREMIUM EXPERIENCE', title: 'MACHU PICCHU AT DAWN', subtitle: 'Witness the lost citadel of the Incas bathed in the first light of the sun breaking through the clouds.'},
      { src: '/slider_3.png', pretitle: 'HIGH ALTITUDE TREK', title: 'VINICUNCA MOUNTAIN', subtitle: 'Trek through dreamlike valleys to conquer the surreal and picturesque red valley and the rainbow mountain.'},
      { src: '/slider_4.png', pretitle: 'THE WHITE GIANT', title: 'MOUNT HUASCARAN', subtitle: 'Face the immense peaks of Huascaran National Park surrounded by pristine glacial lakes.'},
      { src: '/slider_5.png', pretitle: 'ANDEAN EXPEDITION', title: 'AUSANGATE ROUTE', subtitle: 'Lose yourself among alpacas, snow-capped peaks, and turquoise lagoons under the aura of Cusco\'s most sacred mountain.'}
    ],
    institutional: {
      identity: {
        name: "FRANPISCO ADVENTURE E.I.R.L.",
        type: "Travel and Tourism Agency",
        regBadge: "OFFICIAL REGISTRATION",
        regText: "Consolidated in the very heart of Huaraz, Peru. We are duly registered in the public registries of Peru as a specialized mountain tourist service provider company (All operations fully protected under reserved rights).",
        netBadge: "INTERNATIONAL NETWORK",
        netText1: "All our teams integrate highly qualified professionals from various backgrounds with extensive and deep knowledge of the South American countries where we operate epic tourist destinations: ",
        netHighlight: "Peru, Bolivia, Chile, Argentina, and Ecuador.",
        netText2: "Our solid staff shares a massive passion for their work in demanding trekking and mountaineering activities, offering an unbreakable commitment to supreme quality, professionalism, and thrill."
      },
      pillars: [
        { num: "01", icon: "🎯", title: "OUR OBJECTIVE", desc: "To be an innovative and successful company in the tourism field. To train and provide opportunities to new generations, fulfilling our clients' dreams in high-level expeditions." },
        { num: "02", icon: "🤝", title: "OUR COMMITMENT", desc: "Innovating with competitive programs. We provide unique expeditions pre-crafted by our own technical traversing in Peru, Bolivia, Chile, Argentina, and Ecuador." },
        { num: "03", icon: "🏔️", title: "OUR EXPERIENCE", desc: "Deeply knowing our itineraries is vital. Our team perpetually evolves by exploring different Andean ranges. Personalized expert advice is the true core of our services." },
        { num: "04", icon: "🌱", title: "THE PRIORITY", desc: "Our clients, the absolute respect for a clean environment and the rich Andean cultural tradition. Every destination deserves maximum respect and care from our brand." }
      ]
    },
    workArea: {
      header: {
        title: "WE OPERATE IN THE ANDES",
        subtitle: "REGIONAL TECHNICAL OPERATIONS",
        desc: "Our staff is 100% local at each destination. Rigorously selected for their impeccable professionalism and high tactical understanding of logistical programs."
      },
      units: [
        { tag: "AGMP – UIAGM CERTIFICATION", title: "MOUNTAIN GUIDES", desc: "Specialists in demanding mountaineering and ice climbing, guaranteeing absolute safety in any technical ascent." },
        { tag: "CULTURAL SUPPORT", title: "TREKKING GUIDES", desc: "Official guides deeply immersed in Andean culture, delivering historical and technical insights of the highest caliber." },
        { tag: "FIELD LOGISTICS", title: "TECHNICAL AUXILIARIES", items: ["Accredited High Altitude Mountain Chefs.", "Specialized Technical Porters.", "Certified Andean Horsemen."] }
      ]
    },
    team: {
      title: "COMMAND TEAM",
      subtitle: "TECHNICAL AND OPERATIONAL COMMAND",
      members: [
        { name: "Francisco Mayhuay Colonia", badge: "STRATEGIC LEAD", rank: "General Manager & Founder", avatar: "/perfiles/francisco.jpeg" },
        { name: "Milagros Moreno Correa", badge: "MISSION CONTROL", rank: "Head of Field Logistics", avatar: "/perfiles/milagros.jpeg" },
        { name: "Nilo Aramburu Tafur", badge: "ELITE SUMMIT", rank: "Mountain Guide IVBV – UIAGM", avatar: "/perfiles/nilo.jpeg" },
        { name: "Hosterling Guillermo Julca", badge: "FRONT LINE", rank: "Aspirant Mountain Guide", avatar: "/perfiles/hosterling.jpeg" }
      ]
    },
    gastronomy: {
      header: {
        title: "HIGH MOUNTAIN GASTRONOMY",
        subtitle: "TECHNICAL CULINARY & FIELD NUTRITION",
        desc: "Our kitchen is a fundamental pillar of the expedition. We design high-calorie menus prepared by specialized altitude chefs, ensuring full physical recovery."
      },
      dietary: {
        label: "AVAILABLE DIETARY OPTIONS",
        options: [
          { label: "OMNIVORE", color: "border-slate-200" },
          { label: "VEGETARIAN", color: "border-green-500" },
          { label: "VEGAN", color: "border-orange-500" },
          { label: "GLUTEN FREE", color: "border-blue-400" }
        ]
      },
      programs: [
        { unit: "PROGRAM 01", title: "ENERGY BREAKFASTS", items: ["Andean Oatmeal with Nuts", "Digestive Ancestral Quinoa", "Comal Eggs (Local Technique)", "Mountain Premium Omelet", "Sweet Pancakes & Fruit", "Native Filtered Coffee"] },
        { unit: "PROGRAM 02", title: "RECOVERY LUNCHES", items: ["Energy Chicken Salad", "Huaca Vegetable Soup", "Grilled Trout (White River)", "Technical Wok Chicken Stir-Fry", "Sliced Seasonal Fruits", "Local Hydrating Drinks"] },
        { unit: "PROGRAM 03", title: "BRUNCH & RECHARGE", items: ["Green Coca Leaf Tea (Infusion)", "Natural Rustic Muña", "High Altitude Herbal Tea", "Specialty Hot Coffee", "Artisanal Crackers & Snacks", "Local Cheese & Cold Cuts"] }
      ],
      dinner: {
        unit: "PROGRAM 04",
        title: "HOT TECHNICAL DINNER",
        groups: [
          { label: "STARTERS & SOUPS", items: ["Revitalizing Sopa Criolla", "Fine Pumpkin Cream Soup", "Technical Sopa a la Minuta", "Andean Olluco Chupe"] },
          { label: "MASTER MAIN COURSES", items: ["Flame-Seared Lomo Saltado", "Andean Trout (Stuffed or Fried)", "Curry Chicken with Vegetables", "Artisanal Spaghetti Bolognese"] }
        ]
      },
      dessert: {
        unit: "END OF JOURNEY",
        title: "PREMIUM DESSERTS",
        items: ["Exotic Flamed Orange", "Caramelized Flamed Banana", "Peruvian Mazamorra Morada", "Artisanal Lemon Pie"]
      }
    },
    logistics: {
      header: {
        title: "LOGISTICS AND OPERATION RULES",
        subtitle: "INSTITUTIONAL SECURITY PROTOCOLS",
        desc: "Our operation is governed by security standards and logistical efficiency. Each procedure is designed to maximize the technical experience and the well-being of the expeditioner."
      },
      items: [
        { num: "01", category: "FIELD PROTOCOL", title: "Morning Routine: Life in the Camp", p1: "Our camping accommodation tents will be found impeccably set up in advance by our muleteers and cooks, ready to receive you exhausted at sunset to rest without lifting a finger.", p2: "In the mornings, our robust tents are sheltered and collected by diligent native muleteers at 6:00am. You will only need to personally leave all your night luggage firmly packed closed before going to enjoy our delicious morning breakfast in the tent." },
        { num: "02", category: "SECURITY AND SAFEGUARD", title: "Exclusive Base Warehouse (City Luggage)", p1: "We have a private and secure warehouse at our operations base. You can leave your city belongings (suitcases, extra clothes) perfectly guarded throughout the expedition at no additional cost.", p2: "Each bag is tagged and recorded in our security inventory before departing for the field." },
        { num: "03", category: "TECHNICAL EQUIPMENT", title: "High-End Survival and Camping", p1: "We exclusively use leading brand equipment (4-season tents, high-mountain sleeping bags) designed to withstand extreme conditions in the Cordillera Blanca and Huayhuash.", p2: "Our logistics include spacious dining tents, professional field kitchens, and ergonomic chairs to ensure comfort after the technical journey." },
        { num: "04", category: "ENVIRONMENTAL REGULATION", title: "Leave No Trace Commitment", p1: "As certified guides, we apply a strict waste management policy. All generated waste is transported out of protected areas.", p2: "We promote total respect for Andean biodiversity, water sources, and the local communities that welcome us into their territories." }
      ]
    },
    ethics: {
      header: {
        title: "CODE OF HONOR & ETHICS",
        subtitle: "OUR UNCOMPROMISING VALUES",
        desc: "Before choosing a low-budget expedition, demand absolute respect for the integrity of the mountain and the dignity of the Andean personnel."
      },
      items: [
        { tag: "WARNING / MALPRACTICE", title: "Integrity vs. Exploitation", desc: "It is alarming to see how \"low-cost\" agencies bleed the mountain by humiliating mule weight and paying miserable wages to local muleteers to profit from volume. We choose ethics over profit margins.", color: "red", span: "col-span-1 md:col-span-2 xl:col-span-2" },
        { tag: "40KG STANDARD", title: "Animal Welfare", desc: "Our pack animals carry an ethical maximum of 40kg. We protect the life of the animal as a pillar of our identity.", icon: "⚖️", color: "blue" },
        { tag: "SECURE / 01", title: "Radical Safety", desc: "We do not compromise on the safety margin, regardless of the extreme conditions.", icon: "🛡️", color: "slate" },
        { tag: "CLEAN / 02", title: "Zero Footprint", desc: "Strict waste management. We return 100% of what we take to the field back to the city.", icon: "🌱", color: "green" },
        { tag: "TECH / 03", title: "Technical Quality", desc: "High-end equipment tested in the most hostile scenarios of the Andes.", icon: "⭐", color: "slate" },
        { tag: "BRAND OATH", title: "", desc: "\"WE VALUE with Andean loyalty the effort of our human team and the fair animal weight, in devoted care of the pristine environment that pulses our lives.\"", color: "gold", span: "col-span-1 md:col-span-2 xl:col-span-3", isQuote: true, signature: { name: "FRANPISCO ADVENTURE", rank: "EXPEDITION COMMAND" } }
      ]
    }
  }
};
