import {ButtonSubmit, LinearLogo, Text} from '@components';
import {useDeviceInfo} from '@hooks';
import {bottomRoot} from '@navigator/navigationRef';
import router from '@navigator/router';
import actions from '@store/actions';
import {SIZES} from '@theme';
import {CustomToast, handleTokenUser} from '@utils';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import formConfig, {FORM_NAME} from './components/formConfig';
import FormSignUp from './components/FormSignUp';
import HaveAccount from './components/HaveAccount';
import Policy from './components/Policy';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formConfig);
  const dispatch = useDispatch();
  const device_name = useDeviceInfo();
  const [agreePolicy, setAgreePolicy] = useState(false);
  const signUp = useSelector(state => state.signUp);

  const _onSubmit = data => {
    if (agreePolicy) {
      dispatch({
        type: actions.SIGN_UP_USER,
        body: {
          full_name: data[FORM_NAME.fullName],
          email: data[FORM_NAME.email],
          phone: data[FORM_NAME.phone],
          password: data[FORM_NAME.password],
          referral_code: data[FORM_NAME.referredCode],
          device_name,
          // device_token,
        },
        onSuccess: tokenUser => {
          handleTokenUser(tokenUser);
          bottomRoot.navigate(router.PROFILE_SCREEN);
        },
      });
    } else {
      CustomToast('Bạn phải chấp nhận điều khoản sử dụng.');
    }
  };

  return (
    <LinearLogo>
      <Text bold large center>
        signUpScreen.register
      </Text>
      <Text medium center marginVertical={SIZES.small}>
        signUpScreen.welcome
      </Text>
      <FormSignUp control={control} errors={errors} />
      <Policy setAgreePolicy={setAgreePolicy} />
      <ButtonSubmit
        loading={signUp.isLoading}
        containerProps={{margin: 0, marginVertical: SIZES.large}}
        onPress={handleSubmit(_onSubmit)}>
        signUpScreen.register
      </ButtonSubmit>
      <HaveAccount />
    </LinearLogo>
  );
};

export default SignUp;
