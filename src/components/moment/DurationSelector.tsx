import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from '../ui/Chip';
import { SectionHeader } from '../ui/SectionHeader';
import { DURATION_OPTIONS } from '../../constants/presets';
import { formatDuration } from '../../utils/time';
import { Spacing } from '../../constants/theme';

interface DurationSelectorProps {
  selected: number;
  onSelect: (minutes: number) => void;
}

export function DurationSelector({ selected, onSelect }: DurationSelectorProps) {
  return (
    <View style={styles.container}>
      <SectionHeader title="How long?" />
      <View style={styles.grid}>
        {DURATION_OPTIONS.map((minutes) => (
          <Chip
            key={minutes}
            label={formatDuration(minutes)}
            selected={selected === minutes}
            onPress={() => onSelect(minutes)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xxl,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
