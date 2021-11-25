import {COLORS} from '@theme';
import {hs, mvs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerSheet: {
    borderTopLeftRadius: mvs(10),
    borderTopRightRadius: mvs(10),
    backgroundColor: 'transparent',
  },
  wrapper: {
    width: hs(50),
    height: hs(8),
    borderRadius: mvs(10),
    backgroundColor: COLORS.background,
  },
  btnComment: {
    width: hs(45),
    height: hs(45),
    backgroundColor: COLORS.smoke,
    paddingVertical: mvs(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: mvs(5),
  },
  iconComment: {
    width: hs(20),
    height: hs(20),
    tintColor: COLORS.gray,
  },
  btnCart: {
    height: hs(45),
    backgroundColor: COLORS.smoke,
    paddingHorizontal: mvs(30),
    marginHorizontal: mvs(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: mvs(5),
  },
  btnBuy: {
    flex: 1,
    height: hs(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: mvs(5),
  },
});
