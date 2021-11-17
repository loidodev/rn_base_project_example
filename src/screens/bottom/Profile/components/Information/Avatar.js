/* eslint-disable react-native/no-inline-styles */
import {Block, Icon, Image, Pressable} from '@components';
import {vs, width} from '@responsive';
import {SIZES} from '@theme';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HEIGHT_AVATAR, MAX_HEIGHT_INFO, MIN_HEIGHT_INFO} from '../helper';
import {rVerticalScale} from './index';

const Avatar = ({scrollY, onPress}) => {
  const INPUT_AVATAR = [0, rVerticalScale(MAX_HEIGHT_INFO)];

  const rStyles = useAnimatedStyle(() => ({
    width: rVerticalScale(HEIGHT_AVATAR),
    transform: [
      {
        translateX: interpolate(
          scrollY.value,
          INPUT_AVATAR,
          [(width - rVerticalScale(HEIGHT_AVATAR)) / 2, 0],
          Extrapolate.CLAMP,
        ),
      },
      {
        translateY: interpolate(
          scrollY.value,
          INPUT_AVATAR,
          [
            0,
            rVerticalScale(MIN_HEIGHT_INFO / 2) -
              rVerticalScale(HEIGHT_AVATAR / 2),
          ],
          Extrapolate.CLAMP,
        ),
      },
      {
        scale: interpolate(
          scrollY.value,
          INPUT_AVATAR,
          [1, 0.8],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View style={rStyles}>
      <Pressable onPress={onPress}>
        <Image
          style={{
            width: vs(HEIGHT_AVATAR),
            height: vs(HEIGHT_AVATAR),
            borderRadius: HEIGHT_AVATAR,
            backgroundColor: 'gray',
          }}
        />
        <Block
          absolute
          justifyCenter
          alignCenter
          bottom={0}
          right={0}
          radius={SIZES.xxLarge}
          backgroundColor="primary"
          padding={SIZES.normal}>
          <Icon IconType={AntDesign} iconName="camera" iconColor="white" />
        </Block>
      </Pressable>
    </Animated.View>
  );
};

export default Avatar;
