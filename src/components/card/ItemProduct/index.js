/* eslint-disable react-native/no-inline-styles */
// import {icons} from '@assets';
import {Block, Image, LazyImage, Rating, Text} from '@components';
// import Rating from '@components/Common/Rating';
// import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '@theme';
import {width} from '@utils/responsive';
import {ICONS} from 'constants';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const ItemProduct = ({
  thumbnail,
  image,
  imageStyle,
  salePercent,
  price,
  priceBuy,
  title = '',
  rate = 0,
  is_new,
  style,
  item_id = '',
  hasCombo = false,
  isRate = false,
  isPriceBuy = true,
  disabled = false,
  marginBottom = 10,
  marginHorizontal = 5,
  contentStyle,
  ...props
}) => {
  const navigation = useNavigation();

  // const _onPress = () =>
  //   navigation.navigate(routes.PRODUCT_DETAIL, {
  //     item_id,
  //     hasCombo,
  //   });

  return (
    <Pressable padding={SIZES.normal} style={{width: '50%', ...style}}>
      <Block
        {...props}
        radius={SIZES.small}
        overflow="hidden"
        style={contentStyle}
        backgroundColor="smoke">
        <Pressable disabled={disabled}>
          <LazyImage
            style={{
              width: '100%',
              height: width / 2.5,
            }}
            thumbnail={thumbnail}
            source="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80"
          />
          <Block padding={SIZES.medium}>
            <Text size={13} numberOfLines={2}>
              {/* {title} */}Siro ho Ong vàng (gói)
            </Text>
            {isPriceBuy && (
              <Text
                marginTop={2}
                size={15}
                numberOfLines={1}
                color="red"
                fontType="semibold">
                {priceBuy === '0' ? 'Liên hệ' : `${priceBuy} đ`}
              </Text>
            )}
            {salePercent !== '0' && (
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
                  {price} đ
                </Text>
              </Block>
            )}
            <Block row alignCenter marginTop={5} space="between">
              {isRate && <Rating imageSize={12} startingValue={rate} />}
              {is_new === '1' && (
                <Image
                  source={ICONS.new}
                  resizeMode="contain"
                  style={styles.icoNew}
                />
              )}
            </Block>
          </Block>
        </Pressable>
      </Block>
    </Pressable>
  );
};

export default ItemProduct;
