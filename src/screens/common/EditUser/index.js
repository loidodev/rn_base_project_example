/* eslint-disable react-native/no-inline-styles */
import {ButtonSubmit, HeaderTitle, Text} from '@components';
import actions from '@store/actions';
import {COLORS, SIZES} from '@theme';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FormChangePass from './components/FormChangePass';
import formConfig, {FORM_NAME} from './components/formConfig';
import FormEdit from './components/FormEdit';

const EditUser = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm(formConfig);
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  const updateUser = useSelector(state => state.updateUser);

  const {full_name, phone, email, birthday, gender} = userInfo.data || {};

  useEffect(() => {
    setValue(FORM_NAME.fullName, full_name);
    setValue(FORM_NAME.phone, phone);
    setValue(FORM_NAME.email, email);
    setValue(FORM_NAME.birthday, birthday);
    setValue(FORM_NAME.gender, gender);
  }, [birthday, email, full_name, gender, phone, setValue]);

  const _onSubmit = data => {
    dispatch({
      type: actions.UPDATE_USER,
      body: {
        full_name: data[FORM_NAME.fullName],
        phone: data[FORM_NAME.phone],
        birthday: data[FORM_NAME.birthday],
        gender: data[FORM_NAME.gender],
      },
    });
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
      <ButtonSubmit
        loading={userInfo.isLoading || updateUser.isLoading}
        onPress={handleSubmit(_onSubmit)}>
        personal.save
      </ButtonSubmit>
    </KeyboardAvoidingView>
  );
};

export default EditUser;
