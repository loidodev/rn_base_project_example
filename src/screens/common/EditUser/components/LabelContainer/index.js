import {Block, Text} from '@components';
import React from 'react';
import {SIZES} from '@theme';

const LabelContainer = ({label, children}) => {
  return (
    <Block marginHorizontal={SIZES.medium} marginTop={SIZES.medium}>
      <Text medium>{label}</Text>
      <Block>{children}</Block>
    </Block>
  );
};

export default LabelContainer;
