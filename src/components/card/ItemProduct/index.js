/* eslint-disable react-native/no-inline-styles */
import {Block, LazyImage, Pressable, Text} from '@components';
import React from 'react';
import {SIZES} from '@theme';
import {width} from '@responsive';

const ItemProduct = ({style, contentStyle}) => {
  return (
    <Pressable padding={SIZES.normal} style={{width: '50%', ...style}}>
      <Block
        overflow="hidden"
        radius={SIZES.small}
        backgroundColor="white"
        style={contentStyle}>
        <LazyImage
          style={{
            width: '100%',
            height: width / 2.5,
          }}
          source="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80"
        />
        <Block padding={SIZES.medium}>
          <Text color="placeholder">Siro ho Ong vàng (gói)</Text>
          <Pressable marginTop={SIZES.small}>
            <Text heavy color="primary">
              Đăng ký để xem giá
            </Text>
          </Pressable>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemProduct;
