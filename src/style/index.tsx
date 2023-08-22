import { Dimensions, StyleSheet } from 'react-native';

export const { width, height } = Dimensions.get('screen');

export const headerTitleStyle: any = { fontWeight: '800', fontSize: 20 };

export const style = StyleSheet.create({
  hairline: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    width: '45%',
  },
});
