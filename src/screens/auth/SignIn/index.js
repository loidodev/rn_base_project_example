import {ButtonSubmit, LinearLogo, Pressable, Text} from '@components';
import {root} from '@navigator/navigationRef';
import router from '@navigator/router';
import {SIZES} from '@theme';
import React from 'react';
import {useForm} from 'react-hook-form';
import formConfig from './components/formConfig';
import FormSignIn from './components/FormSignIn';
import LoginSocial from './components/LoginSocial';
import NotAccount from './components/NotAccount';

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formConfig);

  const _onSubmit = data => {};

  const _onMoveSignUp = () => {
    root.navigate(router.SIGN_UP_SCREEN);
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
        // loading={signUp.isLoading}
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
