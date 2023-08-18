import { AppThemeType, useAppTheme } from '@/assets/themes';
import GetStartedScreen from '@/screens/auth/GetStarted';
import SignUpScreen from '@/screens/auth/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardingScreen from '@/screens/boarding';
import * as React from 'react';
import { RootStackParamList } from '@/interfaces';
import LoginScreen from '@/screens/auth/Login';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = ({ theme }: { theme: AppThemeType }) => {
  const { colors } = theme;
  return (
    <NavigationContainer
      theme={{
        ...theme,
        colors: { ...theme.colors, card: theme.colors.surface, border: 'transparent' },
      }}
    >
      <RootStack.Navigator
        initialRouteName='Boarding'
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '800', fontSize: 20 },
          headerBackTitleVisible: false,
        }}
      >
        <RootStack.Screen
          name='Boarding'
          component={BoardingScreen}
          options={{ headerShadowVisible: false, title: '' }}
        />
        <RootStack.Screen
          name='GetStarted'
          component={GetStartedScreen}
          options={{ header: () => null }}
        />
        <RootStack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerShadowVisible: false,
            headerTintColor: colors.text,
            headerTitleStyle: { fontWeight: '800', fontSize: 20 },
          }}
        />
        <RootStack.Screen name='SignUp' component={SignUpScreen} options={{ title: 'Sign Up' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
