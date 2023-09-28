import { Dimensions, StyleSheet } from 'react-native';

export const { width, height } = Dimensions.get('screen');

export const headerTitleStyle: any = { fontWeight: '600', fontSize: 24 };

export const style = StyleSheet.create({
  hairline: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    width: '45%',
  },
});
