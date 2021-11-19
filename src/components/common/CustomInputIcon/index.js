import {Block, Icon} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import BtnEye from './BtnEye';

const CustomInputIcon = ({
  iconProps,
  renderInput,
  isShowPass,
  value,
  setValue,
}) => {
  return (
    <Block
      rowCenter
      marginTop={SIZES.medium}
      backgroundColor="smoke"
      paddingHorizontal={SIZES.large}
      radius={SIZES.xxxLarge}>
      <Icon {...iconProps} iconColor="placeholder" marginRight={SIZES.small} />
      {renderInput()}
      {isShowPass && <BtnEye value={value} setValue={setValue} />}
    </Block>
  );
};

export default CustomInputIcon;
