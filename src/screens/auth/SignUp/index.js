import {ButtonSubmit, LinearLogo, Text} from '@components';
import {SIZES} from '@theme';
import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import formConfig from './components/formConfig';
import FormSignUp from './components/FormSignUp';
import HaveAccount from './components/HaveAccount';
import Policy from './components/Policy';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formConfig);
  const agreePolicyRef = useRef(false);

  const _onSubmit = data => {
    if (agreePolicyRef.current) {
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
      <Policy agreePolicyRef={agreePolicyRef} />
      <ButtonSubmit
        containerProps={{margin: 0, marginVertical: SIZES.large}}
        onPress={handleSubmit(_onSubmit)}>
        signUpScreen.register
      </ButtonSubmit>
      <HaveAccount />
    </LinearLogo>
  );
};

export default SignUp;
