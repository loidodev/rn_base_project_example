import {yupResolver} from '@hookform/resolvers/yup';
import locale from '@locale';
import * as yup from 'yup';

export const FORM_NAME = {
  fullName: 'fullName',
  phone: 'phone',
  email: 'email',
  birthday: 'birthday',
  gender: 'gender',
  isChangePass: 'isChangePass',
  oldPass: 'oldPass',
  newPass: 'newPass',
  rePass: 'rePass',
};

const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

const schema = yup
  .object({
    [FORM_NAME.fullName]: yup.string().required(),
    [FORM_NAME.phone]: yup
      .string()
      .required(locale.t('signUpScreen.emptyPhone'))
      .max(10, locale.t('signUpScreen.phoneLimit'))
      .matches(phoneRegex, locale.t('signUpScreen.phoneFormat')),
    [FORM_NAME.email]: yup.string(),
    [FORM_NAME.birthday]: yup.string(),
    [FORM_NAME.gender]: yup.string(),
    [FORM_NAME.isChangePass]: yup.boolean(),
    [FORM_NAME.oldPass]: yup.string().when(FORM_NAME.isChangePass, {
      is: true,
      then: yup
        .string()
        .required(locale.t('signUpScreen.emptyPass'))
        .min(6, locale.t('signUpScreen.passSix')),
    }),
    [FORM_NAME.newPass]: yup.string().when(FORM_NAME.isChangePass, {
      is: true,
      then: yup
        .string()
        .required(locale.t('signUpScreen.emptyPass'))
        .min(6, locale.t('signUpScreen.passSix')),
    }),
    [FORM_NAME.rePass]: yup.string().when(FORM_NAME.isChangePass, {
      is: true,
      then: yup
        .string()
        .required(locale.t('signUpScreen.emptyConfirmPass'))
        .min(6)
        .oneOf([yup.ref('newPass'), null], locale.t('signUpScreen.samePass')),
    }),
  })
  .required();

const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_NAME.fullName]: '',
    [FORM_NAME.phone]: '',
    [FORM_NAME.email]: '',
    [FORM_NAME.birthday]: '',
    [FORM_NAME.gender]: '',
    [FORM_NAME.isChangePass]: false,
    [FORM_NAME.oldPass]: '',
    [FORM_NAME.newPass]: '',
    [FORM_NAME.rePass]: '',
  },
};

export default formConfig;
