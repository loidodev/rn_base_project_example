import {hs, mhs, vs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconVoucher: {
    width: vs(18),
    height: hs(18),
    resizeMode: 'contain',
    marginRight: mhs(8),
  },
  iconRight: {
    width: vs(10),
    height: hs(10),
    resizeMode: 'contain',
  },
  imageProduct: {
    width: vs(60),
    height: hs(60),
    resizeMode: 'contain',
  },
  btnSave: {
    alignSelf: 'center',
  },
});
