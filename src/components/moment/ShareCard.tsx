import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CompletedMoment } from '../../types/moment';
import { CATEGORY_PRESETS } from '../../constants/presets';
import { formatDurationLabel } from '../../utils/time';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';
import { Button } from '../ui/Button';

interface ShareCardProps {
  moment: CompletedMoment;
  onShare?: () => void;
  onDone?: () => void;
}

export function ShareCard({ moment, onShare, onDone }: ShareCardProps) {
  const preset = CATEGORY_PRESETS.find((p) => p.category === moment.category);

  return (
    <View style={styles.card}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Moment Complete</Text>
      </View>

      <Text style={styles.title}>{moment.title || preset?.label || 'Moment'}</Text>

      <View style={styles.divider} />

      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{formatDurationLabel(moment.durationMinutes)}</Text>
          <Text style={styles.statLabel}>Duration</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{moment.totalParticipants}</Text>
          <Text style={styles.statLabel}>{moment.totalParticipants === 1 ? 'Person' : 'People'}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, moment.phonesUsed === 0 && styles.perfect]}>
            {moment.phonesUsed}
          </Text>
          <Text style={styles.statLabel}>Phones Used</Text>
        </View>
      </View>

      {moment.phonesUsed === 0 ? (
        <View style={styles.celebration}>
          <Text style={styles.celebrationText}>Fully present!</Text>
        </View>
      ) : null}

      <View style={styles.divider} />

      <View style={styles.branding}>
        <Text style={styles.brandName}>Vyro</Text>
        <Text style={styles.tagline}>Turn moments into memories</Text>
      </View>

      <View style={styles.actions}>
        {onShare ? (
          <Button title="Share Moment" onPress={onShare} fullWidth variant="primary" size="lg" />
        ) : null}
        {onDone ? (
          <Button
            title="Done"
            onPress={onDone}
            fullWidth
            variant="ghost"
            size="md"
            style={styles.doneButton}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xxl,
    padding: Spacing.xxxl,
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 6,
  },
  badge: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.xs + 2,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.full,
    marginBottom: Spacing.xxl,
  },
  badgeText: {
    ...Typography.captionBold,
    color: Colors.textInverse,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    ...Typography.h1,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: Spacing.xxl,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    ...Typography.h2,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  perfect: {
    color: Colors.success,
  },
  statLabel: {
    ...Typography.small,
    color: Colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  celebration: {
    marginTop: Spacing.lg,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    backgroundColor: '#E8F5E8',
    borderRadius: Radius.full,
  },
  celebrationText: {
    ...Typography.captionBold,
    color: Colors.success,
  },
  branding: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  brandName: {
    ...Typography.h3,
    color: Colors.primaryMuted,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  tagline: {
    ...Typography.small,
    color: Colors.textTertiary,
    marginTop: Spacing.xs,
  },
  actions: {
    width: '100%',
  },
  doneButton: {
    marginTop: Spacing.sm,
  },
});
