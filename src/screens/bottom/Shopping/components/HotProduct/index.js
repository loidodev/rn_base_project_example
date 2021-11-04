import {Block, ItemProduct, Pressable, Text} from '@components';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import {hs} from '@responsive';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const HotProduct = () => {
  const _renderCategory = (item, index) => {
    return (
      <Pressable key={`HotProdut-category-${index}`} padding={SIZES.normal}>
        <Text>Trà xanh</Text>
      </Pressable>
    );
  };
  const _renderProduct = (item, index) => {
    return (
      <ItemProduct
        contentStyle={{backgroundColor: COLORS.smoke}}
        key={`hotProduct-product-${index}`}
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
      {/* title */}
      <Text
        medium
        heavy
        color="primary"
        marginHorizontal={SIZES.medium}
        marginTop={SIZES.medium}>
        SẢN PHẨM NỔI BẬT
      </Text>
      {/* category */}
      <Block
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="smoke"
        marginTop={SIZES.medium}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: hs(SIZES.normal)}}>
          {DATA.map(_renderCategory)}
        </ScrollView>
      </Block>
      {/* product */}
      <Block row wrap padding={SIZES.normal}>
        {DATA.map(_renderProduct)}
      </Block>
    </Block>
  );
};

export default HotProduct;
