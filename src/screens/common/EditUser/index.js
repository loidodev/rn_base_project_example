/* eslint-disable react-native/no-inline-styles */
import {
  Block,
  FormInput,
  HeaderTitle,
  Pressable,
  Text,
  TextInput,
} from '@components';
import {SIZES} from '@theme';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import formConfig, {FORM_NAME} from './formConfig';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ERROR_PROPS = {marginTop: SIZES.normal};
const INPUT_PROPS = {
  height: 45,
  medium: true,
  borderBottomWidth: 1,
  borderColor: 'smoke',
};

const LabelContainer = ({label, children}) => {
  return (
    <Block marginHorizontal={SIZES.medium} marginTop={SIZES.medium}>
      <Text medium>{label}</Text>
      <Block>{children}</Block>
    </Block>
  );
};

const EditUser = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formConfig);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const _onSubmit = data => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <HeaderTitle canGoBack title="personal.personal_info" />
      {/* form */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text large padding={SIZES.medium} backgroundColor="background">
          personal.personal
        </Text>
        <LabelContainer label="personal.name">
          <FormInput
            control={control}
            name={FORM_NAME.fullName}
            messageErr={errors[FORM_NAME.fullName]?.message}
            placeholder="personal.name"
            errProps={ERROR_PROPS}
            inputProps={INPUT_PROPS}
          />
        </LabelContainer>
        <LabelContainer label="personal.phone">
          <FormInput
            control={control}
            name={FORM_NAME.phone}
            messageErr={errors[FORM_NAME.phone]?.message}
            placeholder="personal.phone"
            errProps={ERROR_PROPS}
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
          <Pressable
            {...INPUT_PROPS}
            justifyCenter
            paddingLeft={4}
            onPress={() => setShowDatePicker(true)}>
            <Text medium color="placeholder">
              {/* {birthday
                  ? moment(birthday * 1000).format('DD/MM/YYYY')
                  : I18n.t('personal.not_update')} */}
              personal.not_update
            </Text>
          </Pressable>
        </LabelContainer>
      </ScrollView>
      {/* btn submit */}
      <Pressable
        justifyCenter
        alignCenter
        radius={SIZES.xxxLarge}
        margin={SIZES.medium}
        padding={SIZES.medium}
        backgroundColor="primary"
        labelProps={{color: 'white'}}
        onPress={handleSubmit(_onSubmit)}>
        personal.save
      </Pressable>
      {/* modal */}
      <DateTimePickerModal
        mode="date"
        locale="vi_VN"
        headerTextIOS={'Ngày sinh'}
        isVisible={showDatePicker}
        // onConfirm={_onConfirmDate}
        onCancel={() => setShowDatePicker(false)}
      />
    </KeyboardAvoidingView>
  );
};

export default EditUser;
