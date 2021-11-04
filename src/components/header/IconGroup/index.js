import {Block, Icon, Pressable} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconGroup = ({onLayout, customSearch}) => {
  const _onMoveSearch = params => {};

  const _onMoveCart = params => {};

  const _onMoveOption = params => {};

  const _renderSearch = () => {
    return (
      <Pressable paddingHorizontal={SIZES.xSmall} onPress={_onMoveSearch}>
        <Icon
          IconType={Ionicons}
          iconName="search-circle-sharp"
          iconSize={35}
        />
      </Pressable>
    );
  };

  return (
    <Block flex rowCenter justifyEnd onLayout={onLayout}>
      {customSearch
        ? customSearch(_renderSearch, _onMoveSearch)
        : _renderSearch()}
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
