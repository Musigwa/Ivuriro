import { useAppTheme } from '@/assets/themes';
import { genRandomCoords } from '@/helpers';
import { doctors } from '@/screens/home/data';
import { geoDistanceCalc } from '@/utils';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import CardContainer from '.';
import { Container } from '../containers';

const Doctor: FC<PropsWithChildren<(typeof doctors)[0]>> = ({
  name,
  speciality,
  location,
  rating,
}) => {
  const { colors } = useAppTheme();
  const userLocation = genRandomCoords();
  return (
    <CardContainer
      style={{ width: 180 }}
      align='center'
      justfy='space-between'
      spacing={20}
      elevated
    >
      <Avatar.Image source={{ uri: 'https://picsum.photos/700' }} size={90} />
      <Container>
        <Text variant='bodyLarge' style={{ fontWeight: '700' }} numberOfLines={1}>
          {name}
        </Text>
        <Text
          variant='bodyMedium'
          style={{ color: colors.outline, fontWeight: '700' }}
          numberOfLines={1}
        >
          {speciality}
        </Text>
      </Container>
      <Container direction='row' style={{ width: '100%' }} spacing={15} justfy='space-between'>
        <Container direction='row' spacing={2} align='center'>
          <MaterialIcons name='star' size={15} color={colors.primary} />
          <Text variant='labelMedium' style={{ textAlign: 'center', color: colors.primary }}>
            {rating}
          </Text>
        </Container>
        <Container direction='row' spacing={2} align='center' style={{ flex: 1, maxWidth: '50%' }}>
          <Ionicons name='location-sharp' size={12} color={colors.text} />
          <Text variant='labelMedium' style={{ color: colors.outlineVariant }} numberOfLines={2}>
            {geoDistanceCalc(location, userLocation)} Km
          </Text>
        </Container>
      </Container>
    </CardContainer>
  );
};

export default Doctor;

const styles = StyleSheet.create({});
