import {Block} from '@components';
import React from 'react';
import BtnClose from './BtnClose';

const CustomInputIconClose = ({
  containerProps,
  iconProps,
  renderInput,
  onclose,
}) => {
  return (
    <Block
      rowCenter
      borderBottomWidth={1}
      borderColor="smoke"
      {...containerProps}>
      {renderInput()}
      <BtnClose containerProps={iconProps} onPress={onclose} />
    </Block>
  );
};

export default CustomInputIconClose;
