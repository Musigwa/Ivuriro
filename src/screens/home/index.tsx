import image from '@/assets/images/landing3.png';
import { useAppTheme } from '@/assets/themes';
import { Container } from '@/components/containers';
import Headline from '@/components/separators/headline';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Avatar, Button, Searchbar, Text } from 'react-native-paper';

const InventoryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const { colors } = useAppTheme();
  const data = [
    { icon: 'stethoscope', title: 'Doctor' },
    { icon: 'pill', title: 'Pharmacy' },
    { icon: 'hospital-building', title: 'Hospital' },
    { icon: 'ambulance', title: 'Ambulance' },
  ];

  const doctors = [
    { name: 'Dr. Olivia Bennett', speciality: 'Cardiology' },
    { name: 'Dr. Marcus Rodriguez', speciality: 'Orthopedic Surgery' },
    { name: 'Dr. Emily Carter', speciality: 'Pediatric Neurology' },
    { name: 'Dr. Samuel Nguyen', speciality: 'Gastroenterology' },
    { name: 'Dr. Isabella Patel', speciality: 'Dermatology' },
    { name: 'Dr. Elijah Foster', speciality: 'Oncology' },
    { name: 'Dr. Sophia Mitchell', speciality: 'Psychiatry' },
    { name: 'Dr. Alexander Chen', speciality: 'Neurosurgery' },
    { name: 'Dr. Ava Williams', speciality: 'Obstetrics & Gynecology' },
    { name: 'Dr. Jackson Davis', speciality: 'Emergency Medicine' },
  ];

  return (
    <Container style={styles.container} spacing={15}>
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
      <Container scrollable style={{ padding: 0 }}>
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
        <Headline title='Doctors' onPress={() => {}} />
        <Container scrollable direction='row' spacing={20} style={{ padding: 0 }}>
          {doctors.map(({ name, speciality }, idx) => (
            <Container
              key={idx}
              style={[
                styles.doCard,
                { backgroundColor: colors.surface, borderColor: colors.outline },
              ]}
              align='center'
              spacing={20}
            >
              <Avatar.Image source={{ uri: 'https://picsum.photos/700' }} size={120} />
              <Container>
                <Text
                  variant='bodyLarge'
                  style={{ fontWeight: '700', width: '100%' }}
                  numberOfLines={1}
                >
                  {name}
                </Text>
                <Text
                  variant='bodyMedium'
                  style={{ color: colors.outline, fontWeight: '700', width: '100%' }}
                  numberOfLines={1}
                >
                  {speciality}
                </Text>
              </Container>
              <Container
                direction='row'
                style={{ padding: 0, width: '100%' }}
                spacing={0}
                justfy='space-between'
              >
                <Container direction='row' spacing={2}>
                  <MaterialIcons name='star' size={18} color={colors.primary} />
                  <Text style={{ textAlign: 'center', color: colors.primary }}>
                    {(Math.random() * 5).toFixed(1)}
                  </Text>
                </Container>
                <Container direction='row' spacing={2}>
                  <Ionicons name='location-sharp' size={15} color={colors.text} />
                  <Text>{(Math.random() * 5).toFixed(1)}km away</Text>
                </Container>
              </Container>
            </Container>
          ))}
        </Container>
        <Headline title='Health Articles' onPress={() => {}} />
      </Container>
    </Container>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  container: { padding: 25 },
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
  },
});
