// import { useAppTheme } from '@/assets/themes';
// import { genRandomCoords } from '@/helpers';
// import { doctors } from '@/screens/home/data';
// import { geoDistanceCalc } from '@/utils';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import React, { FC, PropsWithChildren } from 'react';
// import { Image, StyleSheet, ViewProps } from 'react-native';
// import { Avatar, Text } from 'react-native-paper';
// import CardContainer from '.';
// import { Container } from '../containers';

// const Doctor: FC<PropsWithChildren<ViewProps & (typeof doctors)[0] & { circular?: boolean }>> = ({
//   name,
//   speciality,
//   location,
//   rating,
//   style,
//   circular,
// }) => {
//   const { colors } = useAppTheme();
//   const userLocation = genRandomCoords();
//   return (
//     <CardContainer
//       style={[{ width: 180 }, style]}
//       align='center'
//       justfy='space-between'
//       spacing={20}
//       elevated
//     >
//       <Image
//         source={{ uri: 'https://picsum.photos/700' }}
//         style={{ width: circular ? 90 : 100, height: 90, borderRadius: circular ? 45 : 5 }}
//       />
//       <Container spacing={20}>
//         <Container>
//           <Text variant='bodyLarge' style={{ fontWeight: '700' }} numberOfLines={1}>
//             {name}
//           </Text>
//           <Text
//             variant='bodyMedium'
//             style={{ color: colors.outline, fontWeight: '700' }}
//             numberOfLines={1}
//           >
//             {speciality}
//           </Text>
//         </Container>
//         <Container direction='row' style={{ width: '100%' }} spacing={15} justfy='space-between'>
//           <Container direction='row' spacing={2} align='center'>
//             <MaterialIcons name='star' size={15} color={colors.primary} />
//             <Text variant='labelMedium' style={{ textAlign: 'center', color: colors.primary }}>
//               {rating}
//             </Text>
//           </Container>
//           <Container direction='row' spacing={2} align='center' style={{ maxWidth: '50%' }}>
//             <Ionicons name='location-sharp' size={12} color={colors.text} />
//             <Text variant='labelMedium' style={{ color: colors.outlineVariant }} numberOfLines={2}>
//               {geoDistanceCalc(location, userLocation)} Km
//             </Text>
//           </Container>
//         </Container>
//       </Container>
//     </CardContainer>
//   );
// };

// export default Doctor;

// const styles = StyleSheet.create({});

import { useAppTheme } from '@/assets/themes';
import { genRandomCoords } from '@/helpers';
import { doctors } from '@/screens/home/data';
import { geoDistanceCalc } from '@/utils';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { FC, PropsWithChildren } from 'react';
import { Image, StyleSheet, View, ViewProps, useWindowDimensions } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import CardContainer from '.';
import { Container } from '../containers';
import Docontainer from '../containers/docontainer';

const Doctor: FC<
  PropsWithChildren<
    ViewProps &
      (typeof doctors)[0] & { circular?: boolean; direction?: 'row' | 'column'; reverse?: boolean }
  >
> = ({ name, speciality, location, rating, style, circular, direction = 'column' }) => {
  const { colors } = useAppTheme();
  const userLocation = genRandomCoords();
  const { width } = useWindowDimensions();
  return (
    <Docontainer direction={direction}>
      <Image
        source={{ uri: 'https://picsum.photos/700' }}
        style={{
          width: circular ? 90 : 100,
          height: 90,
          borderRadius: circular ? 45 : 5,
          alignSelf: 'center',
        }}
      />
      <View style={direction === 'column' ? { height: 25 } : { width: 25 }} />
      <View style={{ justifyContent: 'space-around' }}>
        <View>
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
        </View>
        <View style={{ height: 10 }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name='star' size={15} color={colors.primary} />
            <Text variant='labelMedium' style={{ textAlign: 'center', color: colors.primary }}>
              {rating}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='location-sharp' size={12} color={colors.text} />
            <Text
              variant='labelMedium'
              style={{ color: colors.outlineVariant }}
              // numberOfLines={2}
              ellipsizeMode='tail'
            >
              {geoDistanceCalc(location, userLocation)} Km
            </Text>
          </View>
        </View>
      </View>
    </Docontainer>
  );
};

export default Doctor;
