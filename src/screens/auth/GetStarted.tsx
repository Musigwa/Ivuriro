import appIcon from '@/assets/icons/appName.png';
import { useAppTheme } from '@/assets/themes';
import { Container } from '@/components/containers';
import { GetStartedProps } from '@/interfaces/types';
import { Image } from 'react-native';
import { Button, Text } from 'react-native-paper';

const GetStartedScreen = ({ navigation }: GetStartedProps) => {
  const { colors } = useAppTheme();

  return (
    <Container
      align='center'
      justfy='center'
      spacing={65}
      style={{ flex: 1, paddingHorizontal: 20 }}
    >
      <Image style={{ width: 150, height: 150 }} source={appIcon} />
      <Container spacing={15} align='center'>
        <Text variant='headlineMedium' style={{ fontWeight: '500' }}>
          Let's get started!
        </Text>
        <Text
          variant='bodyLarge'
          style={{ textAlign: 'center', fontWeight: '600', color: colors.outlineVariant }}
        >
          Login to enjoy the features we've privided, and stay healthy!
        </Text>
      </Container>
      <Container spacing={28}>
        <Button
          style={{ width: '100%' }}
          contentStyle={{ paddingVertical: 10 }}
          labelStyle={{ fontWeight: '700', fontSize: 16 }}
          mode='contained'
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Button>
        <Button
          style={{ width: '100%' }}
          contentStyle={{ paddingVertical: 7 }}
          labelStyle={{ fontWeight: '700', fontSize: 16 }}
          mode='outlined'
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Button>
      </Container>
    </Container>
  );
};

export default GetStartedScreen;
