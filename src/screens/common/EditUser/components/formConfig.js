import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const FORM_NAME = {
  fullName: 'fullName',
  phone: 'phone',
  isChangePass: 'isChangePass',
  oldPass: 'oldPass',
  newPass: 'newPass',
  rePass: 'rePass',
};

const buildRequiredForDiffAddress = requiredText => ({
  is: true,
  then: yup.string().required(requiredText),
});

const schema = yup
  .object({
    [FORM_NAME.fullName]: yup.string().required(),
    [FORM_NAME.phone]: yup.string().required(),
    [FORM_NAME.isChangePass]: yup.boolean(),
    [FORM_NAME.oldPass]: yup
      .string()
      .when(FORM_NAME.isChangePass, buildRequiredForDiffAddress('ươiefjwoeij')),
    [FORM_NAME.newPass]: yup
      .string()
      .when(FORM_NAME.isChangePass, buildRequiredForDiffAddress('ươiefjwoeij')),
    [FORM_NAME.rePass]: yup
      .string()
      .when(FORM_NAME.isChangePass, buildRequiredForDiffAddress('ươiefjwoeij')),
  })
  .required();

const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_NAME.fullName]: '',
    [FORM_NAME.phone]: '',
    [FORM_NAME.isChangePass]: false,
    [FORM_NAME.oldPass]: '',
    [FORM_NAME.newPass]: '',
    [FORM_NAME.rePass]: '',
  },
};

export default formConfig;
