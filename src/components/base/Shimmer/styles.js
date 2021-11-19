import {hs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: (
    width,
    height,
    borderRadius,
    marginVer,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    colors,
  ) => ({
    width: width,
    height: height,
    borderRadius: hs(borderRadius),
    marginVertical: hs(marginVer),
    marginTop: hs(marginTop),
    marginBottom: hs(marginBottom),
    marginLeft: hs(marginLeft),
    marginRight: hs(marginRight),
    overflow: 'hidden',
    backgroundColor: colors ? colors[0] : '#E6E6E6',
  }),
});
