/* eslint-disable react-native/no-inline-styles */
import {Block, LazyImage, Text} from '@components';
import {commonRoot} from '@navigator/navigationRef';
import router from '@navigator/router';
import {SIZES} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';

const URL = 'https://source.unsplash.com/daily';

const ItemMember = ({item, style, contentStyle}) => {
  const {thumbnail = URL, picture = URL, title = ''} = item;

  const _onMoveDetails = () => {
    commonRoot.navigate(router.GET_MEMBER_DERAILS, {param: item});
  };

  return (
    <Pressable onPress={_onMoveDetails}>
      <Block padding={SIZES.medium}>
        <Text bold fontSize={16} numberOfLines={2}>
          Cửa hàng tại {title}
        </Text>
      </Block>
      <Block
        radius={SIZES.small}
        overflow="hidden"
        style={contentStyle}
        backgroundColor="smoke">
        <LazyImage
          style={{
            width: width,
            height: width / 2.5,
          }}
          thumbnail={thumbnail}
          source={picture}
        />
      </Block>
      <Block height={2} backgroundColor="smoke" marginTop={16} />
    </Pressable>
  );
};

export default ItemMember;
