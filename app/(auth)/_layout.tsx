import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  const { isSignedIn } = useAuth();

  // Already authenticated users should never see the auth screens — this also
  // prevents the "You're already signed in" error after a successful OAuth.
  if (isSignedIn) {
    return <Redirect href='/(root)/(tabs)/home' />;
  }

  return (
    <Stack>
      <Stack.Screen name='welcome' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up' options={{ headerShown: false }} />
      <Stack.Screen name='sign-in' options={{ headerShown: false }} />
    </Stack>
  );
}
