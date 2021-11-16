import {Block, FormInput} from '@components';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FORM_NAME} from '../formConfig';
import CustomInput from './CustomInput';
import CustomInputErr from './CustomInputErr';

const FormSignUp = ({control, errors}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);

  const _renderCustomInputErr = renderInputErr => (
    <CustomInputErr renderInputErr={renderInputErr} />
  );

  return (
    <Block>
      <FormInput
        control={control}
        name={FORM_NAME.fullName}
        messageErr={errors[FORM_NAME.fullName]?.message}
        placeholder="signUpScreen.fullName"
        customerMessageErr={_renderCustomInputErr}
        customInput={renderInput => (
          <CustomInput
            renderInput={renderInput}
            iconProps={{IconType: FontAwesome, iconName: 'user'}}
          />
        )}
      />
      <FormInput
        control={control}
        name={FORM_NAME.email}
        messageErr={errors[FORM_NAME.email]?.message}
        placeholder="Email"
        inputProps={{keyboardType: 'email-address'}}
        customerMessageErr={_renderCustomInputErr}
        customInput={renderInput => (
          <CustomInput
            renderInput={renderInput}
            iconProps={{IconType: FontAwesome, iconName: 'envelope'}}
          />
        )}
      />
      <FormInput
        control={control}
        name={FORM_NAME.phone}
        messageErr={errors[FORM_NAME.phone]?.message}
        placeholder="signUpScreen.phone"
        inputProps={{keyboardType: 'number-pad'}}
        customerMessageErr={_renderCustomInputErr}
        customInput={renderInput => (
          <CustomInput
            renderInput={renderInput}
            iconProps={{IconType: Ionicons, iconName: 'call'}}
          />
        )}
      />
      <FormInput
        control={control}
        name={FORM_NAME.password}
        messageErr={errors[FORM_NAME.password]?.message}
        placeholder="signUpScreen.pass"
        customerMessageErr={_renderCustomInputErr}
        inputProps={{secureTextEntry: showPassword}}
        customInput={renderInput => (
          <CustomInput
            renderInput={renderInput}
            iconProps={{IconType: MaterialCommunityIcons, iconName: 'lock'}}
            isShowPass
            value={showPassword}
            setValue={setShowPassword}
          />
        )}
      />
      <FormInput
        control={control}
        name={FORM_NAME.rePassword}
        messageErr={errors[FORM_NAME.rePassword]?.message}
        placeholder="signUpScreen.confirmPass"
        customerMessageErr={_renderCustomInputErr}
        inputProps={{secureTextEntry: showRePassword}}
        customInput={renderInput => (
          <CustomInput
            renderInput={renderInput}
            iconProps={{IconType: MaterialCommunityIcons, iconName: 'lock'}}
            isShowPass
            value={showRePassword}
            setValue={setShowRePassword}
          />
        )}
      />
      <FormInput
        control={control}
        name={FORM_NAME.referredCode}
        messageErr={errors[FORM_NAME.referredCode]?.message}
        placeholder="signUpScreen.referral_code"
        customInput={renderInput => (
          <CustomInput
            renderInput={renderInput}
            iconProps={{IconType: FontAwesome5, iconName: 'users'}}
          />
        )}
      />
    </Block>
  );
};

export default FormSignUp;
