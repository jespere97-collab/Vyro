import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '../../src/constants/theme';
import { Button } from '../../src/components/ui/Button';

export default function JoinMomentScreen() {
  const router = useRouter();
  const [code, setCode] = useState('');

  const handleJoin = () => {
    // In a real app, this would validate the code and join the moment
    router.replace('/moment/active');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.topTitle}>Join Moment</Text>
        <View style={styles.topBarSpacer} />
      </View>

      <View style={styles.container}>
        <View style={styles.content}>
          {/* Illustration */}
          <View style={styles.illustration}>
            <Text style={styles.illustrationEmoji}>🤝</Text>
          </View>

          <Text style={styles.heading}>Join a Moment</Text>
          <Text style={styles.subtitle}>
            Enter the 6-character code shared by your friend to join their moment
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

          {/* QR option */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <Button
            title="Scan QR Code"
            onPress={() => {
              // QR scanning would be implemented here
            }}
            variant="secondary"
            fullWidth
            size="lg"
          />
        </View>

        {/* Bottom CTA */}
        <View style={styles.bottomBar}>
          <Button
            title="Join Moment"
            onPress={handleJoin}
            fullWidth
            size="lg"
            disabled={code.length < 6}
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
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    padding: Spacing.xxl,
    alignItems: 'center',
  },

  // Illustration
  illustration: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xxl,
    marginTop: Spacing.xxxl,
  },
  illustrationEmoji: {
    fontSize: 44,
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
    maxWidth: 280,
  },

  // Code input
  codeInput: {
    width: '100%',
    height: 64,
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    borderColor: Colors.border,
    ...Typography.h2,
    color: Colors.textPrimary,
    letterSpacing: 8,
    paddingHorizontal: Spacing.xxl,
  },

  // Divider
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

  // Bottom
  bottomBar: {
    padding: Spacing.xxl,
    paddingBottom: Spacing.xxxl,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
});
