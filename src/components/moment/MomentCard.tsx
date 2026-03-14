import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CompletedMoment } from '../../types/moment';
import { CATEGORY_PRESETS } from '../../constants/presets';
import { formatDurationLabel } from '../../utils/time';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

interface MomentCardProps {
  moment: CompletedMoment;
}

export function MomentCard({ moment }: MomentCardProps) {
  const preset = CATEGORY_PRESETS.find((p) => p.category === moment.category);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{moment.title || preset?.label || 'Moment'}</Text>
      </View>
      <View style={styles.statsRow}>
        <StatItem label="Duration" value={formatDurationLabel(moment.durationMinutes)} />
        <StatItem label="People" value={`${moment.totalParticipants}`} />
        <StatItem
          label="Phones Used"
          value={`${moment.phonesUsed}`}
          highlight={moment.phonesUsed === 0}
        />
      </View>
    </View>
  );
}

function StatItem({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <View style={styles.stat}>
      <Text style={[styles.statValue, highlight && styles.statValueHighlight]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xxl,
    padding: Spacing.xxl,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
    marginBottom: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  title: {
    ...Typography.h2,
    color: Colors.textPrimary,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    ...Typography.h2,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  statValueHighlight: {
    color: Colors.success,
  },
  statLabel: {
    ...Typography.small,
    color: Colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
