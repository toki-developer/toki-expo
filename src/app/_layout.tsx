import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "toki" }} />
      <Stack.Screen
        name="tools/expo-navigations"
        options={{ headerTitle: "" }}
      />
    </Stack>
  );
}
