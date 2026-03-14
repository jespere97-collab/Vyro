import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing } from '../../src/constants/theme';
import { useMoment } from '../../src/context/MomentContext';
import { ShareCard } from '../../src/components/moment/ShareCard';
import { Button } from '../../src/components/ui/Button';

export default function ShareMomentScreen() {
  const router = useRouter();
  const { state, resetDraft } = useMoment();

  const lastMoment = state.history[0];

  const handleDone = () => {
    resetDraft();
    router.replace('/');
  };

  const handleShare = () => {
    // In a real app, this would open the native share sheet
    // Share.share({ message: '...' })
  };

  if (!lastMoment) {
    handleDone();
    return null;
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ShareCard moment={lastMoment} onShare={handleShare} onDone={handleDone} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: Spacing.xxl,
    paddingTop: Spacing.huge,
    justifyContent: 'center',
    flexGrow: 1,
  },
});
