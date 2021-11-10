import {Block, Text} from '@components';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {rHorizontalScale, rVerticalScale} from '../Information';
import {width} from '@responsive';

const WIDTH_BOX_INFO = 200;

const BoxInfo = ({scrollY, heightBoxInfo, heightAvatar, maxHeightInfo}) => {
  const INPUT = [0, rVerticalScale(maxHeightInfo)];

  const rBoxInfoStartStyles = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [
        0,
        rVerticalScale(maxHeightInfo / 3),
        rVerticalScale(maxHeightInfo / 2),
        rVerticalScale(maxHeightInfo),
      ],
      [1, 0.5, 0, 0],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateX: interpolate(
          scrollY.value,
          INPUT,
          [
            (width - rHorizontalScale(WIDTH_BOX_INFO)) / 2,
            rVerticalScale(heightAvatar),
          ],
          Extrapolate.CLAMP,
        ),
      },
      {
        translateY: interpolate(
          scrollY.value,
          INPUT,
          [0, rVerticalScale(-heightAvatar + 20)],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const rBoxInfoEndStyles = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [
        0,
        rVerticalScale(maxHeightInfo / 3),
        rVerticalScale(maxHeightInfo / 2),
        rVerticalScale(maxHeightInfo),
      ],
      [0, 0, 0.5, 1],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateX: interpolate(
          scrollY.value,
          INPUT,
          [
            (width - rHorizontalScale(WIDTH_BOX_INFO)) / 2,
            rVerticalScale(heightAvatar),
          ],
          Extrapolate.CLAMP,
        ),
      },
      {
        translateY: interpolate(
          scrollY.value,
          INPUT,
          [0, rVerticalScale(-heightAvatar + 20)],
          Extrapolate.CLAMP,
        ),
      },
    ],
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  }));

  return (
    <Block>
      {/* box info start */}
      <Animated.View style={rBoxInfoStartStyles}>
        <Block
          alignCenter
          justifyCenter
          width={WIDTH_BOX_INFO}
          height={heightBoxInfo}>
          <Text center medium heavy numberOfLines={1}>
            Loi Do
          </Text>
          <Text center numberOfLines={1}>
            nhoxbaycao@gmail.com
          </Text>
        </Block>
      </Animated.View>
      {/* box info end */}
      <Animated.View style={rBoxInfoEndStyles}>
        <Block justifyCenter width={WIDTH_BOX_INFO} height={heightBoxInfo}>
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
