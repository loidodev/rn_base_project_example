import {COLORS} from '@theme';
import {hs, mvs, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    borderWidth: mvs(0.5),
    borderColor: COLORS.smoke,
    padding: mvs(10),
    marginTop: mvs(12),
    borderRadius: mvs(5),
    height: hs(140),
    textAlignVertical: 'top',
    backgroundColor: COLORS.background,
    color: 'black',
  },
  icon: {
    height: hs(16),
    width: hs(16),
    marginRight: mvs(10),
  },
  image: {
    height: hs(50),
    width: hs(50),
  },
  btnSubmit: {
    borderRadius: mvs(5),
    margin: mvs(12),
    marginBottom: mvs(30),
    marginTop: mvs(0),
  },
  btnAddImage: config => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: mvs(5),
    height: hs(45),
    borderColor: config.general_active_color,
    borderStyle: 'dashed',
    backgroundColor: `${config.general_active_color}10`,
    marginHorizontal: mvs(12),
  }),
  imagelist: {
    height: (width - 48) / 5,
    width: (width - 48) / 5,
  },
});
