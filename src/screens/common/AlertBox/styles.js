import {hs, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';
import {COLORS} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
  },
  btn: {
    flex: 1,
    paddingVertical: hs(15),
    alignItems: 'center',
  },
  content: {
    width: width / 1.4,
    backgroundColor: 'white',
    borderRadius: hs(5),
    zIndex: 20,
  },
});
