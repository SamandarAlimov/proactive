export type TeamMemberVisualConfig = {
  defaultScale: number;
  hoverScale: number;
  tooltipSide: 'left' | 'right';
};

export const TEAM_CARD_WIDTH = 200;
export const TEAM_CARD_HEIGHT = 400;
export const TEAM_TOOLTIP_WIDTH = 304;
export const TEAM_TOOLTIP_OFFSET = 28;

export const teamMemberVisualConfig: Record<number, TeamMemberVisualConfig> = {
  11: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'right' },
  1: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'right' },
  2: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'right' },
  3: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'right' },
  4: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'right' },
  5: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'right' },
  6: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'right' },
  7: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'right' },
  8: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'left' },
  9: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'left' },
  10: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'left' },
  12: { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'left' },
};

export const getTeamMemberVisualConfig = (memberId: number): TeamMemberVisualConfig =>
  teamMemberVisualConfig[memberId] ?? { defaultScale: 0.96, hoverScale: 0.96, tooltipSide: 'right' };
