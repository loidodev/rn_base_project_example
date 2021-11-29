/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FooterWrap from './FooterWrap';
import HStack from './HTack';

const HistoryPoint = ({info}) => {
  return (
    <FooterWrap title="Tổng hoa hồng">
      <HStack label="Nhận được:" value={info?.total_commissions} />
      <HStack
        label="Đã chuyển thành điểm:"
        value={info?.swap_commmission}
        suffix="-"
      />
      <HStack
        label="Hiện tại:"
        value={info?.user_commission}
        valueStyle={{color: 'red', heavy: true, size: 15}}
      />
    </FooterWrap>
  );
};

export default HistoryPoint;
