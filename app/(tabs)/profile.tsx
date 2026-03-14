import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '../../src/constants/theme';
import { useMoment } from '../../src/context/MomentContext';
import { formatDurationLabel } from '../../src/utils/time';

export default function ProfileScreen() {
  const { state } = useMoment();

  const totalMoments = state.history.length;
  const totalMinutes = state.history.reduce((sum, m) => sum + m.durationMinutes, 0);
  const perfectMoments = state.history.filter((m) => m.phonesUsed === 0).length;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text style={styles.title}>Profile</Text>

        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>J</Text>
          </View>
          <Text style={styles.name}>Jane</Text>
          <Text style={styles.memberSince}>Member since 2024</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{totalMoments}</Text>
            <Text style={styles.statLabel}>Moments</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>
              {totalMinutes >= 60
                ? `${Math.floor(totalMinutes / 60)}h`
                : `${totalMinutes}m`}
            </Text>
            <Text style={styles.statLabel}>Present Time</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, styles.statValueHighlight]}>
              {perfectMoments}
            </Text>
            <Text style={styles.statLabel}>Perfect</Text>
          </View>
        </View>

        {/* Streak */}
        <View style={styles.streakCard}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <View style={styles.streakInfo}>
            <Text style={styles.streakTitle}>Current Streak</Text>
            <Text style={styles.streakValue}>
              {totalMoments > 0 ? `${Math.min(totalMoments, 7)} days` : 'Start your streak!'}
            </Text>
          </View>
        </View>

        {/* Settings placeholder */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          {['Notifications', 'Privacy', 'About Vyro', 'Help & Support'].map((item) => (
            <View key={item} style={styles.settingsItem}>
              <Text style={styles.settingsText}>{item}</Text>
              <Text style={styles.settingsArrow}>›</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: Spacing.xxl,
    paddingBottom: Spacing.huge,
  },
  title: {
    ...Typography.h1,
    color: Colors.textPrimary,
    marginBottom: Spacing.xxl,
  },

  // Avatar
  avatarSection: {
    alignItems: 'center',
    marginBottom: Spacing.xxxl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.textInverse,
  },
  name: {
    ...Typography.h2,
    color: Colors.textPrimary,
  },
  memberSince: {
    ...Typography.caption,
    color: Colors.textTertiary,
    marginTop: Spacing.xs,
  },

  // Stats
  statsCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: Radius.xxl,
    padding: Spacing.xxl,
    marginBottom: Spacing.lg,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.divider,
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

  // Streak
  streakCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: Radius.xxl,
    padding: Spacing.xxl,
    marginBottom: Spacing.xxxl,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  streakEmoji: {
    fontSize: 36,
    marginRight: Spacing.lg,
  },
  streakInfo: {
    flex: 1,
  },
  streakTitle: {
    ...Typography.captionBold,
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  streakValue: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginTop: Spacing.xs,
  },

  // Settings
  section: {
    marginTop: Spacing.lg,
  },
  sectionTitle: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    marginBottom: Spacing.sm,
  },
  settingsText: {
    ...Typography.body,
    color: Colors.textPrimary,
  },
  settingsArrow: {
    fontSize: 20,
    color: Colors.textTertiary,
  },
});
