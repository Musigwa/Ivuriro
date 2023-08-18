import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Boarding: undefined;
  GetStarted: undefined;
  Login: undefined;
  Signup: undefined;
};

export type BoardingProps = NativeStackScreenProps<RootStackParamList, 'Boarding'>;
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignupProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;
export type GetStartedProps = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;
