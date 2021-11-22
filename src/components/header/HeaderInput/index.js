/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Icon, Pressable, TextInput} from '@components';
import {HEADER} from '@constants';
import {root} from '@navigator/navigationRef';
import {COLORS, SIZES} from '@theme';
import Storage from '@utils/storage';
import _ from 'lodash';
import React, {useCallback} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconGroup from '../IconGroup';

const HeaderInput = ({
  keyword,
  setKeyword,
  onSearchDebounce,
  discern,
  setDiscern,
}) => {
  const _onGoBack = () => {
    root.goBack();
  };

  const _onChangeText = text => {
    setDiscern(false);
    setKeyword && setKeyword(text);
    keyword && _onDebounce(text);
  };
  const _onPressIn = text => {
    setDiscern(false);
  };

  const _onDebounce = useCallback(
    _.debounce(text => {
      Storage.getItem('@history').then(res => {
        const newHistory = res ? [...res, text] : [text];
        const convertHistory = [...new Set(newHistory)];
        Storage.setItem('@history', JSON.stringify(convertHistory));
      });
    }, 1000),
    [],
  );

  const _onClose = text => {
    setKeyword && setKeyword('');
  };

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
          returnKeyType="search"
          onChangeText={_onChangeText}
          onPressIn={_onPressIn}
          placeholderTextColor={COLORS.lightGray}
        />
        {keyword ? (
          <Pressable rowCenter onPress={() => _onClose()}>
            <Icon
              IconType={AntDesign}
              iconName="close"
              iconSize={20}
              marginRight={SIZES.xSmall}
            />
          </Pressable>
        ) : (
          renderIconSearch()
        )}
      </Block>
    );
  };

  return (
    <Block safeAreaTop rowCenter height={HEADER.height} padding={SIZES.medium}>
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
