import {Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const NotAccount = ({onPress}) => {
  return (
    <Pressable
      marginTop={SIZES.large}
      marginHorizontal={SIZES.medium}
      onPress={onPress}>
      <Text flex center>
        <Text center small>
          loginScreen.haveAccount
        </Text>{' '}
        <Text color="blue" small>
          signUpScreen.signUp
        </Text>
      </Text>
    </Pressable>
  );
};

export default NotAccount;
