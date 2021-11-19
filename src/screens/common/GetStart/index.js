import {Block, LogoTitle, Pressable, Text} from '@components';
import {authRoot} from '@navigator/navigationRef';
import router from '@router';
import {SIZES} from '@theme';
import React from 'react';

const GetStart = () => {
  const _onMoveCustomer = () => {
    authRoot.navigate(router.SIGN_IN_SCREEN);
  };

  const _onMoveDrugStore = () => {
    authRoot.navigate(router.SIGN_IN_SCREEN);
  };

  return (
    <Block flex justifyCenter padding={SIZES.medium}>
      {/* Header */}
      <LogoTitle />
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
