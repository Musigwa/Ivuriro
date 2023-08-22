import { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ViewProps } from 'react-native';

export type RootStackParamList = {
  Boarding: undefined;
  GetStarted: undefined;
  Login: undefined;
  SignUp: undefined;
  Tabs: undefined;
};

export type BoardingProps = NativeStackScreenProps<RootStackParamList, 'Boarding'>;
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type GetStartedProps = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

export type HomeStackParamList = {
  Inventory: undefined;
};

export type ChatStackParamList = {
  ChatList: undefined;
};

export type ScheduleStackParamList = {
  Schedule: undefined;
};

export type ProfileStackParamList = {
  UserDetails: undefined;
};

export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
  Schedule: NavigatorScreenParams<ScheduleStackParamList>;
  Chat: NavigatorScreenParams<ChatStackParamList>;
};

type alignType = 'flex-start' | 'center' | 'flex-end';

export type ContainerProps = ViewProps & {
  spacing?: number;
  scrollable?: boolean;
  align?: alignType;
  justfy?: alignType | 'space-between' | 'space-around' | 'space-evenly';
  direction?: 'column' | 'row';
  reverse?: boolean;
};
