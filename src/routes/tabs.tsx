import { TabParamList } from '@/interfaces/types';
import ChatScreen from '@/screens/chats';
import InventoryScreen from '@/screens/home';
import ProfileScreen from '@/screens/profile';
import ScheduleScreen from '@/screens/schedule';
import { headerTitleStyle } from '@/style';
import MaterialComIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator<TabParamList>();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: props => {
          let properties = { ...props, name: '', size: 30 };
          switch (route.name) {
            case 'Chat':
              properties.name = 'chat-outline';
              break;
            case 'Home':
              properties.name = 'home-outline';
              break;
            case 'Profile':
              properties.name = 'account-tie-outline';
              break;
            case 'Schedule':
              properties = { ...properties, size: 25, name: 'calendar-month-outline' };
            default:
              break;
          }
          return <MaterialComIcons {...properties} />;
        },
        headerTitleStyle,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name='Home' component={InventoryScreen} />
      <Tab.Screen name='Chat' component={ChatScreen} />
      <Tab.Screen name='Schedule' component={ScheduleScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
