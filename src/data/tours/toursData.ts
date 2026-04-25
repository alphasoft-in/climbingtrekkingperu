import { alpamayoData } from './alpamayo';
import { huayhuash360Data } from './huayhuash-360';
import { huayhuashClassicData } from './huayhuash-classic';
import { huayhuashMiniData } from './huayhuash-mini';
import { huayhuashPeaksData } from './huayhuash-peaks';
import { huayhuashSpectacularData } from './huayhuash-spectacular';
import { blancaSantaCruzData } from './blanca-santa-cruz';
import { blancaAlpamayoTrekData } from './blanca-alpamayo-trek';
import { blancaCircuitData } from './blanca-circuit';
import { blancaBestData } from './blanca-best';
import { cuscoAusangateData } from './cusco-ausangate';
import { cuscoCaminoIncaData } from './cusco-camino-inca';
import { cuscoChoquequiraoData } from './cusco-choquequirao';
import { cuscoEsenciaImperialData } from './cusco-esencia-imperial';
import { cuscoLaresData } from './cusco-lares';
import { arequipaVolcanesData } from './arequipa-volcanes';
import { argentinaAconcaguaData } from './argentina-aconcagua';
import { ecuadorAvenidaVolcanesData } from './ecuador-avenida-volcanes';
import { ecuadorLagunasPichinchaData } from './ecuador-lagunas-pichincha';
import { climbingChileOjosData } from './climbing-chile-ojos';
import { boliviaApolobambaData } from './bolivia-apolobamba';
import { boliviaCondoririHuaynaData } from './bolivia-condoriri-huayna';
import { boliviaCordilleraRealData } from './bolivia-cordillera-real';
import { boliviaCotiaHuaynaData } from './bolivia-cotia-huayna';
import { boliviaIllampuData } from './bolivia-illampu';
import { boliviaIllimaniSajamaData } from './bolivia-illimani-sajama';
import { boliviaUyuniHuaynaData } from './bolivia-uyuni-huayna';
import { climbingArtesonrajuData } from './climbing-artesonraju';
import { climbingChopicalquiData } from './climbing-chopicalqui';
import { climbingHuascaranData } from './climbing-huascaran';
import { climbingIshincaValleyData } from './climbing-ishinca-valley';
import { climbingPiscoData } from './climbing-pisco';
import { climbingPrepPackageData } from './climbing-prep-package';
import { culturalChavinData } from './cultural-chavin';
import { culturalLaguna69Data } from './cultural-laguna69';
import { culturalParonData } from './cultural-paron';
import { culturalPastoruriData } from './cultural-pastoruri';
import { culturalChurupData } from './cultural-churup';
import { culturalRocotuyocData } from './cultural-rocotuyoc';
import { culturalLlanganucoData } from './cultural-llanganuco';
import { culturalLimaCityData } from './cultural-lima-city';
import { culturalLimaPachacamacData } from './cultural-lima-pachacamac';
import { culturalIcaParacasData } from './cultural-ica-paracas';
import { culturalIquitosData } from './cultural-iquitos';
import { culturalTambopataData } from './cultural-tambopata';
import { culturalChacasData } from './cultural-chacas';
import { culturalMaravillasData } from './cultural-maravillas';

export const allToursData: Record<string, any> = {
  // Huayhuash
  '360': huayhuash360Data,
  'classic': huayhuashClassicData,
  'mini': huayhuashMiniData,
  'cumbres': huayhuashPeaksData,
  'espectacular': huayhuashSpectacularData,
  // Blanca Trekking
  'santa-cruz': blancaSantaCruzData,
  'alpamayo-trek': blancaAlpamayoTrekData,
  'circuit': blancaCircuitData,
  'best': blancaBestData,
  // Cusco
  'ausangate': cuscoAusangateData,
  'camino-inca': cuscoCaminoIncaData,
  'choquequirao': cuscoChoquequiraoData,
  'esencia-imperial': cuscoEsenciaImperialData,
  'lares': cuscoLaresData,
  // Arequipa
  'arequipa-volcanoes': arequipaVolcanesData,
  // Argentina
  'aconcagua': argentinaAconcaguaData,
  // Ecuador
  'avenida-volcanes': ecuadorAvenidaVolcanesData,
  'lagunas-pichincha': ecuadorLagunasPichinchaData,
  // Chile
  'ojos-del-salado': climbingChileOjosData,
  // Bolivia
  'apolobamba-expedition': boliviaApolobambaData,
  'condoriri-huayna-expedition': boliviaCondoririHuaynaData,
  'cordillera-real-expedition': boliviaCordilleraRealData,
  'cotia-huayna-trek': boliviaCotiaHuaynaData,
  'illampu-circuit': boliviaIllampuData,
  'illimani-sajama': boliviaIllimaniSajamaData,
  'uyuni-huayna-potosi': boliviaUyuniHuaynaData,
  // Climbing Blanca
  'alpamayo': alpamayoData,
  'artesonraju': climbingArtesonrajuData,
  'chopicalqui': climbingChopicalquiData,
  'huascaran': climbingHuascaranData,
  'ishinca-valley': climbingIshincaValleyData,
  'pisco': climbingPiscoData,
  'prep-package': climbingPrepPackageData,
  // Cultural & Day Tours
  'chavin-huantar': culturalChavinData,
  'trekking-69': culturalLaguna69Data,
  'laguna-paron': culturalParonData,
  'pastoruri': culturalPastoruriData,
  'trekking-churup': culturalChurupData,
  'laguna-rocotuyoc': culturalRocotuyocData,
  'laguna-llanganuco': culturalLlanganucoData,
  'lima-city': culturalLimaCityData,
  'lima-pachacamac': culturalLimaPachacamacData,
  'ica-paracas': culturalIcaParacasData,
  'iquitos-amazonas': culturalIquitosData,
  'selva-tambopata': culturalTambopataData,
  'chacas': culturalChacasData,
  'maravillas-peru-17d': culturalMaravillasData,
};

export const toursData = Object.entries(allToursData).map(([slug, data]) => {
  return {
    id: data.id,
    slug: slug,
    prefix: data.es.intro?.code?.split('-')[0] || 'EXP',
    category: {
      es: data.es.intro?.specs?.find((s: any) => s.icon === 'zone')?.value || "EXPEDICIÓN",
      en: data.en.intro?.specs?.find((s: any) => s.icon === 'zone')?.value || "EXPEDITION"
    },
    title: {
      es: data.es.hero?.titleMain || '',
      en: data.en.hero?.titleMain || ''
    },
    description: {
      es: (data.es.intro?.description || '').replace(/\*\*/g, '').slice(0, 120) + '...',
      en: (data.en.intro?.description || '').replace(/\*\*/g, '').slice(0, 120) + '...'
    },
    duration: {
      es: data.es.hero?.duration || '',
      en: data.en.hero?.duration || ''
    },
    difficulty: {
      es: data.es.hero?.difficulty || '',
      en: data.en.hero?.difficulty || ''
    },
    difficultyLevel: data.es.hero?.difficultyLevel || 'mod',
    image: data.es.hero?.backgroundImage || '',
    path: `${data.category === 'climbing' ? 'climbing' : `trekking/${data.subCategory}`}/${slug}`
  };
});
