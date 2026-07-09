import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  const { isSignedIn } = useAuth();

  // Guard the authenticated area — send signed-out users back to the auth flow.
  if (!isSignedIn) {
    return <Redirect href='/(auth)/welcome' />;
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='find-ride' options={{ headerShown: false }} />
      <Stack.Screen name='confirm-ride' options={{ headerShown: false }} />
      <Stack.Screen name='book-ride' options={{ headerShown: false }} />
    </Stack>
  );
}
