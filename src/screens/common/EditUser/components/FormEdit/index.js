import {Block, FormInput, RadioButton, TextInput} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import {FORM_NAME} from '../formConfig';
import BtnDatePicker from './BtnDatePicker';
import LabelContainer from '../LabelContainer';

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
        <TextInput
          {...INPUT_PROPS}
          editable={false}
          color="placeholder"
          value="nhoxbaycao@gmail.com"
        />
      </LabelContainer>
      <LabelContainer label="personal.birth">
        <BtnDatePicker {...INPUT_PROPS} />
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
