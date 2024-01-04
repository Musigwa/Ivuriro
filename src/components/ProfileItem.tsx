import profile from '@/assets/images/profile.jpeg';
import { ellipsizeText } from '@/utils';
import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, useTheme } from 'react-native-paper';

type ItemProps = {
  title: string;
  description: string;
  titleMaxLength?: number;
  descMaxLength?: number;
};

const ProfileItem: FC<PropsWithChildren<ItemProps>> = ({
  title,
  description,
  titleMaxLength = 18,
  descMaxLength = 30,
}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Avatar.Image source={profile} />
      <View style={{ justifyContent: 'space-evenly' }}>
        <Text variant='titleLarge' style={{ fontWeight: '600' }}>
          {ellipsizeText(title, titleMaxLength)}
        </Text>
        <Text variant='titleMedium' style={{ fontWeight: '700', color: colors.outline }}>
          {ellipsizeText(description, descMaxLength)}
        </Text>
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
});
