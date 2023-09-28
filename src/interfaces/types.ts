import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ViewProps } from 'react-native';

export type RootStackParamList = {
  Boarding: undefined;
  GetStarted: undefined;
  Login: undefined;
  SignUp: undefined;
  Tabs: undefined;
  Doctors: undefined;
};

export type BoardingProps = NativeStackScreenProps<RootStackParamList, 'Boarding'>;
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type GetStartedProps = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

export type HomeStackParamList = {
  Inventory: undefined;
  Doctors: undefined;
};

export type InventoryProps = NativeStackScreenProps<HomeStackParamList, 'Inventory'>;
export type DoctorsProps = NativeStackScreenProps<HomeStackParamList, 'Doctors'>;

export type ChatStackParamList = {
  ChatList: undefined;
};

export type ScheduleStackParamList = {
  Schedule: undefined;
};

export type ProfileStackParamList = {
  UserDetails: undefined;
};

// export type TabParamList = {
//   Home: NavigatorScreenParams<HomeStackParamList>;
//   Profile: NavigatorScreenParams<ProfileStackParamList>;
//   Schedule: NavigatorScreenParams<ScheduleStackParamList>;
//   Chat: NavigatorScreenParams<ChatStackParamList>;
// };

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Schedule: undefined;
  Chat: undefined;
};

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

type alignType = 'flex-start' | 'center' | 'flex-end';

export type ContainerProps = ViewProps & {
  spacing?: number;
  scrollable?: boolean;
  align?: alignType;
  justfy?: alignType | 'space-between' | 'space-around' | 'space-evenly';
  direction?: 'column' | 'row';
  reverse?: boolean;
};
