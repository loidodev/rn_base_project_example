import {Block} from '@components';
import {useLayoutSize} from '@hooks';
import {GRADIENTS} from '@theme';
import React, {memo, useEffect} from 'react';
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
  flex,
  width,
  height,
  radius,
  margin,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  gradient,
  duration,
  containerStyle,
  containerProps,
  contentProps,
  children,
}) => {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [layout, onLayout] = useLayoutSize();

  useEffect(() => {
    if (layout?.width) {
      translateX.value = -layout?.width;
      opacity.value = withTiming(1);
      translateX.value = withRepeat(
        withTiming(layout?.width, {
          duration: duration || DURATION,
          easing: Easing.linear,
        }),
        -1,
      );
    }
  }, [duration, layout?.width, opacity, translateX]);

  const rContentStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateX: translateX.value}],
  }));

  return (
    <Block
      flex={flex}
      radius={radius}
      margin={margin}
      marginVertical={marginVertical}
      marginHorizontal={marginHorizontal}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      width={width}
      height={height}
      backgroundColor={gradient || 'smoke'}
      overflow="hidden"
      onLayout={onLayout}
      style={containerStyle}
      {...containerProps}>
      {layout?.width && (
        <Animated.View style={[StyleSheet.absoluteFillObject, rContentStyle]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={gradient || GRADIENTS.placeholder}
            style={StyleSheet.absoluteFillObject}
          />
        </Animated.View>
      )}
      <Block flex {...contentProps}>
        {children}
      </Block>
    </Block>
  );
};

export default memo(Shimmer);
