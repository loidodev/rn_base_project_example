import {Block, ButtonSubmit, Modal, Text, WebView} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import {useSelector} from 'react-redux';

const ModalPolicy = ({isVisible, setIsVisible, onPress}) => {
  const termsOfUse = useSelector(state => state.termsOfUse);

  const {title, content} = termsOfUse?.data || {};

  const _onSubmit = () => {
    setIsVisible && setIsVisible(false);
    onPress && onPress();
  };

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} position="center">
      <Block backgroundColor="white" margin={SIZES.large} radius={SIZES.medium}>
        <Text paddingTop={SIZES.medium} paddingHorizontal={SIZES.medium} large>
          {title}
        </Text>
        <Block height={500} padding={SIZES.medium}>
          <WebView data={content} />
        </Block>
        <ButtonSubmit onPress={_onSubmit}>
          signUpScreen.accept_terms
        </ButtonSubmit>
      </Block>
    </Modal>
  );
};

export default ModalPolicy;
