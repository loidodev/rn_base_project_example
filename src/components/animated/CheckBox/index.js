import {Block, Image, Pressable, Text} from '@components';
import {COLORS} from '@theme';
import {ICONS} from '@constants';
import React, {useEffect} from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const CheckBox = ({
  title,
  value,
  width = 20,
  onChangeValue,
  containerProps,
  labelProps,
}) => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withSpring(value ? 1 : 0);
  }, [animatedValue, value]);

  const rContainerStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(
      animatedValue.value,
      [0, 1],
      [COLORS.smoke, COLORS.green],
    ),
    transform: [
      {scale: interpolate(animatedValue.value, [0, 0.5, 1], [1, 0.5, 1])},
    ],
  }));

  const rBackgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: 'green',
    position: 'absolute',
    width: interpolate(
      animatedValue.value,
      [0, 1],
      [0, width],
      Extrapolate.CLAMP,
    ),
    height: interpolate(
      animatedValue.value,
      [0, 1],
      [0, width],
      Extrapolate.CLAMP,
    ),
  }));

  return (
    <Block {...containerProps} row alignCenter>
      <Animated.View style={rContainerStyle}>
        <Pressable
          square={width}
          padding={5}
          marginRight={10}
          radius={5}
          borderWidth={2}
          justifyCenter
          alignCenter
          overflow="hidden"
          onPress={onChangeValue}>
          <Image
            square={width - 5}
            tintColor="white"
            zIndex={20}
            resizeMode="contain"
            source={ICONS.check_blank}
          />
          <Animated.View style={rBackgroundStyle} />
        </Pressable>
      </Animated.View>
      <Text {...labelProps} medium bold>
        {title}
      </Text>
    </Block>
  );
};

export default CheckBox;
