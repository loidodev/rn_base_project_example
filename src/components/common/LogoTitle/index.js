import {Block, Image, Text} from '@components';
import {IMAGES} from '@constants';
import {SIZES} from '@theme';
import React from 'react';

const LogoTitle = ({
  containerProps,
  labelProps,
  logoProps,
  labelContainerProps,
}) => {
  return (
    <Block alignCenter {...containerProps}>
      <Image
        width={80}
        height={80}
        marginBottom={SIZES.small}
        source={IMAGES.logo_start}
        resizeMode="contain"
        {...logoProps}
      />
      <Block {...labelContainerProps}>
        <Text center fontSize={24} bold color="primary" {...labelProps}>
          Thảo Dược
        </Text>
        <Text center fontSize={24} bold color="primary" {...labelProps}>
          Việt Nam
        </Text>
      </Block>
    </Block>
  );
};

export default LogoTitle;
