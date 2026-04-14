export type TeamMemberVisualConfig = {
  defaultScale: number;
  hoverScale: number;
  tooltipSide: 'left' | 'right';
};

export const TEAM_CARD_WIDTH = 200;
export const TEAM_CARD_HEIGHT = 400;
export const TEAM_TOOLTIP_WIDTH = 272;
export const TEAM_TOOLTIP_OFFSET = 28;

export const teamMemberVisualConfig: Record<number, TeamMemberVisualConfig> = {
  11: { defaultScale: 1.3, hoverScale: 1.03, tooltipSide: 'right' },
  1: { defaultScale: 2.03, hoverScale: 1.06, tooltipSide: 'right' },
  2: { defaultScale: 1.85, hoverScale: 1.06, tooltipSide: 'right' },
  3: { defaultScale: 1.93, hoverScale: 0.97, tooltipSide: 'right' },
  4: { defaultScale: 2.02, hoverScale: 0.94, tooltipSide: 'right' },
  5: { defaultScale: 1.99, hoverScale: 0.98, tooltipSide: 'right' },
  6: { defaultScale: 1.92, hoverScale: 1.03, tooltipSide: 'right' },
  7: { defaultScale: 1.9, hoverScale: 0.92, tooltipSide: 'right' },
  8: { defaultScale: 1.3, hoverScale: 0.91, tooltipSide: 'left' },
  9: { defaultScale: 1.28, hoverScale: 0.94, tooltipSide: 'left' },
  10: { defaultScale: 1.26, hoverScale: 0.96, tooltipSide: 'left' },
};

export const getTeamMemberVisualConfig = (memberId: number): TeamMemberVisualConfig =>
  teamMemberVisualConfig[memberId] ?? { defaultScale: 1, hoverScale: 1, tooltipSide: 'right' };
