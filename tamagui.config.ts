import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

export const tamaguiConfig = createTamagui(
  {
    ...defaultConfig,
    tokens: {
      ...defaultConfig.tokens,
      space: {
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        "2xl": 24,
        "3xl": 32,
        "4xl": 40,
        "5xl": 48,
        "7xl": 64,
        
        true: 8
      }
    }
  }
)

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}