import {Block, Rating, Text} from '@components';
import {convertCurrency} from '@utils/helper';
import React from 'react';

const InfoProduct = ({data}) => {
  return (
    <Block padding={12} marginBottom={8} backgroundColor="white">
      <Text fontSize={16} bold marginBottom={10} heavy>
        {data?.title}
      </Text>
      {data?.rating?.average ? (
        <Rating imageSize={18} startingValue={data?.rating?.average || 0} />
      ) : null}
      <Block row alignCenter marginTop={10}>
        <Text fontSize={24} color="red" bold>
          {data?.price_buy === '0'
            ? 'Liên hệ'
            : convertCurrency(data?.price_buy) + ' đ'}
        </Text>
        {Number(data?.percent_discount) > 0 && (
          <Block row alignCenter>
            <Text
              color="lightGray"
              light
              marginHorizontal={10}
              textDecorationLine="line-through">
              {convertCurrency(data?.price)}đ
            </Text>
            <Text heavy>-{Math.ceil(data?.percent_discount)}%</Text>
          </Block>
        )}
      </Block>
    </Block>
  );
};

export default InfoProduct;
