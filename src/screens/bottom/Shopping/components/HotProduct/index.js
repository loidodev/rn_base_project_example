import {Block, ItemProduct, Pressable, Text} from '@components';
import {COLORS, SIZES} from '@theme';
import React, {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {hs} from '@responsive';
import {useState} from 'react';

const HotProduct = ({data = []}) => {
  const [categorySelect, setCategorySelect] = useState(null);

  const allItemData = useMemo(() => {
    let result = [];
    data?.map(category => {
      result = [...result, ...category?.data];
    });
    return result;
  }, [data]);

  const dataProduct = categorySelect?.data || allItemData;

  const _renderCategory = (item, index) => {
    const {title, group_id} = item || {};

    const isSelect = group_id === categorySelect?.group_id;

    const _onSelectCategory = () => {
      setCategorySelect(isSelect ? null : item);
    };

    return (
      <Pressable
        key={`HotProdut-category-${index}`}
        padding={SIZES.normal}
        onPress={_onSelectCategory}>
        <Text color={isSelect ? 'primary' : 'black'}>{title}</Text>
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
          {data.map(_renderCategory)}
        </ScrollView>
      </Block>
      {/* product */}
      <Block row wrap padding={SIZES.normal}>
        {dataProduct?.map(_renderProduct)}
      </Block>
    </Block>
  );
};

export default HotProduct;
