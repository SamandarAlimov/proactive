import ahmadTeaLogo from '@/assets/clients/Ahmadtea.png';
import aqlyLogo from '@/assets/clients/aqly.jpeg';
import asrKimyoLogo from '@/assets/clients/asrkimyo.png';
import aurusPharmLogo from '@/assets/clients/AurusPharm.png';
import baxtiyorOilaLogo from '@/assets/clients/baxtiyoroila.png';
import bekOtaLogo from '@/assets/clients/Bekota.svg';
import damarLogo from '@/assets/clients/damar.png';
import impulsLogo from '@/assets/clients/impuls.webp';
import marfLogo from '@/assets/clients/marf.png';
import meritChemicalsLogo from '@/assets/clients/merit.png';
import milestoneLogo from '@/assets/clients/milestone.png';
import mobetcoLogo from '@/assets/clients/mobetco.webp';
import najotNurLogo from '@/assets/clients/najotnur.webp';
import oxusUniversityLogo from '@/assets/clients/oxusuniversity.png';
import presidentGiftsLogo from '@/assets/clients/president.png';
import sferaLogo from '@/assets/clients/sfera.webp';
import taxtakonLogo from '@/assets/clients/taxtakon.png';
import timaLogo from '@/assets/clients/tima.svg';
import zafaronLogo from '@/assets/clients/Zafaron.png';
import zahratunLogo from '@/assets/clients/zahratun.png';

export type ClientLogo = {
  name: string;
  logo: string;
  heroImageClassName?: string;
  marqueeImageClassName?: string;
};

export const clientLogos: ClientLogo[] = [
  {
    name: 'Ahmad Tea',
    logo: ahmadTeaLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Impuls Tibbiyot Instituti',
    logo: impulsLogo,
    heroImageClassName: 'max-h-9',
    marqueeImageClassName: 'max-h-16',
  },
  {
    name: 'Milestone IS',
    logo: milestoneLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Damar',
    logo: damarLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Aurus Pharm',
    logo: aurusPharmLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Bek Ota',
    logo: bekOtaLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Najot Nur',
    logo: najotNurLogo,
    heroImageClassName: 'max-h-7',
    marqueeImageClassName: 'max-h-12',
  },
  {
    name: 'Merit Chemicals',
    logo: meritChemicalsLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Zahratun Supermarket',
    logo: zahratunLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'AQLY',
    logo: aqlyLogo,
    heroImageClassName: 'max-h-7',
    marqueeImageClassName: 'max-h-12',
  },
  {
    name: 'Taxtakon',
    logo: taxtakonLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Baxtiyor Oila',
    logo: baxtiyorOilaLogo,
    heroImageClassName: 'max-h-9',
    marqueeImageClassName: 'max-h-16',
  },
  {
    name: 'Asr Kimyo',
    logo: asrKimyoLogo,
    heroImageClassName: 'max-h-7',
    marqueeImageClassName: 'max-h-11',
  },
  {
    name: 'MARF',
    logo: marfLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'OXUS University',
    logo: oxusUniversityLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'MobetCo',
    logo: mobetcoLogo,
    heroImageClassName: 'max-h-9',
    marqueeImageClassName: 'max-h-16',
  },
  {
    name: 'President Gifts',
    logo: presidentGiftsLogo,
    heroImageClassName: 'max-h-8',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Sfera',
    logo: sferaLogo,
    heroImageClassName: 'max-h-7',
    marqueeImageClassName: 'max-h-11',
  },
  {
    name: 'Tima',
    logo: timaLogo,
    heroImageClassName: 'max-h-7',
    marqueeImageClassName: 'max-h-12',
  },
  {
    name: "Za'faron",
    logo: zafaronLogo,
    heroImageClassName: 'max-h-9',
    marqueeImageClassName: 'max-h-16',
  },
];

export const heroClientLogos = clientLogos;
