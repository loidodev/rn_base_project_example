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
  style,
  disabled = false,
  contentStyle,
  item,
  ...props
}) => {
  const navigation = useNavigation();
  const {rate = 0} = item;

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
            thumbnail={item.thumbnail}
            source="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80"
          />
          <Block padding={SIZES.medium}>
            <Text size={13} numberOfLines={2}>
              {/* {title} */}Siro ho Ong vàng (gói)
            </Text>
            {/* {item.isPriceBuy && ( */}
            <Text
              marginTop={2}
              size={15}
              numberOfLines={1}
              color="red"
              fontType="semibold">
              {/* {item.priceBuy === '0' ? 'Liên hệ' : `${item.priceBuy} đ`} */}
              200.000 đ
            </Text>
            {/* )} */}
            {item.salePercent !== '0' && (
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
                    {Math.ceil(item.salePercent)}%
                  </Text>
                </Block>
                <Text
                  size={12}
                  fontType="light"
                  color="lightGray"
                  style={{
                    textDecorationLine: 'line-through',
                  }}>
                  {item.price} đ
                </Text>
              </Block>
            )}
            <Block row alignCenter marginTop={5} space="between">
              {item.isRate && <Rating imageSize={12} startingValue={rate} />}
              {item.is_new === '1' && (
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
