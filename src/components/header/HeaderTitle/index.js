import {Block, Icon, Pressable, Text} from '@components';
import {root} from '@navigator/navigationRef';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import {StatusBar} from 'react-native';
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
          <Icon
            IconType={Ionicons}
            iconName="chevron-back"
            iconSize={24}
            iconColor="white"
          />
        </Pressable>
      )
    );
  };

  return (
    <Block
      rowCenter
      height={60}
      safeAreaTop={safeAreaTop}
      padding={SIZES.medium}
      backgroundColor="primary">
      {_renderIconBack(1)}
      <StatusBar backgroundColor={COLORS.primary} />
      <Text flex center large bold color="white" numberOfLines={2}>
        {title}
      </Text>
      {_renderIconBack(0)}
    </Block>
  );
};

export default HeaderTitle;
