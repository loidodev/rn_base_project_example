import {Block, CustomInputErr, CustomInputIcon, FormInput} from '@components';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FORM_NAME} from '../formConfig';

const FormSignIn = ({control, errors}) => {
  const [showPassword, setShowPassword] = useState(true);

  const _renderCustomInputErr = renderInputErr => (
    <CustomInputErr renderInputErr={renderInputErr} />
  );

  return (
    <Block>
      <FormInput
        control={control}
        name={FORM_NAME.emailOrPhone}
        messageErr={errors[FORM_NAME.emailOrPhone]?.message}
        placeholder="loginScreen.emailPhone"
        inputProps={{keyboardType: 'email-address'}}
        customerMessageErr={_renderCustomInputErr}
        customInput={renderInput => (
          <CustomInputIcon
            renderInput={renderInput}
            iconProps={{IconType: FontAwesome, iconName: 'user'}}
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
          <CustomInputIcon
            renderInput={renderInput}
            iconProps={{IconType: MaterialCommunityIcons, iconName: 'lock'}}
            isShowPass
            value={showPassword}
            setValue={setShowPassword}
          />
        )}
      />
    </Block>
  );
};

export default FormSignIn;
