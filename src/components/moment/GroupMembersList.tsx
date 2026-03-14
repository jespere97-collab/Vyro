import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Participant } from '../../types/moment';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';
import { Chip } from '../ui/Chip';

interface GroupMembersListProps {
  participants: Participant[];
}

export function GroupMembersList({ participants }: GroupMembersListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GROUP MEMBERS ({participants.length})</Text>
      <View style={styles.chipRow}>
        {participants.map((p) => (
          <Chip
            key={p.id}
            label={p.isHost ? `${p.name} (Host)` : p.name}
            selected={p.isHost}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  title: {
    ...Typography.sectionLabel,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
    textTransform: 'uppercase',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: Spacing.sm,
  },
});
