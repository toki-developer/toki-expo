import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";
import { tokens } from "./src/utils/tamagui-config/token/token";
import { themes } from "./src/utils/tamagui-config/theme/theme";
import { media } from "./src/utils/tamagui-config/media/media";

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  tokens: tokens,
  themes: themes,
  media: media,
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
