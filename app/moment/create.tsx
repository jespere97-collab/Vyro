import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '../../src/constants/theme';
import { useMoment } from '../../src/context/MomentContext';
import { CategorySelector } from '../../src/components/moment/CategorySelector';
import { DurationSelector } from '../../src/components/moment/DurationSelector';
import { TypeSelector } from '../../src/components/moment/TypeSelector';
import { AllowedAppsSelector } from '../../src/components/moment/AllowedAppsSelector';
import { Button } from '../../src/components/ui/Button';

export default function CreateMomentScreen() {
  const router = useRouter();
  const { state, setCategory, setDuration, setMomentType, toggleApp, startMoment } = useMoment();
  const { draft } = state;

  const handleStart = () => {
    startMoment();
    router.replace('/moment/active');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.topTitle}>Create Moment</Text>
        <View style={styles.topBarSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <CategorySelector selected={draft.category} onSelect={setCategory} />
        <DurationSelector selected={draft.durationMinutes} onSelect={setDuration} />
        <TypeSelector selected={draft.type} onSelect={setMomentType} />
        <AllowedAppsSelector apps={draft.allowedApps} onToggle={toggleApp} />
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <Button title="Start Moment" onPress={handleStart} fullWidth size="lg" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xxl,
    paddingVertical: Spacing.md,
  },
  backText: {
    ...Typography.body,
    color: Colors.primary,
  },
  topTitle: {
    ...Typography.h3,
    color: Colors.textPrimary,
  },
  topBarSpacer: {
    width: 60,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: Spacing.xxl,
    paddingBottom: Spacing.huge,
  },
  bottomBar: {
    padding: Spacing.xxl,
    paddingBottom: Spacing.xxxl,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
});
