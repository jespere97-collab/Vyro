import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from '../ui/Chip';
import { CATEGORY_PRESETS } from '../../constants/presets';
import { MomentCategory } from '../../types/moment';
import { Spacing } from '../../constants/theme';

interface CategorySelectorProps {
  selected: MomentCategory | null;
  onSelect: (category: MomentCategory) => void;
}

export function CategorySelector({ selected, onSelect }: CategorySelectorProps) {
  return (
    <View style={styles.grid}>
      {CATEGORY_PRESETS.map((preset) => (
        <Chip
          key={preset.category}
          label={preset.label}
          selected={selected === preset.category}
          onPress={() => onSelect(preset.category)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
