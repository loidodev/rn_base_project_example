import {Block, Image, Text} from '@components';
import {IMAGES} from '@constants';
import {SIZES} from '@theme';
import React from 'react';

const LogoTitle = () => {
  return (
    <Block alignCenter>
      <Image
        width={80}
        height={80}
        marginBottom={SIZES.small}
        source={IMAGES.logo_start}
        resizeMode="contain"
      />
      <Text fontSize={24} bold color="primary">
        Thảo Dược
      </Text>
      <Text fontSize={24} bold color="primary">
        Việt Nam
      </Text>
    </Block>
  );
};

export default LogoTitle;
