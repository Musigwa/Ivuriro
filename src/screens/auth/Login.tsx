import { StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';
import { LoginProps } from '@/interfaces';
import { Container } from '@/components/containers';
import { Button, TextInput, Text } from 'react-native-paper';
import { useAppTheme } from '@/assets/themes';
import appleLogo from '@/assets/icons/apple.png';
import googleLogo from '@/assets/icons/google.png';
import facebookLogo from '@/assets/icons/facebook.png';

const LoginScreen = ({ navigation }: LoginProps) => {
  const [hidePwd, setHidePwd] = useState(true);
  const { colors } = useAppTheme();

  const handleSocialLogin = (platform: 'facebook' | 'google' | 'apple' | string) => {};

  return (
    <Container
      variant='column'
      style={{ flex: 1, paddingHorizontal: 25, marginTop: 40 }}
      spacing={30}
    >
      {/* The upper part of the screen */}
      <Container variant='columnCentered' style={{ width: '100%' }} spacing={20}>
        <TextInput
          label='Enter your email'
          left={<TextInput.Icon icon='email' />}
          style={{ width: '100%' }}
          outlineStyle={{ borderRadius: 15 }}
          mode='outlined'
        />
        <Container style={{ width: '100%' }}>
          <TextInput
            label='Enter your password'
            left={<TextInput.Icon icon='lock' />}
            right={
              <TextInput.Icon
                onPress={() => setHidePwd(!hidePwd)}
                icon={`eye${!hidePwd ? '-off' : ''}`}
              />
            }
            secureTextEntry={hidePwd}
            style={{ width: '100%' }}
            outlineStyle={{ borderRadius: 15 }}
            mode='outlined'
          />
          <Button compact style={{ alignSelf: 'flex-end' }} labelStyle={{ fontWeight: '700' }}>
            Forgot Password?
          </Button>
        </Container>
      </Container>
      {/* The center part of the screen */}
      <Container style={{ width: '100%' }} spacing={10}>
        <Button
          style={{ width: '100%' }}
          contentStyle={{ paddingVertical: 10 }}
          labelStyle={{ fontWeight: '700', fontSize: 16 }}
          mode='contained'
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Button>
        <Container variant='rowCentered'>
          <Text variant='bodyLarge'>Don't have an account?</Text>
          <Button
            compact
            style={{ alignSelf: 'flex-end' }}
            labelStyle={{ fontWeight: '700' }}
            onPress={() => navigation.navigate('Signup')}
          >
            Sign Up
          </Button>
        </Container>
        <Container style={{ width: '100%' }} variant='row'>
          <View style={[styles.hairline, { borderColor: colors.onSurfaceDisabled }]} />
          <Text style={{ color: colors.onSurfaceDisabled }}>OR</Text>
          <View style={[styles.hairline, { borderColor: colors.onSurfaceDisabled }]} />
        </Container>
      </Container>
      {/* The lower part of the screen */}
      <Container style={{ width: '100%' }} spacing={15}>
        {[
          { title: 'Apple', icon: appleLogo },
          { title: 'Google', icon: googleLogo },
          { title: 'Facebook', icon: facebookLogo },
        ].map(({ title, icon }, idx) => {
          return (
            <Button
              key={idx}
              icon={() => <Image style={{ width: 25, height: 25 }} source={icon} />}
              style={{ width: '100%' }}
              contentStyle={{ paddingVertical: 10 }}
              labelStyle={{ fontWeight: '700', fontSize: 16, color: colors.onBackground }}
              mode='outlined'
              onPress={() => handleSocialLogin(title.toLowerCase())}
              loading={false}
            >
              {`Sign in with ${title}`}
            </Button>
          );
        })}
      </Container>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  hairline: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    width: '45%',
  },
});
