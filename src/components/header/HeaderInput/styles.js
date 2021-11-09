import {SIZES} from '@theme';
import { hs } from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    flex: 1,
    height: hs(40),
    marginHorizontal: SIZES.xSmall,
    paddingLeft: SIZES.medium,
    color: 'black',
  },
});
