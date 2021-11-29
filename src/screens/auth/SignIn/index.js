import {ButtonSubmit, LinearLogo, Pressable, Text} from '@components';
import {AUTH} from '@constants';
import {useDeviceInfo} from '@hooks';
import {bottomRoot, root} from '@navigator/navigationRef';
import router from '@navigator/router';
import actions from '@store/actions';
import {SIZES} from '@theme';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import formConfig, {FORM_NAME} from './components/formConfig';
import FormSignIn from './components/FormSignIn';
import LoginSocial from './components/LoginSocial';
import NotAccount from './components/NotAccount';

const SignIn = ({route}) => {
  const {user_type} = route.params;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formConfig);
  const dispatch = useDispatch();
  const device_name = useDeviceInfo();

  const signIn = useSelector(state => state.signIn);

  const _onSubmit = data => {
    dispatch({
      type: actions.SIGN_IN_USER,
      body: {
        username: data[FORM_NAME.emailOrPhone],
        password: data[FORM_NAME.password],
        device_name,
        // device_token,
      },
      onSuccess: () => bottomRoot.navigate(router.PROFILE_SCREEN),
    });
  };

  const _onMoveSignUp = () => {
    root.navigate(router.SIGN_UP_SCREEN, {[AUTH.user_type]: user_type});
  };

  return (
    <LinearLogo>
      <Text bold large center>
        loginScreen.login
      </Text>
      <Text medium center marginVertical={SIZES.small}>
        loginScreen.welcome
      </Text>
      <FormSignIn control={control} errors={errors} />
      <Pressable
        marginTop={SIZES.large}
        marginHorizontal={SIZES.medium}
        alignCenter
        justifyCenter
        labelProps={{color: 'blue', small: true}}>
        loginScreen.forgot
      </Pressable>
      <ButtonSubmit
        loading={signIn.isLoading}
        containerProps={{margin: 0, marginVertical: SIZES.large}}
        onPress={handleSubmit(_onSubmit)}>
        loginScreen.login
      </ButtonSubmit>
      <Text
        small
        center
        marginHorizontal={SIZES.large}
        marginBottom={SIZES.large}>
        loginScreen.orLogin
      </Text>
      <LoginSocial />
      <NotAccount onPress={_onMoveSignUp} />
    </LinearLogo>
  );
};

export default SignIn;
