import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const FORM_NAME = {
  fullName: 'fullName',
  phone: 'phone',
};

const schema = yup
  .object({
    [FORM_NAME.fullName]: yup.string().required(),
    [FORM_NAME.phone]: yup.string().required(),
  })
  .required();

const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_NAME.fullName]: '',
    [FORM_NAME.phone]: '',
  },
};

export default formConfig;
