import appleOutline from '@/assets/icons/apple-white.png';
import apple from '@/assets/icons/apple.png';
import facebook from '@/assets/icons/facebook.png';
import google from '@/assets/icons/google.png';
import { useAppTheme } from '@/assets/themes';
import React, { PropsWithChildren, FC } from 'react';
import { Image, StyleSheet, View, useColorScheme } from 'react-native';
import { Button } from 'react-native-paper';
import { Container } from '../containers';

const SocialButtons: FC<PropsWithChildren<{}>> = ({}) => {
  const { colors } = useAppTheme();
  const handleSocialLogin = (platform: 'facebook' | 'google' | 'apple' | string) => {};
  const colorScheme = useColorScheme();
  return (
    <Container spacing={15}>
      {[
        { title: 'Google', icon: google },
        { title: 'Apple', icon: colorScheme === 'light' ? apple : appleOutline },
        { title: 'Facebook', icon: facebook },
      ].map(({ title, icon }, idx) => {
        return (
          <Button
            key={idx}
            icon={() => <Image style={{ width: 30, height: 30 }} source={icon} />}
            style={{ width: '100%' }}
            contentStyle={styles.btnContainer}
            labelStyle={[styles.btnLabel, { color: colors.onBackground }]}
            onPress={() => handleSocialLogin(title.toLowerCase())}
            mode='outlined'
          >
            {`Sign in with ${title}`}
          </Button>
        );
      })}
    </Container>
  );
};

export default SocialButtons;

const styles = StyleSheet.create({
  btnContainer: {
    padding: 10,
    justifyContent: 'flex-start',
  },
  btnLabel: {
    marginLeft: 70,
    fontWeight: '700',
    fontSize: 16,
  },
});
