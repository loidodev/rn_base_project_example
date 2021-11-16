import {LinearLogo, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import BtnSignUp from './components/BtnSignUp';
import FormSignUp from './components/FormSignUp';
import HaveAccount from './components/HaveAccount';
import Policy from './components/Policy';

const SignUp = () => {
  return (
    <LinearLogo>
      <Text bold large center>
        signUpScreen.register
      </Text>
      <Text medium center marginTop={SIZES.small}>
        signUpScreen.welcome
      </Text>
      <FormSignUp />
      <Policy />
      <BtnSignUp />
      <HaveAccount />
    </LinearLogo>
  );
};

export default SignUp;
