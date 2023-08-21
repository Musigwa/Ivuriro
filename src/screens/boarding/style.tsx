import { height, width } from '@/style';
import { Platform, StyleSheet } from 'react-native';

export const DOT_SIZE = 25;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  itemStyle: {
    width,
    height,
    alignItems: 'center',
  },
  imageStyle: {
    width: '90%',
    height: '65%',
    resizeMode: 'stretch',
    // backgroundColor: 'blue',
  },
  textContainer: {
    height: '30%',
    width: '90%',
    top: -30,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: Platform.select({ android: 20, ios: 20 }),
    borderRadius: 50,
    // backgroundColor: '#06b900',
    alignSelf: 'flex-end',
  },
  skipBtn: {
    fontWeight: '700',
    color: 'gray',
    fontSize: 18,
  },
  paginationDot: {
    width: DOT_SIZE * 0.8,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
});
