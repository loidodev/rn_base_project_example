import {Block, Icon, Image, Pressable} from '@components';
import {commonRoot} from '@navigator/navigationRef';
import router from '@router';
import {SIZES} from '@theme';
import {ICONS} from 'constants';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconGroup = ({onLayout, customSearch}) => {
  const _onMoveSearch = () => {
    commonRoot.navigate(router.GET_SEARCH_SCREEN);
  };

  const _onMoveCart = params => {};

  const _onMoveOption = params => {};

  const _renderSearch = () => {
    return (
      <Pressable paddingHorizontal={SIZES.xSmall} onPress={_onMoveSearch}>
        <Image
          width={30}
          height={30}
          source={ICONS.search}
          resizeMode="contain"
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
      {/* <Pressable paddingHorizontal={SIZES.xSmall} onPress={_onMoveOption}>
        <Icon
          IconType={MaterialCommunityIcons}
          iconName="dots-vertical"
          iconColor="lightGray"
          iconSize={28}
        />
      </Pressable> */}
    </Block>
  );
};

export default IconGroup;
