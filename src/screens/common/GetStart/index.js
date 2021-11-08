import {Block, Image, Pressable, Text} from '@components';
import {authRoot} from '@navigator/navigationRef';
import router from '@router';
import {SIZES} from '@theme';
import {IMAGES} from 'constants';
import React from 'react';

const GetStart = () => {
  const _onMoveCustomer = params => {
    authRoot.navigate(router.SIGN_IN_SCREEN);
  };

  const _onMoveDrugStore = params => {};

  return (
    <Block flex justifyCenter padding={SIZES.medium}>
      {/* Header */}
      <Block alignCenter>
        <Image
          width={80}
          height={80}
          marginBottom={SIZES.small}
          source={IMAGES.logo_start}
          resizeMode="contain"
        />
        <Text fontSize={24} bold color="primary">
          Thảo Dược
        </Text>
        <Text fontSize={24} bold color="primary">
          Việt Nam
        </Text>
      </Block>
      {/* Content */}
      <Block
        alignCenter
        marginTop={SIZES.xxxLarge}
        paddingHorizontal={SIZES.medium}>
        <Text h3 color="primary">
          ĐĂNG NHẬP
        </Text>
        <Text center h5 marginTop={SIZES.small}>
          Vui lòng chọn hình thức Đăng nhập để tiếp tục
        </Text>
      </Block>
      {/* Option login */}
      <Block marginTop={SIZES.xLarge}>
        <Pressable
          alignCenter
          borderWidth={1}
          borderColor="primary"
          backgroundColor="primary"
          padding={SIZES.medium}
          radius={SIZES.small}
          labelProps={{color: 'white'}}
          onPress={_onMoveCustomer}>
          DÀNH CHO NGƯỜI TIÊU DÙNG
        </Pressable>
        <Pressable
          marginTop={SIZES.medium}
          alignCenter
          borderWidth={1}
          borderColor="primary"
          padding={SIZES.medium}
          radius={SIZES.small}
          labelProps={{color: 'primary'}}
          onPress={_onMoveDrugStore}>
          DÀNH CHO NHÀ THUỐC
        </Pressable>
      </Block>
    </Block>
  );
};

export default GetStart;
