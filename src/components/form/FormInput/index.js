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
    if (customerMessageErr) {
      return customerMessageErr();
    }

    return (
      messageErr && (
        <Text {...errProps} marginTop={SIZES.normal} small color="red">
          {messageErr}
        </Text>
      )
    );
  };

  return (
    <Block>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return customInput ? (
            customInput({onChange, onBlur, value, placeholder})
          ) : (
            <TextInput
              {...inputProps}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
            />
          );
        }}
      />
      {_renderMessageErr()}
    </Block>
  );
};

export default FormInput;
