import {Dimensions} from 'react-native';

//IPhone 12
export const DESIGN_WIDTH = 390;
export const DESIGN_HEIGHT = 844;

export const {width, height} = Dimensions.get('screen');

export const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

/**
 * H => Horizontal
 *
 * V => Vertical
 *
 * hScale responsive by width screen
 *
 * vScale responsive by height screen
 *
 * moderateHScale responsive by width screen with factor
 *
 * moderateVScale responsive by height screen with factor
 *
 **/

export const hScale = size => (shortDimension / DESIGN_WIDTH) * size;

export const vScale = size => (longDimension / DESIGN_HEIGHT) * size;

export const moderateHScale = (size, factor = 0.5) => {
  return size + (hScale(size) - size) * factor;
};

export const moderateVScale = (size, factor = 0.5) => {
  return size + (vScale(size) - size) * factor;
};

export const hs = hScale;
export const vs = vScale;
export const mhs = moderateHScale;
export const mvs = moderateVScale;
