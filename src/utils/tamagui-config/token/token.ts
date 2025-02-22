import { defaultConfig } from "@tamagui/config/v4";
import { createTokens } from "tamagui";

export const tokens = createTokens({
  ...defaultConfig.tokens,
  space: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    "2xl": 24,
    // "3xl": 32,
    "4xl": 40,
    // "5xl": 48,
    // "7xl": 64,
    true: 8,
  },
});
