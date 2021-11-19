import {COLORS} from '@theme';
import {hs, mhs, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
  },
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
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
  },
  titleWrap: {
    flex: 1,
  },
  shadow: {
    height: mhs(0.5),
    width: width,
    backgroundColor: COLORS.smoke,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textCart: {
    position: 'absolute',
    top: mhs(-2),
    right: mhs(-2),
    width: hs(19),
    height: hs(19),
    borderRadius: mhs(20),
    borderWidth: mhs(1),
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
