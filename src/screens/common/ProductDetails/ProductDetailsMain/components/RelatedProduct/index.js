import {Block, ItemProduct, Text} from '@components';
import {width} from '@screens/common/Member/MemberDetails/components/HeaderMenber/styles';
import {COLORS, SIZES} from '@theme';
import {hs} from '@utils/responsive';
import locale from 'locale';
import React from 'react';
import {ScrollView} from 'react-native';

const RelatedProduct = React.memo(({data}) => {
  const _renderItem = (item, index) => {
    return (
      <ItemProduct
        style={{width: (width - hs(SIZES.medium)) / 2}}
        contentStyle={{backgroundColor: COLORS.smoke}}
        key={`SellProduct-${index}`}
        item={item}
        index={index}
      />
    );
  };
  
  if (!data?.length) {
    return null;
  }

  return (
    <Block flex padding={7}>
      <Text
        size={16}
        marginVertical={10}
        marginHorizontal={5}
        fontType="semibold">
        {locale.t('productDetails.similarProducts')}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Block row>{data?.map(_renderItem)}</Block>
      </ScrollView>
    </Block>
  );
});

export default RelatedProduct;
