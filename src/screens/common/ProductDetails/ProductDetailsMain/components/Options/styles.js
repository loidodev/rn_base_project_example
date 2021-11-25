import {mvs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  block: {
    paddingVertical: mvs(8),
    paddingHorizontal: mvs(20),
    borderWidth: mvs(1),
    marginRight: mvs(10),
    borderRadius: mvs(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: mvs(10),
  },
});
