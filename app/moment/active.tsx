import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '../../src/constants/theme';
import { useMoment } from '../../src/context/MomentContext';
import { CountdownTimer } from '../../src/components/moment/CountdownTimer';
import { ParticipantsList } from '../../src/components/moment/ParticipantsList';
import { QRJoinCard } from '../../src/components/moment/QRJoinCard';
import { Button } from '../../src/components/ui/Button';
import { CATEGORY_PRESETS } from '../../src/constants/presets';

export default function ActiveMomentScreen() {
  const router = useRouter();
  const { state, endMoment, remainingMs } = useMoment();
  const { active, joinCode } = state;

  // If no active moment, go back
  if (!active) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.centered}>
          <Text style={styles.noMoment}>No active moment</Text>
          <Button title="Go Home" onPress={() => router.replace('/')} variant="secondary" />
        </View>
      </SafeAreaView>
    );
  }

  const preset = CATEGORY_PRESETS.find((p) => p.category === active.category);
  const isTimerDone = remainingMs <= 0;

  const handleEnd = () => {
    endMoment(0);
    router.replace('/moment/share');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        {/* Moment info */}
        <View style={styles.header}>
          <Text style={styles.emoji}>{preset?.emoji ?? '✨'}</Text>
          <Text style={styles.title}>{active.title || preset?.label || 'Moment'}</Text>
          <View style={styles.typeBadge}>
            <Text style={styles.typeText}>
              {active.type === 'solo' ? 'Solo' : 'Group'}
            </Text>
          </View>
        </View>

        {/* Timer */}
        <CountdownTimer remainingMs={remainingMs} label="Time Left" />

        {/* Status message */}
        <View style={styles.statusCard}>
          <Text style={styles.statusText}>
            {isTimerDone
              ? 'Time is up! Great job being present.'
              : 'Put your phone down and enjoy the moment.'}
          </Text>
        </View>

        {/* Participants */}
        {active.type === 'group' && (
          <ParticipantsList participants={active.participants} />
        )}

        {/* QR code for group */}
        {active.type === 'group' && joinCode ? (
          <QRJoinCard code={joinCode} />
        ) : null}

        {/* End button */}
        <View style={styles.bottomActions}>
          <Button
            title={isTimerDone ? 'See Summary' : 'End Moment'}
            onPress={handleEnd}
            fullWidth
            size="lg"
            variant={isTimerDone ? 'primary' : 'outline'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    padding: Spacing.xxl,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.lg,
  },
  noMoment: {
    ...Typography.h3,
    color: Colors.textSecondary,
  },

  // Header
  header: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  emoji: {
    fontSize: 48,
    marginBottom: Spacing.md,
  },
  title: {
    ...Typography.h1,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  typeBadge: {
    backgroundColor: Colors.chipDefault,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.full,
  },
  typeText: {
    ...Typography.captionBold,
    color: Colors.textSecondary,
  },

  // Status
  statusCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  statusText: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
  },

  // Bottom
  bottomActions: {
    marginTop: 'auto',
    paddingBottom: Spacing.lg,
  },
});
