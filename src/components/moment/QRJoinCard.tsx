import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

interface QRJoinCardProps {
  code: string;
}

export function QRJoinCard({ code }: QRJoinCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Share this moment</Text>
      <View style={styles.qrPlaceholder}>
        <Text style={styles.qrText}>QR</Text>
      </View>
      <Text style={styles.codeLabel}>or use code</Text>
      <Text style={styles.code}>{code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: Spacing.xxl,
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 4,
  },
  title: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginBottom: Spacing.xl,
  },
  qrPlaceholder: {
    width: 160,
    height: 160,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  qrText: {
    ...Typography.h1,
    color: Colors.textTertiary,
  },
  codeLabel: {
    ...Typography.caption,
    color: Colors.textTertiary,
    marginBottom: Spacing.sm,
  },
  code: {
    ...Typography.h2,
    color: Colors.primary,
    letterSpacing: 4,
    fontWeight: '700',
  },
});
