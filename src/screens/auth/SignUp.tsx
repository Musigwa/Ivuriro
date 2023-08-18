import appleLogo from '@/assets/icons/apple.png';
import facebookLogo from '@/assets/icons/facebook.png';
import googleLogo from '@/assets/icons/google.png';
import { useAppTheme } from '@/assets/themes';
import { Container } from '@/components/containers';
import { SignUpProps } from '@/interfaces';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Checkbox, Text, TextInput } from 'react-native-paper';

const SingUpScreen = ({ navigation }: SignUpProps) => {
  const [hidePwd, setHidePwd] = useState(true);
  const [checked, setChecked] = useState(false);
  const { colors } = useAppTheme();

  const handleSocialLogin = (platform: 'facebook' | 'google' | 'apple' | string) => {};

  return (
    <Container
      variant='column'
      style={{ flex: 1, paddingHorizontal: 25, marginTop: 20, overflow: 'scroll' }}
      spacing={30}
    >
      {/* The upper part of the screen */}
      <Container variant='columnCentered' spacing={20}>
        <TextInput
          label='Enter your full name'
          left={<TextInput.Icon icon='account' />}
          style={{ width: '100%' }}
          outlineStyle={{ borderRadius: 15 }}
          mode='outlined'
          keyboardType='name-phone-pad'
        />
        <TextInput
          label='Enter your email'
          left={<TextInput.Icon icon='email' />}
          style={{ width: '100%' }}
          outlineStyle={{ borderRadius: 15 }}
          mode='outlined'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Container spacing={10}>
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
            keyboardType='visible-password'
            returnKeyLabel='login'
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Container variant='rowCentered' style={{ flexWrap: 'wrap', rowGap: -12 }}>
            <Checkbox.Android
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text variant='bodyLarge' style={{ color: colors.outline, fontStyle: 'italic' }}>
              I agree to <Text style={{ fontWeight: '900' }}>Ivuriro</Text>
            </Text>
            <Button compact mode='text' labelStyle={{ fontStyle: 'italic' }}>
              Terms of Service
            </Button>
            <Text variant='bodyLarge' style={{ color: colors.outline, fontStyle: 'italic' }}>
              and
            </Text>
            <Button compact mode='text' labelStyle={{ fontStyle: 'italic' }}>
              Privacy Policy
            </Button>
          </Container>
        </Container>
      </Container>
      {/* The center part of the screen */}
      <Container spacing={10}>
        <Button
          style={{ width: '100%' }}
          contentStyle={{ paddingVertical: 10 }}
          labelStyle={{ fontWeight: '700', fontSize: 16 }}
          mode='contained'
          onPress={() => navigation.navigate('Login')}
        >
          Sign Up
        </Button>
        <Container variant='rowCentered'>
          <Text variant='bodyLarge' style={{ color: colors.outline }}>
            Already a member?
          </Text>
          <Button
            compact
            style={{ alignSelf: 'flex-end' }}
            labelStyle={{ fontWeight: '700' }}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Button>
        </Container>
        <Container variant='row'>
          <View style={[styles.hairline, { borderColor: colors.onSurfaceDisabled }]} />
          <Text style={{ color: colors.onSurfaceDisabled }}>OR</Text>
          <View style={[styles.hairline, { borderColor: colors.onSurfaceDisabled }]} />
        </Container>
      </Container>
      {/* The lower part of the screen */}
      <Container spacing={15}>
        {[
          { title: 'Google', icon: googleLogo },
          { title: 'Apple', icon: appleLogo },
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
              {`Get in with ${title}`}
            </Button>
          );
        })}
      </Container>
    </Container>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  hairline: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    width: '45%',
  },
});
