import { defaultConfig } from "@tamagui/config/v4";
// import { blue, slate, red } from "@tamagui/colors";

type StandardTheme = {
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  // backgroundStrong: string;
  // backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;
  outlineColor: string;
};

type CustomTheme = {
  // Custom tokens like "brand"
  // brandBackground?: string; // Optional custom tokens
  // brandColor?: string; // Optional custom tokens
};

type Theme = StandardTheme & CustomTheme;

// https://tamagui.dev/docs/intro/colors
// 必要になったら自分で設定する。@tamagui/colorsからRadix colorsを使える。
// light_/dark_を付けると、自動的にdark/lightモードで切り替わるっぽい。

export const themes = {
  dark: defaultConfig.themes.dark as Theme,
  light: defaultConfig.themes.light as Theme,
  light_blue: defaultConfig.themes.light_blue as Theme,
  dark_blue: defaultConfig.themes.dark_blue as Theme,
};
