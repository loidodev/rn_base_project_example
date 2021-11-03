import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('screen');

//IPhone 12
const DESIGN_WIDTH = 390;
const DESIGN_HEIGHT = 844;

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

/**
 * getSize.m(10) Responsive for padding - margin - fontSize.
 *
 * getSize.s(10) Responsive by width screen. (Image Size)
 *
 * getSize.v(10) Responsive by height screen.
 *
 * H => Horizontal
 * V => Vertical
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
