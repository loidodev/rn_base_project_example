import {Block, Text} from '@components';
import React from 'react';

const VALUE_STYLE = {color: 'black', heavy: false, size: 14};

const HStack = ({label, value = 0, suffix = '', valueStyle = VALUE_STYLE}) => {
  valueStyle = {...VALUE_STYLE, ...valueStyle};

  return (
    <Block rowCenter marginBottom={5} space="between">
      <Text flex numberOfLines={1}>
        {label}
      </Text>
      <Text
        flex
        right
        numberOfLines={1}
        fontSize={valueStyle?.size}
        color={valueStyle?.color}
        heavy={valueStyle?.heavy}>
        {value ? suffix : ''}
        {value} điểm
      </Text>
    </Block>
  );
};

export default HStack;
