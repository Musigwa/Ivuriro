import { AppThemeType } from '@/assets/themes';
import GetStartedScreen from '@/screens/auth/GetStarted';
import SignUpScreen from '@/screens/auth/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

const Stack = createNativeStackNavigator();

const AppNavigator = ({ theme }: { theme: AppThemeType }) => {
  return (
    <NavigationContainer
      theme={{
        ...theme,
        colors: { ...theme.colors, card: theme.colors.surface, border: 'transparent' },
      }}
    >
      <Stack.Navigator initialRouteName='Home' screenOptions={{ header: () => null }}>
        <Stack.Screen name='Home' component={GetStartedScreen} />
        <Stack.Screen name='Details' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
