import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Boarding: undefined;
  GetStarted: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type BoardingProps = NativeStackScreenProps<RootStackParamList, 'Boarding'>;
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type GetStartedProps = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;
