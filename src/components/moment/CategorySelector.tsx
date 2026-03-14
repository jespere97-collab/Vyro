import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from '../ui/Chip';
import { SectionHeader } from '../ui/SectionHeader';
import { CATEGORY_PRESETS } from '../../constants/presets';
import { MomentCategory } from '../../types/moment';
import { Spacing } from '../../constants/theme';

interface CategorySelectorProps {
  selected: MomentCategory;
  onSelect: (category: MomentCategory) => void;
}

export function CategorySelector({ selected, onSelect }: CategorySelectorProps) {
  return (
    <View style={styles.container}>
      <SectionHeader title="What are you doing?" />
      <View style={styles.grid}>
        {CATEGORY_PRESETS.map((preset) => (
          <Chip
            key={preset.category}
            label={preset.label}
            emoji={preset.emoji}
            selected={selected === preset.category}
            onPress={() => onSelect(preset.category)}
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
