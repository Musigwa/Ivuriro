import { useAppTheme } from '@/assets/themes';
import { HomeStackParamList } from '@/interfaces/types';
import InventoryScreen from '@/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Avatar } from 'react-native-paper';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  const { colors } = useAppTheme();
  return (
    <HomeStack.Navigator
      initialRouteName='Inventory'
      screenOptions={{
        headerShadowVisible: false,
        // headerTitleStyle,
        // headerBackTitleVisible: false,
        headerTitleAlign: 'left',
      }}
    >
      <HomeStack.Screen
        name='Inventory'
        component={InventoryScreen}
        options={{
          title: 'Find your tailored health solutions',
          headerTitleAlign: 'left',
          headerRight(props) {
            return (
              <Avatar.Icon
                size={40}
                icon='bell-outline'
                color={colors.outlineVariant}
                style={{ backgroundColor: 'transparent' }}
              />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
