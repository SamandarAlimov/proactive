import type { LucideIcon } from 'lucide-react';
import { BarChart3, Building2, Lightbulb, MessageSquare, Palette, Search, Target } from 'lucide-react';

export const serviceKeys = [
  'marketing-strategy',
  'brand-platform',
  'product-strategy',
  'communication',
  'marketing-team-building',
  'consulting',
  'analysis-audit',
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

export type ServiceContent = {
  title: string;
  description: string;
  fullDescription: string;
};

export const isServiceKey = (value: string): value is ServiceKey =>
  serviceKeys.includes(value as ServiceKey);

export const serviceIcons: Record<ServiceKey, LucideIcon> = {
  'marketing-strategy': Target,
  'brand-platform': Palette,
  'product-strategy': Lightbulb,
  communication: MessageSquare,
  'marketing-team-building': Building2,
  consulting: BarChart3,
  'analysis-audit': Search,
};

export const serviceAccentClasses: Record<ServiceKey, string> = {
  'marketing-strategy': 'bg-primary',
  'brand-platform': 'bg-secondary',
  'product-strategy': 'bg-primary',
  communication: 'bg-secondary',
  'marketing-team-building': 'bg-primary',
  consulting: 'bg-secondary',
  'analysis-audit': 'bg-primary',
};

export const serviceGradientColors: Record<ServiceKey, { from: string; to: string }> = {
  'marketing-strategy': { from: 'hsla(166, 75%, 61%, 1)', to: 'hsla(181, 100%, 50%, 1)' },
  'brand-platform': { from: 'hsla(259, 43%, 51%, 1)', to: 'hsla(259, 43%, 65%, 1)' },
  'product-strategy': { from: 'hsla(204, 47%, 28%, 1)', to: 'hsla(202, 100%, 20%, 1)' },
  communication: { from: 'hsla(166, 75%, 61%, 1)', to: 'hsla(166, 75%, 45%, 1)' },
  'marketing-team-building': { from: 'hsla(259, 43%, 51%, 1)', to: 'hsla(181, 100%, 50%, 1)' },
  consulting: { from: 'hsla(204, 47%, 28%, 1)', to: 'hsla(166, 75%, 61%, 1)' },
  'analysis-audit': { from: 'hsla(166, 75%, 61%, 1)', to: 'hsla(259, 43%, 51%, 1)' },
};
