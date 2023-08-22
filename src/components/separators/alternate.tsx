import { useAppTheme } from '@/assets/themes';
import { style } from '@/style';
import React from 'react';
import { Text, View } from 'react-native';
import { Container } from '../containers';

const Alternative = () => {
  const { colors } = useAppTheme();
  return (
    <Container direction='row' align='center' justfy='space-between'>
      <View style={[style.hairline, { backgroundColor: colors.outlineVariant }]} />
      <Text style={{ color: colors.outlineVariant }}>OR</Text>
      <View style={[style.hairline, { backgroundColor: colors.outlineVariant }]} />
    </Container>
  );
};

export default Alternative;
