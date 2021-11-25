import {hs, vs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    marginTop: hs(15),
    paddingVertical: hs(10),
    paddingHorizontal: hs(15),
    borderRadius: hs(5),
  },
  lottie: {
    height: vs(120),
    width: vs(120),
    marginBottom: hs(20),
  },
});
