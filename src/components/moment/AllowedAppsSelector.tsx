import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SectionHeader } from '../ui/SectionHeader';
import { Chip } from '../ui/Chip';
import { AllowedApp } from '../../types/moment';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

interface AllowedAppsSelectorProps {
  apps: AllowedApp[];
  onToggle: (appId: string) => void;
}

export function AllowedAppsSelector({ apps, onToggle }: AllowedAppsSelectorProps) {
  const enabledCount = apps.filter((a) => a.enabled).length;
  const totalCount = apps.length;

  return (
    <View style={styles.container}>
      <SectionHeader title="ALLOWED APPS" badge={`(${enabledCount}/${totalCount})`} />
      <View style={styles.grid}>
        {apps.map((app) => (
          <Chip
            key={app.id}
            label={app.name}
            selected={app.enabled}
            onPress={() => onToggle(app.id)}
          />
        ))}
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for more apps..."
        placeholderTextColor={Colors.textTertiary}
        editable={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xxl,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: Spacing.md,
  },
  searchInput: {
    backgroundColor: Colors.inputBackground,
    borderRadius: Radius.xl,
    paddingVertical: 14,
    paddingHorizontal: Spacing.xl,
    ...Typography.body,
    color: Colors.textPrimary,
  },
});
