import {hs, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: hs(6),
  },
  image: {
    width: width,
    height: width,
  },
});
