import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Participant } from '../../types/moment';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

interface ParticipantsListProps {
  participants: Participant[];
}

export function ParticipantsList({ participants }: ParticipantsListProps) {
  if (participants.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Participants</Text>
      <View style={styles.avatarRow}>
        {participants.map((p) => (
          <View key={p.id} style={styles.avatarContainer}>
            <View style={[styles.avatar, p.phoneUsed && styles.avatarPhoneUsed]}>
              <Text style={styles.avatarText}>{p.name.charAt(0).toUpperCase()}</Text>
            </View>
            <Text style={styles.name} numberOfLines={1}>
              {p.name}
            </Text>
          </View>
        ))}
        <View style={styles.avatarContainer}>
          <View style={styles.addAvatar}>
            <Text style={styles.addAvatarText}>+</Text>
          </View>
          <Text style={styles.name}>Invite</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xxl,
  },
  title: {
    ...Typography.captionBold,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  avatarRow: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },
  avatarContainer: {
    alignItems: 'center',
    width: 56,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xs,
  },
  avatarPhoneUsed: {
    borderWidth: 2,
    borderColor: Colors.warning,
  },
  avatarText: {
    ...Typography.bodyBold,
    color: Colors.textInverse,
  },
  name: {
    ...Typography.small,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  addAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.chipDefault,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xs,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  addAvatarText: {
    fontSize: 24,
    color: Colors.textTertiary,
  },
});
