import {Block, Text, TextInput} from '@components';
import React from 'react';
import {Controller} from 'react-hook-form';

const FormInput = ({
  name,
  control,
  placeholder,
  messageErr,
  inputProps,
  errProps,
}) => {
  return (
    <Block>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            {...inputProps}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
      {messageErr && (
        <Text {...errProps} small color="red">
          {messageErr}
        </Text>
      )}
    </Block>
  );
};

export default FormInput;
