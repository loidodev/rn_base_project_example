import {hs, mhs, vs} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: vs(45),
    height: hs(45),
    marginRight: mhs(8),
    resizeMode: 'contain',
  },
  itemWrap: {
    backgroundColor: 'white',
    borderRadius: mhs(5),
    padding: mhs(8),
    borderWidth: mhs(2),
  },
});
