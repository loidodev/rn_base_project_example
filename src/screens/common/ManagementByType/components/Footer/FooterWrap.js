import {Block, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const FooterWrap = ({title, children}) => {
  return (
    <Block
      safeAreaBottom
      backgroundColor="white"
      padding={SIZES.medium}
      borderTopWidth={1}
      borderColor="background">
      <Text fontSize={15} marginBottom={5} block>
        {title}
      </Text>
      {children}
    </Block>
  );
};

export default FooterWrap;
