import {Block, Controller, FormInput, RadioButton} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import {FORM_NAME} from '../formConfig';
import LabelContainer from '../LabelContainer';
import BtnDatePicker from './BtnDatePicker';

export const INPUT_PROPS = {
  height: 45,
  medium: true,
  borderBottomWidth: 1,
  borderColor: 'smoke',
};

const DATA = [
  {value: '0', label: 'personal.man'},
  {value: '1', label: 'personal.women'},
];

const FormEdit = ({control, errors}) => {
  return (
    <Block backgroundColor="white">
      <LabelContainer label="personal.name">
        <FormInput
          control={control}
          name={FORM_NAME.fullName}
          messageErr={errors[FORM_NAME.fullName]?.message}
          placeholder="personal.name"
          inputProps={INPUT_PROPS}
        />
      </LabelContainer>
      <LabelContainer label="personal.phone">
        <FormInput
          control={control}
          name={FORM_NAME.phone}
          messageErr={errors[FORM_NAME.phone]?.message}
          placeholder="personal.phone"
          inputProps={INPUT_PROPS}
        />
      </LabelContainer>
      <LabelContainer label="Email">
        <FormInput
          control={control}
          name={FORM_NAME.email}
          messageErr={errors[FORM_NAME.email]?.message}
          placeholder="Email"
          inputProps={{...INPUT_PROPS, editable: false, color: 'placeholder'}}
        />
      </LabelContainer>
      <LabelContainer label="personal.birth">
        <Controller {...{control}} name={FORM_NAME.birthday}>
          <BtnDatePicker containerStyle={INPUT_PROPS} />
        </Controller>
      </LabelContainer>
      <RadioButton
        data={DATA}
        selected={true}
        containerProps={{margin: SIZES.medium}}
      />
    </Block>
  );
};

export default FormEdit;
