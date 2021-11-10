/* eslint-disable react-native/no-inline-styles */
import {Block, Image} from '@components';
import {IMAGES} from '@constants';
import React from 'react';

const BannerHeader = ({height}) => {
  return (
    <Block
      absolute
      left={0}
      right={0}
      height={height}
      backgroundColor="primary">
      <Image style={{width: '100%', height: '100%'}} source={IMAGES.wave} />
    </Block>
  );
};

export default BannerHeader;
