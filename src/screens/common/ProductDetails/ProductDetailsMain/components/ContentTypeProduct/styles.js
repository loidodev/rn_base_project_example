import {COLORS} from '@theme';
import {hs, mvs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    backgroundColor: COLORS.background,
    borderTopLeftRadius: mvs(10),
    borderTopRightRadius: mvs(10),
  },
  image: {
    width: hs(102),
    height: hs(102),
    borderRadius: mvs(10),
  },
  minus: {
    width: hs(10),
    tintColor: COLORS.lightGray,
  },
  plus: {
    width: hs(10),
    height: hs(10),
    tintColor: COLORS.black,
  },
  buttonCount: {
    width: mvs(38),
    height: mvs(28),
    backgroundColor: COLORS.smoke,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    marginHorizontal: mvs(5),
  },
  btnFoot: {
    flex: 1,
    height: hs(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: mvs(5),
  },
  container: {
    padding: mvs(12),
  },
});
