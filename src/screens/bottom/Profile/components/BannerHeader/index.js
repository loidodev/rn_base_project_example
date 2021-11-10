/* eslint-disable react-native/no-inline-styles */
import {Block, Image} from '@components';
import {IMAGES} from '@constants';
import {vs} from '@responsive';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HEIGHT_BG_WAVE, MAX_HEIGHT_INFO, MIN_HEIGHT_INFO} from '../helper';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {rVerticalScale} from '../Information';

const BannerHeader = ({scrollY}) => {
  const {top} = useSafeAreaInsets();

  const rStyles = useAnimatedStyle(() => ({
    position: 'absolute',
    width: '100%',
    height: top,
    backgroundColor: 'white',
    opacity: interpolate(
      scrollY.value,
      [
        rVerticalScale(MAX_HEIGHT_INFO) - rVerticalScale(MIN_HEIGHT_INFO),
        rVerticalScale(MAX_HEIGHT_INFO),
      ],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  return (
    <Block
      style={{height: vs(HEIGHT_BG_WAVE) + top}}
      absolute
      left={0}
      right={0}
      backgroundColor="primary">
      <Image style={{width: '100%', height: '100%'}} source={IMAGES.wave} />
      <Animated.View style={rStyles} />
    </Block>
  );
};

export default BannerHeader;
