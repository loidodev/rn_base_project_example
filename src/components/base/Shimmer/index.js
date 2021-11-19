import {Block} from '@components';
import {GRADIENTS, SIZES} from '@theme';
import {width as WIDTH} from '@utils/responsive';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const DURATION = 2000;

const Shimmer = ({
  width = WIDTH,
  height = 15,
  radius = SIZES.small,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  gradient,
  duration,
  containerProps,
  contentProps,
  children,
}) => {
  const translateX = useSharedValue(-width);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(width, {
        duration: duration || DURATION,
        easing: Easing.linear,
      }),
      -1,
    );
  }, [duration, translateX, width]);

  const rContentStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <Block
      radius={radius}
      marginVertical={marginVertical}
      marginHorizontal={marginHorizontal}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      height={height}
      backgroundColor={gradient || 'smoke'}
      style={{width}}
      overflow="hidden"
      {...containerProps}>
      <Animated.View style={[StyleSheet.absoluteFillObject, rContentStyle]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={gradient || GRADIENTS.placeholder}
          style={StyleSheet.absoluteFillObject}
        />
      </Animated.View>
      <Block {...contentProps}>{children}</Block>
    </Block>
  );
};

export default Shimmer;
