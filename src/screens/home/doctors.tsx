import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container } from '@/components/containers';
import { doctors } from './data';
import Doctor from '@/components/cards/Doctor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DoctorsScreen = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Container
      scrollable
      style={{
        width: '100%',
        marginBottom: bottom,
      }}
      spacing={20}
    >
      {doctors.map((props, idx) => (
        <Doctor key={idx} {...props} direction='row' />
      ))}
    </Container>
  );
};

export default DoctorsScreen;

const styles = StyleSheet.create({});

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
// import type { PropsWithChildren } from 'react';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// const RowGapAndColumnGap = () => {
//   const [rowGap, setRowGap] = useState(10);
//   const [columnGap, setColumnGap] = useState(0);

//   return (
//     <Container columnGap={columnGap} rowGap={rowGap}>
//       <View style={[styles.box, styles.box1]} />
//       <View style={[styles.box, styles.box2]} />
//       <View style={[styles.box, styles.box3]} />
//       <View style={[styles.box, styles.box4]} />
//       <View style={[styles.box, styles.box5]} />
//       <View style={[styles.box, styles.box1]} />
//       <View style={[styles.box, styles.box2]} />
//       <View style={[styles.box, styles.box3]} />
//       <View style={[styles.box, styles.box4]} />
//       <View style={[styles.box, styles.box5]} />
//       <View style={[styles.box, styles.box1]} />
//       <View style={[styles.box, styles.box2]} />
//       <View style={[styles.box, styles.box3]} />
//       <View style={[styles.box, styles.box4]} />
//       <View style={[styles.box, styles.box5]} />
//       <View style={[styles.box, styles.box1]} />
//       <View style={[styles.box, styles.box2]} />
//       <View style={[styles.box, styles.box3]} />
//       <View style={[styles.box, styles.box4]} />
//       <View style={[styles.box, styles.box5]} />
//     </Container>
//   );
// };

// type PreviewLayoutProps = PropsWithChildren<{ columnGap: number; rowGap: number }>;

// const Container = ({ children, rowGap, columnGap }: PreviewLayoutProps) => {
//   const { bottom } = useSafeAreaInsets();
//   const horizontal = false;
//   return (
//     <ScrollView style={{ backgroundColor: 'red' }}>
//       <ScrollView
//         horizontal={horizontal}
//         style={[styles.container, { maxWidth: '40%', maxHeight: '40%' }]}
//         contentContainerStyle={[styles.contentContainer, { rowGap, columnGap }]}
//       >
//         {children}
//       </ScrollView>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'aliceblue',
//     margin: 50,
//   },
//   contentContainer: {
//     // maxWidth: '100%',
//     // maxHeight: '20%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 50,
//     height: 80,
//   },
//   box1: {
//     backgroundColor: 'orangered',
//   },
//   box2: {
//     backgroundColor: 'orange',
//   },
//   box3: {
//     backgroundColor: 'mediumseagreen',
//   },
//   box4: {
//     backgroundColor: 'deepskyblue',
//   },
//   box5: {
//     backgroundColor: 'mediumturquoise',
//   },
// });

// export default RowGapAndColumnGap;
