/* eslint-disable react-native/no-inline-styles */
import {HeaderTitle, Text} from '@components';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import {useForm} from 'react-hook-form';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import BtnSave from './components/BtnSave';
import FormChangePass from './components/FormChangePass';
import formConfig from './components/formConfig';
import FormEdit from './components/FormEdit';

const EditUser = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formConfig);

  const _onSubmit = data => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: COLORS.background}}>
      {/* header */}
      <HeaderTitle canGoBack title="personal.personal_info" />
      {/* form */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text large padding={SIZES.medium}>
          personal.personal
        </Text>
        <FormEdit control={control} errors={errors} />
        <FormChangePass control={control} errors={errors} />
      </ScrollView>
      {/* btn submit */}
      <BtnSave onPress={handleSubmit(_onSubmit)} />
    </KeyboardAvoidingView>
  );
};

export default EditUser;
