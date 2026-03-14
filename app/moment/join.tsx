import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '../../src/constants/theme';

export default function JoinMomentScreen() {
  const router = useRouter();
  const [code, setCode] = useState('');

  const handleJoin = () => {
    // In production this would validate the code server-side
    router.replace('/moment/active');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Back arrow */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>{'<-'}</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.heading}>Join a Moment</Text>
        <Text style={styles.subtitle}>
          Enter the 6-character code shared by your friend to join their moment.
        </Text>

        {/* Code input */}
        <TextInput
          style={styles.codeInput}
          value={code}
          onChangeText={(text) => setCode(text.toUpperCase())}
          placeholder="ENTER CODE"
          placeholderTextColor={Colors.textTertiary}
          maxLength={6}
          autoCapitalize="characters"
          autoCorrect={false}
          textAlign="center"
        />

        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Scan QR */}
        <TouchableOpacity style={styles.qrButton} activeOpacity={0.7}>
          <Text style={styles.qrButtonText}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.joinButton, code.length < 6 && styles.joinButtonDisabled]}
          onPress={handleJoin}
          activeOpacity={0.8}
          disabled={code.length < 6}
        >
          <Text style={styles.joinButtonText}>Join Moment</Text>
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
  container: {
    flex: 1,
    paddingHorizontal: Spacing.xxl,
    alignItems: 'center',
    paddingTop: Spacing.huge,
  },
  heading: {
    ...Typography.h1,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xxxl,
    maxWidth: 300,
  },
  codeInput: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.inputBackground,
    borderRadius: Radius.xl,
    ...Typography.h2,
    color: Colors.textPrimary,
    letterSpacing: 8,
    paddingHorizontal: Spacing.xxl,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: Spacing.xxl,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.divider,
  },
  dividerText: {
    ...Typography.caption,
    color: Colors.textTertiary,
    marginHorizontal: Spacing.lg,
  },
  qrButton: {
    backgroundColor: Colors.chipDefault,
    borderRadius: Radius.full,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  qrButtonText: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
  },
  bottomBar: {
    paddingHorizontal: Spacing.xxl,
    paddingVertical: Spacing.lg,
    paddingBottom: Spacing.xxxl,
  },
  joinButton: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.full,
    paddingVertical: 18,
    alignItems: 'center',
  },
  joinButtonDisabled: {
    opacity: 0.5,
  },
  joinButtonText: {
    ...Typography.h3,
    color: Colors.textInverse,
    fontSize: 20,
  },
});
