import {Block, ItemProduct, Pressable, Text} from '@components';
import {hs, width} from '@responsive';
import {SIZES} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';
import {COLORS} from '@theme';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SellProduct = () => {
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
          {DATA.map(_renderProduct)}
        </ScrollView>
      </Block>
      {/* button show all */}
      <Pressable
        alignCenter
        justifyCenter
        radius={SIZES.small}
        padding={SIZES.medium}
        marginHorizontal={SIZES.medium}
        backgroundColor="primary"
        labelProps={{color: 'white', small: true, bold: true}}>
        XEM THÊM DANH MỤC KHÁC
      </Pressable>
    </Block>
  );
};

export default SellProduct;
