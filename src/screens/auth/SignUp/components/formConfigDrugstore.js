import {yupResolver} from '@hookform/resolvers/yup';
import locale from '@locale';
import * as yup from 'yup';

export const FORM_SIGN_UP_DRUGSTORE = {
  fullName: 'fullName',
  email: 'email',
  phone: 'phone',
  password: 'password',
  rePassword: 'rePassword',
  taxCode: 'taxCode',
  referredCode: 'referredCode',
  businessLicense: 'businessLicense',
  fileGPP: 'fileGPP',
};

const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

const schema = yup
  .object({
    [FORM_SIGN_UP_DRUGSTORE.fullName]: yup
      .string()
      .required(locale.t('signUpScreen.emptyUserName')),
    [FORM_SIGN_UP_DRUGSTORE.email]: yup
      .string()
      .required(locale.t('signUpScreen.emptyEmail'))
      .email(locale.t('signUpScreen.emailFormat')),
    [FORM_SIGN_UP_DRUGSTORE.phone]: yup
      .string()
      .required(locale.t('signUpScreen.emptyPhone'))
      .max(10, locale.t('signUpScreen.phoneLimit'))
      .matches(phoneRegex, locale.t('signUpScreen.phoneFormat')),
    [FORM_SIGN_UP_DRUGSTORE.password]: yup
      .string()
      .required(locale.t('signUpScreen.emptyPass'))
      .min(6, locale.t('signUpScreen.passSix')),
    [FORM_SIGN_UP_DRUGSTORE.rePassword]: yup
      .string()
      .required(locale.t('signUpScreen.emptyConfirmPass'))
      .oneOf(
        [yup.ref(FORM_SIGN_UP_DRUGSTORE.password), null],
        locale.t('signUpScreen.samePass'),
      ),
    [FORM_SIGN_UP_DRUGSTORE.taxCode]: yup
      .string()
      .required(locale.t('signUpScreen.emptyTaxCode')),
    // [FORM_SIGN_UP_DRUGSTORE.businessLicense]: yup
    //   .string()
    //   .required('Giấy phép kinh doanh không được để trống'),
    // [FORM_SIGN_UP_DRUGSTORE.fileGPP]: yup
    //   .array()
    //   .required('Hồ sơ GPP không được để trống'),
    // [FORM_SIGN_UP_DRUGSTORE.referredCode]: yup
    //   .array()
    //   .required('Giấy phép kinh doanh không được để trống'),
    // [FORM_SIGN_UP_DRUGSTORE.referredCode2]: yup.array().required('aaaaaaa'),
  })
  .required();

const formConfigDrugstore = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_SIGN_UP_DRUGSTORE.fullName]: '',
    [FORM_SIGN_UP_DRUGSTORE.email]: '',
    [FORM_SIGN_UP_DRUGSTORE.phone]: '',
    [FORM_SIGN_UP_DRUGSTORE.password]: '',
    [FORM_SIGN_UP_DRUGSTORE.rePassword]: '',
    [FORM_SIGN_UP_DRUGSTORE.taxCode]: '',
    [FORM_SIGN_UP_DRUGSTORE.referredCode]: '',
    [FORM_SIGN_UP_DRUGSTORE.businessLicense]: [],
    [FORM_SIGN_UP_DRUGSTORE.fileGPP]: [],
  },
};

export default formConfigDrugstore;
