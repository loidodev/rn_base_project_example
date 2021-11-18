import {ButtonSubmit, LinearLogo, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import {useForm} from 'react-hook-form';
import ButtonSocial from './components/ButtonSocial';
import formConfig from './components/formConfig';
import FormSignIn from './components/FormSignIn';
import NotAccount from './components/NotAccount';

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formConfig);

  const _onSubmit = data => {};

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
      <Text small center marginHorizontal={SIZES.large}>
        loginScreen.orLogin
      </Text>
      <ButtonSocial title="Sign In With Facebook" type="facebook" />
      <ButtonSocial title="Sign In With Facebook" type="google" />
      <NotAccount />
    </LinearLogo>
  );
};

export default SignIn;
