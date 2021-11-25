/* eslint-disable react-native/no-inline-styles */
import {Block, Image, LazyImage, Rating, Text} from '@components';
import {ICONS} from '@constants';
import {commonRoot} from '@navigator/navigationRef';
import router from '@navigator/router';
import {SIZES} from '@theme';
import {convertCurrency, handleAuthentication} from '@utils';
import {width} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const ItemProduct = ({
  item,
  style,
  contentStyle,
  hasCombo,
  imageStyle,
  _onCombo = true,
  comboSalePercent = true,
}) => {
  const {
    thumbnail = '',
    picture = '',
    title = 'Siro ho Ong vàng (gói)',
    priceBuy = 20000,
    salePercent = 20,
    price = 3000,
    rate = 0,
    item_id,
    is_new = false,
  } = item;

  const tokenUser = useSelector(state => state.tokenUser);

  const _onMoveDetails = () => {
    tokenUser
      ? commonRoot.navigate(router.PRODUCT_DETAILS_SCREEN, {item_id, hasCombo})
      : commonRoot.navigate(router.GET_START_SCREEN);
  };
  // handleAuthentication(() => {
  //   commonRoot.navigate(router.PRODUCT_DETAILS_SCREEN, {item_id});
  // });

  return (
    <Pressable
      onPress={_onCombo ? _onMoveDetails : null}
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
            marginTop: 12,
          }}
          thumbnail={thumbnail}
          source={picture}
        />
        {tokenUser ? (
          <Block padding={SIZES.medium}>
            <Text fontSize={13} numberOfLines={2}>
              {title}
            </Text>
            <Text
              marginTop={2}
              fontSize={15}
              numberOfLines={1}
              color="red"
              fontType="semibold">
              {convertCurrency(priceBuy, 'đ')}
            </Text>
            {!!salePercent && comboSalePercent && (
              <Block row alignCenter marginTop={5}>
                <Block
                  marginRight={6}
                  paddingHorizontal={5}
                  borderRadius={2}
                  backgroundColor="red">
                  <Text
                    fontSize={11}
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
        ) : (
          <Block padding={SIZES.medium}>
            <Text light fontSize={15} numberOfLines={2}>
              {title}
            </Text>
            <Text marginVertical={10} fontSize={13} color={'primary'}>
              Đăng ký để xem giá
            </Text>
          </Block>
        )}
      </Block>
    </Pressable>
  );
};

export default ItemProduct;
