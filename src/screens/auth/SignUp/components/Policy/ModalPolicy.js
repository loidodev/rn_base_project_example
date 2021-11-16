import {Block, ButtonSubmit, Modal, WebView} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const ModalPolicy = ({isVisible, setIsVisible, onPress}) => {
  const _onSubmit = () => {
    setIsVisible && setIsVisible(false);
    onPress && onPress();
  };

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} position="center">
      <Block backgroundColor="white" margin={SIZES.large} radius={SIZES.medium}>
        <Block height={600} padding={SIZES.medium}>
          <WebView />
        </Block>
        <ButtonSubmit onPress={_onSubmit}>
          signUpScreen.accept_terms
        </ButtonSubmit>
      </Block>
    </Modal>
  );
};

export default ModalPolicy;
