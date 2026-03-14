import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '../../constants/theme';
import { formatCountdown } from '../../utils/time';

interface CountdownTimerProps {
  remainingMs: number;
}

export function CountdownTimer({ remainingMs }: CountdownTimerProps) {
  const timeString = formatCountdown(remainingMs);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{timeString}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xxl,
  },
  time: {
    ...Typography.timer,
    color: Colors.primary,
  },
});
