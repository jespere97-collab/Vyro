import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip } from '../ui/Chip';
import { SectionHeader } from '../ui/SectionHeader';
import { MomentType } from '../../types/moment';
import { Spacing } from '../../constants/theme';

interface TypeSelectorProps {
  selected: MomentType;
  onSelect: (type: MomentType) => void;
}

export function TypeSelector({ selected, onSelect }: TypeSelectorProps) {
  return (
    <View style={styles.container}>
      <SectionHeader title="Solo or group?" />
      <View style={styles.row}>
        <Chip label="Solo" selected={selected === 'solo'} onPress={() => onSelect('solo')} />
        <Chip label="Group" selected={selected === 'group'} onPress={() => onSelect('group')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xxl,
  },
  row: {
    flexDirection: 'row',
  },
});
