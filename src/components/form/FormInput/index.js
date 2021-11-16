import {Block, Text, TextInput} from '@components';
import React from 'react';
import {Controller} from 'react-hook-form';
import {SIZES} from '@theme';

const FormInput = ({
  name,
  control,
  placeholder,
  messageErr,
  inputProps,
  errProps,
  customInput,
  customerMessageErr,
}) => {
  const _renderMessageErr = () => {
    return (
      <Text {...errProps} marginTop={SIZES.normal} small color="red">
        {messageErr}
      </Text>
    );
  };

  const _renderInputErr = () => {
    if (messageErr) {
      return customerMessageErr
        ? customerMessageErr(_renderMessageErr)
        : _renderMessageErr();
    }
  };

  return (
    <Block>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          const _renderInput = () => {
            return (
              <TextInput
                {...inputProps}
                flex
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
              />
            );
          };

          return customInput ? customInput(_renderInput) : _renderInput();
        }}
      />
      {_renderInputErr()}
    </Block>
  );
};

export default FormInput;
