import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MomentProvider } from '../src/context/MomentContext';
import { Colors } from '../src/constants/theme';

export default function RootLayout() {
  return (
    <MomentProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="profile" />
        <Stack.Screen
          name="moment/create"
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="moment/active"
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="moment/join"
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="moment/share"
          options={{ animation: 'fade' }}
        />
      </Stack>
    </MomentProvider>
  );
}
