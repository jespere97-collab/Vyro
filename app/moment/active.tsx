import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '../../src/constants/theme';
import { useMoment } from '../../src/context/MomentContext';
import { CountdownTimer } from '../../src/components/moment/CountdownTimer';
import { GroupMembersList } from '../../src/components/moment/GroupMembersList';
import { ConfirmModal } from '../../src/components/ui/ConfirmModal';
import { CATEGORY_PRESETS } from '../../src/constants/presets';
import { Button } from '../../src/components/ui/Button';

export default function ActiveMomentScreen() {
  const router = useRouter();
  const { state, endMoment, remainingMs } = useMoment();
  const { active } = state;
  const [showEndConfirm, setShowEndConfirm] = useState(false);

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
  const enabledAppsCount = active.allowedApps.filter((a) => a.enabled).length;

  const handleEndPress = () => {
    if (isTimerDone) {
      endMoment(0);
      router.replace('/moment/share');
    } else {
      setShowEndConfirm(true);
    }
  };

  const handleConfirmEnd = () => {
    setShowEndConfirm(false);
    endMoment(0);
    router.replace('/moment/share');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>{active.title || preset?.label || 'Moment'}</Text>
        <Text style={styles.tagline}>Turn moments into memories</Text>

        {/* Giant countdown */}
        <CountdownTimer remainingMs={remainingMs} />

        {/* Show QR Code button */}
        {active.type === 'group' ? (
          <TouchableOpacity style={styles.qrButton} activeOpacity={0.7}>
            <Text style={styles.qrButtonText}>Show QR Code</Text>
          </TouchableOpacity>
        ) : null}

        {/* Group members */}
        {active.type === 'group' ? (
          <GroupMembersList participants={active.participants} />
        ) : null}

        {/* Allowed Apps pill */}
        <TouchableOpacity style={styles.pill} activeOpacity={0.7}>
          <Text style={styles.pillText}>Allowed Apps ({enabledAppsCount})</Text>
        </TouchableOpacity>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* End Moment button */}
        <TouchableOpacity style={styles.endButton} onPress={handleEndPress} activeOpacity={0.7}>
          <Text style={styles.endButtonText}>End Moment</Text>
        </TouchableOpacity>
      </View>

      {/* Confirmation modal */}
      <ConfirmModal
        visible={showEndConfirm}
        title="End this moment?"
        message={"Your moment still has time remaining.\nOther participants will be notified."}
        confirmLabel="Leave"
        cancelLabel="Stay"
        confirmDestructive
        onConfirm={handleConfirmEnd}
        onCancel={() => setShowEndConfirm(false)}
      />
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
    alignItems: 'center',
    paddingHorizontal: Spacing.xxl,
    paddingTop: Spacing.xxxl,
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
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: Spacing.xs,
  },
  tagline: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
  },

  // QR button
  qrButton: {
    backgroundColor: Colors.chipDefault,
    borderRadius: Radius.full,
    paddingVertical: 12,
    paddingHorizontal: 28,
    marginBottom: Spacing.xxl,
  },
  qrButtonText: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
  },

  // Allowed apps pill
  pill: {
    backgroundColor: Colors.chipDefault,
    borderRadius: Radius.full,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginTop: Spacing.sm,
  },
  pillText: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
  },

  spacer: {
    flex: 1,
  },

  // End button
  endButton: {
    backgroundColor: Colors.chipDefault,
    borderRadius: Radius.full,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginBottom: Spacing.xxxl,
  },
  endButtonText: {
    ...Typography.bodyBold,
    color: Colors.primary,
    fontSize: 18,
  },
});
