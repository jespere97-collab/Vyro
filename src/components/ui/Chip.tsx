import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

export function Chip({ label, selected = false, onPress }: ChipProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.chip, selected && styles.chipSelected]}
    >
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Radius.full,
    backgroundColor: Colors.chipDefault,
    marginRight: Spacing.sm,
    marginBottom: Spacing.sm + 2,
  },
  chipSelected: {
    backgroundColor: Colors.chipSelected,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.chipText,
  },
  labelSelected: {
    color: Colors.chipTextSelected,
  },
});
