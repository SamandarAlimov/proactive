import type { LucideIcon } from 'lucide-react';
import { Building2, Handshake, Lightbulb, Palette, Search, Target } from 'lucide-react';

export const serviceKeys = [
  'analysis-audit',
  'product-strategy',
  'brand-platform',
  'marketing-strategy',
  'marketing-team-building',
  'strategic-partnership',
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

export type ServiceSectionContent = {
  title: string;
  paragraphs: string[];
};

export type ServiceContent = {
  title: string;
  description: string;
  fullDescription: string;
  sections: ServiceSectionContent[];
};

export const isServiceKey = (value: string): value is ServiceKey =>
  serviceKeys.includes(value as ServiceKey);

export const serviceIcons: Record<ServiceKey, LucideIcon> = {
  'analysis-audit': Search,
  'product-strategy': Lightbulb,
  'brand-platform': Palette,
  'marketing-strategy': Target,
  'marketing-team-building': Building2,
  'strategic-partnership': Handshake,
};

export const serviceGradientColors: Record<ServiceKey, { from: string; to: string }> = {
  'analysis-audit': { from: 'hsla(166, 75%, 61%, 1)', to: 'hsla(259, 43%, 51%, 1)' },
  'product-strategy': { from: 'hsla(204, 47%, 28%, 1)', to: 'hsla(202, 100%, 20%, 1)' },
  'brand-platform': { from: 'hsla(259, 43%, 51%, 1)', to: 'hsla(259, 43%, 65%, 1)' },
  'marketing-strategy': { from: 'hsla(166, 75%, 61%, 1)', to: 'hsla(181, 100%, 50%, 1)' },
  'marketing-team-building': { from: 'hsla(259, 43%, 51%, 1)', to: 'hsla(181, 100%, 50%, 1)' },
  'strategic-partnership': { from: 'hsla(204, 47%, 28%, 1)', to: 'hsla(166, 75%, 61%, 1)' },
};

export const serviceNumbers: Record<ServiceKey, string> = serviceKeys.reduce(
  (acc, key, index) => ({ ...acc, [key]: String(index + 1).padStart(2, '0') }),
  {} as Record<ServiceKey, string>,
);

export const legacyServiceRedirects: Record<string, ServiceKey> = {
  communication: 'brand-platform',
  consulting: 'strategic-partnership',
};
