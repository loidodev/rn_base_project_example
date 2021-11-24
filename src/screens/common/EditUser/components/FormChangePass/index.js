import {Block, CheckBox, CustomInputIconClose, FormInput} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import {Controller, useController, useWatch} from 'react-hook-form';
import {LayoutAnimation, Platform, UIManager} from 'react-native';
import {FORM_NAME} from '../formConfig';
import {INPUT_PROPS} from '../helper';
import LabelContainer from '../LabelContainer';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FormChangePass = ({control, errors}) => {
  const isChangePass = useWatch({
    control,
    name: FORM_NAME.isChangePass,
  });

  const {} = useController({control, name: FORM_NAME.oldPass});

  return (
    <Block
      backgroundColor="white"
      marginTop={SIZES.medium}
      paddingBottom={SIZES.medium}>
      <Controller
        control={control}
        name={FORM_NAME.isChangePass}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <CheckBox
              title="personal.password"
              value={value}
              onChangeValue={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                onChange(!value);
              }}
              containerProps={{
                marginTop: SIZES.medium,
                marginHorizontal: SIZES.medium,
              }}
            />
          );
        }}
      />
      {isChangePass && (
        <Block>
          <LabelContainer label="personal.old_password">
            <FormInput
              control={control}
              name={FORM_NAME.oldPass}
              messageErr={errors[FORM_NAME.oldPass]?.message}
              placeholder="personal.old_password"
              inputProps={{
                height: INPUT_PROPS.height,
                medium: INPUT_PROPS.medium,
              }}
              customInput={renderInput => (
                <CustomInputIconClose
                  renderInput={renderInput}
                  onclose={() => {}}
                />
              )}
            />
          </LabelContainer>
          <LabelContainer label="personal.new_password">
            <FormInput
              control={control}
              name={FORM_NAME.newPass}
              messageErr={errors[FORM_NAME.newPass]?.message}
              placeholder="personal.new_password"
              inputProps={{
                height: INPUT_PROPS.height,
                medium: INPUT_PROPS.medium,
              }}
              customInput={renderInput => (
                <CustomInputIconClose
                  renderInput={renderInput}
                  onclose={() => {}}
                />
              )}
            />
          </LabelContainer>
          <LabelContainer label="personal.re_password">
            <FormInput
              control={control}
              name={FORM_NAME.rePass}
              messageErr={errors[FORM_NAME.rePass]?.message}
              placeholder="personal.re_password"
              inputProps={{
                height: INPUT_PROPS.height,
                medium: INPUT_PROPS.medium,
              }}
              customInput={renderInput => (
                <CustomInputIconClose
                  renderInput={renderInput}
                  onclose={() => {}}
                />
              )}
            />
          </LabelContainer>
        </Block>
      )}
    </Block>
  );
};

export default FormChangePass;
