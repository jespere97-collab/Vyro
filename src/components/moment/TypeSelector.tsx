import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Chip } from '../ui/Chip';
import { MomentType } from '../../types/moment';
import { Colors, Typography, Spacing } from '../../constants/theme';

interface TypeSelectorProps {
  selected: MomentType;
  onSelect: (type: MomentType) => void;
}

export function TypeSelector({ selected, onSelect }: TypeSelectorProps) {
  return (
    <View>
      <View style={styles.row}>
        <Chip label="Solo" selected={selected === 'solo'} onPress={() => onSelect('solo')} />
        <Chip label="Group" selected={selected === 'group'} onPress={() => onSelect('group')} />
      </View>
      {selected === 'group' ? (
        <Text style={styles.helper}>
          A QR code will be generated so others can join your session.
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  helper: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.sm,
    lineHeight: 20,
  },
});
