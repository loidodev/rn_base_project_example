import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const FORM_NAME = {
  fullName: 'fullName',
  phone: 'phone',
  oldPass: 'oldPass',
  newPass: 'newPass',
  rePass: 'rePass',
};

const schema = yup
  .object({
    [FORM_NAME.fullName]: yup.string().required(),
    [FORM_NAME.phone]: yup.string().required(),
    [FORM_NAME.oldPass]: yup.string().required(),
    [FORM_NAME.newPass]: yup.string().required(),
    [FORM_NAME.rePass]: yup.string().required(),
  })
  .required();

const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_NAME.fullName]: '',
    [FORM_NAME.phone]: '',
    [FORM_NAME.oldPass]: '',
    [FORM_NAME.newPass]: '',
    [FORM_NAME.rePass]: '',
  },
};

export default formConfig;
