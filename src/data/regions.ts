export interface RegionMetadata {
  id: string;
  category: string;
  es: {
    titleTop: string;
    titleMain: string;
    backgroundImage: string;
    techData: { label: string; value: string }[];
    description: string;
  };
  en: {
    titleTop: string;
    titleMain: string;
    backgroundImage: string;
    techData: { label: string; value: string }[];
    description: string;
  };
}

export const regionsData: Record<string, RegionMetadata> = {
  'blanca': {
    id: 'blanca',
    category: 'trekking',
    es: {
      titleTop: "AVENTURAS",
      titleMain: "CORDILLERA BLANCA",
      backgroundImage: "/trekking/blanca/bg-cordillerablanca.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "6,768 M.S.N.M." },
        { label: "COORDENADAS", value: "9°07′S 77°36′W" },
        { label: "REGIÓN", value: "ANCASH / PERÚ" }
      ],
      description: "Explora la cordillera tropical más alta del mundo."
    },
    en: {
      titleTop: "ADVENTURES",
      titleMain: "CORDILLERA BLANCA",
      backgroundImage: "/trekking/blanca/bg-cordillerablanca.png",
      techData: [
        { label: "MAX ELEVATION", value: "6,768 M.A.S.L." },
        { label: "COORDINATES", value: "9°07′S 77°36′W" },
        { label: "REGION", value: "ANCASH / PERU" }
      ],
      description: "Explore the highest tropical mountain range in the world."
    }
  },
  'huayhuash': {
    id: 'huayhuash',
    category: 'trekking',
    es: {
      titleTop: "AVENTURAS",
      titleMain: "CORDILLERA HUAYHUASH",
      backgroundImage: "/trekking/huayhuash/bg-huayhuash.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "5,632 M.S.N.M." },
        { label: "COORDENADAS", value: "10°16′S 76°54′W" },
        { label: "REGIÓN", value: "HUAYHUASH / PERÚ" }
      ],
      description: "La ruta de trekking más espectacular de los Andes."
    },
    en: {
      titleTop: "ADVENTURES",
      titleMain: "HUAYHUASH RANGE",
      backgroundImage: "/trekking/huayhuash/bg-huayhuash.png",
      techData: [
        { label: "MAX ELEVATION", value: "5,632 M.A.S.L." },
        { label: "COORDINATES", value: "10°16′S 76°54′W" },
        { label: "REGION", value: "HUAYHUASH / PERU" }
      ],
      description: "The most spectacular trekking route in the Andes."
    }
  },
  'cusco': {
    id: 'cusco',
    category: 'trekking',
    es: {
      titleTop: "AVENTURAS",
      titleMain: "CUSCO TREKS",
      backgroundImage: "/trekking/cusco/bg-busco.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "6,384 M.S.N.M." },
        { label: "COORDENADAS", value: "13°31′S 71°58′W" },
        { label: "REGIÓN", value: "CUSCO / PERÚ" }
      ],
      description: "Caminatas sagradas por el corazón del imperio Inca."
    },
    en: {
      titleTop: "ADVENTURES",
      titleMain: "CUSCO TREKS",
      backgroundImage: "/trekking/cusco/bg-busco.png",
      techData: [
        { label: "MAX ELEVATION", value: "6,384 M.A.S.L." },
        { label: "COORDINATES", value: "13°31′S 71°58′W" },
        { label: "REGION", value: "CUSCO / PERU" }
      ],
      description: "Sacred treks through the heart of the Inca empire."
    }
  },
  'arequipa': {
    id: 'arequipa',
    category: 'trekking',
    es: {
      titleTop: "AVENTURAS",
      titleMain: "AREQUIPA & COLCA",
      backgroundImage: "/slider_1.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "6,075 M.S.N.M." },
        { label: "COORDENADAS", value: "16°23′S 71°32′W" },
        { label: "REGIÓN", value: "AREQUIPA / PERÚ" }
      ],
      description: "Entre volcanes y el cañón más profundo del mundo."
    },
    en: {
      titleTop: "ADVENTURES",
      titleMain: "AREQUIPA & COLCA",
      backgroundImage: "/slider_1.png",
      techData: [
        { label: "MAX ELEVATION", value: "6,075 M.A.S.L." },
        { label: "COORDINATES", value: "16°23′S 71°32′W" },
        { label: "REGION", value: "AREQUIPA / PERU" }
      ],
      description: "Between volcanoes and the deepest canyon in the world."
    }
  },
  'argentina': {
    id: 'argentina',
    category: 'destinations',
    es: {
      titleTop: "DESTINOS",
      titleMain: "ARGENTINA",
      backgroundImage: "/argentina/bg-argentina.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "6,962 M.S.N.M." },
        { label: "COORDENADAS", value: "32°39′S 70°00′W" },
        { label: "REGIÓN", value: "ANDES / ARGENTINA" }
      ],
      description: "Explora los Andes Argentinos y el techo de América."
    },
    en: {
      titleTop: "DESTINATIONS",
      titleMain: "ARGENTINA",
      backgroundImage: "/argentina/bg-argentina.png",
      techData: [
        { label: "MAX ELEVATION", value: "6,962 M.A.S.L." },
        { label: "COORDINATES", value: "32°39′S 70°00′W" },
        { label: "REGION", value: "ANDES / ARGENTINA" }
      ],
      description: "Explore the Argentine Andes and the roof of America."
    }
  },
  'bolivia': {
    id: 'bolivia',
    category: 'destinations',
    es: {
      titleTop: "DESTINOS",
      titleMain: "BOLIVIA",
      backgroundImage: "/bolivia/bg-bolivia.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "6,542 M.S.N.M." },
        { label: "COORDENADAS", value: "16°29′S 68°08′W" },
        { label: "REGIÓN", value: "ANDES / BOLIVIA" }
      ],
      description: "Cumbres de 6000m y la Cordillera Real."
    },
    en: {
      titleTop: "DESTINATIONS",
      titleMain: "BOLIVIA",
      backgroundImage: "/bolivia/bg-bolivia.png",
      techData: [
        { label: "MAX ELEVATION", value: "6,542 M.A.S.L." },
        { label: "COORDINATES", value: "16°29′S 68°08′W" },
        { label: "REGION", value: "ANDES / BOLIVIA" }
      ],
      description: "6000m peaks and the Cordillera Real."
    }
  },
  'ecuador': {
    id: 'ecuador',
    category: 'destinations',
    es: {
      titleTop: "DESTINOS",
      titleMain: "ECUADOR",
      backgroundImage: "/ecuador/bg-ecuador.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "6,263 M.S.N.M." },
        { label: "COORDENADAS", value: "0°13′S 78°30′W" },
        { label: "REGIÓN", value: "ANDES / ECUADOR" }
      ],
      description: "La Avenida de los Volcanes y glaciares ecuatoriales."
    },
    en: {
      titleTop: "DESTINATIONS",
      titleMain: "ECUADOR",
      backgroundImage: "/ecuador/bg-ecuador.png",
      techData: [
        { label: "MAX ELEVATION", value: "6,263 M.A.S.L." },
        { label: "COORDINATES", value: "0°13′S 78°30′W" },
        { label: "REGION", value: "ANDES / ECUADOR" }
      ],
      description: "The Avenue of Volcanoes and equatorial glaciers."
    }
  },
  'chile': {
    id: 'chile',
    category: 'destinations',
    es: {
      titleTop: "DESTINOS",
      titleMain: "CHILE",
      backgroundImage: "/chile/bg-chile.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "6,893 M.S.N.M." },
        { label: "COORDENADAS", value: "27°06′S 68°32′W" },
        { label: "REGIÓN", value: "ATACAMA / CHILE" }
      ],
      description: "Expediciones extremas al volcán más alto del mundo."
    },
    en: {
      titleTop: "DESTINATIONS",
      titleMain: "CHILE",
      backgroundImage: "/chile/bg-chile.png",
      techData: [
        { label: "MAX ELEVATION", value: "6,893 M.A.S.L." },
        { label: "COORDINATES", value: "27°06′S 68°32′W" },
        { label: "REGION", value: "ATACAMA / CHILE" }
      ],
      description: "Extreme expeditions to the world's highest volcano."
    }
  },
  'climbing': {
    id: 'climbing',
    category: 'climbing',
    es: {
      titleTop: "EXPEDICIONES",
      titleMain: "ESCALADA TÉCNICA",
      backgroundImage: "/climbing/bg-climbing.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "6,962 M.S.N.M." },
        { label: "COORDENADAS", value: "9°08′S 77°36′W" },
        { label: "REGIÓN", value: "ANDES / GLOBAL" }
      ],
      description: "Expediciones de alta montaña y alpinismo técnico."
    },
    en: {
      titleTop: "EXPEDITIONS",
      titleMain: "TECHNICAL CLIMBING",
      backgroundImage: "/climbing/bg-climbing.png",
      techData: [
        { label: "MAX ELEVATION", value: "6,962 M.A.S.L." },
        { label: "COORDINATES", value: "9°08′S 77°36′W" },
        { label: "REGION", value: "ANDES / GLOBAL" }
      ],
      description: "High mountain expeditions and technical mountaineering."
    }
  },
  'tours': {
    id: 'tours',
    category: 'tours',
    es: {
      titleTop: "EXPERIENCIAS",
      titleMain: "TOURS CULTURALES",
      backgroundImage: "/tours/bg-tours.png",
      techData: [
        { label: "VARIEDAD", value: "DÍA & CULTURAL" },
        { label: "DESTINOS", value: "PERÚ COMPLETO" },
        { label: "TIPO", value: "FULL DAY / SOFT" }
      ],
      description: "Descubre la cultura y los paisajes más icónicos del Perú."
    },
    en: {
      titleTop: "EXPERIENCES",
      titleMain: "CULTURAL TOURS",
      backgroundImage: "/tours/bg-tours.png",
      techData: [
        { label: "VARIETY", value: "DAY & CULTURAL" },
        { label: "DESTINATIONS", value: "ALL PERU" },
        { label: "TYPE", value: "FULL DAY / SOFT" }
      ],
      description: "Discover Peru's culture and most iconic landscapes."
    }
  },
  'peru': {
    id: 'peru',
    category: 'destinations',
    es: {
      titleTop: "DESTINOS",
      titleMain: "PERÚ",
      backgroundImage: "/peru/bg-peru.png",
      techData: [
        { label: "ELEVACIÓN MÁX", value: "6,768 M.S.N.M." },
        { label: "COORDENADAS", value: "9°30′S 77°31′W" },
        { label: "REGIÓN", value: "ANDES / PERÚ" }
      ],
      description: "Explora la diversidad del Perú con Franpisco Adventure. Desde la Ciudad Blanca de Arequipa y los oasis de Ica, hasta la biodiversidad de Tambopata en Madre de Dios y el corazón del imperio Inca."
    },
    en: {
      titleTop: "DESTINATIONS",
      titleMain: "PERU",
      backgroundImage: "/peru/bg-peru.png",
      techData: [
        { label: "MAX ELEVATION", value: "6,768 M.A.S.L." },
        { label: "COORDINATES", value: "9°30′S 77°31′W" },
        { label: "REGION", value: "ANDES / PERU" }
      ],
      description: "Explore the diversity of Peru with Franpisco Adventure. From the White City of Arequipa and the oases of Ica, to the biodiversity of Tambopata in Madre de Dios and the heart of the Inca Empire."
    }
  }
};
