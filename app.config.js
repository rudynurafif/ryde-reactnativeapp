// Dynamic Expo config.
//
// This wraps the static app.json and injects the native Google Maps API key
// from the environment (EXPO_PUBLIC_GOOGLE_API_KEY) so the secret is not
// hard-coded into version-controlled config. The native map tiles on Android
// read this key from the generated AndroidManifest — it is a different key
// path than the JS-level Places/Directions calls.
//
// Note: this only takes effect in a development/production build (via
// `expo run:android` / EAS). Expo Go ignores native config.
module.exports = ({ config }) => ({
  ...config,
  android: {
    ...config.android,
    package: 'com.rudynurafif.uberclone',
    config: {
      ...config.android?.config,
      googleMaps: {
        apiKey: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
      },
    },
  },
});
