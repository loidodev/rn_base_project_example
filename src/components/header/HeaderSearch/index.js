import {Block, Icon, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import IconGroup from '../IconGroup';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderSearch = ({title, canGoBack, iconBackName = 'chevron-back'}) => {
  const width = useSharedValue(0);

  const spaceStyles = useAnimatedStyle(() => ({
    width: width.value,
  }));

  const _onLayout = ({nativeEvent}) => {
    width.value = withTiming(nativeEvent.layout.width);
  };

  return (
    <Block rowCenter space="between" height={60} padding={SIZES.medium}>
      <Animated.View style={spaceStyles}>
        {canGoBack && (
          <Pressable paddingHorizontal={SIZES.xSmall}>
            <Icon IconType={Ionicons} iconName={iconBackName} iconSize={24} />
          </Pressable>
        )}
      </Animated.View>
      <Text flex center medium bold color="primary" numberOfLines={2}>
        {title}
      </Text>
      <IconGroup onLayout={_onLayout} />
    </Block>
  );
};

export default HeaderSearch;
