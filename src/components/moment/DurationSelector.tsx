import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from '../ui/Chip';
import { DURATION_OPTIONS } from '../../constants/presets';
import { Spacing } from '../../constants/theme';

interface DurationSelectorProps {
  selected: number;
  /** true when user picked "Custom" */
  isCustom?: boolean;
  onSelect: (minutes: number) => void;
  onCustom?: () => void;
}

export function DurationSelector({
  selected,
  isCustom = false,
  onSelect,
  onCustom,
}: DurationSelectorProps) {
  return (
    <View style={styles.grid}>
      {DURATION_OPTIONS.map((opt) => (
        <Chip
          key={opt.minutes}
          label={opt.label}
          selected={!isCustom && selected === opt.minutes}
          onPress={() => onSelect(opt.minutes)}
        />
      ))}
      <Chip label="Custom" selected={isCustom} onPress={onCustom} />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
