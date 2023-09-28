import { useAppTheme } from '@/assets/themes';
import { HomeStackParamList } from '@/interfaces/types';
import InventoryScreen from '@/screens/home';
import DoctorsScreen from '@/screens/home/doctors';
import MaterialComIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  const { colors } = useAppTheme();
  return (
    <HomeStack.Navigator
      initialRouteName='Inventory'
      screenOptions={{ headerShadowVisible: true, headerBackTitleVisible: false }}
    >
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
      <HomeStack.Screen
        name='Doctors'
        component={DoctorsScreen}
        options={{ title: 'Top Doctors' }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
