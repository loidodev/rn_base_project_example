import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

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
    [FORM_NAME.fullName]: yup.string().required(),
    [FORM_NAME.email]: yup.string().required().email(),
    [FORM_NAME.phone]: yup.string().required().max(10).matches(phoneRegex),
    [FORM_NAME.password]: yup.string().required().min(6),
    [FORM_NAME.rePassword]: yup
      .string()
      .required()
      .oneOf([yup.ref(FORM_NAME.password), null]),
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
