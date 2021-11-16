import {Block, CheckBox, FormInput, Icon, TextInput} from '@components';
import {SIZES} from '@theme';
import React, {useCallback, useState} from 'react';
import {LayoutAnimation, Platform, UIManager} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FORM_NAME} from '../formConfig';
import LabelContainer from '../LabelContainer';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FormChangePass = ({control, errors}) => {
  const [isChangePass, setIsChangePass] = useState(false);

  const _onChangeIsPass = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsChangePass(!isChangePass);
  }, [isChangePass]);

  const _renderCustomInput = ({...filed}) => {
    return (
      <Block rowCenter borderBottomWidth={1} borderColor="smoke">
        <TextInput {...filed} flex height={45} />
        <Icon IconType={AntDesign} iconName="close" />
      </Block>
    );
  };

  return (
    <Block
      backgroundColor="white"
      marginTop={SIZES.medium}
      paddingBottom={SIZES.medium}>
      <CheckBox
        title="personal.password"
        value={isChangePass}
        onChangeValue={_onChangeIsPass}
        containerProps={{
          marginTop: SIZES.medium,
          marginHorizontal: SIZES.medium,
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
              customInput={_renderCustomInput}
            />
          </LabelContainer>
          <LabelContainer label="personal.new_password">
            <FormInput
              control={control}
              name={FORM_NAME.newPass}
              messageErr={errors[FORM_NAME.newPass]?.message}
              placeholder="personal.new_password"
              customInput={_renderCustomInput}
            />
          </LabelContainer>
          <LabelContainer label="personal.re_password">
            <FormInput
              control={control}
              name={FORM_NAME.rePass}
              messageErr={errors[FORM_NAME.rePass]?.message}
              placeholder="personal.re_password"
              customInput={_renderCustomInput}
            />
          </LabelContainer>
        </Block>
      )}
    </Block>
  );
};

export default FormChangePass;
