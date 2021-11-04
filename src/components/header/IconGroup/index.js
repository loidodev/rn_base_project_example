import {Block, Icon, Pressable} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconGroup = ({onLayout}) => {
  const _onMoveSearch = params => {};

  const _onMoveCart = params => {};

  const _onMoveOption = params => {};

  return (
    <Block rowCenter onLayout={onLayout}>
      <Pressable paddingHorizontal={SIZES.xSmall} onPress={_onMoveSearch}>
        <Icon
          IconType={Ionicons}
          iconName="search-circle-sharp"
          iconSize={30}
        />
      </Pressable>
      <Pressable paddingHorizontal={SIZES.xSmall} onPress={_onMoveCart}>
        <Icon
          IconType={MaterialCommunityIcons}
          iconName="shopping-outline"
          iconSize={24}
        />
      </Pressable>
      <Pressable paddingHorizontal={SIZES.xSmall} onPress={_onMoveOption}>
        <Icon
          IconType={MaterialCommunityIcons}
          iconName="dots-vertical"
          iconColor="lightGray"
          iconSize={28}
        />
      </Pressable>
    </Block>
  );
};

export default IconGroup;
