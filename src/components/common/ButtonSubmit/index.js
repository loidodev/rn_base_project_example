import {Pressable} from '@components';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import {ActivityIndicator} from 'react-native';

const ButtonSubmit = ({
  loading,
  loadingColor = COLORS.white,
  onPress,
  children,
  containerProps,
}) => {
  return (
    <Pressable
      justifyCenter
      alignCenter
      disabled={loading}
      radius={SIZES.xxxLarge}
      margin={SIZES.medium}
      padding={SIZES.medium}
      backgroundColor="primary"
      labelProps={{color: 'white'}}
      onPress={onPress}
      {...containerProps}>
      {loading ? (
        <ActivityIndicator size="small" color={loadingColor} />
      ) : (
        children
      )}
    </Pressable>
  );
};

export default ButtonSubmit;
