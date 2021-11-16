import {Block, Text, TextInput} from '@components';
import locale from '@locale';
import React from 'react';
import {Controller} from 'react-hook-form';

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
        <Text {...errProps} small color="red">
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
            customInput(onChange, onBlur, value)
          ) : (
            <TextInput
              {...inputProps}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={locale.t(placeholder, {defaultValue: placeholder})}
            />
          );
        }}
      />
      {_renderMessageErr()}
    </Block>
  );
};

export default FormInput;
