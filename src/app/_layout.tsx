import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import tamaguiConfig from "@/tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // const colorScheme = useColorScheme();
  const colorScheme = "dark"; // TODO: テーマ設定後、両テーマでのデザイン検討, useColorSchemeを使う

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerTitle: "toki" }} />
          <Stack.Screen
            name="tools/expo-navigation-gallery"
            options={{ title: "Navigation Gallery" }}
          />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
