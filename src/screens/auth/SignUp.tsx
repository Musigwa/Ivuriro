import { useAppTheme } from '@/assets/themes';
import SocialButtons from '@/components/buttons/social';
import { Container } from '@/components/containers';
import Alternative from '@/components/separators/alternate';
import { SignUpProps } from '@/interfaces/types';
import React, { FC, PropsWithChildren, useState } from 'react';
import { Button, Checkbox, Text, TextInput } from 'react-native-paper';

const SingUpScreen: FC<PropsWithChildren<SignUpProps>> = ({ navigation }) => {
  const [hidePwd, setHidePwd] = useState(true);
  const [checked, setChecked] = useState(false);
  const { colors } = useAppTheme();

  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <Container spacing={30} scrollable>
      {/* The upper part of the screen */}
      <Container align='center' spacing={20}>
        <TextInput
          label='Enter your full name'
          left={<TextInput.Icon icon='account' color={colors.outlineVariant} />}
          style={{ width: '100%' }}
          outlineStyle={{ borderRadius: 15 }}
          mode='outlined'
          keyboardType='name-phone-pad'
        />
        <TextInput
          label='Enter your email'
          left={<TextInput.Icon icon='email' color={colors.outlineVariant} />}
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
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Container
            direction='row'
            align='center'
            justfy='center'
            style={{ flexWrap: 'wrap', rowGap: -12 }}
          >
            <Checkbox.Android status={checked ? 'checked' : 'unchecked'} onPress={handleCheck} />
            <Text variant='bodyLarge' style={{ color: colors.outlineVariant, fontStyle: 'italic' }}>
              {`\u2002I agree to\u2002`}
              <Text variant='bodyLarge' style={{ fontWeight: '900', color: colors.tertiary }}>
                Ivuriro
              </Text>
            </Text>
            <Button compact mode='text' labelStyle={{ fontStyle: 'italic' }}>
              Terms of Service
            </Button>
            <Text variant='bodyLarge' style={{ color: colors.outlineVariant, fontStyle: 'italic' }}>
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
          onPress={() => navigation.navigate('Tabs')}
        >
          Sign Up
        </Button>
        <Container direction='row' justfy='center' align='center'>
          <Text variant='bodyLarge' style={{ color: colors.outlineVariant }}>
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
        <Alternative />
      </Container>
      {/* The lower part of the screen */}
      <SocialButtons />
    </Container>
  );
};

export default SingUpScreen;
