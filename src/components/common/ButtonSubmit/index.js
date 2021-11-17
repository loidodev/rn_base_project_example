import {Pressable} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const ButtonSubmit = ({onPress, children, containerProps}) => {
  return (
    <Pressable
      justifyCenter
      alignCenter
      radius={SIZES.xxxLarge}
      margin={SIZES.medium}
      padding={SIZES.medium}
      backgroundColor="primary"
      labelProps={{color: 'white'}}
      onPress={onPress}
      {...containerProps}>
      {children}
    </Pressable>
  );
};

export default ButtonSubmit;
