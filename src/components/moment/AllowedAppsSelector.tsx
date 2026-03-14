import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SectionHeader } from '../ui/SectionHeader';
import { AllowedApp } from '../../types/moment';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

interface AllowedAppsSelectorProps {
  apps: AllowedApp[];
  onToggle: (appId: string) => void;
}

export function AllowedAppsSelector({ apps, onToggle }: AllowedAppsSelectorProps) {
  return (
    <View style={styles.container}>
      <SectionHeader title="Allowed apps" subtitle="Apps you can still use during the moment" />
      <View style={styles.grid}>
        {apps.map((app) => (
          <TouchableOpacity
            key={app.id}
            onPress={() => onToggle(app.id)}
            activeOpacity={0.7}
            style={[styles.appCard, app.enabled && styles.appCardEnabled]}
          >
            <Text style={styles.appIcon}>{getAppEmoji(app.id)}</Text>
            <Text style={[styles.appName, app.enabled && styles.appNameEnabled]}>
              {app.name}
            </Text>
            <View style={[styles.toggle, app.enabled && styles.toggleEnabled]}>
              <View style={[styles.toggleDot, app.enabled && styles.toggleDotEnabled]} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function getAppEmoji(id: string): string {
  const map: Record<string, string> = {
    camera: '📷',
    phone: '📞',
    messages: '💬',
    maps: '🗺️',
    contacts: '👥',
    calendar: '📅',
  };
  return map[id] ?? '📱';
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xxl,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  appCard: {
    width: '31%',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surfaceAlt,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  appCardEnabled: {
    borderColor: Colors.primary,
    backgroundColor: Colors.surface,
  },
  appIcon: {
    fontSize: 24,
    marginBottom: Spacing.xs,
  },
  appName: {
    ...Typography.small,
    color: Colors.textTertiary,
    marginBottom: Spacing.xs,
  },
  appNameEnabled: {
    color: Colors.textPrimary,
  },
  toggle: {
    width: 36,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.borderLight,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleEnabled: {
    backgroundColor: Colors.primary,
  },
  toggleDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.surface,
  },
  toggleDotEnabled: {
    alignSelf: 'flex-end',
  },
});
