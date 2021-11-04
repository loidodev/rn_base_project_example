import {Block, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import IconGroup from '../IconGroup';

const HeaderSearch = ({title}) => {
  const width = useSharedValue(0);

  const spaceStyles = useAnimatedStyle(() => ({
    width: width.value,
  }));

  const _onLayout = ({nativeEvent}) => {
    width.value = withTiming(nativeEvent.layout.width);
  };

  return (
    <Block rowCenter space="between" padding={SIZES.medium}>
      <Animated.View style={spaceStyles} />
      <Text flex center medium bold color="primary" numberOfLines={2}>
        {title}
      </Text>
      <IconGroup onLayout={_onLayout} />
    </Block>
  );
};

export default HeaderSearch;
