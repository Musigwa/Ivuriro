import { AppThemeType } from '@/assets/themes';
import { RootStackParamList } from '@/interfaces/types';
import GetStartedScreen from '@/screens/auth/GetStarted';
import LoginScreen from '@/screens/auth/Login';
import SignUpScreen from '@/screens/auth/SignUp';
import BoardingScreen from '@/screens/boarding';
import DoctorsScreen from '@/screens/home/doctors';
import { headerTitleStyle } from '@/style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import AppTabs from './tabs';
const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = ({ theme }: { theme: AppThemeType }) => {
  const { colors } = theme;
  return (
    <NavigationContainer
      theme={{
        ...theme,
        colors: { ...theme.colors, card: theme.colors.surface },
      }}
    >
      <RootStack.Navigator
        initialRouteName='Boarding'
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: colors.text,
          headerTitleStyle,
          headerBackTitleVisible: false,
          headerTitleAlign: 'left',
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
        <RootStack.Screen name='Tabs' component={AppTabs} options={{ headerShown: false }} />
        <RootStack.Screen
          name='Doctors'
          component={DoctorsScreen}
          options={{ title: 'Top Doctors' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
