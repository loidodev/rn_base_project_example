import {Block, Icon, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import IconGroup from '../IconGroup';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderInput = () => {
  const _renderSearch = (renderSearch, onMoveSearch) => {
    return (
      <Pressable
        flex
        rowCenter
        height={40}
        radius={40 / 2}
        marginHorizontal={SIZES.xSmall}
        paddingLeft={SIZES.medium}
        backgroundColor="smoke"
        onPress={onMoveSearch}>
        <Text flex color="placeholder">
          Tìm kiếm sản phẩm
        </Text>
        {renderSearch()}
      </Pressable>
    );
  };

  return (
    <Block rowCenter height={60} padding={SIZES.medium}>
      {/* left */}
      <Pressable paddingHorizontal={SIZES.xSmall}>
        <Icon IconType={Ionicons} iconName="chevron-back" iconSize={24} />
      </Pressable>
      {/* right */}
      <IconGroup customSearch={_renderSearch} />
    </Block>
  );
};

export default HeaderInput;
