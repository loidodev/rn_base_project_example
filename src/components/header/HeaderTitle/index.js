import {Block, Icon, Pressable, Text} from '@components';
import {HEADER} from '@constants';
import {root} from '@navigator/navigationRef';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import {StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderTitle = ({
  title,
  canGoBack,
  onGoBack,
  backgroundColor = 'primary',
  color = 'white',
  containerProps,
  titleProps,
}) => {
  const _renderIconBack = opacity => {
    const _onGoBack = () => {
      if (opacity === 1) {
        onGoBack ? onGoBack() : root.goBack();
      }
    };

    return (
      canGoBack && (
        <Pressable
          opacity={opacity}
          paddingHorizontal={SIZES.xSmall}
          onPress={_onGoBack}>
          <Icon
            IconType={Ionicons}
            iconName="chevron-back"
            iconSize={24}
            iconColor={color}
          />
        </Pressable>
      )
    );
  };

  return (
    <Block
      rowCenter
      safeAreaTop
      height={HEADER.height}
      padding={SIZES.medium}
      backgroundColor={backgroundColor}
      {...containerProps}>
      {_renderIconBack(1)}
      <StatusBar backgroundColor={COLORS[backgroundColor] || backgroundColor} />
      <Text
        flex
        center
        bold
        color={color}
        fontSize={HEADER.titleSize}
        numberOfLines={2}
        {...titleProps}>
        {title}
      </Text>
      {_renderIconBack(0)}
    </Block>
  );
};

export default HeaderTitle;
