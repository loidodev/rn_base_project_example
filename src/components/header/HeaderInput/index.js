import {Block, Icon, Pressable, Text, TextInput} from '@components';
import {root} from '@navigator/navigationRef';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconGroup from '../IconGroup';
import styles from './styles';

const HeaderInput = ({activate, link, setLink}) => {
  const goBack = () => {
    root.goBack();
  };

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
        onPress={activate ? null : onMoveSearch}>
        {activate ? (
          <TextInput
            value={link}
            onChangeText={text => setLink(text)}
            style={styles.input}
            placeholderTextColor={COLORS.lightGray}
            placeholder=" Tìm kiếm sản phẩm"
          />
        ) : (
          <Text flex color="placeholder">
            Tìm kiếm sản phẩm
          </Text>
        )}

        {renderSearch()}
      </Pressable>
    );
  };

  return (
    <Block rowCenter height={60} padding={SIZES.medium}>
      {/* left */}
      <Pressable paddingHorizontal={SIZES.xSmall} onPress={goBack}>
        <Icon IconType={Ionicons} iconName="chevron-back" iconSize={24} />
      </Pressable>
      {/* right */}
      <IconGroup customSearch={_renderSearch} />
    </Block>
  );
};

export default HeaderInput;
