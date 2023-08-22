import { Image, StyleSheet, View } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import CardContainer from '.';
import { Container } from '../containers';
import { Text } from 'react-native-paper';
import { healthArticles } from '@/screens/home/data';
import { useAppTheme } from '@/assets/themes';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

const Article: FC<PropsWithChildren<(typeof healthArticles)[0]>> = ({
  title,
  updatedAt,
  readingTime,
}) => {
  const { colors } = useAppTheme();
  const bookmaarked = Math.random() < 0.4;
  return (
    <CardContainer direction='row' spacing={20} justfy='space-around'>
      <Image
        source={{ uri: 'https://picsum.photos/700' }}
        style={{ borderRadius: 5, width: 95, height: 80 }}
        resizeMode='cover'
      />
      <Container justfy='space-between' style={{ flex: 1 }}>
        <Text
          variant='bodyLarge'
          style={{ fontWeight: '700' }}
          numberOfLines={2}
          ellipsizeMode='tail'
        >
          {title}
        </Text>
        <Container direction='row' style={{ padding: 0 }} spacing={5}>
          <Text variant='labelMedium' style={{ color: colors.outlineVariant }}>
            {moment(updatedAt).format('ll')}
          </Text>
          <Text variant='labelMedium' style={{ color: colors.outlineVariant }}>
            -
          </Text>
          <Text variant='labelMedium' style={{ textAlign: 'center', color: colors.primary }}>
            {readingTime} read
          </Text>
        </Container>
      </Container>
      <Ionicons
        name={`bookmarks${!bookmaarked ? '-outline' : ''}`}
        size={18}
        color={colors.primary}
      />
    </CardContainer>
  );
};

export default Article;

const styles = StyleSheet.create({});
