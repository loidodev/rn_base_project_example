import {Block, Pressable, Text} from '@components';
import React, {useState} from 'react';
import {SIZES} from '@theme';
import ModalPolicy from './ModalPolicy';

const Policy = ({agreePolicyRef}) => {
  const [showPolicy, setShowPolicy] = useState(false);

  const _onAgreePolicy = () => {
    agreePolicyRef.current = true;
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
