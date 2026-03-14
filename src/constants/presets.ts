import { AllowedApp, CategoryPreset } from '../types/moment';

export const CATEGORY_PRESETS: CategoryPreset[] = [
  { category: 'dinner', label: 'Dinner', defaultDuration: 120, defaultType: 'group' },
  { category: 'party', label: 'Party', defaultDuration: 180, defaultType: 'group' },
  { category: 'concert', label: 'Concert', defaultDuration: 180, defaultType: 'group' },
  { category: 'movie', label: 'Movie', defaultDuration: 150, defaultType: 'group' },
  { category: 'date', label: 'Date', defaultDuration: 120, defaultType: 'group' },
  { category: 'study', label: 'Study', defaultDuration: 60, defaultType: 'solo' },
  { category: 'work', label: 'Work', defaultDuration: 60, defaultType: 'solo' },
  { category: 'workout', label: 'Workout', defaultDuration: 60, defaultType: 'solo' },
  { category: 'walk', label: 'Walk', defaultDuration: 30, defaultType: 'solo' },
  { category: 'meditate', label: 'Meditate', defaultDuration: 15, defaultType: 'solo' },
];

export const DEFAULT_ALLOWED_APPS: AllowedApp[] = [
  { id: 'phone', name: 'Phone', icon: 'phone', enabled: true },
  { id: 'messages', name: 'Messages', icon: 'message-circle', enabled: false },
  { id: 'maps', name: 'Maps', icon: 'map-pin', enabled: false },
  { id: 'camera', name: 'Camera', icon: 'camera', enabled: false },
  { id: 'notes', name: 'Notes', icon: 'edit', enabled: false },
  { id: 'spotify', name: 'Spotify', icon: 'music', enabled: true },
];

/** Duration options shown on Create screen — matches prototype exactly */
export const DURATION_OPTIONS: { label: string; minutes: number }[] = [
  { label: '15 Min', minutes: 15 },
  { label: '30 Min', minutes: 30 },
  { label: '1 Hour', minutes: 60 },
  { label: '2 Hours', minutes: 120 },
  { label: '8 Hours', minutes: 480 },
];

/** Special "Custom" option is handled separately in the selector */
