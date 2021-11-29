import {Block, Text} from '@components';
import {convertCurrency} from '@utils';
import moment from 'moment';
import React from 'react';
import RowItem from './RowItem';

const ItemManagement = ({item, index}) => {
  return (
    <Block
      radius={5}
      paddingHorizontal={12}
      paddingVertical={9}
      backgroundColor="white">
      <Block rowCenter space="between">
        <RowItem isStt label="STT" value={index + 1} />
        <Text fontSize={12}>
          {moment(item?.date_create * 1000).format('DD/MM/YYYY')}
        </Text>
      </Block>

      <RowItem label="Hình thức" value={item?.exchange_type} />
      <RowItem
        label="Đơn hàng / Số tiền HH đổi"
        value={convertCurrency(item?.total_amount)}
      />
      <RowItem
        label="Tích lũy / Dùng điểm"
        value={item?.value}
        valueColor="darkBlue"
        suffix="+"
      />
      <RowItem
        label="Số dư cuối"
        value={`${item?.wcoin_after} điểm`}
        valueColor="lightRed"
      />
    </Block>
  );
};

export default ItemManagement;
