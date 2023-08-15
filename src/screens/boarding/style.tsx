import { height, width } from '@/style';
import { platform } from 'os';
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
    width,
    height: '70%',
    resizeMode: 'stretch',
    // backgroundColor: 'blue',
  },
  textContainer: {
    height: '28%',
    width: '90%',
    top: -30,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#444',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
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
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE,
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
