/**
 * Format minutes into a human-readable string.
 * e.g. 90 → "1h 30m", 15 → "15 min"
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

/**
 * Format remaining milliseconds into MM:SS or HH:MM:SS.
 */
export function formatCountdown(ms: number): string {
  if (ms <= 0) return '00:00';
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${pad(minutes)}:${pad(seconds)}`;
}

/**
 * Format a duration in minutes to a display label like "2 Hours".
 */
export function formatDurationLabel(minutes: number): string {
  if (minutes < 60) return `${minutes} Minutes`;
  const h = minutes / 60;
  if (Number.isInteger(h)) return h === 1 ? '1 Hour' : `${h} Hours`;
  const wholeH = Math.floor(h);
  const m = minutes % 60;
  return `${wholeH} Hour${wholeH > 1 ? 's' : ''} ${m} Min`;
}

/**
 * Generate a short moment code for joining.
 */
export function generateMomentCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}
