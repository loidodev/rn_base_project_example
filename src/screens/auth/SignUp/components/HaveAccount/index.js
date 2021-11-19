import {Pressable, Text} from '@components';
import React from 'react';

const HaveAccount = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text flex center>
        <Text center small>
          signUpScreen.haveAccount
        </Text>{' '}
        <Text color="blue" small>
          signUpScreen.login
        </Text>
      </Text>
    </Pressable>
  );
};

export default HaveAccount;
