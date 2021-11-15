import {Block, Icon, Pressable, Text} from '@components';
import {root} from '@navigator/navigationRef';
import {SIZES} from '@theme';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderTitle = ({title, safeAreaTop, canGoBack, onGoBack}) => {
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
          <Icon IconType={Ionicons} iconName="chevron-back" iconSize={24} />
        </Pressable>
      )
    );
  };

  return (
    <Block
      rowCenter
      height={60}
      safeAreaTop={safeAreaTop}
      padding={SIZES.medium}>
      {_renderIconBack(1)}
      <Text flex center medium bold color="primary" numberOfLines={2}>
        {title}
      </Text>
      {_renderIconBack(0)}
    </Block>
  );
};

export default HeaderTitle;
