export const Colors = {
  // Primary palette — warm, calm, earthy
  background: '#F5F0EB',
  surface: '#FFFFFF',
  surfaceAlt: '#F0EBE4',
  card: '#FFFFFF',

  // Brown accent spectrum
  primary: '#6B4C3B',
  primaryLight: '#8B6F5E',
  primaryDark: '#4A3328',
  primaryMuted: '#C4A88C',

  // Text
  textPrimary: '#6B4C3B',
  textSecondary: '#9A8A7C',
  textTertiary: '#B8A99A',
  textInverse: '#FFFFFF',

  // Accent / Status
  accent: '#D4A574',
  success: '#5E9E6B',
  warning: '#D4944A',
  error: '#D94444',

  // UI
  border: '#E8E0D6',
  borderLight: '#F0EAE2',
  divider: '#EDE7DF',
  overlay: 'rgba(45, 32, 23, 0.4)',
  shadow: 'rgba(107, 76, 59, 0.08)',

  // Chip states
  chipDefault: '#E8E0D6',
  chipSelected: '#6B4C3B',
  chipText: '#7A6B5D',
  chipTextSelected: '#FFFFFF',

  // Input
  inputBackground: '#F0EBE4',
  inputBorder: '#E8E0D6',
} as const;

export const Typography = {
  hero: {
    fontSize: 36,
    fontWeight: '700' as const,
    lineHeight: 42,
    letterSpacing: -0.5,
  },
  h1: {
    fontSize: 28,
    fontWeight: '700' as const,
    lineHeight: 34,
    letterSpacing: -0.3,
  },
  h2: {
    fontSize: 22,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 22,
  },
  bodyBold: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 22,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 18,
  },
  captionBold: {
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 18,
  },
  small: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
  /** Section labels like TITLE, DURATION, TYPE */
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700' as const,
    lineHeight: 18,
    letterSpacing: 1,
  },
  timer: {
    fontSize: 72,
    fontWeight: '800' as const,
    lineHeight: 80,
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 48,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 999,
} as const;
