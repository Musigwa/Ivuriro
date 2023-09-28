import image from '@/assets/images/landing3.png';
import { useAppTheme } from '@/assets/themes';
import Card from '@/components/cards';
import { Container } from '@/components/containers';
import Headline from '@/components/separators/headline';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { FC, PropsWithChildren, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Avatar, Button, Searchbar, Text } from 'react-native-paper';
import { doctors, healthArticles } from './data';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import moment from 'moment';
import Doctor from '@/components/cards/Doctor';
import Article from '@/components/cards/Article';
import { InventoryProps } from '@/interfaces/types';

const InventoryScreen: FC<PropsWithChildren<InventoryProps>> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  const data = [
    { icon: 'stethoscope', title: 'Doctor' },
    { icon: 'pill', title: 'Pharmacy' },
    { icon: 'hospital-building', title: 'Hospital' },
    { icon: 'ambulance', title: 'Ambulance' },
  ];

  return (
    <Container style={[styles.container]} spacing={15}>
      <Container spacing={10}>
        <Searchbar
          style={styles.searchbar}
          placeholder='Search doctors, drugs, articles, ...'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Container scrollable direction='row' style={{ padding: 0 }} spacing={28}>
          {data.map((item, index) => (
            <Container key={index} style={styles.avatarContainer}>
              <Avatar.Icon icon={item.icon} color={colors.primary} style={styles.avatar} />
              <Text variant='bodyLarge' style={{ color: colors.outlineVariant, fontWeight: '600' }}>
                {item.title}
              </Text>
            </Container>
          ))}
        </Container>
      </Container>
      <Container scrollable style={{ padding: 0 }} spacing={10}>
        <Container
          direction='row'
          justfy='space-between'
          style={[styles.bannerContainer, { backgroundColor: colors.elevation.level4 }]}
        >
          <Container spacing={15} style={{ width: '60%' }}>
            <Text variant='titleLarge' style={{ fontWeight: '700' }}>
              Early protection for your family health
            </Text>
            <Button mode='contained' style={{ width: '70%' }} labelStyle={{ fontWeight: '800' }}>
              Learn more
            </Button>
          </Container>
          <View style={[{ backgroundColor: colors.background }, styles.behindImage]} />
          <Image source={image} style={styles.image} />
        </Container>
        <Headline title='Top Doctors' onPress={() => navigation.navigate('Doctors')} />
        <Container
          scrollable
          direction='row'
          spacing={20}
          style={{ padding: 0, paddingVertical: 5, paddingHorizontal: 3 }}
        >
          {doctors.map((props, idx) => (
            <Doctor key={idx} {...props} circular />
          ))}
        </Container>
        <Headline title='Health Articles' onPress={() => {}} />
        {/* Articles */}
        <Container spacing={20} style={{ marginBottom: 20 }}>
          {healthArticles.map((props, idx) => (
            <Article {...props} key={idx} />
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  container: { padding: 25, paddingBottom: 180 },
  searchbar: { width: '100%', borderRadius: 15 },
  avatarContainer: { flex: 1, alignItems: 'center' },
  avatar: { backgroundColor: 'transparent' },
  bannerContainer: {
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 15,
    paddingLeft: 15,
  },
  behindImage: { height: 100, width: 100, borderRadius: 50 },
  image: {
    right: -15,
    position: 'absolute',
    height: '99%',
    width: '40%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  doCard: {
    borderWidth: StyleSheet.hairlineWidth,
    width: 200,
    borderRadius: 10,
    padding: 15,
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
});
