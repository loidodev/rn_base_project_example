import {COLORS} from '@theme';
import {hs, mhs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hs(35),
    width: hs(35),
    borderRadius: mhs(35),
    margin: mhs(6),
  },
  icon: {
    height: hs(18),
    width: hs(18),
  },
  optionStyle: {
    marginTop: mhs(45),
    backgroundColor: 'transparent',
    shadowColor: '#fff',
  },
  iconMenu: {
    height: hs(18),
    width: hs(18),
    marginRight: mhs(6),
    tintColor: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: mhs(6),
    marginBottom: mhs(6),
  },
  shape: {
    position: 'absolute',
    top: mhs(-15),
    right: mhs(22),
    borderRightWidth: mhs(10),
    borderTopWidth: mhs(15),
    borderRightColor: 'transparent',
    borderTopColor: '#00000090',
    transform: [{rotate: '180deg'}],
  },
});
