import {Block, ItemProduct, Text} from '@components';
import {hs, width} from '@responsive';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';

const SellProduct = ({data = []}) => {
  const _renderProduct = (item, index) => {
    return (
      <ItemProduct
        style={{width: (width - hs(SIZES.medium)) / 2}}
        contentStyle={{backgroundColor: COLORS.background}}
        key={`SellProduct-${index}`}
        item={item}
        index={index}
      />
    );
  };

  return (
    <Block>
      {/* divider */}
      <Block
        marginTop={SIZES.medium}
        height={SIZES.medium}
        backgroundColor="smoke"
      />
      {/* product */}
      <Block>
        <Text
          medium
          heavy
          color="primary"
          marginHorizontal={SIZES.medium}
          marginTop={SIZES.medium}>
          TOP SẢN PHẨM BÁN CHẠY
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{padding: hs(SIZES.normal)}}>
          {data.map(_renderProduct)}
        </ScrollView>
      </Block>
    </Block>
  );
};

export default SellProduct;
