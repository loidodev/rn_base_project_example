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
    <Block flex row alignCenter {...rest}>
      <Text size={13}>
        {label}
        {isStt ? ' ' : ': '}
      </Text>
      <Text
        flex
        numberOfLines={1}
        size={15}
        color={valueColor}
        fontType={isStt ? 'regular' : 'semibold'}>
        {suffix}
        {value}
      </Text>
    </Block>
  );
};

export default RowItem;
