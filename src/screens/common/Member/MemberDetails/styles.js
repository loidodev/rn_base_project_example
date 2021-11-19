import {hs, mhs, vs, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imageStyle: {
    width: width * 0.3,
    height: width * 0.2,
  },
  iconStyle: {
    height: hs(12),
    width: vs(12),
    marginHorizontal: mhs(8),
    marginTop: mhs(5),
  },
});
