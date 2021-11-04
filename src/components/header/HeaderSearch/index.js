import {Block, Icon, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import IconGroup from '../IconGroup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {goBack} from '@navigator/navigationRef';

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
    goBack();
  };

  return (
    <Block rowCenter height={60} padding={SIZES.medium}>
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
