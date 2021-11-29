import {Block, Image, Pressable, Text} from '@components';
import {ICONS} from '@constants';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import {Controller} from 'react-hook-form';

const FormFilePicker = ({
  control,
  label,
  messageErr,
  customerMessageErr,
  data,
  errProps,
  onPress,
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

  const _renderItem = (item, index) => {
    return (
      <Block key={index}>
        <Image
          width={80}
          height={80}
          source={{
            uri: item.uri,
          }}
          resizeMode="contain"
        />
      </Block>
    );
  };

  return (
    <Block>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <Block marginTop={5} marginLeft={10}>
              <Text>{label}</Text>
              <Block marginTop={5} row alignCenter>
                {data.map(_renderItem)}
                {data.length === 4 ? null : (
                  <Pressable onPress={onPress}>
                    <Block
                      marginTop={5}
                      alignCenter
                      justifyCenter
                      borderWidth={1}
                      height={40}
                      width={40}
                      borderStyle="dotted">
                      <Image
                        width={30}
                        height={30}
                        tintColor={COLORS.placeholder}
                        source={ICONS.plus}
                        resizeMode="contain"
                      />
                    </Block>
                  </Pressable>
                )}
              </Block>
            </Block>
          );
        }}
      />
      {_renderInputErr()}
    </Block>
  );
};

export default FormFilePicker;
