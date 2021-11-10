/* eslint-disable react-native/no-inline-styles */
import {Block, LazyImage, Text} from '@components';
import {SIZES} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';

const URL = 'https://source.unsplash.com/daily';

const ItemMenber = ({item, style, contentStyle}) => {
  const {thumbnail = URL, image = URL, title = 'Siro ho Ong vàng (gói)'} = item;

  const _onMoveDetails = () => {
    // navigation.navigate(routes.PRODUCT_DETAIL, {
    //   item_id,
    //   hasCombo,
    // });
  };

  return (
    <Pressable onPress={_onMoveDetails}>
      <Block padding={SIZES.medium}>
        <Text size={13} numberOfLines={2}>
          {title}
        </Text>
      </Block>
      <Block
        radius={SIZES.small}
        overflow="hidden"
        style={contentStyle}
        backgroundColor="smoke">
        <LazyImage
          style={{
            width: '100%',
            height: width / 2.5,
          }}
          thumbnail={thumbnail}
          source={image}
        />
      </Block>
      <Block height={2} backgroundColor="smoke" marginTop={16} />
    </Pressable>
  );
};

export default ItemMenber;
