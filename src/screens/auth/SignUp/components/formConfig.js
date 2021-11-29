import {yupResolver} from '@hookform/resolvers/yup';
import locale from '@locale';
import * as yup from 'yup';

export const FORM_NAME = {
  fullName: 'fullName',
  email: 'email',
  phone: 'phone',
  password: 'password',
  rePassword: 'rePassword',
  referredCode: 'referredCode',
};

const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

const schema = yup
  .object({
    [FORM_NAME.fullName]: yup
      .string()
      .required(locale.t('signUpScreen.emptyUserName')),
    [FORM_NAME.email]: yup
      .string()
      .required(locale.t('signUpScreen.emptyEmail'))
      .email(locale.t('signUpScreen.emailFormat')),
    [FORM_NAME.phone]: yup
      .string()
      .required(locale.t('signUpScreen.emptyPhone'))
      .max(10, locale.t('signUpScreen.phoneLimit'))
      .matches(phoneRegex, locale.t('signUpScreen.phoneFormat')),
    [FORM_NAME.password]: yup
      .string()
      .required(locale.t('signUpScreen.emptyPass'))
      .min(6, locale.t('signUpScreen.passSix')),
    [FORM_NAME.rePassword]: yup
      .string()
      .required(locale.t('signUpScreen.emptyConfirmPass'))
      .oneOf(
        [yup.ref(FORM_NAME.password), null],
        locale.t('signUpScreen.samePass'),
      ),
    [FORM_NAME.referredCode]: yup.string(),
  })
  .required();

const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_NAME.fullName]: '',
    [FORM_NAME.email]: '',
    [FORM_NAME.phone]: '',
    [FORM_NAME.password]: '',
    [FORM_NAME.rePassword]: '',
    [FORM_NAME.referredCode]: '',
  },
};

export default formConfig;
