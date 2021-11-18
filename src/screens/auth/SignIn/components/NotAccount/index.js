import {Block, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const NotAccount = () => {
  return (
    <Block row alignCenter justifyCenter marginTop={SIZES.small}>
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

export default NotAccount;
