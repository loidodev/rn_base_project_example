import {Block} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import {Platform} from 'react-native';
import ButtonSocial from './ButtonSocial';

const LoginSocial = () => {
  return (
    <Block>
      <ButtonSocial title="Sign In With Facebook" type="facebook" />
      <ButtonSocial
        title="Sign in with Google"
        type="google"
        containerProps={{marginTop: SIZES.medium}}
      />
      {Platform.OS === 'ios' && (
        <ButtonSocial
          title="Sign in with Apple"
          type="apple"
          containerProps={{marginTop: SIZES.medium}}
        />
      )}
    </Block>
  );
};

export default LoginSocial;
