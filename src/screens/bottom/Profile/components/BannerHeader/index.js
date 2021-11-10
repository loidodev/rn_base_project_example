/* eslint-disable react-native/no-inline-styles */
import {Block, Image} from '@components';
import {IMAGES} from '@constants';
import {vs} from '@responsive';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HEIGHT_BG_WAVE} from '../helper';

const BannerHeader = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block
      style={{height: vs(HEIGHT_BG_WAVE) + top}}
      absolute
      left={0}
      right={0}
      backgroundColor="primary">
      <Image style={{width: '100%', height: '100%'}} source={IMAGES.wave} />
    </Block>
  );
};

export default BannerHeader;
