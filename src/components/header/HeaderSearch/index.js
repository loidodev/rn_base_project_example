import {Block, Icon, Pressable, Text} from '@components';
import {root} from '@navigator/navigationRef';
import {SIZES} from '@theme';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconGroup from '../IconGroup';

const HeaderSearch = ({title, canGoBack, iconBackName = 'chevron-back'}) => {
  const width = useSharedValue(0);

  const spaceStyles = useAnimatedStyle(() => ({
    width: width.value,
  }));

  const _onLayout = ({nativeEvent}) => {
    width.value = withTiming(nativeEvent.layout.width, {
      easing: Easing.linear,
    });
  };

  const _onGoBack = () => {
    root.goBack();
  };

  return (
    <Block safeAreaTop rowCenter height={60} padding={SIZES.medium}>
      {/* space close */}
      <Animated.View style={spaceStyles}>
        {canGoBack && (
          <Pressable paddingHorizontal={SIZES.xSmall} onPress={_onGoBack}>
            <Icon IconType={Ionicons} iconName={iconBackName} iconSize={24} />
          </Pressable>
        )}
      </Animated.View>
      {/* title */}
      <Text flex center medium bold color="primary" numberOfLines={2}>
        {title}
      </Text>
      {/* icon */}
      <IconGroup onLayout={_onLayout} />
    </Block>
  );
};

export default HeaderSearch;
