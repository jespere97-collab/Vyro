import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '../../src/constants/theme';
import { useMoment } from '../../src/context/MomentContext';
import { SectionHeader } from '../../src/components/ui/SectionHeader';
import { CategorySelector } from '../../src/components/moment/CategorySelector';
import { DurationSelector } from '../../src/components/moment/DurationSelector';
import { TypeSelector } from '../../src/components/moment/TypeSelector';
import { AllowedAppsSelector } from '../../src/components/moment/AllowedAppsSelector';

export default function CreateMomentScreen() {
  const router = useRouter();
  const { state, setCategory, setDuration, setMomentType, setTitle, toggleApp, startMoment } =
    useMoment();
  const { draft } = state;

  const handleStart = () => {
    startMoment();
    router.replace('/moment/active');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Back arrow */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>{'<-'}</Text>
      </TouchableOpacity>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Screen title */}
        <Text style={styles.screenTitle}>Create a moment</Text>

        {/* TITLE section */}
        <View style={styles.section}>
          <SectionHeader title="TITLE" />
          <TextInput
            style={styles.titleInput}
            value={draft.title}
            onChangeText={setTitle}
            placeholder="Enter a custom title..."
            placeholderTextColor={Colors.textTertiary}
          />
          <CategorySelector selected={draft.category} onSelect={setCategory} />
        </View>

        {/* DURATION section */}
        <View style={styles.section}>
          <SectionHeader title="DURATION" />
          <DurationSelector selected={draft.durationMinutes} onSelect={setDuration} />
        </View>

        {/* TYPE section */}
        <View style={styles.section}>
          <SectionHeader title="TYPE" />
          <TypeSelector selected={draft.type} onSelect={setMomentType} />
        </View>

        {/* ALLOWED APPS section */}
        <AllowedAppsSelector apps={draft.allowedApps} onToggle={toggleApp} />
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.startButton} onPress={handleStart} activeOpacity={0.8}>
          <Text style={styles.startButtonText}>Start moment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backButton: {
    paddingHorizontal: Spacing.xxl,
    paddingVertical: Spacing.md,
  },
  backArrow: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: '300',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xxl,
    paddingBottom: Spacing.huge,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.xxl,
  },

  section: {
    marginBottom: Spacing.xxl,
  },

  titleInput: {
    backgroundColor: Colors.inputBackground,
    borderRadius: Radius.xl,
    paddingVertical: 16,
    paddingHorizontal: Spacing.xl,
    ...Typography.body,
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },

  bottomBar: {
    paddingHorizontal: Spacing.xxl,
    paddingVertical: Spacing.lg,
    paddingBottom: Spacing.xxxl,
  },
  startButton: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.full,
    paddingVertical: 18,
    alignItems: 'center',
  },
  startButtonText: {
    ...Typography.h3,
    color: Colors.textInverse,
    fontSize: 20,
  },
});
