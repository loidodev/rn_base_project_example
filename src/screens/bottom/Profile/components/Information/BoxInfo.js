import {Block, Text} from '@components';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {rHorizontalScale, rVerticalScale} from './index';
import {width} from '@responsive';
import {
  HEIGHT_AVATAR,
  HEIGHT_BOX_INFO,
  MAX_HEIGHT_INFO,
  MIN_HEIGHT_INFO,
  WIDTH_BOX_INFO,
} from '../helper';

const BoxInfo = ({scrollY}) => {
  const INPUT = [0, rVerticalScale(MAX_HEIGHT_INFO)];

  const rStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          scrollY.value,
          INPUT,
          [
            (width - rHorizontalScale(WIDTH_BOX_INFO)) / 2,
            rVerticalScale(HEIGHT_AVATAR),
          ],
          Extrapolate.CLAMP,
        ),
      },
      {
        translateY: interpolate(
          scrollY.value,
          INPUT,
          [
            0,
            rVerticalScale(-HEIGHT_AVATAR) -
              rVerticalScale(-MIN_HEIGHT_INFO / 2) +
              rVerticalScale(-HEIGHT_BOX_INFO / 2),
          ],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const rBoxInfoStartStyles = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [0, rVerticalScale(MAX_HEIGHT_INFO / 3)],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const rBoxInfoEndStyles = useAnimatedStyle(() => ({
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: interpolate(
      scrollY.value,
      [rVerticalScale(MAX_HEIGHT_INFO / 1.5), rVerticalScale(MAX_HEIGHT_INFO)],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  return (
    <Block>
      {/* box info start */}
      <Animated.View style={[rBoxInfoStartStyles, rStyles]}>
        <Block
          alignCenter
          justifyCenter
          width={WIDTH_BOX_INFO}
          height={HEIGHT_BOX_INFO}>
          <Text center medium heavy numberOfLines={1}>
            Loi Do
          </Text>
          <Text center numberOfLines={1}>
            nhoxbaycao@gmail.com
          </Text>
        </Block>
      </Animated.View>
      {/* box info end */}
      <Animated.View style={[rBoxInfoEndStyles, rStyles]}>
        <Block justifyCenter width={WIDTH_BOX_INFO} height={HEIGHT_BOX_INFO}>
          <Text medium heavy numberOfLines={1}>
            Loi Do
          </Text>
          <Text numberOfLines={1}>nhoxbaycao@gmail.com</Text>
        </Block>
      </Animated.View>
    </Block>
  );
};

export default BoxInfo;
