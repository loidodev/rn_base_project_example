import {StyleSheet} from 'react-native';
import {hs} from '@responsive';

export default StyleSheet.create({
  scrollView: {
    marginTop: hs(12),
    marginBottom: hs(10),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: hs(45),
    height: hs(45),
    borderRadius: hs(45),
    marginBottom: hs(5),
  },
  badge: {
    position: 'absolute',
    top: hs(-6),
    right: hs(12),
  },
});
