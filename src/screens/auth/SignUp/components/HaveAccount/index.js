import {Block, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const HaveAccount = () => {
  return (
    <Block row alignCenter justifyCenter>
      <Text center small marginRight={SIZES.normal}>
        signUpScreen.haveAccount
      </Text>
      <Pressable>
        <Text color="blue" small>
          signUpScreen.login
        </Text>
      </Pressable>
    </Block>
  );
};

export default HaveAccount;
