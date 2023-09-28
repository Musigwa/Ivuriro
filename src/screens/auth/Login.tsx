import { useAppTheme } from '@/assets/themes';
import SocialButtons from '@/components/buttons/social';
import { Container } from '@/components/containers';
import Alternative from '@/components/separators/alternate';
import { LoginProps } from '@/interfaces/types';
import React, { FC, PropsWithChildren, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const LoginScreen: FC<PropsWithChildren<LoginProps>> = ({ navigation }) => {
  const [hidePwd, setHidePwd] = useState(true);
  const { colors } = useAppTheme();

  return (
    <Container align='center' spacing={25} scrollable>
      {/* The upper part of the screen */}
      <Container align='center' spacing={20}>
        <TextInput
          label='Enter your email'
          left={<TextInput.Icon icon='email' color={colors.outlineVariant} />}
          style={{ width: '100%' }}
          outlineStyle={{ borderRadius: 15 }}
          mode='outlined'
          keyboardType='email-address'
        />
        <Container>
          <TextInput
            label='Enter your password'
            left={<TextInput.Icon icon='lock' color={colors.outlineVariant} />}
            right={
              <TextInput.Icon
                onPress={() => setHidePwd(!hidePwd)}
                icon={`eye${!hidePwd ? '-off' : ''}`}
                color={colors.outlineVariant}
              />
            }
            secureTextEntry={hidePwd}
            style={{ width: '100%' }}
            outlineStyle={{ borderRadius: 15 }}
            mode='outlined'
            keyboardType='visible-password'
            returnKeyLabel='login'
          />
          <Button compact style={{ alignSelf: 'flex-end' }} labelStyle={{ fontWeight: '700' }}>
            Forgot Password?
          </Button>
        </Container>
      </Container>
      {/* The center part of the screen */}
      <Container spacing={10}>
        <Button
          style={{ width: '100%' }}
          contentStyle={{ paddingVertical: 10 }}
          labelStyle={{ fontWeight: '700', fontSize: 16 }}
          mode='contained'
          onPress={() => navigation.navigate('Tabs')}
        >
          Login
        </Button>
        <Container direction='row' align='center' justfy='center'>
          <Text variant='bodyLarge' style={{ color: colors.outlineVariant }}>
            Don't have an account?
          </Text>
          <Button
            compact
            style={{ alignSelf: 'flex-end' }}
            labelStyle={{ fontWeight: '700' }}
            onPress={() => navigation.navigate('SignUp')}
          >
            Sign Up
          </Button>
        </Container>
        <Alternative />
      </Container>
      {/* The lower part of the screen */}
      <SocialButtons />
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  hairline: {
    height: StyleSheet.hairlineWidth,
    width: '45%',
  },
});
