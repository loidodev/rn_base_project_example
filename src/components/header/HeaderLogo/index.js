import {Block, Image, Text} from '@components';
import {IMAGES} from '@contant';
import {SIZES} from '@theme';
import React from 'react';
import IconGroup from '../IconGroup';

const HeaderLogo = () => {
  return (
    <Block rowCenter height={60} padding={SIZES.medium}>
      {/* left */}
      <Block rowCenter>
        <Image
          marginRight={SIZES.small}
          width={35}
          height={35}
          source={IMAGES.logo_start}
          resizeMode="contain"
        />
        <Block>
          <Text medium bold color="primary">
            Thảo Dược
          </Text>
          <Text medium bold color="primary">
            Việt Nam
          </Text>
        </Block>
      </Block>
      {/* right */}
      <IconGroup />
    </Block>
  );
};

export default HeaderLogo;
