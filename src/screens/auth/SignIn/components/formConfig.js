import {yupResolver} from '@hookform/resolvers/yup';
import locale from '@locale';
import * as yup from 'yup';

export const FORM_NAME = {
  emailOrPhone: 'emailOrPhone',
  password: 'password',
};

const schema = yup
  .object({
    [FORM_NAME.emailOrPhone]: yup
      .string()
      .required(locale.t('loginScreen.emptyEmail')),
    [FORM_NAME.password]: yup
      .string()
      .required(locale.t('loginScreen.emptyPass'))
      .min(6, locale.t('signUpScreen.passSix')),
  })
  .required();

const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_NAME.emailOrPhone]: '',
    [FORM_NAME.password]: '',
  },
};

export default formConfig;
