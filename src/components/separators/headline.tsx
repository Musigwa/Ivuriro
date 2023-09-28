import React, { FC, PropsWithChildren } from 'react';
import { Button, Text } from 'react-native-paper';
import { Container } from '../containers';

const Headline: FC<
  PropsWithChildren<{ title: string; actionTitle?: string; onPress: () => void }>
> = ({ title, actionTitle = 'See all', onPress }) => {
  return (
    <Container direction='row' justfy='space-between' align='center' style={{ marginVertical: 3 }}>
      <Text style={{ fontWeight: '700', fontSize: 18 }}>{title}</Text>
      <Button mode='text' labelStyle={{ fontWeight: '700', fontSize: 16 }} onPress={onPress}>
        {actionTitle}
      </Button>
    </Container>
  );
};

export default Headline;
