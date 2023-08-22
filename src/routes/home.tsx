import { useAppTheme } from '@/assets/themes';
import { HomeStackParamList } from '@/interfaces/types';
import InventoryScreen from '@/screens/home';
import MaterialComIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  const { colors } = useAppTheme();
  return (
    <HomeStack.Navigator initialRouteName='Inventory' screenOptions={{ headerShadowVisible: true }}>
      <HomeStack.Screen
        name='Inventory'
        component={InventoryScreen}
        options={{
          title: 'Find your tailored health solutions',
          headerRight: () => (
            <MaterialComIcons size={25} name='bell-outline' color={colors.outlineVariant} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
