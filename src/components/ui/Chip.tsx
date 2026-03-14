import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  emoji?: string;
}

export function Chip({ label, selected = false, onPress, emoji }: ChipProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.chip, selected && styles.chipSelected]}
    >
      {emoji ? <Text style={styles.emoji}>{emoji}</Text> : null}
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm + 2,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.full,
    backgroundColor: Colors.chipDefault,
    marginRight: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  chipSelected: {
    backgroundColor: Colors.chipSelected,
  },
  emoji: {
    fontSize: 16,
    marginRight: Spacing.xs + 2,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.chipText,
  },
  labelSelected: {
    color: Colors.chipTextSelected,
  },
});
