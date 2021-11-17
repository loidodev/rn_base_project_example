import {COLORS} from '@theme';
import {hs, vs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hs(12),
    borderBottomWidth: hs(1),
    borderColor: COLORS.smoke,
  },
  iconHistory: {
    width: vs(15),
    height: vs(15),
    marginRight: hs(10),
    tintColor: COLORS.placeholder,
  },
  btnClose: {
    paddingLeft: hs(10),
  },
  iconClose: {
    width: vs(12),
    height: vs(12),
    tintColor: COLORS.placeholder,
  },
});
