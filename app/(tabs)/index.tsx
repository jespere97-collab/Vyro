import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '../../src/constants/theme';
import { useMoment } from '../../src/context/MomentContext';
import { MomentCard } from '../../src/components/moment/MomentCard';
import { Button } from '../../src/components/ui/Button';

export default function HomeScreen() {
  const router = useRouter();
  const { state } = useMoment();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome to</Text>
            <Text style={styles.brand}>Vyro</Text>
          </View>
          <TouchableOpacity
            style={styles.avatarButton}
            onPress={() => router.push('/(tabs)/profile')}
          >
            <Text style={styles.avatarText}>J</Text>
          </TouchableOpacity>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>Turn moments into memories</Text>

        {/* Active moment banner */}
        {state.active ? (
          <TouchableOpacity
            style={styles.activeBanner}
            onPress={() => router.push('/moment/active')}
            activeOpacity={0.8}
          >
            <View style={styles.activeDot} />
            <Text style={styles.activeText}>
              {state.active.title || 'Moment'} in progress
            </Text>
            <Text style={styles.activeArrow}>→</Text>
          </TouchableOpacity>
        ) : null}

        {/* Action cards */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={[styles.actionCard, styles.actionCardPrimary]}
            onPress={() => router.push('/moment/create')}
            activeOpacity={0.8}
          >
            <Text style={styles.actionEmoji}>✨</Text>
            <Text style={styles.actionTitle}>Create</Text>
            <Text style={styles.actionSubtitle}>Start a moment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionCard, styles.actionCardSecondary]}
            onPress={() => router.push('/moment/join')}
            activeOpacity={0.8}
          >
            <Text style={styles.actionEmoji}>🤝</Text>
            <Text style={[styles.actionTitle, styles.actionTitleDark]}>Join</Text>
            <Text style={[styles.actionSubtitle, styles.actionSubtitleDark]}>
              Enter a code
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent moments */}
        {state.history.length > 0 ? (
          <View style={styles.historySection}>
            <Text style={styles.sectionTitle}>Recent Moments</Text>
            {state.history.slice(0, 5).map((m) => (
              <MomentCard key={m.id} moment={m} />
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🌱</Text>
            <Text style={styles.emptyTitle}>No moments yet</Text>
            <Text style={styles.emptySubtitle}>
              Create your first moment and start being more present
            </Text>
          </View>
        )}
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

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  greeting: {
    ...Typography.body,
    color: Colors.textSecondary,
  },
  brand: {
    ...Typography.hero,
    color: Colors.primary,
    letterSpacing: 1,
  },
  avatarButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    ...Typography.bodyBold,
    color: Colors.textInverse,
  },
  tagline: {
    ...Typography.caption,
    color: Colors.textTertiary,
    marginBottom: Spacing.xxxl,
  },

  // Active banner
  activeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.xxl,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.success,
    marginRight: Spacing.md,
  },
  activeText: {
    ...Typography.bodyBold,
    color: Colors.textInverse,
    flex: 1,
  },
  activeArrow: {
    ...Typography.h3,
    color: Colors.textInverse,
  },

  // Action cards
  actionRow: {
    flexDirection: 'row',
    gap: Spacing.lg,
    marginBottom: Spacing.xxxl,
  },
  actionCard: {
    flex: 1,
    borderRadius: Radius.xxl,
    padding: Spacing.xxl,
    minHeight: 160,
    justifyContent: 'flex-end',
  },
  actionCardPrimary: {
    backgroundColor: Colors.primary,
  },
  actionCardSecondary: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  actionEmoji: {
    fontSize: 32,
    marginBottom: Spacing.md,
  },
  actionTitle: {
    ...Typography.h2,
    color: Colors.textInverse,
  },
  actionTitleDark: {
    color: Colors.textPrimary,
  },
  actionSubtitle: {
    ...Typography.caption,
    color: 'rgba(255,255,255,0.7)',
    marginTop: Spacing.xs,
  },
  actionSubtitleDark: {
    color: Colors.textSecondary,
  },

  // History
  historySection: {
    marginTop: Spacing.lg,
  },
  sectionTitle: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },

  // Empty state
  emptyState: {
    alignItems: 'center',
    paddingVertical: Spacing.huge,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: Spacing.lg,
  },
  emptyTitle: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  emptySubtitle: {
    ...Typography.body,
    color: Colors.textTertiary,
    textAlign: 'center',
    maxWidth: 260,
  },
});
