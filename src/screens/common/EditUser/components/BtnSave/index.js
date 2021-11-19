import {Pressable} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const BtnSave = ({onPress}) => {
  return (
    <Pressable
      justifyCenter
      alignCenter
      radius={SIZES.xxxLarge}
      margin={SIZES.medium}
      padding={SIZES.medium}
      backgroundColor="primary"
      labelProps={{color: 'white'}}
      onPress={onPress}>
      personal.save
    </Pressable>
  );
};

export default BtnSave;
