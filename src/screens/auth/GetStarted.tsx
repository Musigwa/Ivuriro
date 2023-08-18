import appIcon from '@/assets/icons/appName.png';
import { Container } from '@/components/containers';
import { Image } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

const GetStartedScreen = () => {
  const { colors } = useTheme();
  return (
    <Container variant='columnCentered' spacing={65} style={{ flex: 1, marginHorizontal: 20 }}>
      <Image style={{ width: 150, height: 150 }} source={appIcon} />
      <Container spacing={15} style={{}}>
        <Text variant='headlineMedium' style={{ fontWeight: '500' }}>
          Let's get started!
        </Text>
        <Text
          variant='bodyLarge'
          style={{
            textAlign: 'center',
            fontWeight: '600',
            color: colors.outline,
          }}
        >
          Login to enjoy the features we've privided, and stay healthy!
        </Text>
      </Container>
      <Container spacing={28} style={{}}>
        <Button
          contentStyle={{ width: 350, paddingVertical: 10 }}
          labelStyle={{ fontWeight: '700', fontSize: 16 }}
          mode='contained'
          onPress={() => console.log('Pressed')}
        >
          Login
        </Button>
        <Button
          contentStyle={{ width: 350, paddingVertical: 8 }}
          labelStyle={{ fontWeight: '700', fontSize: 16 }}
          mode='outlined'
          onPress={() => console.log('Pressed')}
        >
          Sign Up
        </Button>
      </Container>
    </Container>
  );
};

export default GetStartedScreen;
