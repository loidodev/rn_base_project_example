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
import {rVerticalScale} from '../Information';

const Avatar = ({scrollY, heightAvatar, maxHeightInfo}) => {
  const INPUT_AVATAR = [0, rVerticalScale(maxHeightInfo / 2)];

  const rStyles = useAnimatedStyle(() => ({
    width: rVerticalScale(heightAvatar),
    transform: [
      {
        translateX: interpolate(
          scrollY.value,
          INPUT_AVATAR,
          [(width - rVerticalScale(heightAvatar)) / 2, 0],
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
      <Pressable>
        <Image
          style={{
            width: vs(heightAvatar),
            height: vs(heightAvatar),
            borderRadius: heightAvatar,
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
