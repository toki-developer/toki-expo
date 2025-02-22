import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, createTokens } from "tamagui";
import { tokens } from "./src/utils/tamagui-config/tokens/token";
import { themes } from "./src/utils/tamagui-config/theme/theme";

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  tokens: tokens,
  themes: themes,
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
