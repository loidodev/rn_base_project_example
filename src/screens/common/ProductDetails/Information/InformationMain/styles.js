import {hs, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  linearGradient: {
    width: width,
    position: 'absolute',
    bottom: 0,
    paddingTop: hs(100),
  },
  btnViewDetails: {
    marginTop: hs(12),
    marginBottom: hs(6),
    alignItems: 'center',
  },
});
