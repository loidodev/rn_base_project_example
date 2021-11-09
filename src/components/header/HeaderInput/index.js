/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Icon, Pressable, TextInput} from '@components';
import {root} from '@navigator/navigationRef';
import {COLORS, SIZES} from '@theme';
import React, {useCallback} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconGroup from '../IconGroup';
import _ from 'lodash';

const HeaderInput = ({keyword = '', setKeyword, onSearchDebounce}) => {
  const _onGoBack = () => {
    root.goBack();
  };

  const _onChangeText = text => {
    if (onSearchDebounce) {
      _onSearchDebounce(text);
    } else {
      setKeyword && setKeyword(text);
    }
  };

  const _onSearchDebounce = useCallback(
    _.debounce(text => {
      onSearchDebounce(text);
    }, 800),
    [],
  );

  const _renderSearch = (renderIconSearch, onMoveSearch) => {
    return (
      <Block
        flex
        rowCenter
        height={40}
        radius={40 / 2}
        marginHorizontal={SIZES.xSmall}
        backgroundColor="smoke">
        <TextInput
          flex
          color="black"
          paddingLeft={SIZES.medium}
          placeholder=" Tìm kiếm sản phẩm"
          value={keyword}
          onChangeText={_onChangeText}
          placeholderTextColor={COLORS.lightGray}
        />
        {renderIconSearch()}
      </Block>
    );
  };

  return (
    <Block rowCenter height={60} padding={SIZES.medium}>
      {/* left */}
      <Pressable paddingHorizontal={SIZES.xSmall} onPress={_onGoBack}>
        <Icon IconType={Ionicons} iconName="chevron-back" iconSize={24} />
      </Pressable>
      {/* right */}
      <IconGroup customSearch={_renderSearch} />
    </Block>
  );
};

export default HeaderInput;
