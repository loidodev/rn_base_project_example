/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FooterWrap from './FooterWrap';
import HStack from './HTack';

const Point = ({info}) => {
  return (
    <FooterWrap title="Tổng điểm">
      <HStack label="Đã dùng mua hàng:" value={info?.total_wcoin_buy} />
      <HStack
        label="Tích lũy:"
        value={info?.user_wcoin}
        valueStyle={{color: 'red', heavy: true, size: 15}}
      />
    </FooterWrap>
  );
};

export default Point;
