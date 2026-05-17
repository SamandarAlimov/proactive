import ahmadTeaLogo from '@/assets/clients/Ahmadtea.png';
import aqlyLogo from '@/assets/clients/aqly.png';
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
import najotNurLogo from '@/assets/clients/najotnur.png';
import oxusUniversityLogo from '@/assets/clients/oxusuniversity.png';
import presidentGiftsLogo from '@/assets/clients/president.png';
import zahratunLogo from '@/assets/clients/zahratun.png';

export type ClientLogo = {
  name: string;
  logo: string;
  heroRow?: 1 | 2 | 3;
  heroTone?: 'light' | 'dark' | 'glass';
  heroTileClassName?: string;
  heroImageClassName?: string;
  marqueeImageClassName?: string;
};

export const clientLogos: ClientLogo[] = [
  {
    name: 'Ahmad Tea',
    logo: ahmadTeaLogo,
    heroRow: 1,
    heroTone: 'light',
    heroTileClassName: 'w-[150px] lg:w-[166px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Impuls Tibbiyot Instituti',
    logo: impulsLogo,
    heroRow: 1,
    heroTone: 'light',
    heroTileClassName: 'w-[92px] lg:w-[108px]',
    heroImageClassName: 'max-h-11',
    marqueeImageClassName: 'max-h-16',
  },
  {
    name: 'Milestone IS',
    logo: milestoneLogo,
    heroRow: 1,
    heroTone: 'light',
    heroTileClassName: 'w-[98px] lg:w-[116px]',
    heroImageClassName: 'max-h-11',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Damar',
    logo: damarLogo,
    heroRow: 1,
    heroTone: 'light',
    heroTileClassName: 'w-[132px] lg:w-[152px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Aurus Pharm',
    logo: aurusPharmLogo,
    heroRow: 1,
    heroTone: 'light',
    heroTileClassName: 'w-[176px] lg:w-[210px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Bek Ota',
    logo: bekOtaLogo,
    heroRow: 1,
    heroTone: 'dark',
    heroTileClassName: 'w-[156px] lg:w-[188px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'Najot Nur',
    logo: najotNurLogo,
    heroRow: 2,
    heroTone: 'light',
    heroTileClassName: 'w-[104px] lg:w-[126px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-12',
  },
  {
    name: 'Merit Chemicals',
    logo: meritChemicalsLogo,
    heroRow: 2,
    heroTone: 'light',
    heroTileClassName: 'w-[176px] lg:w-[214px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'OXUS University',
    logo: oxusUniversityLogo,
    heroRow: 2,
    heroTone: 'light',
    heroTileClassName: 'w-[176px] lg:w-[214px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'MARF',
    logo: marfLogo,
    heroRow: 2,
    heroTone: 'light',
    heroTileClassName: 'w-[174px] lg:w-[214px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'AQLY',
    logo: aqlyLogo,
    heroRow: 2,
    heroTone: 'light',
    heroTileClassName: 'w-[92px] lg:w-[112px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-12',
  },
  {
    name: 'Zahratun Supermarket',
    logo: zahratunLogo,
    heroRow: 2,
    heroTone: 'dark',
    heroTileClassName: 'w-[150px] lg:w-[182px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-14',
  },
  {
    name: 'MobetCo',
    logo: mobetcoLogo,
    heroRow: 3,
    heroTone: 'light',
    heroTileClassName: 'w-[112px] lg:w-[134px]',
    heroImageClassName: 'max-h-11',
    marqueeImageClassName: 'max-h-16',
  },
  {
    name: 'Baxtiyor Oila',
    logo: baxtiyorOilaLogo,
    heroRow: 3,
    heroTone: 'light',
    heroTileClassName: 'w-[166px] lg:w-[202px]',
    heroImageClassName: 'max-h-11',
    marqueeImageClassName: 'max-h-16',
  },
  {
    name: 'Asr Kimyo',
    logo: asrKimyoLogo,
    heroRow: 3,
    heroTone: 'light',
    heroTileClassName: 'w-[118px] lg:w-[142px]',
    heroImageClassName: 'max-h-9',
    marqueeImageClassName: 'max-h-11',
  },
  {
    name: 'President Gifts',
    logo: presidentGiftsLogo,
    heroRow: 3,
    heroTone: 'light',
    heroTileClassName: 'w-[168px] lg:w-[206px]',
    heroImageClassName: 'max-h-10',
    marqueeImageClassName: 'max-h-14',
  },
];

export const heroClientLogos = clientLogos;
