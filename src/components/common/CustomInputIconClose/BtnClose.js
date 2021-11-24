import {Icon, Pressable} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BtnClose = ({onPress, containerProps}) => {
  return (
    <Pressable onPress={onPress} {...containerProps}>
      <Icon
        IconType={AntDesign}
        iconName="close"
        iconColor="placeholder"
        marginRight={SIZES.small}
      />
    </Pressable>
  );
};

export default BtnClose;
