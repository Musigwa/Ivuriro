import { useAppTheme } from '@/assets/themes';
import { TabParamList } from '@/interfaces/types';
import ChatScreen from '@/screens/chats';
import InventoryScreen from '@/screens/home';
import ProfileScreen from '@/screens/profile';
import ScheduleScreen from '@/screens/schedule';
import { headerTitleStyle } from '@/style';
import MaterialComIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Avatar, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
        headerTitleStyle: { ...headerTitleStyle },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        headerStyle: { height: 130 },
      })}
    >
      <Tab.Screen
        name='Home'
        component={InventoryScreen}
        options={{
          headerTitle: props => (
            <Text
              {...props}
              numberOfLines={2}
              style={{
                fontSize: 20,
                fontWeight: '700',
                width: '90%',
                color: colors.outlineVariant,
              }}
            >
              Find health solutions right at your fingertips
            </Text>
          ),
          headerRight: () => (
            <Avatar.Icon
              size={45}
              icon='bell-outline'
              color={colors.outlineVariant}
              style={{ backgroundColor: 'transparent', marginRight: 10 }}
            />
          ),
          headerTitleContainerStyle: {
            paddingTop: 10,
            justifyContent: 'flex-start',
            marginLeft: 25,
          },
          headerRightContainerStyle: {
            paddingTop: 5,
            justifyContent: 'flex-start',
          },
        }}
      />
      <Tab.Screen name='Chat' component={ChatScreen} />
      <Tab.Screen name='Schedule' component={ScheduleScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
