import {Block, Controller, FormInput, FormRadioButton} from '@components';
import React from 'react';
import {FORM_NAME} from '../formConfig';
import {GENDERS, INPUT_PROPS} from '../helper';
import LabelContainer from '../LabelContainer';
import BtnDatePicker from './BtnDatePicker';

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
        <Controller control={control} name={FORM_NAME.birthday}>
          <BtnDatePicker containerStyle={INPUT_PROPS} />
        </Controller>
      </LabelContainer>
      <FormRadioButton
        control={control}
        name={FORM_NAME.gender}
        data={GENDERS}
      />
    </Block>
  );
};

export default FormEdit;
