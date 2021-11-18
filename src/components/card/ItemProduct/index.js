/* eslint-disable react-native/no-inline-styles */
import {Block, Image, LazyImage, Rating, Text} from '@components';
import {ICONS} from '@constants';
import {SIZES} from '@theme';
import {convertCurrency} from '@utils';
import {width} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';


const ItemProduct = ({item, style, contentStyle}) => {
  const {
    thumbnail = '',
    picture = '',
    title = 'Siro ho Ong vàng (gói)',
    priceBuy = 20000,
    salePercent = 20,
    price = 3000,
    rate = 0,
    is_new = false,
  } = item;

  const _onMoveDetails = () => {
    // navigation.navigate(routes.PRODUCT_DETAIL, {
    //   item_id,
    //   hasCombo,
    // });
  };

  return (
    <Pressable
      onPress={_onMoveDetails}
      padding={SIZES.normal}
      style={{width: '50%', ...style}}>
      <Block
        radius={SIZES.small}
        overflow="hidden"
        style={contentStyle}
        backgroundColor="smoke">
        <LazyImage
          style={{
            width: '100%',
            height: width / 2.5,
          }}
          thumbnail={thumbnail}
          source={picture}
        />
        <Block padding={SIZES.medium}>
          <Text size={13} numberOfLines={2}>
            {title}
          </Text>
          <Text
            marginTop={2}
            size={15}
            numberOfLines={1}
            color="red"
            fontType="semibold">
            {convertCurrency(priceBuy, 'đ')}
          </Text>
          {!!salePercent && (
            <Block row alignCenter marginTop={5}>
              <Block
                marginRight={6}
                paddingHorizontal={5}
                borderRadius={2}
                backgroundColor="red">
                <Text
                  size={11}
                  marginVertical={3}
                  color="white"
                  fontType="bold">
                  {Math.ceil(salePercent)}%
                </Text>
              </Block>
              <Text
                size={12}
                fontType="light"
                color="lightGray"
                style={{
                  textDecorationLine: 'line-through',
                }}>
                {convertCurrency(price, 'đ')}
              </Text>
            </Block>
          )}
          <Block row alignCenter marginTop={5} space="between">
            {!!rate && <Rating imageSize={12} startingValue={rate} />}
            {is_new && (
              <Image
                source={ICONS.new}
                resizeMode="contain"
                style={styles.icoNew}
              />
            )}
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemProduct;
