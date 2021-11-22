import {Block, Image, Text} from '@components';
import {HEADER, IMAGES} from '@constants';
import {SIZES} from '@theme';
import React from 'react';
import IconGroup from '../IconGroup';

const HeaderLogo = () => {
  return (
    <Block safeAreaTop rowCenter height={HEADER.height} padding={SIZES.medium}>
      {/* left */}
      <Block rowCenter>
        <Image
          marginRight={SIZES.small}
          width={40}
          height={40}
          source={IMAGES.logo_start}
          resizeMode="contain"
        />
        <Block>
          <Text fontSize={HEADER.titleSize} bold color="primary">
            Thảo Dược
          </Text>
          <Text fontSize={HEADER.titleSize} bold color="primary">
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
