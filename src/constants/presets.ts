import { AllowedApp, CategoryPreset } from '../types/moment';

export const CATEGORY_PRESETS: CategoryPreset[] = [
  { category: 'dinner', label: 'Dinner', emoji: '🍽️', defaultDuration: 120, defaultType: 'group' },
  { category: 'date', label: 'Date', emoji: '❤️', defaultDuration: 120, defaultType: 'group' },
  { category: 'study', label: 'Study', emoji: '📚', defaultDuration: 60, defaultType: 'solo' },
  { category: 'walk', label: 'Walk', emoji: '🚶', defaultDuration: 30, defaultType: 'solo' },
  { category: 'workout', label: 'Workout', emoji: '💪', defaultDuration: 60, defaultType: 'solo' },
  { category: 'meditate', label: 'Meditate', emoji: '🧘', defaultDuration: 15, defaultType: 'solo' },
  { category: 'movie', label: 'Movie', emoji: '🎬', defaultDuration: 150, defaultType: 'group' },
  { category: 'concert', label: 'Concert', emoji: '🎵', defaultDuration: 180, defaultType: 'group' },
  { category: 'work', label: 'Work', emoji: '💼', defaultDuration: 90, defaultType: 'solo' },
  { category: 'party', label: 'Party', emoji: '🎉', defaultDuration: 180, defaultType: 'group' },
];

export const DEFAULT_ALLOWED_APPS: AllowedApp[] = [
  { id: 'camera', name: 'Camera', icon: 'camera', enabled: true },
  { id: 'phone', name: 'Phone', icon: 'phone', enabled: true },
  { id: 'messages', name: 'Messages', icon: 'message-circle', enabled: false },
  { id: 'maps', name: 'Maps', icon: 'map-pin', enabled: false },
  { id: 'contacts', name: 'Contacts', icon: 'users', enabled: false },
  { id: 'calendar', name: 'Calendar', icon: 'calendar', enabled: false },
];

export const DURATION_OPTIONS = [15, 30, 45, 60, 90, 120, 150, 180];
