import {HeaderSearch} from '@components';
import React from 'react';
import {View, Text} from 'react-native';

const SignIn = () => {
  return (
    <View>
      <HeaderSearch canGoBack />
      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;
