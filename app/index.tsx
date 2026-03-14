import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '../src/constants/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.container}>
        {/* Centered logo area */}
        <View style={styles.logoSection}>
          <Text style={styles.logo}>Vyro</Text>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>Turn moments into memories</Text>

        {/* Three action buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/moment/join')}
            activeOpacity={0.7}
          >
            <Text style={styles.actionButtonText}>Join</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/moment/create')}
            activeOpacity={0.7}
          >
            <Text style={styles.actionButtonPlus}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/profile')}
            activeOpacity={0.7}
          >
            <Text style={styles.actionButtonText}>Profile</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xxl,
  },

  // Logo
  logoSection: {
    marginBottom: Spacing.huge,
  },
  logo: {
    fontSize: 72,
    fontWeight: '700',
    color: Colors.primary,
    fontStyle: 'italic',
    // The decorative strikethrough line would be done with a custom font
    // or an SVG overlay in production. Using text styling here.
    textDecorationLine: 'line-through',
    textDecorationColor: Colors.primary,
  },

  // Tagline
  tagline: {
    ...Typography.body,
    color: Colors.textSecondary,
    marginBottom: Spacing.huge,
  },

  // Buttons
  buttonRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  actionButton: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.full,
    paddingVertical: 16,
    paddingHorizontal: 32,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    ...Typography.bodyBold,
    color: Colors.textInverse,
    fontSize: 17,
  },
  actionButtonPlus: {
    fontSize: 28,
    fontWeight: '400',
    color: Colors.textInverse,
    lineHeight: 30,
  },
});
