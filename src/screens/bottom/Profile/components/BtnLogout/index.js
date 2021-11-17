import {Pressable} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const BtnLogout = () => {
  return (
    <Pressable
      alignCenter
      justifyCenter
      margin={SIZES.medium}
      padding={SIZES.medium}
      radius={SIZES.xxxLarge}
      backgroundColor="primary"
      labelProps={{color: 'white'}}>
      profileScreen.logout
    </Pressable>
  );
};

export default BtnLogout;
