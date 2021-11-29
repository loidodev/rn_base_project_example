import {Block, CustomInputErr, CustomInputIcon, FormInput} from '@components';
import React, {useEffect, useRef, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DrugstoreFilePicker from 'screens/bottom/Profile/components/DrugstoreFilePicker';
import {FORM_SIGN_UP_DRUGSTORE} from '../formConfigDrugstore';
import FormFilePicker from '../FormFilePicker';
import styles from './styles';

const FormSignUpDrugStore = ({control, errors, setValue}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);
  const [businessLicense, setBusinessLicense] = useState([]);
  const [fileGPP, setFileGPP] = useState([]);
  const [isPickerImage, setIsPickerImage] = useState(false);
  const [isOnPressFile, setIsOnPressFile] = useState(false);
  const firstUpdate = useRef(false);

  const _onChangeImage = file => {
    firstUpdate.current = true;
    if (isOnPressFile) {
      setBusinessLicense([...businessLicense, file]);
    } else {
      setFileGPP([...fileGPP, file]);
    }
  };

  useEffect(() => {
    if (firstUpdate.current) {
      if (isOnPressFile) {
        setValue(FORM_SIGN_UP_DRUGSTORE.businessLicense, businessLicense, {
          shouldValidate: true,
        });
      } else {
        setValue(FORM_SIGN_UP_DRUGSTORE.fileGPP, businessLicense, {
          shouldValidate: true,
        });
      }
    }
  }, [businessLicense, fileGPP]);

  const _renderCustomInputErr = renderInputErr => (
    <CustomInputErr renderInputErr={renderInputErr} />
  );

  return (
    <Block flex>
      <FormInput
        control={control}
        name={FORM_SIGN_UP_DRUGSTORE.fullName}
        inputProps={{style: styles.input}}
        messageErr={errors[FORM_SIGN_UP_DRUGSTORE.fullName]?.message}
        placeholder="signUpScreen.fullName"
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
        name={FORM_SIGN_UP_DRUGSTORE.email}
        messageErr={errors[FORM_SIGN_UP_DRUGSTORE.email]?.message}
        placeholder="Email"
        inputProps={{style: styles.input, keyboardType: 'email-address'}}
        customerMessageErr={_renderCustomInputErr}
        customInput={renderInput => (
          <CustomInputIcon
            renderInput={renderInput}
            iconProps={{IconType: FontAwesome, iconName: 'envelope'}}
          />
        )}
      />
      <FormInput
        control={control}
        name={FORM_SIGN_UP_DRUGSTORE.phone}
        messageErr={errors[FORM_SIGN_UP_DRUGSTORE.phone]?.message}
        placeholder="signUpScreen.phone"
        inputProps={{style: styles.input, keyboardType: 'number-pad'}}
        customerMessageErr={_renderCustomInputErr}
        customInput={renderInput => (
          <CustomInputIcon
            renderInput={renderInput}
            iconProps={{IconType: Ionicons, iconName: 'call'}}
          />
        )}
      />
      <FormInput
        control={control}
        name={FORM_SIGN_UP_DRUGSTORE.password}
        messageErr={errors[FORM_SIGN_UP_DRUGSTORE.password]?.message}
        placeholder="signUpScreen.pass"
        customerMessageErr={_renderCustomInputErr}
        inputProps={{style: styles.input, secureTextEntry: showPassword}}
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
      <FormInput
        control={control}
        name={FORM_SIGN_UP_DRUGSTORE.rePassword}
        messageErr={errors[FORM_SIGN_UP_DRUGSTORE.rePassword]?.message}
        placeholder="signUpScreen.confirmPass"
        customerMessageErr={_renderCustomInputErr}
        inputProps={{style: styles.input, secureTextEntry: showPassword}}
        customInput={renderInput => (
          <CustomInputIcon
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
        name={FORM_SIGN_UP_DRUGSTORE.taxCode}
        messageErr={errors[FORM_SIGN_UP_DRUGSTORE.taxCode]?.message}
        placeholder="signUpScreen.taxCode"
        customerMessageErr={_renderCustomInputErr}
        inputProps={{style: styles.input}}
        customInput={renderInput => (
          <CustomInputIcon renderInput={renderInput} />
        )}
      />
      <FormInput
        control={control}
        name={FORM_SIGN_UP_DRUGSTORE.referredCode}
        messageErr={errors[FORM_SIGN_UP_DRUGSTORE.referredCode]?.message}
        placeholder="signUpScreen.referral_code"
        inputProps={{style: styles.input}}
        customInput={renderInput => (
          <CustomInputIcon
            renderInput={renderInput}
            iconProps={{IconType: FontAwesome5, iconName: 'users'}}
          />
        )}
      />

      <FormFilePicker
        onPress={() => {
          setIsPickerImage(true);
          setIsOnPressFile(true);
        }}
        customerMessageErr={_renderCustomInputErr}
        control={control}
        data={businessLicense}
        label={'signUpScreen.businessLicense'}
        messageErr={errors[FORM_SIGN_UP_DRUGSTORE.businessLicense]?.message}
      />

      <FormFilePicker
        onPress={() => {
          setIsPickerImage(true);
          setIsOnPressFile(false);
        }}
        customerMessageErr={_renderCustomInputErr}
        control={control}
        data={fileGPP}
        label={'signUpScreen.fileGPP'}
        messageErr={errors[FORM_SIGN_UP_DRUGSTORE.fileGPP]?.message}
      />

      <DrugstoreFilePicker
        isVisible={isPickerImage}
        setIsVisible={setIsPickerImage}
        onChangeImage={_onChangeImage}
      />
    </Block>
  );
};

export default FormSignUpDrugStore;
