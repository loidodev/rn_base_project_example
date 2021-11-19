import {Dimensions, StyleSheet} from 'react-native';
export const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  image: {
    width: width,
    height: width / 2,
  },
});
