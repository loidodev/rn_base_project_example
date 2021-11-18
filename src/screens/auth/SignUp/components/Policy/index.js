import {Block, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React, {useState} from 'react';
import ModalPolicy from './ModalPolicy';

const Policy = ({setAgreePolicy}) => {
  const [showPolicy, setShowPolicy] = useState(false);

  const _onAgreePolicy = () => {
    setAgreePolicy && setAgreePolicy(true);
  };

  return (
    <Block>
      <Pressable
        rowCenter
        justifyCenter
        marginTop={SIZES.large}
        onPress={() => setShowPolicy(true)}>
        <Text>
          <Text fontSize={12} marginRight={SIZES.normal}>
            signUpScreen.accept
          </Text>{' '}
          <Text fontSize={12} color="blue">
            signUpScreen.service
          </Text>
        </Text>
      </Pressable>
      <ModalPolicy
        isVisible={showPolicy}
        setIsVisible={setShowPolicy}
        onPress={_onAgreePolicy}
      />
    </Block>
  );
};

export default Policy;
