import {Image, Pressable, Text} from '@components';
import {ICONS} from '@constants';
import React from 'react';
import {SIZES} from '@theme';

const ButtonSocial = ({
  title,
  type = 'facebook',
  containerProps,
  titleProps,
  onPress,
}) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'facebook':
        return 'facebook';
      case 'google':
        return 'white';
      case 'apple':
        return 'black';

      default:
        return 'facebook';
    }
  };

  const getTitleColor = () => {
    switch (type) {
      case 'facebook':
        return 'white';
      case 'google':
        return 'black';
      case 'apple':
        return 'white';

      default:
        return 'white';
    }
  };

  return (
    <Pressable
      rowCenter
      radius={SIZES.xxxLarge}
      marginHorizontal={SIZES.medium}
      padding={SIZES.medium}
      shadow1={getBackgroundColor() === 'white'}
      backgroundColor={getBackgroundColor()}
      onPress={onPress}
      {...containerProps}>
      <Image source={ICONS[type]} square={24} />
      <Text flex center color={getTitleColor()} {...titleProps}>
        {title}
      </Text>
      <Image square={24} />
    </Pressable>
  );
};

export default ButtonSocial;
