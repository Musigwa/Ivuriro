import React, { FC, PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Container } from '../containers';

const Headline: FC<
  PropsWithChildren<{ title: string; actionTitle?: string; onPress: () => void }>
> = ({ title, actionTitle = 'See all', onPress }) => {
  return (
    <Container direction='row' justfy='space-between' align='center'>
      <Text style={{ fontWeight: '700' }}>{title}</Text>
      <Button mode='text' labelStyle={{ fontWeight: '700' }} onPress={onPress}>
        {actionTitle}
      </Button>
    </Container>
  );
};

export default Headline;
