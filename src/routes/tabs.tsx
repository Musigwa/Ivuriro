import { useAppTheme } from '@/assets/themes';
import { TabParamList } from '@/interfaces/types';
import ChatScreen from '@/screens/chats';
import ProfileScreen from '@/screens/profile';
import ScheduleScreen from '@/screens/schedule';
import { headerTitleStyle } from '@/style';
import MaterialComIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeNavigator from './home';

const Tab = createBottomTabNavigator<TabParamList>();

const AppTabs = () => {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: props => {
          let properties: any = { ...props, size: 32 };
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
              properties = { ...properties, size: 28, name: 'calendar-month-outline' };
            default:
              break;
          }
          return <MaterialComIcons {...properties} />;
        },
        headerTitleStyle,
        tabBarShowLabel: false,
        headerShown: false,
        headerTitleAlign: 'left',
      })}
    >
      <Tab.Screen name='Home' component={HomeNavigator} />
      <Tab.Screen name='Chat' component={ChatScreen} />
      <Tab.Screen name='Schedule' component={ScheduleScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
