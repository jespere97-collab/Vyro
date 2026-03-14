export type MomentCategory =
  | 'dinner'
  | 'party'
  | 'concert'
  | 'movie'
  | 'date'
  | 'study'
  | 'work'
  | 'workout'
  | 'walk'
  | 'meditate'
  | 'custom';

export type MomentType = 'solo' | 'group';

export interface AllowedApp {
  id: string;
  name: string;
  icon: string;
  enabled: boolean;
}

export interface Participant {
  id: string;
  name: string;
  isHost?: boolean;
  phoneUsed: boolean;
}

export interface MomentConfig {
  id: string;
  title: string;
  category: MomentCategory;
  durationMinutes: number;
  type: MomentType;
  allowedApps: AllowedApp[];
  participants: Participant[];
}

export interface ActiveMoment extends MomentConfig {
  startedAt: number;
  endsAt: number;
  isPaused: boolean;
}

export interface CompletedMoment extends MomentConfig {
  startedAt: number;
  endedAt: number;
  phonesUsed: number;
  totalParticipants: number;
}

export interface CategoryPreset {
  category: MomentCategory;
  label: string;
  defaultDuration: number;
  defaultType: MomentType;
}
