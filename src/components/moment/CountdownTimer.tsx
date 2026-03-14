import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '../../constants/theme';
import { formatCountdown } from '../../utils/time';

interface CountdownTimerProps {
  remainingMs: number;
  label?: string;
}

export function CountdownTimer({ remainingMs, label }: CountdownTimerProps) {
  const progress = Math.max(0, Math.min(1, remainingMs > 0 ? 1 : 0));
  const timeString = formatCountdown(remainingMs);

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <Text style={styles.time}>{timeString}</Text>
      <Text style={styles.sublabel}>remaining</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.huge,
  },
  label: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  time: {
    ...Typography.timer,
    color: Colors.primary,
  },
  sublabel: {
    ...Typography.caption,
    color: Colors.textTertiary,
    marginTop: Spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});
