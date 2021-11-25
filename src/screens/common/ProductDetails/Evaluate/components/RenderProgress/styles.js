import {COLORS} from '@theme';
import {hs, mhs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rating: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    marginRight: mhs(8),
  },
  AnimatedView: {
    height: hs(5),
    borderRadius: mhs(15),
    backgroundColor: COLORS.lightGray,
  },
});
