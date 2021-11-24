/* eslint-disable no-undef */
import {Block, Icon, Text, ItemProduct} from '@components';
import {COLORS, SIZES} from '@theme';
import {hs, width} from '@utils/responsive';
import locale from 'locale';
import React from 'react';
import {ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ComboProduct = ({data}) => {
  const _renderItem = (item, index) => {
    return (
      <ItemProduct
        style={{width: width / 3.6}}
        imageStyle={{height: hs(70)}}
        contentStyle={{backgroundColor: COLORS.smoke}}
        key={`ComboProduct-${index}`}
        item={item}
        index={index}
        _onCombo={false}
        comboSalePercent={false}
      />
    );
  };

  const _renderItem2 = (item, index) => {
    return (
      <ItemProduct
        style={{width: width / 3.6}}
        imageStyle={{height: hs(70)}}
        contentStyle={{backgroundColor: COLORS.smoke}}
        key={`ComboProduct2-${index}`}
        item={item}
        index={index}
        comboSalePercent={false}
      />
    );
  };

  if (!data) {
    return null;
  }

  return (
    <Block padding={12} marginBottom={10} backgroundColor="white">
      <Text fontSize={16} fontType="semibold" marginBottom={10}>
        {locale.t('productDetails.comboInclude')}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {_renderItem(data, (check = true))}
        <Block justifyCenter marginHorizontal={8}>
          <Icon
            IconType={AntDesign}
            iconName="plus"
            iconSize={20}
            marginRight={SIZES.xSmall}
          />
        </Block>
        {data?.arr_detail_combo?.map(_renderItem2)}
      </ScrollView>
    </Block>
  );
};

export default ComboProduct;
