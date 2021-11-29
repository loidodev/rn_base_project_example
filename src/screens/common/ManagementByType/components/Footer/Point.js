/* eslint-disable react-native/no-inline-styles */
import {Block, Text} from '@components';
import React from 'react';
import {SIZES} from '@theme';
import HStack from './HTack';

const Point = ({info}) => {
  return (
    <Block
      safeAreaBottom
      backgroundColor="white"
      padding={SIZES.medium}
      borderTopWidth={1}
      borderColor="background">
      <Text fontSize={15} marginBottom={5} block>
        Tổng điểm
      </Text>
      <HStack label="Đã dùng mua hàng:" value={info?.total_wcoin_buy} />
      <HStack
        label="Tích lũy:"
        value={info?.user_wcoin}
        valueStyle={{color: 'red', heavy: true, size: 15}}
      />
    </Block>
  );
};

export default Point;
