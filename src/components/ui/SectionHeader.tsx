import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '../../constants/theme';

interface SectionHeaderProps {
  title: string;
  /** Optional right-side text like "(2/5)" */
  badge?: string;
  subtitle?: string;
}

export function SectionHeader({ title, badge, subtitle }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        {badge ? <Text style={styles.badge}> {badge}</Text> : null}
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  title: {
    ...Typography.sectionLabel,
    color: Colors.textPrimary,
    textTransform: 'uppercase',
  },
  badge: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  subtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
});
