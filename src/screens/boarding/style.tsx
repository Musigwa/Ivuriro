import { width, height } from '../../style';
import { StyleSheet } from 'react-native';

export const DOT_SIZE = 25;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    padding: 40,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    maxWidth: width * 0.9,
    // maxHeight: width * 1.3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 0.5,
  },
  heading: {
    color: '#444',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.08,
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
