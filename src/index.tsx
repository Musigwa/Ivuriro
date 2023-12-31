import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { AppDarkTheme, AppDefaultTheme } from './assets/themes';
import AppNavigator from './routes';

export default () => {
  const colorScheme = useColorScheme();
  const AppTheme = colorScheme === 'dark' ? AppDarkTheme : AppDefaultTheme;
  return (
    <PaperProvider theme={AppTheme}>
      <StatusBar style='dark' />
      <AppNavigator theme={AppTheme} />
    </PaperProvider>
  );
};
