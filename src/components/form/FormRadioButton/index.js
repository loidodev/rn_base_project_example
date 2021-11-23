import {Block, Controller, RadioButton} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const CustomRadio = ({data, containerProps, value, onChange}) => {
  const _onChangeValue = item => {
    onChange(item?.value);
  };

  return (
    <Block margin={SIZES.medium} {...containerProps}>
      <RadioButton data={data} value={value} onChangeValue={_onChangeValue} />
    </Block>
  );
};

const FormRadioButton = ({control, name, data, containerProps}) => {
  return (
    <Controller {...{control, name}}>
      <CustomRadio data={data} {...{containerProps}} />
    </Controller>
  );
};

export default FormRadioButton;
