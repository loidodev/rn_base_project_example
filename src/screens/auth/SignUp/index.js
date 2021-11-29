import {ButtonSubmit, CheckBox, LinearLogo, Text} from '@components';
import {useDeviceInfo} from '@hooks';
import {bottomRoot, root} from '@navigator/navigationRef';
import router from '@navigator/router';
import actions from '@store/actions';
import {SIZES} from '@theme';
import {CustomToast} from '@utils';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import formConfig, {FORM_NAME} from './components/formConfig';
import formConfigDrugstore, {
  FORM_SIGN_UP_DRUGSTORE,
} from './components/formConfigDrugstore';
import FormSignUp from './components/FormSignUp';
import FormSignUpDrugStore from './components/FormSignUpDrugStore';
import HaveAccount from './components/HaveAccount';
import Policy from './components/Policy';

const SignUp = ({route}) => {
  const {user_type} = route.params;
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm(user_type == 0 ? formConfig : formConfigDrugstore);
  const dispatch = useDispatch();
  const device_name = useDeviceInfo();
  const [agreePolicy, setAgreePolicy] = useState(false);
  const signUp = useSelector(state => state.signUp);

  useEffect(() => {
    dispatch({type: actions.GET_TERMS_OF_USE});
  }, [dispatch]);

  const _onSubmit = data => {
    var formData = new FormData();
    if (user_type === 0) {
      formData.append('full_name', data[FORM_NAME.fullName]);
      formData.append('email', data[FORM_NAME.email]);
      formData.append('phone', data[FORM_NAME.phone]);
      formData.append('password', data[FORM_NAME.password]);
      formData.append('referral_code', data[FORM_NAME.referredCode]);
      formData.append('user_type', user_type);
      formData.append('device_name', device_name);
    } else {
      formData.append('full_name', data[FORM_SIGN_UP_DRUGSTORE.fullName]);
      formData.append('email', data[FORM_SIGN_UP_DRUGSTORE.email]);
      formData.append('phone', data[FORM_SIGN_UP_DRUGSTORE.phone]);
      formData.append('password', data[FORM_SIGN_UP_DRUGSTORE.password]);
      formData.append(
        'referral_code',
        data[FORM_SIGN_UP_DRUGSTORE.referredCode],
      );
      formData.append('tax_code', data[FORM_SIGN_UP_DRUGSTORE.taxCode]);
      formData.append('user_type', user_type);
      formData.append('device_name', device_name);

      data[FORM_SIGN_UP_DRUGSTORE.businessLicense].map(item => {
        formData.append('business_license[]', item);
      });

      data[FORM_SIGN_UP_DRUGSTORE.fileGPP].map(item => {
        formData.append('gpp_profile[]', item);
      });
    }

    if (agreePolicy) {
      dispatch({
        type: actions.SIGN_UP_USER,
        body: formData,
        onSuccess: () => bottomRoot.navigate(router.PROFILE_SCREEN),
      });
    } else {
      CustomToast('Bạn phải chấp nhận điều khoản sử dụng.');
    }
  };

  const _onMoveSignIn = () => {
    root.navigate(router.SIGN_IN_SCREEN);
  };

  return (
    <LinearLogo>
      <Text bold large center>
        signUpScreen.register
      </Text>
      <Text medium center marginVertical={SIZES.small}>
        signUpScreen.welcome
      </Text>
      {user_type == 0 ? (
        <FormSignUp control={control} errors={errors} />
      ) : (
        <FormSignUpDrugStore
          control={control}
          errors={errors}
          setValue={setValue}
        />
      )}
      <CheckBox
        value={agreePolicy}
        onChangeValue={() => setAgreePolicy(prev => !prev)}
        customTitle={() => <Policy setAgreePolicy={setAgreePolicy} />}
        containerProps={{
          marginTop: SIZES.large,
        }}
      />
      <ButtonSubmit
        loading={signUp.isLoading}
        containerProps={{margin: 0, marginVertical: SIZES.large}}
        onPress={handleSubmit(_onSubmit)}>
        signUpScreen.register
      </ButtonSubmit>
      <HaveAccount onPress={_onMoveSignIn} />
    </LinearLogo>
  );
};

export default SignUp;
