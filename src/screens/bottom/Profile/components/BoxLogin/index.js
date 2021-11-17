import {Block, Pressable} from '@components';
import {IMAGES} from '@constants';
import {commonRoot} from '@navigator/navigationRef';
import router from '@navigator/router';
import {SIZES} from '@theme';
import React from 'react';
import {ImageBackground} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BoxLogin = () => {
  const {top} = useSafeAreaInsets();

  const _onMoveLogin = () => {
    commonRoot.navigate(router.GET_START_SCREEN);
  };

  return (
    <ImageBackground source={IMAGES.wave}>
      <Block
        style={{paddingTop: top + SIZES.large}}
        paddingVertical={SIZES.large}
        paddingHorizontal={SIZES.medium}
        backgroundColor="primary">
        <Pressable
          alignSelf="flex-start"
          radius={SIZES.normal}
          paddingVertical={SIZES.medium}
          paddingHorizontal={SIZES.large}
          backgroundColor="white"
          onPress={_onMoveLogin}>
          ĐĂNG NHẬP/ ĐĂNG KÝ
        </Pressable>
      </Block>
    </ImageBackground>
  );
};

export default BoxLogin;
