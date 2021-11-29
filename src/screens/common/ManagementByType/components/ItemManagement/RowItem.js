import {Block, Text} from '@components';
import React from 'react';

const RowItem = ({
  isStt = false,
  label,
  value,
  valueColor = 'black',
  suffix = '',
  ...rest
}) => {
  return (
    <Block flex rowCenter {...rest}>
      <Text fontSize={13}>
        {label}
        {isStt ? ' ' : ': '}
      </Text>
      <Text
        flex
        numberOfLines={1}
        fontSize={15}
        color={valueColor}
        heavy={!isStt}>
        {suffix}
        {value}
      </Text>
    </Block>
  );
};

export default RowItem;
