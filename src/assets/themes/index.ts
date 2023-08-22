import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme, useTheme } from 'react-native-paper';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const sharedTheme = {
  roundness: 3.5,
};

export const AppDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  ...sharedTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    primary: 'rgb(6, 185, 0)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(146, 251, 113)',
    onPrimaryContainer: 'rgb(3, 33, 0)',
    secondary: 'rgb(84, 98, 77)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(216, 231, 204)',
    onSecondaryContainer: 'rgb(18, 31, 14)',
    tertiary: 'rgb(56, 102, 104)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(188, 235, 237)',
    onTertiaryContainer: 'rgb(0, 32, 33)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(253, 253, 246)',
    onBackground: 'rgb(26, 28, 24)',
    surface: 'rgb(253, 253, 246)',
    onSurface: 'rgb(26, 28, 24)',
    surfaceVariant: 'rgb(223, 228, 215)',
    onSurfaceVariant: 'rgb(67, 72, 63)',
    outline: 'rgb(195, 200, 188)',
    outlineVariant: 'rgb(115, 121, 110)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(47, 49, 45)',
    inverseOnSurface: 'rgb(241, 241, 234)',
    inversePrimary: 'rgb(6, 185, 0)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(242, 246, 234)',
      level2: 'rgb(235, 242, 226)',
      level3: 'rgb(228, 237, 219)',
      level4: 'rgb(226, 236, 217)',
      level5: 'rgb(221, 233, 212)',
    },
    surfaceDisabled: 'rgba(26, 28, 24, 0.12)',
    onSurfaceDisabled: 'rgba(26, 28, 24, 0.38)',
    backdrop: 'rgba(45, 50, 41, 0.4)',
  },
};

export const AppDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  ...sharedTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    primary: 'rgb(6, 185, 0)',
    onPrimary: 'rgb(8, 57, 0)',
    primaryContainer: 'rgb(16, 83, 0)',
    onPrimaryContainer: 'rgb(146, 251, 113)',
    secondary: 'rgb(188, 203, 177)',
    onSecondary: 'rgb(39, 52, 33)',
    secondaryContainer: 'rgb(61, 75, 54)',
    onSecondaryContainer: 'rgb(216, 231, 204)',
    tertiary: 'rgb(160, 207, 209)',
    onTertiary: 'rgb(0, 55, 57)',
    tertiaryContainer: 'rgb(30, 78, 80)',
    onTertiaryContainer: 'rgb(188, 235, 237)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(26, 28, 24)',
    onBackground: 'rgb(227, 227, 220)',
    surface: 'rgb(26, 28, 24)',
    onSurface: 'rgb(227, 227, 220)',
    surfaceVariant: 'rgb(67, 72, 63)',
    onSurfaceVariant: 'rgb(195, 200, 188)',
    outline: 'rgb(141, 147, 135)',
    outlineVariant: 'rgb(141, 147, 135)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(227, 227, 220)',
    inverseOnSurface: 'rgb(47, 49, 45)',
    inversePrimary: 'rgb(6, 185, 0)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(31, 38, 27)',
      level2: 'rgb(33, 44, 29)',
      level3: 'rgb(36, 49, 31)',
      level4: 'rgb(37, 51, 32)',
      level5: 'rgb(39, 55, 33)',
    },
    surfaceDisabled: 'rgba(227, 227, 220, 0.12)',
    onSurfaceDisabled: 'rgba(227, 227, 220, 0.38)',
    backdrop: 'rgba(45, 50, 41, 0.4)',
  },
};

export type AppThemeType = typeof AppDefaultTheme;

export const useAppTheme = () => useTheme<AppThemeType>();
